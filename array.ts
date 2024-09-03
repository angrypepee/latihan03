//Array berguna untuk menampung banyak type data
// untuk mengakses sebuah data string dapat menggunakan array

let listSepatu: string [] = ["adidas","nikee", "puma"];
console.log(listSepatu[0]);

let listAngka: number [] = [1, 2, 10];
console.log( typeof listAngka)

//looping 1 array
for (let i = 0; i < listSepatu.length ; i++ ) {
    console.log (listSepatu[i])
}

console.log(listSepatu);
console.log(listSepatu.pop());
console.log(listSepatu);
console.log(listSepatu.push("Ardilas"));
console.log(listSepatu);


for (let i = 0; i < listAngka.length ; i++ ) {
    console.log (listAngka[i])
}

//looping array in array

let listArray = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8],
];

for (let i = 0; i < listArray.length; i++) {
    for (let j = 0; j < listArray[i].length; j++) {
        console.log(listArray[i][j]);
    }
}

//Array build in method pop
listSepatu.pop;
console.log(listSepatu);

//Array build in method push
listSepatu.push("Rebook");
console.log(listSepatu);

//Array build in method unshif
listSepatu.unshift("adidas");
console.log(listSepatu);

//Array build in method reverse
listSepatu.reverse();
console.log(listSepatu);

// menggabungan 2 array menjadi satu
let _arr1 = [1, 2];
let _arr2 = [3, 4];

console.log(_arr1.concat(_arr2));


//for of loop
let _buah = ["jeruk", "Apel", "Mangga"];

for (let buah of _buah) {
    console.log(buah);
}

let _xxx = [1, 2, 3, 4, 5];

for (let x of _xxx) {
    console.log(x);
}

