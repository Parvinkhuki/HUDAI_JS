

let arrays=[
    {name:"sumsug",price:20000},
    {name:"sumsug",price:23000},
    {name:"sumsug",price:2300},]
function smallest(array){
    
    let smallest =null;
for(let key of array){
     if(!smallest|| key.price < smallest.price){
        smallest =key;
     }  
} 
 return smallest;
}

console.log("smallest num:",smallest(arrays))
// function findCheapestProduct(products) {
//     let cheapestProduct = null;
  
//     for (const product of products) {
//       if ( product.price < cheapestProduct.price) {
//         cheapestProduct = product;
//       }
//     }
  
//     return cheapestProduct;
//   }
  


// console.log("smallest num:",findCheapestProduct(arrays))

