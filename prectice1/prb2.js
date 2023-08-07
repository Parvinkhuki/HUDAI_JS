/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/
function isJavaScriptFile(file){
    if(typeof file !="string"){
        return "give a string otherwise i will never give you proper ans"
    }
    else if(file.toLowerCase().endsWith(".js")){
        return true;

    }
    return false;
}
let fileName =isJavaScriptFile("file.js")
console.log(fileName)