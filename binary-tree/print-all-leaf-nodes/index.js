const BinaryTree =require('./binary-tree')
const preOrder = require('./pre-order-traversal')
const depth = require('./depth-of-a-tree')
const {printLeafNodesNonRecursive, printLeafNodesRecursive} = require('./leaf-nodes')




tempArray=[];
binaryTree = new BinaryTree(30);//root --> 30
for(let i=32;i<51;i=i+2){
    binaryTree.add(i)
}
for(let i=31;i<42;i=i+2){
    binaryTree.add(i)
}
for(let i=28;i>8;i=i-2){
    binaryTree.add(i)
}
for(let i=27;i>9;i=i-2){
    binaryTree.add(i)
}
preOrder(binaryTree.root,tempArray);
console.log("Pre-order Traversal ",tempArray);
console.log("Depth : ",depth(binaryTree.root));
console.log("\nLeaf nodes")
printLeafNodesRecursive(binaryTree.root)