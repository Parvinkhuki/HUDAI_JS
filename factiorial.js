


function factorial(num){
    let result=1;
    for(let i= num; i>=1 ;i--){
      result= result*i;
    }
    return result;
    }
   

console.log("this is the factorial "+ factorial(6))