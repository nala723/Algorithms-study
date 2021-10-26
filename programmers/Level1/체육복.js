// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    // reserve의 길이 - lost 길이 = n 일경우-> 최댓값 n (but 무조건 1명이상)--> reverse와 lost비교...
     
    // 체육수업을 들을 수 있는 학생의 최댓값 :  n - (lost 중 체육복 빌릴수 없는 학생 수)
     //lost, reserve sort 오름차순 정렬하고, 번호 비교해가며 체크, (filter로 맞지 않는 조건만 남기게 할까)
     // 여벌체육복이 있는 학생이 도난당했을 때 : 번호가 같을 것, filter에 이 조건도 추가
     // 이미 빌려준 학생번호는 제외-> shift??/ 다른 더 좋은 방법도 있을까
 
    
     
     let newRe = reserve.filter(el => !(lost.includes(el)))
     let newLo = lost.filter(el => !(reserve.includes(el)))
     
     let count = reserve.length - newRe.length;
     for(let  i=0; i<newLo.length; i++){
         for(let j=0; j<newRe.length; j++){
             if(newRe[j] !== -1){ 
                 if(newLo[i] === newRe[j]-1 || newLo[i] === newRe[j]+1){
                     newRe[j] = -1
                     count++
                     break;
                 }
             }
         }
     }
     let result = n-(lost.length - count)
     return result;
 }