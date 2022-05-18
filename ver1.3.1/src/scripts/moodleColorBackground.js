chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");




    if (request.greeting === "messageFromContentScripts!!"){
      chrome.storage.local.get("color", function (value) {
        sendResponse({color: value.color});
        console.log(value.color +'after response');
      });
    }


    if (request.greeting === "messageFromPopup!!"){
      chrome.storage.local.set({'color': request.color}, function () {});

      chrome.storage.local.get("color", function (value) {
        console.log(value.color+'0000');
        sendResponse({color: value.color});
      });
      
    }

    return true;
  }
);






////インストール時
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({'color': 'teal'}, function () {});


  
  //コンテクストメニュー追加
  chrome.contextMenus.create(
    {
      type: "normal",
      id: "HPopener",
      title: "URLをコピーORスクショ By SETOKU(開発中 機能しません)"
    }
  );  

});
/*

function copyUrl() {
  
  //navigator.clipboard.writeText(url);
}



chrome.contextMenus.onClicked.addListener(function(){
  
  console.log('action1起動');
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    copyText=tabs[0].url;
    navigator.clipboard.writeText(copyText);
  });
  
});
*/