// https://programmers.co.kr/learn/courses/30/lessons/70128

//##################### solution 1 ######################//

function solution(a, b) {
    let result = 0
    for(let i =0; i<a.length; i++){
    result = result + a[i] * b[i]
    }
    return result;
}


//###################### solution 2 #######################//

function solution(a, b) {
    return a.reduce((ac,cu,idx)=> ac+=cu*b[idx],0)
 }