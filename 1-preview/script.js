// Menampilkan array yang memuat children (anak-anak) dari element body
function getBodyChildren(){
  return document.body.children;
}

// Menampilkan child tertentu dari array chilren element body
function getBodyChildAtIndex(index){
  return getBodyChildren()[index];
}

// Menampilkan first child (anak pertama) dari element body
function getBodyFirstChild(){
  return document.body.firstElementChild;
}

// Menampilkan last child (anak terakhir) dari element body
function getBodyLastChild(){
  return document.body.lastElementChild;
}

// Menampilkan 1 child setelah child pertama dari element body
function getFirstChildNextSibling(){
  return getBodyFirstChild().nextElementSibling;
}

// Menampilkan 1 child sebelum child terakhir dari element body
function getLastChildPreviousSibling(){
  return getBodyLastChild().previousElementSibling;
}

// Menampilkan parent dari first child element body
function getFirstChildParent(){
  return getBodyFirstChild().parentElement;
}

// Menampilkan parent dari last child element body
function getLastChildParent(){
  return getBodyLastChild().parentElement;
}

// fungsi untuk blink warna teks
function blink(){
  const paragraph = document.body.getElementsByTagName("p");

  // Setiap 1000ms, ubah warna teks menjadi merah & hijau
  setInterval(() => {
    paragraph[0].style.color = "red";
    paragraph[1].style.color = "green";
    
    // Setelah 500 ms, ubah warna teks menjadi hitam
    setTimeout(() => {
      paragraph[0].style.color = "black";
      paragraph[1].style.color = "black";
    }, 500);
  }, 1000);
}