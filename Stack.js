/**
 * Stack Class Implementation.
 * 
 * **/
class Node {
constructor(value){
this.value = value;
this.next=null;
}

}

class Stack{

constructor (){
this.top=null;
this.bottom=null;
this.length=0;


}
peek(){
return this.top;
}
push(value){
const newNode = new Node(value);
if(this.length===0){
  this.top = newNode;
  this.bottom = newNode;
}else{
const holder = this.top;
this.top = newNode;
this.top.next = holder;

}
this.length++;
return this;
}

pop(){
  if(!this.top){
    return null;
  }
  const holder = this.top;
  this.top = this.top.next;
  this.length--;
  return this;

}

}
const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.peek();
myStack.pop();