const container = document.querySelector(".container"),
qrInput = container.querySelector(".qr-form input"),
generateBtn = container.querySelector(".qr-form button"),
qrImg = container.querySelector(".generated-qr img");
let prevValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || prevValue === qrValue) return;
    prevValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        container.classList.remove("active");
        prevValue = "";
    }
});
