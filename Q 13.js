var student = {
name: "David Rayy",
sclass: "VI",
rollno: 12
};
console.log("Before deleting rollno property:", student);
delete student.rollno;
console.log("After deleting rollno property:", student);
//output:Before deleting rollno property: { name: 'David Rayy', 
//sclass: 'VI', rollno: 12 }
//After deleting rollno property: { name: 'David Rayy', 
//sclass: 'VI' }
