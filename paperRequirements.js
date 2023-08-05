
function paperRequirements(book1, book2, book3){

let book1Page = 100;
let book2Page = 200;
let book3Page = 300;
let sum =Infinity;
let book1PageNeed= book1Page*book1;
let book2PageNeed= book2Page*book2;
let book3PageNeed= book3Page*book3;
sum = book1PageNeed+ book2PageNeed+ book3PageNeed;

return sum;
}
let paperRequirement =paperRequirements(0,0, 1)
console.log(paperRequirement)