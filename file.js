function useBreakNegNum(arr){
    // let string="";
    if(typeof arr!= "string" ){
     let a ="please give a string"
         return a;
    }
   if(arr.endsWith(".js")){
    return true;
   }
   return false;
}
let f="file.js" ;
let test =useBreakNegNum(f)
console.log(test);
