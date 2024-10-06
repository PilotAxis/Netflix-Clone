const getStarted = document.getElementById("get-started");
const getStartedfooter = document.getElementById("get-started-footer");
const displayPara = document.getElementById("display-para");
const displayParagraph = document.getElementById("display-paragraph");

getStarted.addEventListener('click', hidebutton);
getStartedfooter.addEventListener('click', hidemenufooter);


function hidebutton() {
    console.log("displayed!");
    displayPara.style.display = "block";
    displayPara.style.textAlign = "center";
    displayPara.style.color = "#fff";
    displayPara.style.marginTop = "20px";
};

function hidemenufooter() {
    console.log("displayed!");
    displayParagraph.style.display = "block";
    displayParagraph.style.textAlign = "center";
    displayParagraph.style.color = "#fff";
    displayParagraph.style.marginTop = "20px";
};