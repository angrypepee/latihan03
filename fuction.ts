// metode yang tidak bisa digunakan berulang
let x: number = 1,
y = 2;

const _pertambahan: number= x + y;
console.log(_pertambahan);


// fuction berguna untuk mengulang fungsi berulang kali

function penjumlahan(x:number, y:number ){
    console.log(x);
    console.log(y);
    return x + y;
}


function matematika(operasi:string, x: number; y: number) {
    if(operasi === "pertambahan"){
        return x + y;
    } else if (operasi === "pembagian"){
        return x / y;
    } else {
        return "Masukan operasi yang ada"
    }
}

console.log(matematika("pembagian", 10, 5));
console.log(matematika("pertambahan", 10 , 10))


console.log(penjumlahan(1, 3));
console.log(penjumlahan(19, 11));



// Function expreseion

const menyapa = function(nama: string) {
    const date = new Date();
    let message: string = "Selamat Pagi"

    if (date.getHours() <= 10) {
        message = "Selamat Pagi";
    } 
    else if ( date.getHours() > 10 && date.getHours() < 15 ) {
        message = "Selamat Siang";
    }  
    else if ( date.getHours() > 15 && date.getHours() < 19 ) {
        message = "Selamat Sore";
    } else {
        message = "Selamat Malam";
    }
 
    const sapa = `${message} ${nama}`;
    return sapa;
};

console.log(menyapa("David"));


//... disebut rez parameter
const sumeFunc = function (x: number, y: number, ...z) {
    console.log(z);
}


// CUrring fucntion

function multiplier (x: number) {
    return function (y:number) {
        return x * y;
    }
}

const mul3 = multiplier (3);
const mul4 = multiplier (4);
console.log(mul3(4))
console.log(mul4(25))