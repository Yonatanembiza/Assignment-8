// function student(firstName, lastName) {
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
 
  let student = function() {
    firstName = "";
    lastName = "";
    studentGrades = [];
    function insertGrade(newGrade) {
        this.studentGrades.push(newGrade);
    };
    function computeAverageGrade() {
        let total = 0;
        for(let i in this.studentGrades){
            total += this.studentGrades[i];
        }
        return total/this.studentGrades.length;
    };

  }
  let std = Object.create(student);
  std.firstName = "Yonatan"; std.lastName = "Embiza"; std.studentGrades = 23;
  console.log(std);
  console.log(std.computeAverageGrade());
  const std1 = new student("Yonatan", "Embiza");
  const std2 = new student("Samuel", "Embiza");
  const std3 = new student("Daniel", "Semu");
  const std4 = new student("Yisak", "Muller");
  
  std1.insertNewGrade(100);
  std2.insertNewGrade(95);
  std3.insertNewGrade(92);
  std4.insertNewGrade(90);
  std1.insertNewGrade(34);
  std2.insertNewGrade(67);
  std3.insertNewGrade(78);
  std4.insertNewGrade(65);
  std1.insertNewGrade(89);
  std2.insertNewGrade(99);
  std3.insertNewGrade(94);
  std4.insertNewGrade(65);
  
  const studentsArray = [std1, std2, std3, std4];
  console.log(studentsArray);
  console.log(std1.computeAverageGrade())