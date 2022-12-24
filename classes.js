class Student{
    constructor(firstName, lastName, rollNumber, sex, age, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.sex = sex;
    this.age = age;
    this.dob = new Date(dob);
    }
    getBirthYear() {
     return this.dob.getFullYear();
    }
    getFullName() {
     return `${this.firstName} ${this.lastName}`;
    }
   }
   Student.prototype.minimumAgetobeEgligible = function(minAge) {
    if(this.age>minAge){
     console.log(this.getFullName() + " is egligible");
    }else{
     console.log(this.getFullName() + " is not egligible");
    }
   }
   const student1 = new Student('John', 'doe', '101', 'male', 10, '9/9/2009');
   const student2 = new Student('Saba', 'banu', '102', 'female', 20, "9/19/1999");
  
   console.log(student2.firstName+' '+student2.lastName);
   console.log(student2.getFullName());
   console.log(student2.getBirthYear());
   student2.minimumAgetobeEgligible(18);
  
   console.log(student1.getFullName());
   console.log(student1.getBirthYear());
   student1.minimumAgetobeEgligible(18);