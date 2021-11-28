/*sudoku
문제
스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다. 퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다. 일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.

입력
인자 1 : board
가로 길이(board[i].length)와 세로 길이(board.length)가 모두 9인 2차원 배열
matrix[i][j]는 1 이상 9 이하의 자연수
출력
가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야 합니다.
주의사항
입력으로 주어지는 board를 직접 수정해도 상관없습니다.
입력으로 주어지는 board 가지고 완성시킬 수 있는 보드는 유일(unique)합니다.
숫자가 입력되지 않은 칸은 편의상 0이 입력되어 있습니다.
입출력 예시
let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(board);
console.log(output); // -->
/* 
[
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];
 */

const sudoku = function (board) {
    const N = board.length;
    const boxes = [ //임의로 정렬된 보드 만듬
      [0, 0, 0, 1, 1, 1, 2, 2, 2],
      [0, 0, 0, 1, 1, 1, 2, 2, 2],
      [0, 0, 0, 1, 1, 1, 2, 2, 2],
      [3, 3, 3, 4, 4, 4, 5, 5, 5],
      [3, 3, 3, 4, 4, 4, 5, 5, 5],
      [3, 3, 3, 4, 4, 4, 5, 5, 5],
      [6, 6, 6, 7, 7, 7, 8, 8, 8],
      [6, 6, 6, 7, 7, 7, 8, 8, 8],
      [6, 6, 6, 7, 7, 7, 8, 8, 8],
    ];
    const getBoxNum = (row, col) => boxes[row][col]; // row, col 입력받아 box해당 위치 값 리턴하는 함수 생성
  
    const blanks = [];  // 빈배열 담기 위해
    const rowUsed = [];
    const colUsed = [];
    const boxUsed = [];
    for (let row = 0; row < N; row++) { //가로 길이 돌면서
      rowUsed.push(Array(N + 1).fill(false)); //어레이 푸쉬 
      colUsed.push(Array(N + 1).fill(false));            
      boxUsed.push(Array(N + 1).fill(false));           
    }
  
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (board[row][col] === 0) { // 비어있다면 blacks 배열에 담아둠(배열을 PUSH하기 때문에 배열안 배열)
          blanks.push([row, col]);
        } else {
          const num = board[row][col];   // 아니면- 보드 위치 값 num에 저장
          const box = getBoxNum(row, col); //박스 위치 값 저장(위 원본 보드랑 다른 박스임)
          rowUsed[row][num] = true; //가로  세로, 박스 배열에 true 표시해둠
          colUsed[col][num] = true;
          boxUsed[box][num] = true;
        }
      }
    }
  
    const isValid = (row, col, num) => { // 
      const box = getBoxNum(row, col);
      return (
        rowUsed[row][num] === false && //하나라도 TRUE값이면(저장값이 FALSE가 아니면)바로 리턴하게됨 / 모두 FALSE가 맞으면 마지막것(어쨋든 결과는 불리언으로)
        colUsed[col][num] === false &&
        boxUsed[box][num] === false
      );
    };
  
    const toggleNum = (row, col, num) => { 
      const box = getBoxNum(row, col);
      board[row][col] = num; 
      rowUsed[row][num] = !rowUsed[row][num]; // 반대 불리언 값 저장
      colUsed[col][num] = !colUsed[col][num];
      boxUsed[box][num] = !boxUsed[box][num];
    };
  
    const aux = (idx, blanks, board) => { // 재귀위한 함수
      if (idx === blanks.length) {
        return true;
      }
  
      const [row, col] = blanks[idx];
      for (let num = 1; num <= 9; num++) {
        if (isValid(row, col, num) === true) {//모두 FALSE면
          toggleNum(row, col, num);
          if (aux(idx + 1, blanks, board) === true) {
            return true;
          }
          toggleNum(row, col, num);
        }
      }
      return false;
    };
  
    aux(0, blanks, board);
    return board;
  };