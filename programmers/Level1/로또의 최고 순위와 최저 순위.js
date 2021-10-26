```jsx

function solution(lottos, win_nums) {
    
    // 일치하는 것의 갯수 비교 -> 일치하는 요소 갯수 + 0의 갯수
    // 일단 lottos와 win_nums sort하고
    // lottos에서 0인것 다 제함+ 갯수 카운트?
    // 두 배열 비교
    
        lottos.sort((a,b)=>a-b)
        win_nums.sort((a,b)=>a-b)
 
        let count= 0
        let cnt = 0
        let len=lottos.length
        for(let i=0; i<len; i++){
            if(lottos[i] === 0){
                lottos.shift()
                count++
                i--
            }
        }
    if (count === 6){     //0이 6개인경우 제외 완료
        return [1,6]
    }
     
        for(let i=0; i<lottos.length; i++){   // 일치하는 요소 갯수 카운트
           if(win_nums.includes(lottos[i])){
               cnt++
           }
        }
    let score = 7
    if(cnt <2){ // 일치하는 요소가 0-1개 이면 cnt에 1할당 
        cnt = 1
    }
   //score - (0의 갯수+일치하는 요소 갯수)이 최고순위/ score - 일치하는 요소 갯수가 최저순위
    return [ score-(count+cnt), score-cnt] 

  
}
    

//############################ solution 2 ################################
    function solution(lottos, win_nums) {
     //  배열 index를 이용할 수 있다 ->순위를 보면 1개-0개 번호는 둘다 6등
     // filter로 0인 것만 거른것의 length 또한 0의 갯수이다.
        
       const grade = [6,6,5,4,3,2,1] // 0~1개 번호 일치하면 6등---index이용
       let zeroCnt = lottos.filter(lotto => lotto === 0).length;
       let minCnt =lottos.filter(lotto => win_nums.includes(lotto)).length
       let maxCnt = minCnt + zeroCnt
      
        
       return [grade[maxCnt], grade[minCnt]] 
        
    }
```
