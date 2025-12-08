const select = document.getElementById("imageSelect");
const img = document.getElementById("preview");

function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.textContent = message;
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2000);
}

select.onchange = function () {
    const file = select.value;

    if (file !== "") {
        img.src = "img/" + file;
        img.classList.add("show");
        showAlert("Ini gambar " + file);
    } else {
        img.src = "";
        img.classList.remove("show");
    }
}
