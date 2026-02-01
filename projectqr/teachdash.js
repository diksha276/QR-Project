let logoutBtn = document.getElementById("logoutBtn");
let updateProfileBtn = document.getElementById("updateProfileBtn");
let attendanceBtn = document.getElementById("attendanceBtn");

let profilePopup = document.getElementById("profilePopup");
let closePopupBtn = document.getElementById("closePopupBtn");
let saveProfileBtn = document.getElementById("saveProfileBtn");

let profilePicInput = document.getElementById("profilePicInput");

/* MAIN PHOTO AREA */
let mainProfilePhoto = document.getElementById("mainProfilePhoto");

/* POPUP PHOTO BOX */
let popupPicBox = document.getElementById("popupPicBox");
let popupPlusText = document.getElementById("popupPlusText");

/* TEMP STORAGE FOR SELECTED IMAGE */
let selectedImageURL = null;

logoutBtn.addEventListener("click", function () {
  window.location.href = "login-page.html";
});

/* OPEN POPUP */
updateProfileBtn.addEventListener("click", function () {
  profilePopup.classList.remove("hidden");
});

/* CLOSE POPUP */
closePopupBtn.addEventListener("click", function () {
  profilePopup.classList.add("hidden");
});

/* SHOW IMAGE INSIDE POPUP WHEN SELECTED */
profilePicInput.addEventListener("change", function () {
  let file = profilePicInput.files[0];

  if (file) {
    selectedImageURL = URL.createObjectURL(file);

    popupPicBox.style.backgroundImage = `url('${selectedImageURL}')`;
    popupPicBox.style.backgroundSize = "cover";
    popupPicBox.style.backgroundPosition = "center";

    popupPlusText.style.display = "none";
  }
});

/* UPDATE PROFILE BUTTON = APPLY IMAGE + CLOSE POPUP */
saveProfileBtn.addEventListener("click", function () {
  if (selectedImageURL) {
    mainProfilePhoto.style.backgroundImage = `url('${selectedImageURL}')`;
    mainProfilePhoto.style.backgroundSize = "cover";
    mainProfilePhoto.style.backgroundPosition = "center";
    mainProfilePhoto.innerHTML = "";
  }

  profilePopup.classList.add("hidden");
});

/* VIEW / EDIT ATTENDANCE BUTTON -> teachdash2.html */
attendanceBtn.addEventListener("click", function () {
  window.location.href = "teachdash2.html";
});
