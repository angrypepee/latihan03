//Soal no 1
const _number1: number = 9;
for (let i = 1; i <=10; i++) {
    console.log(`${_number1} X ${i}`);
}

//Soal no 2
//build in method
let _string1 : string = "kasur ini rusak";
    console.log(_string1.split("").reverse().join(""));

let _reverseString1 : string = _string1.split("").reverse().join("");
    console.log( _string1 === _reverseString1 ? "palindrome" : "Note palindrome");

//loping manual
console.log(_string1.length / 2);
let _hasilPalindrome = "palindrome";
for (let i=0; i < _string1.length / 2; i++) {
    console.log(_string1[i]);
    console.log (_string1[_string1.length - 1 - i]);
    if (_string1[i] !== _string1[_string1.length - 1 - i]) {
        _hasilPalindrome = "not palindrome";
        break;
    }
}

console.log (_hasilPalindrome)

//Soal no 3
const cm: number = 1000;
const cmToKm = cm / 100000;
console.log(`${cm}cm sama dengan` cmToKm + " Km");

//soal no 4
const _number3 = 1000;
let numberToCurrency = _number3.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",

})
console.log (numberToCurrency);

numberToCurrency = new Intl.NumberFormat("ind-ID", {
    style: "currency",
    currency: "IDR",
}).format (_number3);
console.log(numberToCurrency);


//soal no 5
const _string5: string = "Hello Word"
const searchString: string = ""

console.log(_string5.replace(searchString, ""))