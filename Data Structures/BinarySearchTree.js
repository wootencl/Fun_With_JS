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
	// A Couple comments on traversal. Refer here: http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html
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
	}
}

var array = [7,1,9,0,3,2,5,4,6,9,10];
var bst = new BinarySearchTree();
for (var i = 0; i<array.length; i++) {
	bst.add(array[i]);
}
console.log(bst.toString());