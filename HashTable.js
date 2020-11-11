
/**
 * Hash Table is fast in 
 * Insert values O(1)
 * Delete values O(1)
 * Access values O(1)
 * Search Values O(1)
 * 
 * Hash Table slow in getting keys O(N)
 * Hash Tables are unordered
 * SPace complexity O(1)   tradeoff with Memory here
 * **/


class HashTable{
/*constructor for hash table*/
constructor(size){

this.data = new Array(size);

}

/*Hash Function */
_hash(key){
let hash = 0;
for(let i=0;i<key.length;i++){

hash = (hash+key.charCodeAt(i)*i)% this.data.length;

}

return hash;

}

/**
 * 
 * Set value to hash table
 * **/
 
set(key,value){
  let address = this._hash(key);
if(!this.data[address]){
this.data[address]=[];
}

this.data[address].push([key,value]);
return this.data;

}


get(key){

let address = this._hash(key);
const currentBucket = this.data[address];
if(currentBucket){
for(let i=0;i<currentBucket.length;i++){

if(currentBucket[i][0]==key){
  return currentBucket[i][1];
}

}

}

return undefined;

}


keys(){
const keysArray=[];
for(let i=0;i<this.data.length;i++){

if(this.data[i]){
  keysArray.push(this.data[i][0][0]);

}

}


return keysArray;
}





}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.set('apple',54);
myHashTable.get('grapes');
myHashTable.keys();
