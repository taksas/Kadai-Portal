let x=0
let start=0
let stopWatchIntervalId
let stopWatchStopTime=0
let stopWatchRestartTime=0
let stopWatchStartButton = document.querySelector("#stopWatch-start-button")
stopWatchStartButton.addEventListener("click", startStopWatch)
let stopWatchResetButton = document.querySelector("#stopWatch-reset-button")
stopWatchResetButton.addEventListener("click", resetStopWatch)
let stopWatchResetButton2 = document.querySelector("#stopWatch-reset-button2")
stopWatchResetButton2.addEventListener("click", resetStopWatch2)

//
function startStopWatch(){
    //スタートボタン無効化する
    stopWatchStartButton.disabled = true
    if(x===0){
        start=Date.now()
        stopWatchIntervalId = setInterval(stopWatchCheckRemainingTime, 10)
        x=x+1
    }else{
        stopWatchRestartTime=Date.now()-stopWatchStopTime
        stopWatchIntervalId = setInterval(stopWatchCheckRemainingTime, 10)
    }
}
function resetStopWatch(){
    clearInterval(stopWatchIntervalId)
    //スタートボタンを有効化する
    stopWatchStartButton.disabled = false
    stopWatchStopTime=Date.now()
}
function resetStopWatch2(){
    resetStopWatch()
    displayStopWatch(0)
    x=0
    start=0
    stopWatchStopTime=0
    stopWatchRestartTime=0
}
function stopWatchCheckRemainingTime(){
    let passedTime=Date.now()-start
    let stopWatchDisplayTime=passedTime-stopWatchRestartTime
    displayStopWatch(stopWatchDisplayTime)
}
function displayStopWatch(ms){
    let h=Math.floor(ms/(3600*1000))
    let m=Math.floor((ms-h*3600*1000)/(60*1000))
    let s=Math.floor((ms-h*3600*1000-m*60*1000)/1000)
    let msec=Math.floor(ms-h*3600*1000-m*60*1000-s*1000)
    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }
    if(msec<10){
        msec="00"+msec
    }else if(msec<100){
        msec="0"+msec
    }
    let count_h = document.querySelector("#stopWatch_count_h")
    let display_h =h
    count_h.textContent = display_h

    let count_m = document.querySelector("#stopWatch_count_m")
    let display_m =m
    count_m.textContent = display_m

    let count_s = document.querySelector("#stopWatch_count_s")
    let display_s =s
    count_s.textContent = display_s

    let count_msec = document.querySelector("#stopWatch_count_msec")
    let display_msec =msec
    count_msec.textContent = display_msec
}