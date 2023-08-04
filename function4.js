
let sum=0;
function Array(arr) {
    for (let i = 0; i < arr.length; i++) {
    //   console.log(arr[i]); 
      sum+=arr[i];
    }
    const sizeOfArr= arr.length;
    console.log("size of array: " +sizeOfArr);
    return sum/sizeOfArr;
}
const myArray = [1, 2, 3, 4, 5];
console.log("my avg of array: " + Array(myArray))

  
  