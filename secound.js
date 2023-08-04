

let array = [12,34,87,55,43,]

function findSecondLargestElem(arr){
    let secLargeNum =0;
  
    sortNumericArray(arr)
    console.log(arr)
    let i =arr.length-1;
   secLargeNum=arr[i-1];
return secLargeNum;

}
function sortNumericArray(arrr) {
    return arrr.sort(function(a, b){
        return b - a} );
  }
console.log(findSecondLargestElem(array));