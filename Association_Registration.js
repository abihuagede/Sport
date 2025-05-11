function previewLogo(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("logoPreview");
  const uploadText = document.getElementById("uploadText");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      uploadText.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
}

// Ensure the logo persists after a page refresh
window.addEventListener("load", function () {
  const logoPreview = document.getElementById("logoPreview");
  const uploadText = document.getElementById("uploadText");
  const logoFile = localStorage.getItem("logoFile");

  if (logoFile) {
    logoPreview.src = logoFile;
    logoPreview.style.display = "block";
    uploadText.style.display = "none";
  }

  // Save the logo to local storage when the file input changes
  const fileInput = document.getElementById("logoInput");
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        localStorage.setItem("logoFile", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});
const inputs = document.querySelectorAll(".code-input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
function previewLogo(event) {
  const input = event.target;
  const preview = document.getElementById("logoPreview");
  const uploadText = document.getElementById("uploadText");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      uploadText.style.display = "none";
    };

    reader.readAsDataURL(input.files[0]);
  }
}

const pop_next = document.querySelector(".next");
const verification_box = document.querySelector(".verification-container");

// Toggle the popup display when the "next" button is clicked
pop_next.addEventListener("click", function (e) {
  e.preventDefault();
  verification_box.style.display =
    verification_box.style.display === "block" ? "none" : "block";
});

// Hide the popup when clicking outside of it
document.addEventListener("click", function (e) {
  if (
    verification_box.style.display === "block" && // Check if the popup is visible
    !verification_box.contains(e.target) && // Check if the click is outside the popup
    !pop_next.contains(e.target) // Ensure the click is not on the "next" button
  ) {
    verification_box.style.display = "none";
  }
});
