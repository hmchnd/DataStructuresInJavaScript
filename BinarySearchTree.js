class Node {

constructor(value){
this.left = null;
this.right = null;
this.value = value;

}
}

class BinarySearchTree {

constructor(){
  this.root = null;
}

insert(value){
const newNode = new Node(value);

if(this.root==null){
  this.root = newNode;
}
else{
let current = this.root;
while(true){
  //left
if(value<current.value){

if(!current.left){
  current.left = newNode;
  return this;
}
current = current.left;

} else{
// right
if(!current.right){
current.right = newNode;
return this;
}
current = current.right;
}

}

}
}

lookup(value){
if(!this.root){
return false;

}

let currentNode = this.root;

while(currentNode){
if(value<currentNode.value){
  currentNode = currentNode.left;
}else if(value>currentNode.value){
currentNode = currentNode.right;
} else if(currentNode.value===value){
return currentNode;
}


}
return false;

}




}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const bsTree = new BinarySearchTree();
bsTree.insert(9);
bsTree.insert(4);
bsTree.insert(20);
bsTree.insert(1);
bsTree.insert(6);
bsTree.insert(15);
bsTree.insert(170);
bsTree.lookup(20)
// JSON.stringify(traverse(bsTree.root))


// 9
//4   20
//1 6 15 170