// This implmentation of a BST is taken from the below website:
// https://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-1/
// https://www.nczonline.net/blog/2009/06/16/computer-science-in-javascript-binary-search-tree-part-2/
// BinarySearch 
function BinarySearchTree() {
	this._root = null;
}

BinarySearchTree.prototype = {
	//restore constructor
	constructor: BinarySearchTree,
	contains: function (value) {
		var found = false,
		current = this._root;
		
		while (!found && current) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		return found;
	},
	add: function (value) {
		//create a ndew node
		var node = {
			value: value,
			left: null,
			right: null
		},
		current;
		if (this._root === null) {
			this._root = node;	
		} else {
			current = this._root;
			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = node;
						break
					} else {
						current = current.right;
					}
				} else {
					//handling duplicates. current.value = node.value
					break;
				}
			}
		}
	},
	// A Couple comments on traversal. Refer here:
	// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html
	traverse: function (process) {
		//helper function
		function inOrder(node) {
			if (node) {

				if (node.left !== null) {
					inOrder(node.left);
				}
				process.call(this, node);
				if (node.right !== null) {
					inOrder(node.right);
				}
			}
		}
		//start with the root
		inOrder(this._root);
	},
	size: function () {
		var length = 0;
		
		this.traverse(function(node){
			length++;
		});
		return length;
	},
	toArray: function () {
		var result = [];
		
		this.traverse(function(node){
			result.push(node.value);
		});
		return result;
	},
	toString: function () {
		return this.toArray().toString();
	},
	min: function () {
		var current = this._root;
		while (current) {
			if (current.left === null) {
				break;
			}
			current = current.left;
		}
		return current.value;
	},
	max: function () {
		var current = this._root;
		while (current) {
			if (current.right === null) {
				break;
			}
			current = current.right;
		}
		return current.value;
	},
	maxDepth: function(node){
		if (node === null) {
			return 0;
		} else {
			var lDepth = this.maxDepth(node.left);
			var rDepth = this.maxDepth(node.right);
			if (lDepth > rDepth) {
				return lDepth+1;
			} else {
				return rDepth+1;
			}
		}
	},
	// This implementation of remove can lead to unbalanced trees
	remove: function (value) {
		var found = false,
		parent = null,
		current = this._root,
		childCount,
		replacement,
		replacementParent;
		
		//find node
		while (!found && current) {
			if (value < current.value) {
				parent = current;
				current = current.left;
			} else if (value > current.value) {
				parent = current;
				current = current.right;
			} else {
				found = true;
			}
		}
		//procees only if found
		if (found) {
			//figure out how many children there are
			childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
			
			//special case for root
			if (current === this._root) {
				switch(childCount) {
					case 0:
						this._root = null;
						break;
					case 1:
						this._root = (current.right === null ? current.left : current.right);
						break;
					case 2:
						replacement = this._root.left;
						
						//find the right-most leaf node of the old root's left node
						while (replacement.right !== null) {
							replacementParent = replacement;
							replacement = replacement.right;
						}
						
						if (replacementParent !== null) {
							replacementParent.right = replacement.left;
							
							replacement.right = this._root.right;
							replacement.left = this._root.left;
						} else {
							replacement.right = this._root.right;
						}
						
						this._root = replacement;
				}
			} else { //non root values
				switch(childCount) {
					case 0:
						if (current.value < parent.value) {
							parent.left = null;
						} else {
							parent.right = null;
						}
						break;
					case 1:
						if (current.value < parent.value) {
							parent.left = (current.left === null ? current.right : current.right);
						} else {
							parent.right = (current.left === null ? current.right : current.right);
						}
						break;
					case 2:
						replacement = current.left;
						replacementParent = current;
						
						while (replacement.right !== null) {
							replacementParent = replacement;
							replacement = replacement.right;
						}
						
						replacementParent.right = replacement.left;
						
						replacement.right = current.right;
						replacment.left = current.left;
						
						if (current.value < parent.value) {
							parent.left = replacement;
						} else {
							parent.right = replacement;
						}
				}
			}
		} 
	}
	
}

var array = [7,1,9,0,3,2,5,4,6,8,10];
var bst = new BinarySearchTree();
for (var i = 0; i<array.length; i++) {
	bst.add(array[i]);
}
bst.remove(4);
console.log(bst.toArray());