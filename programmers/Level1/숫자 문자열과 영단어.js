// https://programmers.co.kr/learn/courses/30/lessons/81301

//######################################### solution 1 ##########################################//

function solution(s) {
    // 문자열 저장할 변수마련
    // 영단어를 키로, 숫자를 값으로 갖는 객체 생성
    // s의 문자열 부분을 탐색하며(더해준다) 객체의 키와 일치하는지,판단하에 변환
    var answer = '';
    let temp = '';
    let obj = {};
    let word = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i=0; i<10; i++){
        obj[word[i]] = i
    }
   for(let i=0; i<s.length; i++){
       let num = Number(s[i])
       if(!isNaN(num)){
           answer += s[i]
       }else {
           if(obj[temp] === undefined){ 
               temp += s[i]
               if(obj[temp] !==undefined){
                    answer += obj[temp]
                    temp = '';
               }
           }else{
               answer += obj[temp]
               temp = '';
           }
      
       }
   }
    
    return Number(answer);
}

//######################################### solution 2 ##########################################//

function solution(s) {

    // 배열 인덱스와 i를 매치시킨다
    // 배열 메서드 split과 join 이용

     let word = ['zero','one','two','three','four','five','six','seven','eight','nine']
     let answer= s;
    
     for(let i=0; i< word.length; i++){
         let arr = answer.split(word[i]); // 해당 문자 기준으로 split으로 나눔
         answer = arr.join(i); // join시 i가 붙음
     }
    return Number(answer);
    
}