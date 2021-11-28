/*rotatedArraySearch
문제
부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.
입력
인자 1 : rotated
number 타입을 요소로 갖는 배열
rotated[i]는 정수
인자 2 : target
number 타입의 정수
출력
number 타입을 리턴해야 합니다.
주의사항
rotated에 중복된 요소는 없습니다.
target이 없는 경우, -1을 리턴해야 합니다.
입출력 예시
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1 */

const rotatedArraySearch = function (rotated, target) {
    // 이진 탐색(binary search)을 약간 변형하여 해결합니다.
    // target이 존재하지 않으면 -1
    // rotated의 반 / mid 변수 만들어 target인지/ 크거나 작은지 확인/같다면 그 인덱스 리턴
    // 작으면 왼쪽부분 탐색/ 크면 오른쪽/
  
    let left =0
    let right = rotated.length-1
  
    while(left<= right){
     let mid = parseInt((left+right)/2)
  
     if(rotated[mid]=== target){
       return mid
     }
     if(rotated[mid] > target){
       if(target >= rotated[left]){
         right = mid - 1
       }else {
         left = mid + 1
       }
     }else {
       if(target <= rotated[right]){
         left = mid + 1
       }else {
         right = mid - 1
       }
     }
  
    }
  
   return -1
  
  }
