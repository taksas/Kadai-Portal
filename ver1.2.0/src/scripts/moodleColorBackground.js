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
self.addEventListener('install', (event) => {
  chrome.storage.local.set({'color': 'teal'}, function () {});
});