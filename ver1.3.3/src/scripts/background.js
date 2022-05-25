
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.greeting === "messageFromContentScripts!!"){
      chrome.storage.local.get("color", function (value) {
        sendResponse({color: value.color});
      });
    }

    if (request.greeting === "messageFromPopup!!"){
      chrome.storage.local.set({'color': request.color}, function () {});
      chrome.storage.local.get("color", function (value) {
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
      title: "URLコピー By SETOKU（ベータ機能）"
    }
  );  
});

// コンテキストメニュークリックされた時
chrome.contextMenus.onClicked.addListener(function(){

  console.log('コンテキストメニュー起動');
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].id+'   :  '+tabs[0].url);
    // chrome.tabs.update(
    //   tabs[0].id,
    //   {selected:true},
    // )
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        greeting  : "messageFromContextMenu!!",
        url       :tabs[0].url
      },
      function(response) {
        console.log(response);
        console.log(response.statusdesu);}
    );
  });
  ///runtime.sendMessageはcontent_scriptsには送信できない
  ///https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
  ///https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
});

