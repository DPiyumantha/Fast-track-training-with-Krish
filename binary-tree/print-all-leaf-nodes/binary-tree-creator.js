import BinaryTree from "./binary-tree";


export default function binaryTreeCreator(){
    let dataArr=[];
    for(let i=30;i<151;i=i+2){
        dataArr.push(i)
    }
    for(let i=31;i<42;i=i+2){
        dataArr.push(i)
    }
    for(let i=28;i>8;i=i-2){
        dataArr.push(i)
    }
    for(let i=27;i>9;i=i-2){
        dataArr.push(i)
    }
    let binaryTree = new BinaryTree(dataArr.shift());
    binaryTree.addAll(dataArr);
    return binaryTree;
}

