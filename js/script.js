let mark = 100

if (typeof mark == "number") {
  if (mark < 0 || mark > 100) {
    console.log("Mark kokhono 100 er beshi ba negative hoy naki!?");
  } else if (mark >= 80 && mark <= 100) {
    console.log("Your grade is A+");
  } else if (mark >= 70 && mark <= 79) {
    console.log("Your grade is A");
  } else if (mark >= 60 && mark <= 69) {
    console.log("Your grade is A-");
  } else if (mark >= 50 && mark <= 59) {
    console.log("Your grade is B");
  } else if (mark >= 40 && mark <= 49) {
    console.log("Your grade is C");
  } else if (mark >= 33 && mark <= 39) {
    console.log("Your grade is D");
  } else {
    console.log("You failed");
  }
} else {
  console.log("Mark number hote hobe");
}
