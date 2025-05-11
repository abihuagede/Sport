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
