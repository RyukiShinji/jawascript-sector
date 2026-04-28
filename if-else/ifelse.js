console.log("if else - switch case");

// script di bawah

let nama = "ryuki";


if (nama === "sani") {
  console.log("sani tombak jatim");
} else if (nama === "hida") {
  console.log("hida fani kamikaze");
} else if (nama === "ryuki") {
  console.log("ryuki wong ganteng");
} else {
  console.log("saha lu?");
}

switch (nama) {
  case "ryuki":
    console.log("switch case ryuki");
  case "sani":
    console.log("switch case sani");
  case "hida":
    console.log("switch case hida")
    break;
  default:
    console.log("switch case nobody");
}

