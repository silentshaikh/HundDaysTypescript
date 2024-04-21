let currYear = new Date().getFullYear();
let nextBirthDate = new Date(`2024-12-04`);
if (
  nextBirthDate.getMonth() < new Date().getMonth() ||
  (nextBirthDate.getMonth() === new Date().getMonth() &&
    nextBirthDate.getDate() < new Date().getDate())
) {
  nextBirthDate.setFullYear(currYear + 1);
} else {
  nextBirthDate.setFullYear(currYear);
}
console.log(nextBirthDate);
