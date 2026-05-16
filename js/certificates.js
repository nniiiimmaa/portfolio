/* ── CERTIFICATES TOGGLE ── */
const showCertificatesBtn =
  document.getElementById("showCertificates");

const hideCertificatesBtn =
  document.getElementById("hideCertificates");

const hiddenCertificates =
  document.querySelector(".hidden-certificates");

/* show certificates */
showCertificatesBtn.addEventListener("click", () => {
  hiddenCertificates.classList.add("show");
  showCertificatesBtn.style.display = "none";
  hideCertificatesBtn.style.display = "inline-flex";
});

/* hide certificates */
hideCertificatesBtn.addEventListener("click", () => {
  hiddenCertificates.classList.remove("show");
  hideCertificatesBtn.style.display = "none";
  showCertificatesBtn.style.display = "inline-flex";
});