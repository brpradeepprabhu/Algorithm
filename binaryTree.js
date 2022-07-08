import {Node} from "./tree/node.js"
import {Tree} from './tree/tree.js'

let node = new Node(50);

node.left = new Node(25);
node.right = new Node(75);

node.left.left  = new Node(10);
node.left.right = new Node(35)

node.left.left.left = new Node(5);
node.left.left.right  = new Node(13);


node.left.right.left = new Node(30);
node.left.right.right = new Node(42);

//fourth children for the data
node.left.left.left.left = new Node(2);


let tree = new Tree(node, "binary search tree")
// trying to display first child node
console.log(tree.root.left.data)
// trying to display second child node
console.log(tree.root.left.left.data)
//searching on the tree
console.log(tree.search(15))
// tree traversal
tree.preorderTraversal();


console.log("height",tree.findMaxHeight())

console.log("depth at 2",tree.getNodesAtDepth(2))

// it should be child of 13
tree.addNode(20)

tree

console.log(node.left.left.right)