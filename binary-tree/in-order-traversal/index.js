import BinaryTree from './binary-tree.js';
import inOrder from './in-order-traversal.js';

const tempArray=[]
const elementsToAdd=[6,4,8,2,10,1,11,3,9,5,7]

let binaryTree = new BinaryTree(elementsToAdd.shift()); //root --> 6
binaryTree.addAll(elementsToAdd);
console.log("Added Order ",elementsToAdd);
inOrder(binaryTree.root,tempArray);
console.log("In-order Traversal ",tempArray);