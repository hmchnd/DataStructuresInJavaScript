class myArray{
constructor(){
  this.length=0;
  this.data={};
}

push(item){

this.data[this.length]=item;
this.length++;
return this.data;

}


}

myArray.push(23);