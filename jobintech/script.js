const downloadButton = document.getElementById('downloadButton');

function downloadResume() {
    const resumeUrl = './achrafaitibba.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'achrafaitibba-cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

downloadButton.addEventListener('click', downloadResume);
