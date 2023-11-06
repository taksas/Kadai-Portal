// クリップボードにURLコピー
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  if(request.greeting=="messageFromContextMenu!!"){
    navigator.clipboard.writeText(request.url);
    sendResponse({statusdesu:'ok'});
  }
  return true;
});
