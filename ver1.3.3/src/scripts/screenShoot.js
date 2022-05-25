const action1 = () => {
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
  };


const action2 = () => {
chrome.tabs.captureVisibleTab(null,{format:"jpeg"}, (url,base64Data) => {
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
};

  
document.getElementById("tools_screenShoot_button1").addEventListener("click",action1);
document.getElementById("tools_screenShoot_button2").addEventListener("click",action2);