function printLeafNodesRecursive(node) {
  if (node.left !== null) node.left && printLeafNodesRecursive(node.left);
  if (node !== null && node.left == null && node.right == null) {
    console.log(node," : LEAF");
  }
  if (node.right !== null) printLeafNodesRecursive(node.right);
}

function printLeafNodesNonRecursive(node) {
  queue = [];
  leafNodes = [];
  if (node !== null) {
    queue.push(node);
  }
  while (queue.length > 0) {
    firstNode = queue.shift();
    if (firstNode.left === null && firstNode.right === null) {
      leafNodes.push(firstNode);
    }
    if (firstNode.left) {
      queue.push(firstNode.left);
    }
    if (firstNode.right) {
      queue.push(firstNode.right);
    }
  }
  console.log(leafNodes);
}

module.exports = { printLeafNodesNonRecursive, printLeafNodesRecursive };
