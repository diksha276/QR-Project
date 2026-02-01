let generateQrBtn = document.getElementById("generateQrBtn");
let timerText = document.getElementById("timerText");
let qrArea = document.getElementById("qrArea");

let timerInterval = null;
let totalSeconds = 300; // 5 mins

function updateTimerDisplay(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  let mm = String(min).padStart(2, "0");
  let ss = String(sec).padStart(2, "0");

  timerText.innerText = "Timer: " + mm + ":" + ss;
}

function startTimer() {
  clearInterval(timerInterval);
  totalSeconds = 300;

  updateTimerDisplay(totalSeconds);

  timerInterval = setInterval(function () {
    totalSeconds--;

    updateTimerDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerText.innerText = "QR Expired!";
      qrArea.innerHTML = `<p class="qr-placeholder">QR expired</p>`;
    }
  }, 1000);
}

generateQrBtn.addEventListener("click", function () {
  // FRONTEND DEMO QR
  qrArea.innerHTML = `<p class="qr-placeholder">[ QR GENERATED ]</p>`;
  startTimer();
});
