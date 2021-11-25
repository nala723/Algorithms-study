// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    //배열 메서드들 활용
    // 2중 포문을 돌리며 접근
    var answer = 0;
    let basket = [0];
    for(let i=0; i<moves.length; i++){
        let move = moves[i]-1
        for(let place of board){
            if(place[move] !== 0 ){
                if(basket[basket.length-1] === place[move]){
                    basket.pop();
                    answer += 2;
                }else {
                    basket.push(place[move])
                }
               place[move] = 0;
               break; 
            }
        }
    }
    return answer;
}