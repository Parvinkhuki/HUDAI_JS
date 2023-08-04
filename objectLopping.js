var student={
    id:103,
    name:"parvin",
    class:"cse",
    sec:"a"
}
var i =0;
var keys =Object.keys(student)

function oblooping(stu){
    var property1 
    var property2
for( i=0; i< keys.length;i++){
    property1 = keys[i];
    property2 =stu[property1];
    console.log(property1, property2)
   
}
}
oblooping(student);
// var student={
//     id:103,
//     name:"parvin",
//     class:"cse",
//     sec:"a"
// }
// var i =0;
// var keys =Object.keys(student)
// var values =Object.values(student)
// for( i=0; i< keys.length;i++){
//     var property = keys[i];
//     var property2 =student[property];
//    console.log( property , property2);
// }