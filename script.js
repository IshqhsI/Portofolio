AOS.init();

const typedName = 'Muhammad Ridhwan'; // Tulis nama yang diinginkan
const typedNameElement = document.getElementById('typed-name');

function typeWriter(text, element, speed) {
  let i = 0;
  let first = true;
  function type() {
    if (i < text.length) {
      if (!first) {
        element.textContent += text.charAt(i + 1);
      } else {
        element.textContent += text.charAt(i);
      }
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1200); // Tunggu 0.6 detik sebelum menghapus
    }
  }

  function erase() {
    if (i >= 1) {
      element.textContent = text.substring(0, i); // Menghapus satu karakter
      i--;
      first = false;
      setTimeout(erase, speed / 2);
    } else {
      i = 0;
      setTimeout(type, 500); // Tunggu 0.5 detik sebelum mulai mengetik lagi
    }
  }

  type(); // Mulai mengetik
}

typeWriter(typedName, typedNameElement, 120);

// JavaScript untuk menambahkan kelas fade-in setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    element.classList.add('fade-in');
  });
});
