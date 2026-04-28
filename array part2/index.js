// method lain = splice

let siswa = [
    "agus bokep",
    "hida madura",
    "danu nyimeng besi",
    "ripki femboy",
    "singky kopling",
    "aldi starsindrom",
];
/*
0:"agus bokep"                  | |> mengapa di mulai dari angka 0?
1: "tsabit omnivora"            |   karena alasan teknis,sejarah dalam ilmu komputer,
2: "danu nyimeng besi"          |   dan efisiensi memori
3: "ripki femboy"               |
4: "singky kopling"             |   hal ini umum di temukan pada banyak bahasa pemrograman
5: "aldi starsindrom"           |
 */
console.log(siswa);

// 1. join (separator:string) ---> menghubungkan array
console.log(siswa.join("-")); // nama siswa akan di tampilakan seperti-
// ucup-otong-mario

// 2.splice(index,delete/nodelete,data)
let hasil_splice;

//|> 2a. index dan delete
hasil_splice = siswa.splice(1, 1); // metode splice delete
console.log(`hasil  splice 1,1 = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

// |> 2b. misal kita akan menambah data
hasil_splice = siswa.splice(1, 0, "tsabit omnivora"); // metode splice data
console.log(`hasil splice 1,0,tsabit omnivora = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

/*
 penjelasan |> 1,1 . angka 1 yang pertama di namakan variabel 'start', sistem akan memilih posisi kedua
dari nama siswa, sedang kan angka 1 yang kedua di namakan 'deleteCount', sistem akan memilih posisi-
kedua untuk di "delete"

 sedangkan jika memilih 'deleteCount' nya menjadi 0, maka akan mengganti siswa di nomor 
yang di pilih deleteCount dengan syarat-
harus menambahkan variabel 'item' di belakang deleteCount
*/

// 3. slice();
console.log(siswa.join("-"));

let anak_pintar = siswa.slice(0, 1); // metode slice
console.log(`anak pintar = ${anak_pintar.join("-")}`);

/*
 metode slice, berfungsi untuk menambah kan nama murid ke dalam suatu daftar

 contoh nya siswa "agus bokep" akan di pilih karena variabel slice nya start dengan - 
angka 0, sedang kan "tsabit omnivora" tidak akan di masukkan, kenapa? karena - 
"end" alias angka setelah tanda "," tidak di masukkan ke dalam daftar
 */
