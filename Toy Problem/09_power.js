/*power
문제
두 수를 입력받아 거듭제곱을 리턴해야 합니다.

입력
인자 1: base
number 타입의 자연수 (base >= 2)
인자 2: exponent
number 타입의 정수 (exponent >= 0)
출력
number 타입을 리턴해야 합니다.
실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
주의사항
Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
시간복잡도 O(logN)을 만족해야 합니다.
나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.
입출력 예시
let output = power(3, 40);
console.log(output); // --> 19334827*/


function power(base, exponent) {
    // base 를 exponent 번 곱한것
    // 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
    //  연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어
   
   //################# 순환 알고리즘(4패스)
   if (exponent === 0) return 1;
  
    const half = parseInt(exponent / 2); // exponent이 시간을 줄이는 값
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;// %연산에 의해서 (temp * temp)의 나머지를 구하더라도 9406249보다 작으면 다시 (temp * temp)가 출력된다. 
  
    if (exponent % 2 === 1) return (base * result) % 94906249; // 홀수 의 경우
    else return result; // 짝수
  }
  //https://mygumi.tistory.com/319
  /*
   *  O(logN)이 되려면 횟수가 절반씩 줄어야 함
   *
   *  2^8 (짝수)
   *  = 2^4 * 2^4
   *  = 2^2 * 2^2 * 2^2 * 2^2
   *
   *  2^9 (홀수)
   *  = 2 * 2^4 * 2^4
   *  = 2 * 2^2 * 2^2 * 2^2 * 2^2
   */