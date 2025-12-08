const input = document.getElementById("msgText");
const box = document.getElementById("chatMessages");
const btn = document.getElementById("sendBtn");

function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    const p = document.createElement("p");
    p.textContent = text;
    box.appendChild(p);

    input.value = "";
    box.scrollTop = box.scrollHeight;
}

btn.onclick = sendMessage;

//  PAKE ENTER LGSG EKSEKUSI
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
