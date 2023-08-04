

let arrays=[23,5,26,33,53]
function smallest(array){
let min=Infinity;
for(let i of array){
    if(i < min){
        min = i;
    }  
} 
 return min;
}

console.log("smallest num:",smallest(arrays))

// Math.max

let minn = Math.min(23,25,33,4,23)
console.log("min:",minn);
