function calculateNumberOfCharacters() {
    console.log("Kadai-Portal: calculateNumberOfCharacters探索中...");
    // 文字入力欄を指定
    const textArea = document.getElementById("id_onlinetext_editoreditable");
    if(textArea == null) return;
    // 文字数の表示用要素を文字入力欄の直後に追加
    textArea.insertAdjacentHTML('afterend', '<div id="moodle-word-length" style="text-align: right;" title="全体の文字数。空白は計算から除外されています。" >文字数(空白除外)</div>');
    //追加した文字数の表示用要素を指定
    const length = document.getElementById('moodle-word-length');
    // &nbsp;を見つける正規表現
    const regex0 = /&nbsp;/g;
    // HTMLのタグ（改行、リンクや太字挿入時）を見つける正規表現
    const regex1 = /<[^>]+>/g;
    // 空白を見つける正規表現
    const regex2 = /\s+/g;
    // &lt;, &gt;を見つける正規表現
    const regex3 = /&lt;|&gt;/g;
  
    // オブザーバーインスタンスの定義と作成
    const observer = new MutationObserver(() => {
                // 正規化
                extractedStrings = textArea.innerHTML.replace(regex0, "").replace(regex1, "").replace(regex2, "").replace(regex3, "　");
                // 文字数の表示用要素を更新
                length.textContent = extractedStrings.length + " 文字";
    });
  
    // 監視のオプションを設定
    const config = { childList: true, subtree: true, characterData: true};
    // 監視を開始
    observer.observe(textArea, config);
}

calculateNumberOfCharacters();