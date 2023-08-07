// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/
const obj = {
    name: "nia",
    age:26,
    email:"abc@gmail.com"
}
function printDetails(object){
    if(typeof object !="object"){
        return "give a object"
    }
    let name = object.name || "nai";
    let age = object.age || "nai";
    let email = object.email || "nai";
    let husband = object.husband || "nai";
    
   let sen ="tar nam :"+name+" age :"+age+" email :"+email+" husband :"+husband;
return sen;
}
console.log(printDetails(obj));
