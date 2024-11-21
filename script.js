$(document).ready(function() {
  var greenIndex = Math.floor(Math.random() * 9);
  var clicks = 0;

  $('.box').click(function() {
    if (!$(this).hasClass('clicked')) {
      clicks++;
      $(this).addClass('clicked');
      
      if ($(this).index() === greenIndex) {
        $(this).addClass('green');
        $('#result-message').text('You Win! Kotak yang Anda pilih adalah kotak hijau.');
      } else if (clicks === 3) {
        $('.box').addClass('red');
        $('.box').eq(greenIndex).addClass('green');
        $('#result-message').text('You Lose! Anda belum menemukan warna hijau dalam 3 percobaan.');
      } else {
        $(this).addClass('red');
        $('#result-message').text('Anda memilih kotak yang salah. Cobalah lagi.');
      }

      // Menampilkan pesan sesuai hasil permainan
      if (clicks === 3 && $(this).index() === greenIndex) {
        $('#result-message').text('You Win!');
      } else if (clicks === 3) {
        $('#result-message').text('You Lose!');
      }

      // Update total klik
      $('#click-counter').text('Jumlah Klik: ' + clicks);
    }
  });

  // Fungsi untuk menentukan indeks kotak yang akan menjadi hijau
  function setGreenIndex() {
    greenIndex = Math.floor(Math.random() * 9);
  }

  // Panggil fungsi setGreenIndex() saat dokumen selesai dimuat
  setGreenIndex();
});