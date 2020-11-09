function hasPairedWithSum(array,sum){
const mySet = new Set();
const length = array.length;

for(var i=0;i<length;i++){

if(mySet.has(array[i])){
  return true;
}

mySet.add(sum-array[i]);

}

return false;
}
var array = [0,1,2,4,5,9];
var sum = 9;
hasPairedWithSum(array,sum);