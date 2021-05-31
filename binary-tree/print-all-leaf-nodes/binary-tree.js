const Node = require("./tree-node");

class BinaryTree {
  constructor(key) {
    this.root = new Node(key);
  }


  addKey = function (node, key) {
    if (node === null) {
      return new Node(key);
    }
    if (node.key <= key) {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.addKey(node.right, key);
      }
    } else {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.addKey(node.left, key);
      }
    }
  };


  add = function (key) {
    this.addKey(this.root, key);
  };

  addAll = function(numbers){
      numbers.forEach(element => {
          this.add(element)
      });
  }
}

module.exports = BinaryTree;
