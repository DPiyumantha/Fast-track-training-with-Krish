function depth(node) {
  if (node === null ) {
    return 0;
  }
  let leftDepth= depth(node.left);
  let rightDepth= depth(node.right);
  if (leftDepth>=rightDepth) {
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
}

function depthNonRecursive(node) {
  let queue1 = [node];
  let queue2 = [];
  let count = 0;
  let run = true;
  while (run) {
    for (var i of queue1) {
      i.left && queue2.push(i.left);
      i.right && queue2.push(i.right);
    }
    if (queue2.length < 1) run = false;
    queue1 = [...queue2];
    count++;
    queue2 = [];
  }
  return count;
}

module.exports= {depth, depthNonRecursive}
