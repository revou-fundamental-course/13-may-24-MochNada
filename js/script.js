// Ini JS

function displayDateTime() {
    let date = new Date();
    let dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let dayName = dayNames[date.getDay()];
    let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let monthName = monthNames[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dateString = `${dayName}, ${day} ${monthName} ${year}`;
    document.getElementById("date").innerHTML = dateString;

    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("time").innerHTML = timeString;
  }

  setInterval(displayDateTime, 1000);

let isKelilingVisible = false;
function hideOrShow() {
    if (isKelilingVisible == false) {
        isKelilingVisible = true;
    document.getElementById('luas-section').style.display = 'none';
    document.getElementById('keliling-section').style.display = 'block';
    } else {
        isKelilingVisible = false;
        document.getElementById('luas-section').style.display = 'block';
        document.getElementById('keliling-section').style.display = 'none';
    }
}

const segitiga = {
    luas: (alas, tinggi) => {
      let luasSegitiga = alas * tinggi;
      luasSegitiga = luasSegitiga / 2;
      return luasSegitiga;
    },
    keliling: (alas, tinggi) => {
      const miring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
      const kelilingSegitiga = alas + tinggi + miring;
      return kelilingSegitiga.toFixed(2);
    },
};
  
  const inputAlas = document.getElementById('alas');
  const inputTinggi = document.getElementById('tinggi');
  const inputAlas2 = document.getElementById('alas2');
  const inputTinggi2 = document.getElementById('tinggi2');
  const buttonLuasSegitiga = document.getElementById('calculate-luas');
  const buttonKelilingSegitiga = document.getElementById('calculate-keliling');
  const teksHasilSegitiga = document.getElementById('hasil-segitiga');
  const teksHasilSegitiga2 = document.getElementById('hasil-segitiga2');

  buttonLuasSegitiga.addEventListener('click', () => {
    const alas = Number(inputAlas.value);
    const tinggi = Number(inputTinggi.value);
    if (alas && tinggi) {
      const hasil = segitiga.luas(alas, tinggi);
      teksHasilSegitiga.textContent = 'Luas: ' + hasil;
    } else {
      alert('Silahkan masukkan alas dan tinggi! Minimal input angka terkecil adalah "1"');
    }
  });
  
  buttonKelilingSegitiga.addEventListener('click', () => {
    const alas = Number(inputAlas2.value);
    const tinggi = Number(inputTinggi2.value);
    if (alas && tinggi) {
      const hasil = segitiga.keliling(alas, tinggi);
      teksHasilSegitiga2.textContent = 'Keliling: ' + hasil;
    } else {
      alert('Silahkan masukkan alas dan tinggi! Minimal input angka terkecil adalah "1"');
    }
  });

  function reset() {
    var element = document.getElementById('luas-segitiga');
    element.reset()
  }
  
  function reset2() {
    var element = document.getElementById('keliling-segitiga');
    element.reset()
  }