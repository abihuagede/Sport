function previewLogo(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("logoPreview");
      img.src = e.target.result;
      img.style.display = "block";
      const uploAd = document.getElementById("uploadText");
      uploAd.style.display = "none";
      localStorage.setItem("logo", e.target.result); // Save the logo in localStorage
    };
    reader.readAsDataURL(file);
  }
}
// Ensure the logo persists after a page refresh
window.addEventListener("load", function () {
  const savedLogo = localStorage.getItem("logo");
  if (savedLogo) {
    const img = document.getElementById("logoPreview");
    img.src = savedLogo;
    img.style.display = "block";
    const uploAd = document.getElementById("uploadText");
    if (uploAd) {
      uploAd.style.display = "none";
    }
  }
});
