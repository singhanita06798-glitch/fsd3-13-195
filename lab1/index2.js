// // write a function to take number between 0 to 9 and return in words


const numberToWord = (num) => {
    const words = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];

    return (num >= 0 && num <= 9) ? words[num] : "Invalid Number";
};

console.log(numberToWord(0));
console.log(numberToWord(1));
console.log(numberToWord(2));
console.log(numberToWord(3));
console.log(numberToWord(4));
console.log(numberToWord(5)); 
console.log(numberToWord(6));
console.log(numberToWord(7));
console.log(numberToWord(8));
console.log(numberToWord(9));

