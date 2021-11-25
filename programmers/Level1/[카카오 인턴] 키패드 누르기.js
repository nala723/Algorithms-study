// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) { // 비슷한 접근 but 2차원 배열 pos를 만들어 객체화, 위아래 위치 모두 비교!
    
    // numbers 배열들의 number와 현재 손가락의 위치를 비교하여 사용할 손가락을 정한다.
        // 키패드가 담긴 객체를 만들어서 각 번호를 키로, 배열 안에 x, y 좌표를 담아 값으로 한다./***********거리 계산의 핵심 1************/
        // 왼손에 '*' / 오른손에 '#' 를 할당하여 처음 시작점으로 한다. 
            // number를 탐색하며 상황에 맞게 그 값을 해당 손가락 위치에 할당할 것이다. 
        // number가 왼열일 경우
            // num % 3 이 1
        // number가 오른열일 경우
            //  num % 3 이 0 이고 num은 0이 아닐때
        // number가 가운데 열일 경우      
            // 현재 두 손가락의 위치를 알아야하므로 전역에 그 값을 계산하는 함수를 만들고, 보낸다./***********거리 계산의 핵심 2************/
                // 함수 :  현재 number, 왼손 위치, 오른손 위치, 키패드객체, hand 를 인자로 받아서 
                // 왼손, 오른손에 각각의 세로위치 차이 + 가로위치 차이 계산 
                    // 세로 위치 차이 : 키패드 객체의 왼손(혹은 오른손) 위치 번호를 키로 하는 배열의 y축(인덱스 0)
                    // 가로 위치 차이 : ~~~배열의 x축(인덱스 1)
    // 거리가 같다면 hand에 따라 왼손 혹은 오른손잡이임을 파악해 결정한다. 

    // 정한 손가락을 문자열 형태로 만들어 리턴한다.

    const pos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    var lH = '*', rH = '#';
    var result = ''
    
    function dis(num, lH, rH, pos, hand){
        const lD = Math.abs(pos[lH][0] - pos[num][0]) + //세로거리 차이
            Math.abs(pos[lH][1] - pos[num][1]) // 가로거리 차이
        const rD = Math.abs(pos[rH][0] - pos[num][0]) + 
            Math.abs(pos[rH][1] - pos[num][1])

        if (lD === rD) return hand === 'left' ?  'L' : 'R';
        return lD < rD ? 'L' : 'R'
    }
    
    for (var num of numbers){
        if (num % 3 === 1){
            result += 'L';
            lH = num;
        }
        
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rH = num;
        }
        else{
            result += dis(num, lH, rH, pos, hand)
            result[result.length-1] === 'L'? lH = num : rH = num
        }
    }

    return result;
}