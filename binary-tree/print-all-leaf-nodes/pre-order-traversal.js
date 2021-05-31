module.exports=function preOrder(node,arr) { 
    //pre-order-----> TLR

    arr.push(node.key)                                   //T
    if(node.left!==null) preOrder(node.left,arr);        //L
    if(node.right!==null) preOrder(node.right,arr);      //R
  } 