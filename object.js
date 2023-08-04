var student={
    id:103,
    name:"parvin",
    class:"cse",
    sec:"a"
}

var student2= student.id;
student.id =97;
console.log(student2);
var property=Object.keys(student)
var property2=Object.values(student)
var property3=Object.entries(student)
console.log(property,property2, property3);