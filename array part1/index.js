
// cara lama 
let siswa1 = "ucup";
let siswa2 = "otong";
let siswa3 = "mario";

// cara array 
let array_siswa = ["ucup", "otong", "mario"];
console.log(array_siswa);

// jelaskan tentang operasi/operator/method/fungsi

// 1.indexing 
console.log(array_siswa[0]);    // ribet
console.log(array_siswa[1]);
console.log(array_siswa[2]);
console.log(array_siswa[-3]);   // ribet

// 2. property length
let panjang_array = array_siswa.length; // length = mengetahui panjang dari array 
console.log(`panjang array = ${panjang_array}`)

// 3. tambah dan hapus member
array_siswa.push("asep"); // push = tambah dari belakang
console.log(`tambah asep di belakang ---> ${array_siswa}`);

// #array_siswa.pop("asep");
// #console.log(`hapus asep di belakang ---> ${array_siswa}`);

let ambil_siswa = array_siswa.pop(); // pop = hapus dari belakang
console.log(`hapus ${ambil_siswa} di belakang ---> ${array_siswa}`);

array_siswa.unshift("asep"); // unshift = tambah dari depan
console.log(`tambah asep dari depan ---> ${array_siswa}`);

ambil_siswa = array_siswa.shift(); // shift = hapus dari belakang
console.log(`hapus ${array_siswa} di depan ---> ${array_siswa}`);
