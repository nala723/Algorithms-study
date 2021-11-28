/*treeDFS
문제
임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

입력
인자 1 : node
'value', 'children' 속성을 갖는 객체 (Node)
'node.value'는 number 타입
'node.children'은 Node를 요소로 갖는 배열
출력
배열을 리턴해야 합니다.
주의사항
생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
입출력 예시
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7] */

let dfs = function (node) {
    // 루트 기준으로 탐색 왼쪽자식(첫번째) 있으면 탐색, 반복.. 자식의 자식의 자식... 없으면 부모의 자식 탐색
    // 일단 값 저장할 배열 만들자 / 부모값 넣음
    // 부모의 children배열 탐색하며 가장 앞 자식노드 부터 순회. 값 넣음../더이상 자식이 없으면 부모로 올라가서 다른 자식..반복?
    // 종료조건 : 반복이 끝났을때?
    let result = [node.value]; //노드자체를 배열 담는것도생각
    if(node.children.length === 0){
      return result;
    }
    for(let i=0; i< node.children.length; i++){
          result.push(...(dfs(node.children[i])))

    } 
    return result;
  
  };
  
  //-----------------------reference 코드------------------------------
    // let values = [node.value];
  
    // node.children.forEach((n) => {
    //   values = values.concat(dfs(n));
    // });
  
    // return values;
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };