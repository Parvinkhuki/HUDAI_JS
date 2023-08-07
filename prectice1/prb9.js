
function bestFriend(arr){
    let duplicateArray=[];
    for(i of arr){
     if(duplicateArray.includes(i)===false){
        duplicateArray.push(i)
    }
   
    
    }return  duplicateArray;
 }
 let array = [ 'sajid','mamun','jubayer bin rased','sajid',"kamal", 'sajid','mamun', "kamal",'jubayer bin rased',"chinku"]
 let string =bestFriend(array)
 console.log(string)