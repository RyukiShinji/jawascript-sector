function calculate() {
  // mengambil elemen dari html dengan id 
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const op = document.getElementById('operator').value.trim();
  let hasil;

  // console.log(number1);
  // console.log(number2);

  // validasi sederhana 
  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById('hasil').textContent = "masukkan 2 angka yang valid"
    return;
  }

  // gunakan if untuk kalkulator nya 
  if (op === "+") {
    hasil = number1 + number2;
  } else if (op === "-") {
    hasil = number1 - number2;
  } else if (op === "*") {
    hasil = number1 * number2;
  } else if (op === "/") {
    if (number2 === 0) {
      hasil = "kesalahan,hasil tak terhingga";
    } else {
      hasil = number1 / number2;
    }
  } else {
    hasil = "operator tidak di kenali";
  }

  document.getElementById('hasil').textContent = `hasil: ${hasil}`;
}
