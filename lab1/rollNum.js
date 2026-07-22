const rollNum="2503201000195";
const digits = String(rollNum).split("")
console.log(digits);

digits.forEach((d) => {
    console.log(toWords(d));
});