
function firstRecurringChar (array){
console.log(array);
var first = {};
first[array[0]]="";
//console.log(first)
for(let i=1;i<array.length;i++){

if(first.hasOwnProperty(array[i])){

  return array[i];
}else{

  first[array[i]]="";
}


}
//console.log(first)
return false;
}


// ex- [2,5,1,2,3,5,1,2,4]  it should return -> 2
// ex - [2,1,1,2,3,4]  return 1
// ex- [2,3,4,5] return undefined
var array1 = [2,3,4,5] ;

firstRecurringChar(array1);