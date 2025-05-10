function previewLogo(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("logoPreview");
      img.src = e.target.result;
      img.style.display = "block";
      document.getElementById("uploadText").style.display = "none";
      
    };
    reader.readAsDataURL(file);
  }
}
