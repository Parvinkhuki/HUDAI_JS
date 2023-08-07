function useBreakNegNum(arr){
    if(!Array.isArray(arr)){
         let error="give a array";
        return error;
    }
    let newArra=[];
     let newArr=[];

     for(i of arr){
        
         let element = i;
         if (i%2 === 0){
             newArr.push(element)
         }
         else{
             newArra.push(element)
          }
   obj={"result1": newArr, "result2":newArra}

 }
 return obj ;
 }
 let array = 7;
 let newarray =useBreakNegNum(array);
 console.log(newarray)