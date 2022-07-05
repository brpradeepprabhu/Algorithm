import {Node} from "./tree/node.js"
import {Tree} from './tree/tree.js'

let node = new Node(25);

node.left = new Node(15);
node.right = new Node(35)

node.left.left = new Node(10);
node.left.right = new Node(20);


node.right.left = new Node(30);
node.right.right = new Node(40);


let tree = new Tree(node, "binary search tree")
// trying to display first child node
console.log(tree.root.left.data)
// trying to display second child node
console.log(node.left.left.data)
//searching on the tree
console.log(tree.search(15))
// tree traversal
tree.postOrderTraversal();


