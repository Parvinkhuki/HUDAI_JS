

function useBreakNegNum(arr){
   
    let newArr=[];
    for(i of arr){
        if (i >= 0){
            let element = i;
            newArr.push(element)
        }
     else{
        break
     }
  
}return newArr;
}
let array =[23,12,4,44,2,-56,89];
let newarray =useBreakNegNum(array);
console.log(newarray)
