module.exports= function depth(node){
    if(node===null||(node.left===null&&node.right===null)){
        return 0;
    }
    if(depth(node.left)>=(depth(node.right))){
        return depth(node.left)+1
    }else{
        return depth(node.right)+1
    }
}