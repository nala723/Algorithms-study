/*powerSet
문제
하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 없는 알파벳 소문자 문자열
출력
배열(arr)을 리턴해야 합니다.
arr[i]는 각 부분집합의 원소로 구성된 문자열
주의사항
arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
arr[i]는 알파벳 순서로 정렬되어야 합니다.
집합은 중복된 원소를 허용하지 않습니다.
부분집합은 빈 문자열을 포함합니다.
arr은 사전식 순서(lexical order)로 정렬되어야 합니다.
입출력 예시
let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']*/

const powerSet = function (str) {

   // 1. 정렬
   let sorted = str.split('').sort(); 
   // 2. 중복제거
   sorted = sorted.reduce((acc,cur)=> { // 이미 사전식 순서로 배치되어 있어 중복요소의 위치는 연달아 있을 것 
             if(acc[acc.length-1] !== cur){ 
               return acc.concat(cur)
              }else {
               return acc
              }  // 이때 sorted 값은 스트링!!!!!
             
          })
   let result = [];
   // 3. 반복- 재귀 돌릴 함수 
   const letsTry = function (idx,resultprop) {
       
       //base case  마지막 문자까지 검토한 경우
       if (idx === sorted.length) { 
        result.push(resultprop);  // 현재까지 쌓았던 것 저장
        return;
      }
      // recursive case
      letsTry(idx + 1, resultprop); // idx번째 문자가 포함되지 않는 경우
      letsTry(idx + 1, resultprop + sorted[idx]);   // idx번째 문자가 포함되는 경우
    };
  
    letsTry(0, ''); //------시작점
    return result.sort();
  
  };