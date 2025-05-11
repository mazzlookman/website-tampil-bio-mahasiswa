const form = document.getElementById('biodataForm');
const hasil = document.getElementById('hasilBiodata');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const prodi = document.getElementById('prodi').value;
    const fakultas = document.getElementById('fakultas').value;

    const output = `
    <h2>Hasil Biodata</h2>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>NIM:</strong> ${nim}</p>
    <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
    <p><strong>Program Studi:</strong> ${prodi}</p>
    <p><strong>Fakultas:</strong> ${fakultas}</p>
  `;

    hasil.innerHTML = output;
});

resetBtn.addEventListener('click', function () {
    hasil.innerHTML = `<p><em>Biodata akan ditampilkan di sini setelah Anda mengisi form.</em></p>`;
});
