// First
// const student = {
//     firstName: "",
//     lastName: "",
//     studentGrades: [],
//     insertNewGrade: function (newGrade) {
//       this.studentGrades.push(newGrade);
//     },
//     computeAverageGrade: function () {
//       let totalScore = 0;
//       for (let i in this.studentGrades) {
//         totalScore += this.studentGrades[i];
//       }
//       return totalScore / this.studentGrades.length;
//     },
//   };
//   // testing the created student object
//   const studentObjectstArray = [
//     Object.create(student),
//     Object.create(student),
//     Object.create(student),
//     Object.create(student),
//   ];
// //   // FirstNames 
//   studentObjectstArray[0].firstName = "yonatan";
//   studentObjectstArray[1].firstName = "samuel";
//   studentObjectstArray[2].firstName = "daniel";
//   studentObjectstArray[3].firstName = "yisak";

//   // LastNames
//   studentObjectstArray[0].lastName = "Embiza";
//   studentObjectstArray[1].lastName = "Embiza";
//   studentObjectstArray[2].lastName = "Semu";
//   studentObjectstArray[3].lastName = "Muller";

//   studentObjectstArray[0].insertNewGrade(95);
//   studentObjectstArray[1].insertNewGrade(90);
//   studentObjectstArray[2].insertNewGrade(97);
//   studentObjectstArray[3].insertNewGrade(94);

//   console.log(studentObjectstArray[3]);

  // Second 
//   function student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.studentGrades = [];
//     this.insertNewGrade = function (newGrade) {
//       this.studentGrades.push(newGrade);
//     };
//     this.computeAverageGrade = function () {
//       let totalScore = 0;
//       for (let i in this.studentGrades) {
//         totalScore += this.studentGrades[i];
//       }
//       return totalScore / this.studentGrades.length;
//     };
//   }
  
//   const std1 = new student("Yonatan", "Embiza");
//   const std2 = new student("Samuel", "Embiza");
//   const std3 = new student("Daniel", "Semu");
//   const std4 = new student("Yisak", "Muller");
  
//   std1.insertNewGrade(100);
//   std2.insertNewGrade(95);
//   std3.insertNewGrade(92);
//   std4.insertNewGrade(90);
  
//   const studentsArray = [std1, std2, std3, std4];
//   console.log(studentsArray);

// Third 
// Adding a sorting
Array.prototype.mySort = function() {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
            // swaping
            const temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
      }
    }
  };

  // Forth

  class Animal{
    #name
    #speed
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    get getName(){
      return this.name;
    }
    get getSpeed(){
      return this.speed;
    }
    run(speed){
      this.speed += speed;
    }
    static compareBySpeed(a1, a2) {
      if (a1.speed > a2.speed) {
        return 1;
      } else if (a1.speed < a2.speed){
        return -1;
      } else {
        return 0;
      }
    }
  }
  class Rabbit extends Animal{
    constructor(name, speed){
      super(name, speed);
    }
    hide(){
      console.log("Rabbit's name, ", supper.getName())
    }
  }
  let newRabbit = new Rabbit("kali", 20);
  newRabbit.hide();
  