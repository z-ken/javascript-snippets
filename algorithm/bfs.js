/**
 * @fileoverview Breadth-First Search implementation
 *
 * usage:
 *
 * // Create random binary tree
 *   let root = new TreeNode(3);
 *   console.log(root);
 *
 * // List out nodes by breadth
 *   console.log(bfsLevel(root));
 *
 * @author Ken Zetta <https://github.com/z-ken>
 */

//------------------------------------------------------------------------------
// Node definition
//------------------------------------------------------------------------------
class TreeNode {
  constructor(level) {
    this.value = Math.ceil(Math.random() * 100);
    if (level > 1) {
      this.left = new TreeNode(level - 1);
      this.right = new TreeNode(level - 1);
    }
  }
}

//------------------------------------------------------------------------------
// Core implementation
//------------------------------------------------------------------------------
function bfsLevel(node) {
  let origin = [];
  let result = [];
  origin.push(node);

  while (origin.length > 0) {
    let levelRes = [];
    const len = origin.length;
    for (let i = 0; i < len; i++) {
      let n = origin.shift();
      levelRes.push(n.value);
      if (n.left) origin.push(n.left);
      if (n.right) origin.push(n.right);
    }
    result.push(levelRes);
  }
  return result;
}
