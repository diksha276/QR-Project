let addStudentBtn = document.getElementById("addStudentBtn");
let addStudentPopup = document.getElementById("addStudentPopup");
let closeAddPopupBtn = document.getElementById("closeAddPopupBtn");

let removeStudentBtn = document.getElementById("removeStudentBtn");
let removeStudentPopup = document.getElementById("removeStudentPopup");
let closeRemovePopupBtn = document.getElementById("closeRemovePopupBtn");

let addStudentForm = document.getElementById("addStudentForm");
let removeStudentForm = document.getElementById("removeStudentForm");

let sName = document.getElementById("sName");
let sMoodle = document.getElementById("sMoodle");
let sRoll = document.getElementById("sRoll");
let sEmail = document.getElementById("sEmail");

let removeMoodleId = document.getElementById("removeMoodleId");

let studentTableBody = document.getElementById("studentTableBody");
let studentTable = document.getElementById("studentTable");
let emptyText = document.getElementById("emptyText");

/* FORCE POPUPS HIDDEN ON LOAD */
addStudentPopup.classList.add("hidden");
removeStudentPopup.classList.add("hidden");

/* OPEN ADD STUDENT POPUP */
addStudentBtn.addEventListener("click", function () {
  addStudentPopup.classList.remove("hidden");
});

/* CLOSE ADD STUDENT POPUP */
closeAddPopupBtn.addEventListener("click", function () {
  addStudentPopup.classList.add("hidden");
});

/* CLOSE ADD POPUP IF CLICK OUTSIDE */
addStudentPopup.addEventListener("click", function (event) {
  if (event.target === addStudentPopup) {
    addStudentPopup.classList.add("hidden");
  }
});

/* OPEN REMOVE STUDENT POPUP */
removeStudentBtn.addEventListener("click", function () {
  removeStudentPopup.classList.remove("hidden");
});

/* CLOSE REMOVE STUDENT POPUP */
closeRemovePopupBtn.addEventListener("click", function () {
  removeStudentPopup.classList.add("hidden");
});

/* CLOSE REMOVE POPUP IF CLICK OUTSIDE */
removeStudentPopup.addEventListener("click", function (event) {
  if (event.target === removeStudentPopup) {
    removeStudentPopup.classList.add("hidden");
  }
});

/* MOODLE ID ONLY NUMBERS (ADD) */
sMoodle.addEventListener("input", function () {
  sMoodle.value = sMoodle.value.replace(/\D/g, "");
});

/* MOODLE ID ONLY NUMBERS (REMOVE) */
removeMoodleId.addEventListener("input", function () {
  removeMoodleId.value = removeMoodleId.value.replace(/\D/g, "");
});

/* ADD STUDENT TO TABLE */
addStudentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (sMoodle.value.length !== 8) {
    alert("Moodle ID must be exactly 8 digits!");
    return;
  }

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${sName.value}</td>
    <td>${sMoodle.value}</td>
    <td>${sRoll.value}</td>
    <td>${sEmail.value}</td>
    <td>0%</td>
  `;

  studentTableBody.appendChild(row);

  // show table, hide empty text
  emptyText.classList.add("hidden");
  studentTable.classList.remove("hidden");

  // clear fields
  sName.value = "";
  sMoodle.value = "";
  sRoll.value = "";
  sEmail.value = "";

  // close popup
  addStudentPopup.classList.add("hidden");
});

/* REMOVE STUDENT FROM TABLE */
removeStudentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let moodleToRemove = removeMoodleId.value.trim();

  if (moodleToRemove.length !== 8) {
    alert("Moodle ID must be exactly 8 digits!");
    return;
  }

  let rows = studentTableBody.querySelectorAll("tr");
  let found = false;

  rows.forEach(function (row) {
    let moodleCell = row.children[1]; // Moodle ID column
    if (moodleCell && moodleCell.innerText === moodleToRemove) {
      row.remove();
      found = true;
    }
  });

  if (!found) {
    alert("Student not found!");
  }

  // clear input + close popup
  removeMoodleId.value = "";
  removeStudentPopup.classList.add("hidden");

  // if table empty -> show empty text
  if (studentTableBody.querySelectorAll("tr").length === 0) {
    studentTable.classList.add("hidden");
    emptyText.classList.remove("hidden");
  }
});
