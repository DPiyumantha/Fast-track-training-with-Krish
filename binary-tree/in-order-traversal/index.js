const BinaryTree =require('./binary-tree')
const inOrder = require('./in-order-traversal')

tempArray=[]
elementsToAdd=[4,8,2,10,1,11,3,9,7]

binaryTree = new BinaryTree(6); //root --> 6
binaryTree.addAll(elementsToAdd);
console.log("Added Order ",[6,...elementsToAdd]);
inOrder(binaryTree.root,tempArray);
console.log("In-order Traversal ",tempArray);