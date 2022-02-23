// https://programmers.co.kr/learn/courses/30/lessons/12982#

function solution(d, budget) {
  // input:
    // d - 부서별 신청한 금액이 들어있는 배열(1<= d.length <= 100) / budget: 예산  (1<=예산<=10,000,000) 
  // return: 최대 몇 개의 부서에 물품을 지원할 수 있는지
    
  // d를 작은 값 순으로 정렬(작은 값 순으로 정렬해야 최대 많은 부서에 물품 지원 가능 하므로)
  // 인덱스에 접근할 cnt 변수 선언  
  // d를 탐색하며 budget에서 값만큼 빼 주고 cnt를 증가시킨다.
   // while문으로 탐색, budget 값이 음수이면 탐색 중단
   // 이전 순회한 cnt가 최대 물품 전달받은 부서의 수와 같다.
  d.sort((a,b)=>a-b)
  let cnt = 0  
  while(budget >= 0){
     budget -= d[cnt]
     cnt++ 
  }
  return cnt-1  
}
