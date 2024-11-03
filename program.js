

//Fib
O(2**n)
function fib(n) {
  if (n <= 2) return 1; // base case.

  return fib(n - 1) + fib(n - 2);
}

//O(n) tine - O(n) Space(Because we're storing all of the different result we've already calculated.)
function fibMemoized(n, calculated = { 1: 1, 2: 1}) {
  if (n in calculated) return calculated[n];

const result =
  fibMemoized(n - 1, calculated) + fibMemoized(n - 2, calculated);
  calculated[n] = result;
  return result;
}

//O(n) time - O(1) Space.
function fibIter(n){
  if (n <= 2) return 1;
  let last = 1; //2
  let secondLast = 1; //1

  for (let i = 2; i < n; i++) {
    const temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last; // nth
}

//const result = fibIter(70);
console.log(result);


//const result = fibMemoized(70);
console.log(result);


//Binary Tree Traversal

class Node {
  value;
  left;
  right;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
/*
                 1
                /     \
              2        3
            /   \      /
          4      5    6
        /       /    /
       8        9   10
*/
const node10 = new Node(10);
const node9 = new Node(9);
const node8 = new Node(8);
const node7 = new Node(7);
const node6 = new Node(6, node10);
const node5 = new Node(5, node9);
const node4 = new Node(4, node8);
const node3 = new Node(3, node6, node7);
const node2 = new Node(2, node4, node5);
const head = new Node(1, node2, node3);

function inOrder(node) {
  if (node == null) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

function preOrder(node) {
  if (node == null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

function postOrder(node) {
  if (node == null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

console.log("In-order");
inOrder(head);
console.log("Pre-order");
preOrder(head);
console.log("Post-order");
postOrder(head);


//REVERSE STRINGS.

function reverseString(string, newStr = []) {
  if (string.length == 0) return;

  const char = string[0];
  reverseString(string.slice(1), newStr);
  newStr.push(char);

  //console.log(string, newStr);

  if (newStr.length === newStr.length) return  newStr.join("");
}

const str = "Jay is great!";
const result = reverseString(str);
console.log(result);

//RECURSIVE CASE:- Reverse(str) = reverse(str.slice(1)) + str[0]
//BASE CASE:- str.length = 0: ""