//userAgeCategorization.js
let age = 19;

if (age < 5) {
  console.log("Toddler(under 5 years)");
} else if (age >= 5 && <= 12) {
  console.log("Child(5-12 years)");
} else if (age >= 13 && <= 19) {
  console.log("Teenager(13-19 years)");
} else if (age >= 20 && <= 35) {
  console.log("Young Adult(20-35 years)");
} else if (age >= 36 && <= 60) {
  console.log("Middle-Aged(36-60 years)");
} else {
  console.log("Senior(over 60 years)");
}
