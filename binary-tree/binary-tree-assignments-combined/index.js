const BinaryTree =require('./binary-tree')
const inOrder = require('./in-order-traversal')
const preOrder = require('./pre-order-traversal')
const depth = require('./depth-of-a-tree')
const {printLeafNodesNonRecursive, printLeafNodesRecursive} = require('./leaf-nodes')

tempArray=[]
console.log("================================================= Example 1")

binaryTree_1 = new BinaryTree(2);//root --> 2
binaryTree_1.addAll([5,1,4,2]);
inOrder(binaryTree_1.root,tempArray);
console.log("In-order Traversal ",tempArray);
tempArray=[];
preOrder(binaryTree_1.root,tempArray);
console.log("Pre-order Traversal ",tempArray);
console.log("Depth : ",depth(binaryTree_1.root));
console.log("\nLeaf nodes")
printLeafNodesRecursive(binaryTree_1.root);
console.log("================================================= Example 2")

tempArray=[];
binaryTree_2 = new BinaryTree(30);//root --> 30
for(let i=32;i<51;i=i+2){
    binaryTree_2.add(i)
}
for(let i=31;i<42;i=i+2){
    binaryTree_2.add(i)
}
for(let i=28;i>8;i=i-2){
    binaryTree_2.add(i)
}
for(let i=27;i>9;i=i-2){
    binaryTree_2.add(i)
}
inOrder(binaryTree_2.root,tempArray);
console.log("In-order Traversal ",tempArray);
tempArray=[];
preOrder(binaryTree_2.root,tempArray);
console.log("Pre-order Traversal ",tempArray);
console.log("Depth : ",depth(binaryTree_2.root));
console.log("\nLeaf nodes")
printLeafNodesRecursive(binaryTree_2.root)
console.log("================================================= Example 3")

tempArray=[];
binaryTree_3 = new BinaryTree(6); //root --> 6
binaryTree_3.addAll([4,8,2,10,1,11,3,9,7]);
inOrder(binaryTree_3.root,tempArray);
console.log("In-order Traversal ",tempArray);
tempArray=[];
preOrder(binaryTree_3.root,tempArray);
console.log("Pre-order Traversal ",tempArray);
console.log("Depth : ",depth(binaryTree_3.root));
console.log("\nLeaf nodes")
printLeafNodesRecursive(binaryTree_3.root)
console.log("=================================================")