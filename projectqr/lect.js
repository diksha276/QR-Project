let studentListBtn = document.getElementById("studentListBtn");
let createLectureBtn = document.getElementById("createLectureBtn");

let lecturePopup = document.getElementById("lecturePopup");
let closeLecturePopupBtn = document.getElementById("closeLecturePopupBtn");

let lectureForm = document.getElementById("lectureForm");

let subjectSelect = document.getElementById("subjectSelect");
let lectureDate = document.getElementById("lectureDate");
let lectureTime = document.getElementById("lectureTime");

let lectureList = document.getElementById("lectureList");
let noLectureText = document.getElementById("noLectureText");

/* STUDENT LIST PAGE */
studentListBtn.addEventListener("click", function () {
  window.location.href = "sl.html";
});

/* OPEN CREATE LECTURE POPUP */
createLectureBtn.addEventListener("click", function () {
  lecturePopup.classList.remove("hidden");
});

/* CLOSE POPUP */
closeLecturePopupBtn.addEventListener("click", function () {
  lecturePopup.classList.add("hidden");
});

/* CLOSE IF CLICK OUTSIDE */
lecturePopup.addEventListener("click", function (event) {
  if (event.target === lecturePopup) {
    lecturePopup.classList.add("hidden");
  }
});

/* CREATE LECTURE -> SHOW ON PAGE */
lectureForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let subject = subjectSelect.value;
  let date = lectureDate.value;
  let time = lectureTime.value;

  if (!subject || !date || !time) {
    alert("Please fill all lecture details!");
    return;
  }

  // hide "no lectures"
  noLectureText.classList.add("hidden");

  // create lecture card button
  let lectureBtn = document.createElement("button");
  lectureBtn.classList.add("lecture-card");

  lectureBtn.innerText = `${subject} | ${date} | ${time}`;

  lectureBtn.addEventListener("click", function () {
    window.location.href = "qr.html";
  });

  lectureList.appendChild(lectureBtn);

  // reset form
  subjectSelect.value = "";
  lectureDate.value = "";
  lectureTime.value = "";

  // close popup
  lecturePopup.classList.add("hidden");
});
