/**
 * Linked List is very good for append and prepend operation. 
 * they are very cost effective in comparision with array when we    have to insert  data into list.
 * In linked list traversing is costly as data is not available next to each other same linke array.
 * Deleton also take O(n) in linked list
 * **/
 // 01-->5-->16

class Node {
constructor(value){
this.value = value;
this.next=null;
}

}

/**
 * Linked List class implementation
 * 
 * **/

class LinkedList {
constructor(value){
this.head = {
  value:value,
  next:null
}

this.tail = this.head;
this.length=1;
}
/**
 * Add new node in the last of linkedlist
 * **/
append(value){
const newNode = {
  value:value,
  next:null
}
this.tail.next = newNode;
this.tail = newNode;
this.length++;
}

/**
 * Add new node in the beginning
 * 
 * **/

prepend(value){
const newNode = new Node(value);
//// {
//   value:value,
//   next:null
// }
newNode.next = this.head;
this.head = newNode;
this.length++;


}

/**
 * Print the Linked list
 * 
 * **/
printList(){
  const array=[];
  let currentNode = this.head;
  while(currentNode!==null){
array.push(currentNode.value);
currentNode = currentNode.next;

  }
  return array;
}

/**
 * Insert to the LinkedList
 * Insert at given index
 * 
 * **/

insert(index,value){
  // check params
  if(index>=this.length){
    return this.append(value);
  }

  const newNode = new Node(value);
  const leader = this.traverseToIndex(index-1);
  newNode.next = leader.next;
  leader.next = newNode;
  this.length++;

}
/**
 * Utility method to traverse till earlier node which need to delete or insert
 * **/
traverseToIndex(index){
let counter = 0;
let currentNode = this.head;
while(counter!==index){
currentNode = currentNode.next;
counter++;
}
return currentNode;

}

/**
 * Remove the Node method.
 * @param taking index
 * **/
remove(index){
// check the param

const leader = this.traverseToIndex(index-1);
const unwamtedNode = leader.next;
leader.next = unwamtedNode.next;
this.length--;


}

}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,11);
myLinkedList.insert(2,13);
myLinkedList.remove(2,13);
myLinkedList.printList();
//console.log(myLinkedList)



