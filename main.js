const getStarted = document.getElementById("get-started");
const displayPara = document.getElementById("display-para");

getStarted.addEventListener('click', hidebutton);

function hidebutton() {
    console.log("displayed!");
    displayPara.style.display = "block";
    displayPara.style.textAlign = "center";
    displayPara.style.color = "#fff";
    displayPara.style.marginTop = "20px";
};