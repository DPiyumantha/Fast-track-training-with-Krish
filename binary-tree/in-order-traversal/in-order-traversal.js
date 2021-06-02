export default function inOrder(node, arr) {
  //in-order-----> LTR
  node.left && inOrder(node.left, arr);     //L
  arr.push(node.key);                       //T
  node.right && inOrder(node.right, arr);   //R
};
