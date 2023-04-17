const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }

  add(data) {
    this.rootData = put(this.rootData, data);

    function put(node, data) {
      if (!node) {
        node = new Node(data);
        return node;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = put(node.right, data);
      }

      if (node.data > data) {
        node.left = put(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return checkData(this.rootData, data);

    function checkData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return checkData(node.right, data);
      } else {
        return checkData(node.left, data);
      }
    }
  }

  find(data) {
    return search(this.rootData, data);

    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return search(node.right, data);
      } else {
        return search(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootData = removeNode(this.rootData, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let currentData = node.right.data;
        let next = node.right.left;

        while (next) {
          currentData = next.data;
          next = next.left;
        }

        node.data = currentData;

        node.right = removeNode(node.right, currentData);

        return node;
      }
    }
  }

  min(first = this.rootData) {
    if (!first) {
      return null;
    }

    let current = first.data;
    let next = first.left;

    while (next) {
      current = next.data;
      next = next.left;
    }

    return current;
  }

  max(first = this.rootData) {
    if (!first) {
      return null;
    }

    let current = first.data;
    let next = first.right;

    while (next) {
      current = next.data;
      next = next.right;
    }

    return current;
  }
}
module.exports = {
  BinarySearchTree
};