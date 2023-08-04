let sum=0;
function Array(arr) {
    for (let i of arr) {
    //   console.log(arr[i]); 
      sum+=i;
    }
    const sizeOfArr= arr.length;
    console.log("size of array: " +sizeOfArr);
    return sum/sizeOfArr;
}
const myArray = [1, 2, 3, 4, 5,8,6,8];
console.log("my avg of array: " + Array(myArray))

  