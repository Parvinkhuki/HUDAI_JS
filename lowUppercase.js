

let num = 'hello my love I love you so Much';
let hello = num.toLowerCase();
let love = hello.includes("Love".toLowerCase())
console.log(love);


// indexof

let index = hello.indexOf("i")
console.log(index)

// start With
let start =num.startsWith("hello")
console.log(start)

// start With
let end =num.endsWith("much")
console.log(end)

// split

let arr="hello are you there. how are you .what are you going. now came here";

let aar = arr.split(".")
console.log(aar)

// join
let array = aar.join(".")
console.log(array)

// pow
pow = Math.pow(2,3)
console.log(pow)

//Swap
let a =5;
let b =7;
console.log(a,b)
let temp = a;
a = b;
b = temp;
console.log(a,b)
let c = 8;
let d =2;
[c,d] =[ d,c];
console.log(c,d)


