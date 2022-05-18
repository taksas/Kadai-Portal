const action = () => {
    console.log("testScshoot");
    chrome.tabs.captureVisibleTab(null,{format:"png"}, (url,base64Data) => {
        //Downloadする
        chrome.downloads.download({
            url: url,
            filename: Date.now()+'_ByKadai-Portal_DevelopedBySETOKU.png'});
      });
  };
  
  document.getElementById("tools_screenShoot_button1").addEventListener("click",action);