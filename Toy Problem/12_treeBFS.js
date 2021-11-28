/*treeBFS
문제
임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

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
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6] */

let bfs = function (node) { 
    //너비 우선 탐색(BFS, Breadth First Search): 루트 노드에서 시작해서 인접한 노드를 먼저 탐색
   // 큐를 이용해서 구현 / 탐색되는 순서대로 노드의 값이 저장된 배열 리턴
   
   // node를 queue에 넣고 node의 맨 앞의 value 따로 저장,  맨 앞 부분과 분리한 queue 만듬/ queue의 뒤에 자식들 push
   
   let queue = [node]
   let value = []
   while(queue.length > 0){
    let head = queue[0]
    value.push(head.value)
    queue = queue.slice(1)
   
    head.children.forEach(child => queue.push(child))
   
   }
   return value;
   
   } 
   
   // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
   let Node = function (value) {
     this.value = value; // q에 저장된 순서대로 탐색???
     this.children = [];
   };
   
   // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
   // membership check(중복 확인)를 따로 하지 않습니다.
   Node.prototype.addChild = function (child) {
     this.children.push(child);
     return child;
   };