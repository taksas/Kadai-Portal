let finish
let intervalId
let startButton = document.querySelector("#start-button")
startButton.addEventListener("click", startTimer)
let resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", resetTimer)


/**タイマー開始*/
function startTimer() {
    let h = document.querySelector("#time-input_h").value
    let m = document.querySelector("#time-input_m").value
    let s = document.querySelector("#time-input_s").value
//スタートした時刻とタイマーの時間を足した合計が終了時刻
    finish = Date.now() + s * 1000 + m*60*1000 + h*3600*1000
    intervalId = setInterval(checkRemainingTime, 10)
//スタートボタン無効化する
    startButton.disabled = true
}

/**タイマーを終了する*/
function resetTimer() {
    clearInterval(intervalId)
    //残り時間リセット
    setDisplay(0)
    //スタートボタンを有効化する
    startButton.disabled = false
}

/**残り時間をチェックする繰り返し*/
function checkRemainingTime() {
    let remain = finish - Date.now()
    //残り時間表示
    let second = Math.floor(remain / 1000) + 1
    setDisplay(second)
    //残り時間が0以下になったらタイマーを終了する
    if (remain <= 0) {
        resetTimer()
        alert("時間になりました")
    }
}

/**残り時間表示*/
function setDisplay(second) {
    let h=Math.floor(second/3600)
    let m=Math.floor(second/60-h*60)
    let s=Math.floor(second-h*3600-m*60)
    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }
    let countDown_h = document.querySelector("#count-down_h")
    let display_h =h
    countDown_h.textContent = display_h
    let countDown_m = document.querySelector("#count-down_m")
    let display_m =m
    countDown_m.textContent = display_m
    let countDown_s = document.querySelector("#count-down_s")
    let display_s =s
    countDown_s.textContent = display_s
}
