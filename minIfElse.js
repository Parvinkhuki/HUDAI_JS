

let arrays=[23,526,33,53]
function largest(array){
let max =0;
for(let i of array){
    if(i > max){
        max =i;
    }  
} 
 return max;
}
console.log("largest num:",largest(arrays))

// Math.max

let maxx = Math.max(23,25,33,4,23)
console.log("max:",maxx);

