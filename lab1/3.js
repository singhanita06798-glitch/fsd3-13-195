//  create another fxn that takes a number show in words with the hlp of towards fxn



const numberToWord = (num) => {
    const words = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];

    return (num >= 0 && num <= 9) ? words[num] : "Invalid";
};

const showNumberInWords = (num) => {
    const digits = num.toString();
    let result = "";

    for (let digit of digits) {
        result += numberToWord(Number(digit)) + " ";
    }

    return result.trim();
};

console.log(showNumberInWords(507));   
console.log(showNumberInWords(1234)); 
console.log(showNumberInWords(90));    