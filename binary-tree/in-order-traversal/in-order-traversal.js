module.exports=function inOrder(node,arr) { 
    //in-order-----> LTR
    if(node.left!==null) node.left && inOrder(node.left,arr)    //L
    arr.push(node.key)                                          //T
    if(node.right!==null) inOrder(node.right,arr)               //R
 } 