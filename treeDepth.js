const elements = [3, 1, 7, 5, 4];
// const elements = [3, 5, 2, 1, 4, 6, 7];
let tree = null;

class TreeNode {
  value = null;
  left = null;
  right = null;
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const createTree = () => {
  elements.map((element) => {
    if (tree == null) {
      tree = new TreeNode(element, null, null);
      return;
    }
    InsertNode(tree, element);
  });
};

const InsertNode = (root, node) => {
  if (root.value > node) {
    // Should go to left
    if (root.left == null) {
      root.left = new TreeNode(node, null, null);
      return;
    }
    InsertNode(root.left, node);
  } else if (root.value < node) {
    // Should go to right
    if (root.right == null) {
      root.right = new TreeNode(node, null, null);
      return;
    }
    InsertNode(root.right, node);
  } else {
    throw new Error(`Tree colision! Value ${node} already exists!`);
  }
};

let maxDepth = 0;

const getDepth = (node) => {
  if (node == null) node = tree;
  if (!node.depth) {
    node.depth = 0;
  }
  if (node.left) {
    node.left.depth = node.depth + 1;
    getDepth(node.left);
  }
  if (node.right) {
    node.right.depth = node.depth + 1;
    getDepth(node.right);
  }
  if (!node.left && !node.right) {
    if (maxDepth < node.depth) {
      maxDepth = node.depth;
    }
    return;
  }
};

createTree();
getDepth();
console.log(`Maximum depth is ${maxDepth}`);
