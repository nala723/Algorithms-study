/*insertionSort
문제
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length는 1,000 이하
출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)
주의사항
삽입 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
입출력 예시
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
Advanced
insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.*/

// naive solution
// const insertionSort = function (arr) {
//   let sorted = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= sorted[i - 1]) {
//       sorted.push(arr[i]);
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (arr[i] <= sorted[j]) {
//           const left = sorted.slice(0, j);
//           const right = sorted.slice(j);
//           sorted = left.concat(arr[i], right);
//           break;
//         }
//       }
//     }
//   }

//   return sorted;
// };

const insertionSort = function (arr, transform = (item) => item) {
    let sorted = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (transform(arr[i]) >= transform(sorted[i - 1])) {
        sorted.push(arr[i]);
      } else {
        for (let j = 0; j < i; j++) {
          if (transform(arr[i]) <= transform(sorted[j])) {
            const left = sorted.slice(0, j);
            const right = sorted.slice(j);
            sorted = left.concat(arr[i], right);
            break;
          }
        }
      }
    }
  
    return sorted;
  };

  //===============================================================================================
  // Insertion Sort : 2번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교하여 삽입할 위치를 지정한 후, 
  //                  원소를 뒤로 옮기고 지정된 자리에 자료를 삽입 하여 정렬하는 알고리즘

  //두번째 인자로 callback-> 이 함수의 리턴값으로 위치 정할까..

  // for(let i =1; i <arr.length; i++){ // 2번쨰 인덱스부터 돌린다
  //   let temp = arr[i];  // temp 선언 현재 탐색하는 인덱스의 값 저장
  //   let prev = i - 1;   // prev 선언 이전 인덱스와 비교 위해 이전 인덱스 담음
  //   while((prev >= 0) && (arr[prev] > temp)){ // 이전 인덱스가 0보다 크거나 같고 && 그 값이 비교하려는 지금 값보다 클때
  //     arr[prev+1] = arr[prev]; // prev 다음 인덱스 값(즉 현재 비교하려는 temp가 됨)에 prev값  할당-> temp가 더 크게 만듬
  //     prev--; // prev를 감소시킴-> while문 안 조건에 맞도록...+ 앞 원소들과 비교하고 있으니까
  //   }
  //   arr[prev+1] = temp; // 결국 (0보다 작은 인덱스 없으므로 인덱스값이 -가 되면 whlle 실행 x 인덱스 0값/ 가장작은값 만들어서 temp를 할당: 첫 시작점에 할당한것됨)
  // }                     // 그러고 for문 돌려서 다음 인덱스 검사검사..
  // return arr