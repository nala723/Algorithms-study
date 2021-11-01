//https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    
    // 단 한 명의 선수가 완주하지 못함. completion.length === participant.length-1
    // 동명이인 존재 가능
    
    // 두 배열을 사전식으로 정렬 
    // participant를 탐색하며 completion의 값과 비교, 일치 하지 않는 것을 리턴
      
       participant.sort();
       completion.sort();
   
       for (let i=0; i<participant.length; i++){
           if(participant[i]!==completion[i]){
               return participant[i]
           }
       }
   }   
   
//############################## solution 2 ##############################
   
function solution(participant, completion) {

    // part~ 배열 탐색하며 hashed 안의 값이 있는지 확인 후 있으면 추가, 없으면 1을 넣어준다
    // 다시 comp~ 배열 탐색하며 hashed 값에서 1을 빼준다.
    // hashed 를 탐색하며 값이 1 이상 남아있는 것을 리턴
       
     let hashed = []
     participant.forEach(entry => {
         hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1        
      })
      completion.forEach(entry => {
          hashed[entry] = hashed[entry] - 1
      })

      for (var key in hashed) {
          if (hashed[key] >= 1) return key
      }
 
 }