let student={
 herName:"khuki",
 age:23,
 height:"5'4",
 waight: "700 kg"

}
 for(let key in student){
    console.log(key,student[key])
 }
 let entry=Object.entries(student)
 console.log(entry)