let memberGc = [
 "hida pakboy",
  "agus bokep",
  "danu nyimeng besi",
  "ripki pemboi",
  "singky kopling",
  "aldi starsindrom",
];
console.log(memberGc); //  di atas adalah array

// 1. indexing, mengetahui nama dari nomor urut memberGc
console.log(memberGc[0]);
console.log(memberGc[5]);
console.log(memberGc[3]);

// 2. length, mengetahui berapa banyak memberGc
let berapaBanyak = memberGc.length;
console.log(`member gc ada ==> ${berapaBanyak}`);
// atau bisa juga seperti di bawah
console.log(`${memberGc.length}`);

// 3. push, menambahkan member dari belakang
let tambahMember = memberGc.push("tsabit omnivora");
console.log(`tambah member ${tambahMember}`);
console.log(memberGc); // list member
// atau bisa juga seperti di bawah
console.log(`${memberGc.push("semvak firaun")}`);

// 4. pop, menghapus member dari belakang
let hapusMember = memberGc.pop();
console.log(`hapus ${hapusMember} dari belakang ==> ${memberGc}`);
// atau bisa juga seperti yang di bawah
console.log(`${memberGc.pop} ==> ${memberGc}`);

// 5. unshift, menambahkan member dari depan
memberGc.unshift("Ryu gamteng");
console.log(`tambah Ryu gamteng dari depan ==> ${memberGc}`);

// 6. shift, menghapus member dari depan
memberGc.shift();
console.log(`hapus ${memberGc} dari depan ==> ${memberGc}`);

// 7. join, untuk menambahkan suatu huruf,angka,atau simbol di antara nama member
console.log(memberGc.join(" | "));

// 8. splice, mengganti dan menghapus member
// cara splice terbagi 2, mengganti dan menghapus
console.log(`hasil splice ==> ${memberGc.splice(0, 2)}`);
console.log(`member gc menjadi ${memberGc}`);
// cara menambahkan member dengan metode splice
console.log(`hasil splice ==> ${memberGc.splice(0, 0, "ryuki gamteng")}`);
console.log(`member gc ==> ${memberGc}`);

// 9. slice, menambahkan member ke dalam suatu daftar
console.log(`random list ==> ${memberGc.slice(0, 3).join(" | ")}`);

// 10. concat, menghubungkan 2 array
// kita buat array tambahan, karena mendeklarasikan member menggunakan 'const', harus menggunakan member yang sudah di deklarasikan

let tim_1 = memberGc.slice(0, 3);
let tim_2 = memberGc.slice(3, 6);
let tim_ml = tim_1.concat(tim_2);
console.log(tim_ml);
console.log(tim_1.shift());
// lumayan dificult, kenapa hida pakboy dan agus bokep tidak ada?
// yaa karna udah kena splice tadi di atas

// 11. includes, mengetahui member ada di tim mana
// di sini kita pakai if statement
if (tim_ml.includes) {
  console.log(`${tim_1.join(" - ")} => ada di tim 1`);
} else {
  console.log(`${tim_1} => tidak ada di tim 1`);
}

if (tim_ml.includes) {
    console.log(`${tim_2.join(" - ")} => ada di tim 2`);
} else {
    console.log(`${tim_2} => tidak ada di tim 2`);
}

// 12. indexOf, mengetahui posisi member
console.log(`${tim_ml.indexOf("aldi starsindrom")}`);

// 13. sort, mengurutka member berdasarkan urutan alfabet
tim_ml.sort();
console.log("sort ---> " + tim_ml.join(" | "));

// 14. reverse, kebalikan dari sort
tim_ml.reverse();
console.log("reverse ---> " + tim_ml.join(" | "));

/*
indexing ==>  index.js (4)    
length  ==>   index.js (9)    
push  ==>     index.js (15)    
pop  ==>      index.js (23)   
unshift  ==>  index.js (29)   
shift    ==>  index.js (33)   
join    ==>   index.js (37)
splice  ==>   index.js (40)
slice  ==>    index.js (48)
concat  ==>   index.js (57)
includes  ==> index.js (68)
indexOf  ==>  index.js (77)
sort  ==>     index.js (80)
reverse  ==>  index.js (84)

source? yt: kelas terbuka
*/
