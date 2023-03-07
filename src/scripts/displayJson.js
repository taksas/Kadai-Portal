let manifestJsonData= require('../../manifest.json')

function displayJsonContentId(){
    displayJsonContent = document.querySelector("#versionNumber")
    displayJsonContent.textContent = manifestJsonData.version
}

function displayJsonContentClass(displayJsonContent,displayJsonClass){
    displayJsonClass="." + displayJsonId;
    let displayJsonVersionInfo = document.querySelector(displayJsonClass);
    displayJsonVersionInfo.textContent = displayJsonContent;
}