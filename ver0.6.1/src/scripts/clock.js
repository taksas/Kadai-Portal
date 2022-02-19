function f_clock_get_and_display(){
    let l_nowTime = new Date();               //現在日時取得
    let l_nowYear = l_nowTime.getFullYear();    //年
    let l_nowMonth= l_nowTime.getMonth()+1;       //月
    let l_nowDate = l_nowTime.getDate();          //日
    let l_nowHour = l_nowTime.getHours();       //時
    let l_nowMin  = l_nowTime.getMinutes();     //分
    let l_nowSec  = l_nowTime.getSeconds();     //秒
    //一桁防止
    let l_nowMonth_display
    if(l_nowMonth<10){
        l_nowMonth_display="0"+l_nowMonth
    }else{
        l_nowMonth_display=l_nowMonth
    }
    let l_nowDate_display
    if(l_nowDate<10){
        l_nowDate_display="0"+l_nowDate
    }else{
        l_nowDate_display=l_nowDate
    }
    let l_nowHour_display
    if(l_nowHour<10){
        l_nowHour_display="0"+l_nowHour
    }else{
        l_nowHour_display=l_nowHour
    }
    let l_nowMin_display
    if(l_nowMin<10){
        l_nowMin_display="0"+l_nowMin
    }else{
        l_nowMin_display=l_nowMin
    }
    let l_nowSec_display
    if(l_nowSec<10){
        l_nowSec_display="0"+l_nowSec
    }else{
        l_nowSec_display=l_nowSec
    }


    let l_clock_display_today = l_nowYear + " / " + l_nowMonth_display + " / " + l_nowDate_display;
    document.getElementById("clock_display_today").innerHTML = l_clock_display_today;
    let l_clock_display =l_nowHour_display + ":" + l_nowMin_display + ":" + l_nowSec_display;
    document.getElementById("clock_display").innerHTML = l_clock_display;
}
setInterval(f_clock_get_and_display,10);