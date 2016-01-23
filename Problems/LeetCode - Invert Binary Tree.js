//https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return [];
    }
    var arr = [];
    preOrder(root, arr);
    root = TreeNode(arr[0]);
    current = root;
    var i = 1;
    while (i < arr.length) {
        if (arr[i] > current.val) {
            if (current.left === null) {
                current.left = TreeNode(arr[i]);
                i++;
                current = root;
            } else {
                current = current.left;
            }
        } else if (arr[i] < current.val) {
            if (current.right === null) {
                current.right = TreeNode(arr[i]);
                i++;
                current = root;
            } else {
                current = current.right;
            }
        } else {
            i++;
        }
    }
    console.log(root);
};
function preOrder(node, arr) {
	if (node) {
	    arr.push(node.val);
		if (node.left !== null) {
			preOrder(node.left, arr);
		}
		if (node.right !== null) {
			preOrder(node.right, arr);
		}
	}
}

//Actual Solution
function invertTree(root) {
    if (root === null) {
    return root;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
