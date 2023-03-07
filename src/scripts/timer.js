let timer_finish=1000
let timer_intervalId
let timer_settime=""
let timer_startButton = document.querySelector("#start-button")
timer_startButton.addEventListener("click", startTimer)
let timer_resetButton = document.querySelector("#reset-button")
timer_resetButton.addEventListener("click", resetTimer)


/**タイマー開始*/
function startTimer() {
    timer_settime=""
    let timer_input_h = document.querySelector("#time-input_h").value
    let timer_input_m = document.querySelector("#time-input_m").value
    let timer_input_s = document.querySelector("#time-input_s").value
    if(timer_input_h>0){
        timer_settime+=timer_input_h
        timer_settime+="時間 "
    }
    if(timer_input_m>0){
        timer_settime+=timer_input_m
        timer_settime+="分 "
    }
    if(timer_input_s>0){
        timer_settime+=timer_input_s
        timer_settime+="秒 "
    }else if(timer_input_h<=0 &&timer_input_m<=0){
        timer_settime="0秒"
    }
//スタートした時刻とタイマーの時間を足した合計が終了時刻
    timer_finish = Date.now() + timer_input_s * 1000 + timer_input_m*60*1000 + timer_input_h*3600*1000
    timer_intervalId = setInterval(timerCheckRemainingTime, 10)
//スタートボタン無効化する
    timer_startButton.disabled = true
}

/**タイマーを終了する*/
function resetTimer() {
    clearInterval(timer_intervalId)
    //残り時間リセット
    setDisplay(1000)
    //スタートボタンを有効化する
    timer_startButton.disabled = false
}

/**残り時間をチェックする繰り返し*/
function timerCheckRemainingTime() {
    let timer_remain = timer_finish - Date.now()
    //残り時間表示
    let timer_milisecond = timer_remain+1000
    setDisplay(timer_milisecond)
    //残り時間が0以下になったらタイマーを終了する
    if (timer_remain <= 0) {
        resetTimer()
        alert(timer_settime+"が経過しました")
    }
}

/**残り時間表示*/
function setDisplay(timer_miliseconds) {
    let timer_milisecond=timer_miliseconds-1000
    let timer_h=Math.floor(timer_milisecond/(3600*1000))
    let timer_m=Math.floor((timer_milisecond-timer_h*3600*1000)/(60*1000))
    let timer_s=Math.floor((timer_milisecond-timer_h*3600*1000-timer_m*60*1000)/1000)
    let timer_ms=Math.floor(timer_milisecond-timer_h*3600*1000-timer_m*60*1000-timer_s*1000)
    if(timer_h<10){
        timer_h="0"+timer_h
    }
    if(timer_m<10){
        timer_m="0"+timer_m
    }
    if(timer_s<10){
        timer_s="0"+timer_s
    }
    if(timer_ms<10){
        timer_ms="00"+timer_ms
    }else if(timer_ms<100){
        timer_ms="0"+timer_ms
    }
    let countDown_h = document.querySelector("#count-down_h")
    let display_timer_h =timer_h
    countDown_h.textContent = display_timer_h
    let countDown_m = document.querySelector("#count-down_m")
    let display_timer_m =timer_m
    countDown_m.textContent = display_timer_m
    let countDown_s = document.querySelector("#count-down_s")
    let display_timer_s =timer_s
    countDown_s.textContent = display_timer_s
    let countDown_ms = document.querySelector("#count-down_ms")
    let display_timer_ms =timer_ms
    countDown_ms.textContent = display_timer_ms
}
