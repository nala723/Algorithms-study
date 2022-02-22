// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let result = [];
    
    for(let el of commands){
      const [first,second,third] = el;
      
      let newArray = array.slice(first-1,second);
      newArray.sort((a,b) => a-b);
      result.push(newArray[third-1]); 
        
    }
    
    return result;
}

// ############################ 다른 사람 풀이 ##########################

// 맵을 이용 모든 것을 안에서 계산한 것이 포인트
// slice 대신 filter를 이용하여 범위 계산

function solution(array, commands) {
    return commands.map(command => { 
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}
