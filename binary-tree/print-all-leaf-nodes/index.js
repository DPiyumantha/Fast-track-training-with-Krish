const preOrder = require('./pre-order-traversal')
const {depth, depthNonRecursive} = require('./depth-of-a-tree')
const {printLeafNodesNonRecursive, printLeafNodesRecursive} = require('./leaf-nodes')
import binaryTreeCreator from './binary-tree-creator'
let tempArray=[];
preOrder(binaryTree.root,tempArray);
console.log("Pre-order Traversal ",tempArray);
console.log("Depth : ",depth(binaryTree.root));
console.log("Depth NR: ",depthNonRecursive(binaryTree.root));
console.log("\nLeaf nodes")
printLeafNodesRecursive(binaryTree.root)