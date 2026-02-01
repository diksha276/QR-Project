function safeGet(id) {
  return document.getElementById(id);
}

function safeOnClick(element, handler) {
  if (element) element.addEventListener("click", handler);
}

function safeOnSubmit(form, handler) {
  if (form) form.addEventListener("submit", handler);
}

/* BOXES */
let choiceBox = safeGet("choiceBox");
let loginBox = safeGet("loginBox");
let registerBox = safeGet("registerBox");

/* MAIN BUTTONS */
let loginBtn = safeGet("loginBtn");
let registerBtn = safeGet("registerBtn");

let backFromLogin = safeGet("backFromLogin");
let backFromRegister = safeGet("backFromRegister");

/* REGISTER SWITCH */
let studentSwitch = safeGet("studentSwitch");
let teacherSwitch = safeGet("teacherSwitch");

let studentRegisterSection = safeGet("studentRegisterSection");
let teacherRegisterSection = safeGet("teacherRegisterSection");

/* LOGIN SWITCH */
let studentLoginSwitch = safeGet("studentLoginSwitch");
let teacherLoginSwitch = safeGet("teacherLoginSwitch");

let studentLoginSection = safeGet("studentLoginSection");
let teacherLoginSection = safeGet("teacherLoginSection");

/* LOGIN FORMS */
let studentLoginForm = safeGet("studentLoginForm");
let teacherLoginForm = safeGet("teacherLoginForm");

/* TEACHER REGISTER FORM */
let teacherForm = safeGet("teacherForm");
let teacherPassword = safeGet("teacherPassword");
let teacherConfirmPassword = safeGet("teacherConfirmPassword");
let passwordError = safeGet("passwordError");

/* STUDENT REGISTER FORM */
let studentForm = safeGet("studentForm");
let studentPassword = safeGet("studentPassword");
let studentConfirmPassword = safeGet("studentConfirmPassword");
let studentPasswordError = safeGet("studentPasswordError");

let studentMoodleId = safeGet("studentMoodleId");
let moodleError = safeGet("moodleError");

/* OPEN LOGIN */
safeOnClick(loginBtn, function () {
  if (choiceBox) choiceBox.classList.add("hidden");
  if (loginBox) loginBox.classList.remove("hidden");
});

/* OPEN REGISTER */
safeOnClick(registerBtn, function () {
  if (choiceBox) choiceBox.classList.add("hidden");
  if (registerBox) registerBox.classList.remove("hidden");
});

/* BACK FROM LOGIN */
safeOnClick(backFromLogin, function () {
  if (loginBox) loginBox.classList.add("hidden");
  if (choiceBox) choiceBox.classList.remove("hidden");
});

/* BACK FROM REGISTER */
safeOnClick(backFromRegister, function () {
  if (registerBox) registerBox.classList.add("hidden");
  if (choiceBox) choiceBox.classList.remove("hidden");
});

/* REGISTER STUDENT SELECT */
safeOnClick(studentSwitch, function () {
  studentSwitch.classList.add("active");
  if (teacherSwitch) teacherSwitch.classList.remove("active");

  if (studentRegisterSection) studentRegisterSection.classList.remove("hidden");
  if (teacherRegisterSection) teacherRegisterSection.classList.add("hidden");
});

/* REGISTER TEACHER SELECT */
safeOnClick(teacherSwitch, function () {
  teacherSwitch.classList.add("active");
  if (studentSwitch) studentSwitch.classList.remove("active");

  if (teacherRegisterSection) teacherRegisterSection.classList.remove("hidden");
  if (studentRegisterSection) studentRegisterSection.classList.add("hidden");
});

/* LOGIN STUDENT SELECT */
safeOnClick(studentLoginSwitch, function () {
  studentLoginSwitch.classList.add("active");
  if (teacherLoginSwitch) teacherLoginSwitch.classList.remove("active");

  if (studentLoginSection) studentLoginSection.classList.remove("hidden");
  if (teacherLoginSection) teacherLoginSection.classList.add("hidden");
});

/* LOGIN TEACHER SELECT */
safeOnClick(teacherLoginSwitch, function () {
  teacherLoginSwitch.classList.add("active");
  if (studentLoginSwitch) studentLoginSwitch.classList.remove("active");

  if (teacherLoginSection) teacherLoginSection.classList.remove("hidden");
  if (studentLoginSection) studentLoginSection.classList.add("hidden");
});

/* TEACHER PASSWORD MATCH CHECK */
function checkTeacherPasswordsMatch() {
  if (!teacherPassword || !teacherConfirmPassword || !passwordError) return true;

  if (teacherPassword.value === "" || teacherConfirmPassword.value === "") {
    passwordError.classList.add("hidden");
    return false;
  }

  if (teacherPassword.value !== teacherConfirmPassword.value) {
    passwordError.classList.remove("hidden");
    return false;
  } else {
    passwordError.classList.add("hidden");
    return true;
  }
}

if (teacherPassword) teacherPassword.addEventListener("input", checkTeacherPasswordsMatch);
if (teacherConfirmPassword) teacherConfirmPassword.addEventListener("input", checkTeacherPasswordsMatch);

safeOnSubmit(teacherForm, function (event) {
  let ok = checkTeacherPasswordsMatch();
  if (!ok) event.preventDefault();
});

/* STUDENT PASSWORD MATCH CHECK */
function checkStudentPasswordsMatch() {
  if (!studentPassword || !studentConfirmPassword || !studentPasswordError) return true;

  if (studentPassword.value === "" || studentConfirmPassword.value === "") {
    studentPasswordError.classList.add("hidden");
    return false;
  }

  if (studentPassword.value !== studentConfirmPassword.value) {
    studentPasswordError.classList.remove("hidden");
    return false;
  } else {
    studentPasswordError.classList.add("hidden");
    return true;
  }
}

if (studentPassword) studentPassword.addEventListener("input", checkStudentPasswordsMatch);
if (studentConfirmPassword) studentConfirmPassword.addEventListener("input", checkStudentPasswordsMatch);

/* MOODLE ID CHECK (8 digits only) */
function checkMoodleId() {
  if (!studentMoodleId || !moodleError) return true;

  studentMoodleId.value = studentMoodleId.value.replace(/\D/g, "");

  if (studentMoodleId.value.length === 0) {
    moodleError.classList.add("hidden");
    return false;
  }

  if (studentMoodleId.value.length !== 8) {
    moodleError.classList.remove("hidden");
    return false;
  } else {
    moodleError.classList.add("hidden");
    return true;
  }
}

if (studentMoodleId) studentMoodleId.addEventListener("input", checkMoodleId);

safeOnSubmit(studentForm, function (event) {
  let passOk = checkStudentPasswordsMatch();
  let moodleOk = checkMoodleId();

  if (!passOk || !moodleOk) event.preventDefault();
});

/* LOGIN REDIRECTS */
/* ✅ STUDENT LOGIN REDIRECT (UPDATED) */
safeOnSubmit(studentLoginForm, function (event) {
  event.preventDefault();
  window.location.href = "stdash.html";
});

/* ✅ TEACHER LOGIN REDIRECT (UPDATED FILE NAME) */
safeOnSubmit(teacherLoginForm, function (event) {
  event.preventDefault();
  window.location.href = "teachdash.html";
});
