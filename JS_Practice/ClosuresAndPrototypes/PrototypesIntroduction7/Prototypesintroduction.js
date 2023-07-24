"use strict"; 

function Student(name){ 

    this.name = name; 

    this.avgScore = (scoreArray) => 
        scoreArray.reduce((a,b) => a+b)/scoreArray.length; 
}

var heidi = new Student("Heidi");
var ralf = new Student("Ralf");

console.log("The avgScore for each student: ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("\n What do the Student objects contain?")
console.log("Heidi: ", heidi); 
console.log("Ralf: ", ralf); 

function StudentProto(name){ 
    this.name = name; 

    StudentProto.prototype.avgScore = (scoreArray) => 
        scoreArray.reduce((a,b) => a+b)/scoreArray.length; 
}

heidi = new StudentProto("Heidi");
ralf = new StudentProto("Ralf"); 

console.log("\nThe avgScore for each student (PROTOTYPE): ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("\nWhat do the StudentProto objects contain?")
console.log("Heidi: ", heidi); 
console.log("Ralf: ", ralf);

StudentProto.prototype.uniName = "XYZ"; 

console.log("\nThe uniName for each student (PROTOTYPE): ");
console.log("Heidi: ", heidi.uniName);
console.log("Ralf: ", ralf.uniName);

StudentProto.prototype.uniName = "XYZ University"; 

console.log("\nThe updated uniName for each student (PROTOTYPE): ");
console.log("Heidi: ", heidi.uniName);
console.log("Ralf: ", ralf.uniName);

function StudentMultiProto(name) { 

    StudentMultiProto.prototype.uniName = "XYZ"; 
    this.name = name; 

    StudentMultiProto.prototype.avgScore = (scoreArray) => 
        scoreArray.reduce((a,b) => a+b)/scoreArray.length;

    StudentMultiProto.prototype.intro = () => {
        console.log("My name is %s and I'm a student at %s.", 
            this.name, this.uniName);
    }
}

heidi = new StudentMultiProto("Heidi");
ralf = new StudentMultiProto("Ralf"); 

console.log("\nThe avgScore for each student (MULTI PROTOTYPE): ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("\nThe intros for each student (MULTI PROTOTYPE): ");
console.log("Heidi: ")
heidi.intro();

console.log("Ralf: ")
ralf.intro();

console.log("\nWhat do the Student objects contain (MULTI PROTOTYPE)?: ");
console.log("Heidi: ", heidi); 
console.log("Ralf: ", ralf);

class StudentClass{ 

    uniName = "XYZ"; 

    constructor(name){
        this.name = name; 
    }

    avgScore = (scoreArray) => 
        scoreArray.reduce((a,b)=> a+b)/scoreArray.length;
    
    intro = () => { 
        console.log("My name is %s and I'm a student at %s.",
        this.name, this.uniName); 
    }
}

heidi = new StudentClass("Heidi"); 
ralf = new StudentClass("Ralf"); 

console.log("\nThe avgScore for each student (CLASS): ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("\nThe intros for each student (CLASS): ");
console.log("Heidi: ")
heidi.intro();

console.log("Ralf: ")
ralf.intro();

console.log("\nWhat do the Student objects contain (CLASS)?: ");
console.log("Heidi: ", heidi); 
console.log("Ralf: ", ralf);