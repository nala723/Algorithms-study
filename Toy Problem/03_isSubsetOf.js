/*isSubsetOf
문제
두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

입력
인자 1 : base
number 타입을 요소로 갖는 임의의 배열
base.length는 100 이하
인자 2 : sample
number 타입을 요소로 갖는 임의의 배열
sample.length는 100 이하
출력
boolean 타입을 리턴해야 합니다.
주의사항
base, sample 내에 중복되는 요소는 없다고 가정합니다.
입출력 예시
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false*/

const isSubsetOf = function (base, sample) { 
    // naive solution: O(M * N)
    // return sample.every((item) => base.includes(item));
    //-----------------------------------------------------------
    // sample이 base의 요소인지. (모두 포함해야) // 하나라도 다르면 falses
    // sample의 요소를 base의 요소 비교해서 sample 요소 모두 base안에 있는지 check ->둘의 요소, 인덱스를 알아야한다
    //  #### 일단 두 배열을 비교하기 쉽게 오름차순 정렬  
    //  #### sample을 loop하고 그것을 base 요소들과 비교->다음 base를 loop
    //  둘다 숫자를 갖는 배열이므로 0번째 인덱스부터 비교가능, 돌려가며 비교 sample[i] 보다 base[i]가 더크면 false
    //  #### boolean 값 담기 위한 임의의 변수 baseIdx 선언 0 할당, (함께 base 인덱스 0또한 설정 가능)
    //  #### sample[i]와 base[i]를 비교하고 결과를 빨리 낼 함수 만듬->아이템,배열,loop 위한 초기값(어디부터increment할지)을 인자로 받아 base loop할수 있게
    // #############기본적으로 sample[i] < base[i] 이면 부분집합 x ex) [1,2,4] / [1,4,5,6,7] ################
    // 위에 따라 만든 함수 내에 loop 안에 조건절 만들고 false를 판별할수 있도록 임의의 수를 리턴하게끔
    // 다시 2-1의 loop 내에서 함수를 불러와주고 인자전달, 그 리턴값을 baseIdx에 할당, 조건절에 의해 false 리턴 / 다 돌리고 모두 아니면 true
  
    base.sort((a,b)=>a-b);
    sample.sort((a,b)=>a-b);
  
    const toCompare = function (item, arr , from){
      for(let i =from; i<arr.length; i++ ){
        if(item === arr[i]){
          return i;
        } else if(item < arr[i]){
          return -1;
        }
      }return -1;
    }
  
    baseIdx = 0;
    for(let i=0; i< sample.length; i++){
    baseIdx = toCompare( sample[i],base,baseIdx)
     if(baseIdx === -1){
       return false;
     }
    }
   return true; 
  }