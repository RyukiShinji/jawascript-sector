let tim1 = ["hida madura", "agus bokep", "ripki femboy"];
let tim2 = ["aldi starsindrom", "singky kopling", "danu nyimeng besi"];

// menghubungkan 2 array
let tim_bola = tim1.concat(tim2);  // |>concat(); . menghubungkan 2 array
console.log(tim_bola.join(' - '));

// cara cek member dari salah satu grub
if (tim1.includes('aldi starsindrom')) {        // |> includes(); . mengecek member dari salah- 
                                                //         satu grup
    console.log('aldi starsindrom ada di tim1');
} else {
    console.log('aldi starsindrom tidak ada di tim1');
}

// cara mengetahui posisi member
let posisi_agus_bokep = tim_bola.indexOf("agus bokep")  // |> indexOf(); . mengetahui posisi member

console.log(`agus bokep ada di ${posisi_agus_bokep}`);
console.log(`danu nyimeng besi ada di ${tim_bola.indexOf("danu nyimeng besi")}`)

// mengurutkan data bersadarkan value
tim_bola.sort();
console.log("sort --->" + tim_bola.join(' - '));

tim_bola.reverse();
console.log("reverse ---> " + tim_bola.join(' - '));
/*
 |> sort(); . ialah metode untuk mengurutkan nama member berdasarkan urutan alfabet

 |> reverse(); . sedangkan reverse, kebalikan dari metode sort.
            yaitu, mengurutkan nama member bersadarkan urutan terbalik dari alfabet
 
 
*/
