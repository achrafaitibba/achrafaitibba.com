const downloadButton = document.getElementById("downloadButton");
function downloadResume() {
  const resumeUrl = "./achrafaitibba.pdf";
  const downloadLink = document.createElement("a");
  downloadLink.href = resumeUrl;
  downloadLink.download = "achrafaitibba-cv.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

downloadButton.addEventListener("click", downloadResume);

translationToggle = true;
const translateButton = document.getElementById("translate");

function translate() {
  if (translationToggle) {
    fetch("./infos.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("lang").textContent = "EN";
        document.getElementById("tr_home").textContent =
          data.profiles.fr.tr_home;
        document.getElementById("tr_about").textContent =
          data.profiles.fr.tr_about;
        document.getElementById("tr_resume").textContent =
          data.profiles.fr.tr_resume;
        document.getElementById("tr_projects").textContent =
          data.profiles.fr.tr_projects;
        document.getElementById("tr_contact").textContent =
          data.profiles.fr.tr_contact;
        document.getElementById("tr_intro").textContent =
          data.profiles.fr.tr_intro;
        document.getElementById("tr-resume1").textContent =
          data.profiles.fr.tr_resume;
        translationToggle = false;
      })
      .catch((err) => console.log(err));
  } else {
    translationToggle = true;
    location.reload();
  }
}

translateButton.addEventListener("click", translate);
