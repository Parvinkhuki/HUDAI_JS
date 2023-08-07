/*

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।

*/

function isInteger(num){
    if( typeof num !="number"){
        return "give a number"
    }
    else if(num%1===0){
        return true;
    }
return false;
}
let integer = isInteger(25)
console.log(integer)