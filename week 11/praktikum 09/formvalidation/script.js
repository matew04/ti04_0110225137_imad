document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // ambil elemen
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const jam = document.getElementById("jam");
    const tujuan = document.getElementById("tujuan");
    const tiket = document.getElementById("tiket");

    const errNama   = document.getElementById("err-nama");
    const errEmail  = document.getElementById("err-email");
    const errJam    = document.getElementById("err-jam");
    const errTujuan = document.getElementById("err-tujuan");
    const errTiket  = document.getElementById("err-tiket");

    let valid = true;

    // reset error
    errNama.textContent = "";
    errEmail.textContent = "";
    errJam.textContent = "";
    errTujuan.textContent = "";
    errTiket.textContent = "";

    // regex
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const jamFormat = /^([01]\d|2[0-3]):[0-5]\d$/;

    // validasi
    if (nama.value.trim() === "" || nama.value.length > 30) {
        errNama.textContent = "Nama wajib (maks 30 karakter)";
        valid = false;
    }

    if (!emailFormat.test(email.value)) {
        errEmail.textContent = "Format email tidak valid";
        valid = false;
    }

    if (!jamFormat.test(jam.value)) {
        errJam.textContent = "Format jam harus 00:00–23:59";
        valid = false;
    }

    if (tujuan.value.trim() === "") {
        errTujuan.textContent = "Tujuan tidak boleh kosong";
        valid = false;
    }

    if (tiket.value < 1 || tiket.value > 10) {
        errTiket.textContent = "Tiket harus 1–10";
        valid = false;
    }

    if (valid) {
        const result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = `
            <strong>Data Valid:</strong><br>
            Nama: ${nama.value}<br>
            Email: ${email.value}<br>
            Jam Keberangkatan: ${jam.value}<br>
            Tujuan: ${tujuan.value}<br>
            Jumlah Tiket: ${tiket.value}
        `;
    }
});
