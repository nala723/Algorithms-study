// https://programmers.co.kr/learn/courses/30/lessons/12977


//######################################### solution 1 ##########################################//

function solution(nums) {
    // 재귀 이용 풀이-
    // 소수 판별기 필요
    // idx가 nums.length 면 리턴
    // 세개 고를때까지 nums의 idx 올리며 배열에 담고 3개가 될 때 검사한다 - 소수판별기로 보내고 true 일시 결과물 담을 배열에 담고 리턴
   
     function isPrime(number) {
       if(number % 2 === 0){
           return false
       }
        let sqrt = parseInt(Math.sqrt(number))
        for(let i=3; i<=sqrt; i+=2){
            if(number % i === 0){
                return false;
            } 
        }
        return true;
    }
    
   let result = []
   function recurs(idx=0,el=[]){
       if(el.length === 3){
         let sum= el.reduce((arr,cur)=>{
           return arr +cur
         })
           if(isPrime(sum)){ //false면 다른 숫자 골라야 한다.
            result.push(el) 
             return;
         }
       }
    
       if(idx === nums.length){
           return;
       }
       recurs(idx+1,el)
       recurs(idx+1,el.concat(nums[idx]))
       
          
   }
   recurs() 
  return result.length
    
}

//######################################### solution 2 ##########################################//
    // 포문 이용 풀이
    
function solution(nums) {
    function isPrime(number) {
       if(number % 2 === 0){
           return false
       }
        let sqrt = parseInt(Math.sqrt(number))
        for(let i=3; i<=sqrt; i+=2){
            if(number % i === 0){
                return false;
            } 
        }
        return true;
    }
    
  let sum=0  
  let count=0;
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
        for(let f=j+1; f<nums.length; f++){
            sum = nums[i]+nums[j]+nums[f]
            if(isPrime(sum)){
                count++
            }
        }
    }  
  }  
   return count 
}