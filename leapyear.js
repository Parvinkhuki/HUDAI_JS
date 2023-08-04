// this is normal leapYear where user give one year to check.

// function leapYear(){
// if(year%2===0){
//     return true;
// }

// return false;

// }
// var year= leapYear(2003)
// console.log("this year is leap year "+ year)
let leap1=[];
function leapYear(year){
for(let i=0;i < year.length;i++){
    let invalue=year[i];
    if(invalue%4===0 && invalue!=100){
    let leap= year[i];
    leap1.push(leap); 
}   
}return leap1; 
}
function sum(Array){
    let arr=0;
    for(let i=0; i<Array.length;i++){
        arr  += Array[i];
    }return arr;
}
let years=[2001,2102,2023,2562,1251,2000,2535,1255,2550,2024,2016,2028 ]

console.log(leapYear(years))

console.log("leap year add: "+sum(leap1))