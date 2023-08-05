 function bestFriend(arr){
    let largestString='';
    for(i of arr){
        if(i.length>largestString.length){
            largestString = i;
        }
    }return  largestString;
 }
 let array = ['sajid','mamun', "kamal",'jubayer bin rased',"chinku"]
 let string =bestFriend(array)
 console.log(string)