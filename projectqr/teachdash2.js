let deptButtons = document.querySelectorAll(".deptSelectBtn");

/* POPUPS */
let yearPopup = document.getElementById("yearPopup");
let semPopup = document.getElementById("semPopup");
let divPopup = document.getElementById("divPopup");

/* YEAR */
let closeYearPopupBtn = document.getElementById("closeYearPopupBtn");
let addYearBtn = document.getElementById("addYearBtn");
let yearList = document.getElementById("yearList");
let yearError = document.getElementById("yearError");

/* SEM */
let semList = document.getElementById("semList");
let closeSemPopupBtn = document.getElementById("closeSemPopupBtn");

/* DIV */
let divList = document.getElementById("divList");
let addDivBtn = document.getElementById("addDivBtn");
let divError = document.getElementById("divError");
let closeDivPopupBtn = document.getElementById("closeDivPopupBtn");

/* STORE SELECTED DEPT */
let selectedDept = "";

/* OPEN YEAR POPUP WHEN ANY DEPT CLICKED */
deptButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    selectedDept = btn.getAttribute("data-dept");
    yearPopup.classList.remove("hidden");
    yearError.classList.add("hidden");
  });
});

/* CLOSE YEAR POPUP */
closeYearPopupBtn.addEventListener("click", function () {
  yearPopup.classList.add("hidden");
});

/* ADD NEW YEAR (2 BOXES USING PROMPTS) */
addYearBtn.addEventListener("click", function () {
  yearError.classList.add("hidden");

  let startYear = prompt("Enter starting year (example: 2026)");
  if (!startYear) return;

  startYear = startYear.trim();

  if (!/^\d{4}$/.test(startYear)) {
    alert("Enter a valid 4-digit year!");
    return;
  }

  let endYear = (parseInt(startYear) + 1).toString();
  alert("Next year auto-filled: " + endYear);

  let newYearRange = startYear + "-" + endYear;

  // check duplicates
  let existingYears = [];
  document.querySelectorAll(".year-btn").forEach(function (btn) {
    existingYears.push(btn.innerText);
  });

  if (existingYears.includes(newYearRange)) {
    yearError.classList.remove("hidden");
    return;
  }

  let newBtn = document.createElement("button");
  newBtn.classList.add("option-btn", "year-btn");
  newBtn.innerText = newYearRange;

  yearList.appendChild(newBtn);
});

/* YEAR SELECT -> OPEN SEMESTER POPUP */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("year-btn")) {
    yearPopup.classList.add("hidden");
    openSemesterPopup();
  }
});

/* SEMESTER POPUP CONTENT */
function openSemesterPopup() {
  semList.innerHTML = "";

  let semesters = [];

  if (selectedDept === "H&AS") {
    semesters = ["Sem 1", "Sem 2"];
  } else {
    semesters = ["Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"];
  }

  semesters.forEach(function (sem) {
    let btn = document.createElement("button");
    btn.classList.add("option-btn", "sem-btn");
    btn.innerText = sem;
    semList.appendChild(btn);
  });

  semPopup.classList.remove("hidden");
}

/* CLOSE SEM POPUP */
closeSemPopupBtn.addEventListener("click", function () {
  semPopup.classList.add("hidden");
});

/* SEM SELECT -> OPEN DIV POPUP */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sem-btn")) {
    semPopup.classList.add("hidden");
    divPopup.classList.remove("hidden");
    divError.classList.add("hidden");
  }
});

/* CLOSE DIV POPUP */
closeDivPopupBtn.addEventListener("click", function () {
  divPopup.classList.add("hidden");
});

/* ADD DIVISION */
addDivBtn.addEventListener("click", function () {
  divError.classList.add("hidden");

  let newDiv = prompt("Enter Division (example: D)");
  if (!newDiv) return;

  newDiv = newDiv.trim().toUpperCase();

  if (!/^[A-Z]$/.test(newDiv)) {
    alert("Enter only one letter (A-Z)!");
    return;
  }

  let existingDivs = [];
  document.querySelectorAll(".div-btn").forEach(function (btn) {
    existingDivs.push(btn.innerText);
  });

  if (existingDivs.includes(newDiv)) {
    divError.classList.remove("hidden");
    return;
  }

  let newBtn = document.createElement("button");
  newBtn.classList.add("option-btn", "div-btn");
  newBtn.innerText = newDiv;

  divList.appendChild(newBtn);
});

/* DIV SELECT -> GO TO LECT PAGE */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("div-btn")) {
    window.location.href = "lect.html";
  }
});
