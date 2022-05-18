chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");



        if (request.greeting === "messageFromContextMenu!!"){
            chrome.tabs.captureVisibleTab(null,{format:"png"}, (url,base64Data) => {
                //Downloadする
                let today=new Date();
                let year = today.getFullYear();
                let month = today.getMonth() + 1;
                if(month<10){
                    month='0'+month;
                }
                let date = today.getDate();
                if(date<10){
                    date='0'+date;
                }
                let hours =today.getHours();
                if(hours<10){
                    hours='0'+hours;
                }
                let minutes=today.getMinutes();
                if(minutes<10){
                    minutes='0'+minutes;
                }
                let seconds=today.getSeconds();
                if(seconds<10){
                    seconds='0'+seconds;
                }
                chrome.downloads.download({
                    url: url,
                    filename: year + '年' + month + '月' + date+ '日' + hours+ '時' + minutes+ '分' + seconds+ '秒' +'_ByKadai-Portal_DevelopedBySETOKU.png'});
            });
        }
        return true;
    }
);