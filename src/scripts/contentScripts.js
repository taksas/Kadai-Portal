// クリップボードにURLコピー
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  if(request.greeting=="messageFromContextMenu!!"){
    navigator.clipboard.writeText(request.url);
    sendResponse({statusdesu:'ok'});
  }
  return true;
});

// https://blog.udcxx.me/article/200227/js-onload-event/
//////読み込みが完了したら実行（読み込みに時間がかかった時用）これのみで十分
document.addEventListener('DOMContentLoaded', function(){
  //MoodleのLocalStrageに保存された設定を元に色変え
  if(location.hostname=="kadai-moodle.kagawa-u.ac.jp"||location.hostname=="lms-sp.itc.kagawa-u.ac.jp"){
    document.documentElement.style.setProperty('--color_primary',  localStorage.getItem('mainColorbyKadaiPortal'));
  }
  
  else{  
      const domain  = location.hostname;
      let title   = document.title;
      console.log(title + "   :   " +domain);
      
      if(location.hostname!="google.com"&&location.hostname!="www.google.com"&&location.hostname!="www.bing.com"&&location.hostname!="www.bing.com"&&location.hostname!="www.yahoo.co.jp"&&location.hostname!="search.yahoo.co.jp"){
        console.log("フィッシング検知開始");

        // duckdnsによるドメインは全てフィッシングとする
        if(domain.indexOf("duckdns.org")!=-1){
          console.log("duckdns.org検知");
          window.alert("フィッシングの恐れあり(DDNS) Scaned By SETOKU");
        }else
        
        // amazon
        if(title.match(/Amazonサインイン/)){
          console.log("Amazonサインイン検知");
          if( domain=="www.carriercentral.amazon.co.jp"||
              domain=="carriercentral.amazon.co.jp"||
              domain=="www.amazon.co.jp"||
              domain=="amazon.co.jp"||
              domain=="www.amazon.com"||
              domain=="amazon.com"){
            console.log("Amazon正規サイトです。");
          }else{
            window.alert("Amazonを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else
        
        //au ID
        if(title.match(/au IDログイン/)){
          console.log("au ID検知");
          if( domain=="www.connect.auone.jp"||
              domain=="connect.auone.jp"||
              domain=="www.auone.jp"||
              domain=="auone.jp"){
            console.log("au ID正規サイトです。");
          }else{
            window.alert("auを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else
  
        // JR東日本
          // えきねっと
          if(title.match(/えきねっと（JR東日本）/)){
            console.log("えきねっと検知");
            if( domain=="www.eki-net.com"||
                domain=="eki-net.com"){
              console.log("えきねっと正規サイトです。");
            }else{
              window.alert("えきねっとを騙るフィッシングの恐れあり Scaned By SETOKU");
            }
          }else
          // モバイルsuica
          if(title.match(/JR東日本：モバイルSuica＞ログイン/)){
            console.log("モバイルsuica検知");
            if( domain=="www.mobilesuica.com"||
                domain=="mobilesuica.com"){
              console.log("モバイルSuica正規サイトです。");
            }else{
              window.alert("モバイルSuicaを騙るフィッシングの恐れあり Scaned By SETOKU");
            }
          }else
  
  
        // イオンカード
        if(title.match(/イオンカード　暮らしのマネーサイト/)){
          console.log("イオンカード検知");
          if( domain=="www.aeon.co.jp"||
              domain=="aeon.co.jp"){
            console.log("イオンカード正規サイトです。");
          }else{
            window.alert("イオンカードを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else
  
  
  
        // SMBC
          // 三井住友銀行
          if(title.match(/SMBCダイレクトログイン ： SMBCダイレクト/)){
            console.log("三井住友銀行検知");
            if( domain=="www.direct.smbc.co.jp"||
                domain=="direct.smbc.co.jp"||
                domain=="www.smbc.co.jp"||
                domain=="smbc.co.jp"){
              console.log("三井住友銀行正規サイトです。");
            }else{
              window.alert("三井住友銀行を騙るフィッシングの恐れあり Scaned By SETOKU");
            }
          }else
  
          // 三井住友カード
          if(title.match(/三井住友カード会員向けサービス「Vpass」ログイン/)){
            console.log("三井住友カード検知");
            if( domain=="www.smbc-card.com"||
                domain=="smbc-card.com"){
              console.log("三井住友カード正規サイトです。");
            }else{
              window.alert("三井住友カードを騙るフィッシングの恐れあり Scaned By SETOKU");
            }
          }else
      
        // // セゾンネットアンサー
        // if(title.match(/SAISON CARD Netアンサー/)){
        //   console.log("SAISON CARD Netアンサー検知");
        //   if( domain=="www.api.saisoncard.co.jp"||
        //       domain=="api.saisoncard.co.jp"||
        //       domain=="www.saisoncard.co.jp"||
        //       domain=="saisoncard.co.jp"){
        //     console.log("SAISON CARD Netアンサー正規サイトです。");
        //   }else{
        //     window.alert("SAISON CARD Netアンサーを騙るフィッシングの恐れあり Scaned By SETOKU");
        //   }
        // }else
  
  
        // メルカリ
        if(title.match(/ログイン - メルカリ/)){
          console.log("メルカリ検知");
          if( domain=="www.jp.mercari.com"||
              domain=="jp.mercari.com"||
              domain=="www.mercari.com"||
              domain=="mercari.com"){
            console.log("メルカリ正規サイトです。");
          }else{
            window.alert("メルカリを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else
  
        // ETC利用照会サービス
        if(title.match(/ETC利用照会サービス/)){
          console.log("ETC利用照会サービス検知");
          if( domain=="www.etc-meisai.jp"||
              domain=="etc-meisai.jp"){
            console.log("ETC利用照会サービス正規サイトです。");
          }else{
            window.alert("ETC利用照会サービスを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else
  
        // // SoftBank
        //   // My SoftBank
        //   if(title.match(/My SoftBank トップ｜ソフトバンク/)){
        //     console.log("My SoftBank検知");
        //     if( domain=="www.id.my.softbank.jp"||
        //         domain=="id.my.softbank.jp"||
        //         domain=="www.my.softbank.jp"||
        //         domain=="my.softbank.jp"||
        //         domain=="www.softbank.jp"||
        //         domain=="softbank.jp"){
        //       console.log("My SoftBank正規サイトです。");
        //     }else{
        //       window.alert("My SoftBankを騙るフィッシングの恐れあり Scaned By SETOKU");
        //     }
        //   }else

        //ゆうびんポータル
        if(title.match(/ゆうびんポータル - 日本郵便/)){
          console.log("ゆうびんポータル検知");
          if( domain=="www.login.post.japanpost.jp"||
              domain=="login.post.japanpost.jp"||
              domain=="www.post.japanpost.jp"||
              domain=="post.japanpost.jp"||
              domain=="www.japanpost.jp"||
              domain=="japanpost.jp"){
            console.log("ゆうびんポータル正規サイトです。");
          }else{
            window.alert("ゆうびんポータルを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        }else

        //My JCB
        if(title.match(/JCBの会員専用WEBサービス「MyJCB（マイジェーシービー）」/)){
          console.log("My JCB検知");
          if( domain=="www.my.jcb.co.jp"||
              domain=="my.jcb.co.jp"||
              domain=="www.jcb.co.jp"||
              domain=="jcb.co.jp"){
            console.log("My JCB正規サイトです。");
          }else{
            window.alert("My JCBを騙るフィッシングの恐れあり Scaned By SETOKU");
          }
        // }else

        // //EPOS:net
        // if(title.match(/エポスNet マイページログイン｜クレジットカードはエポスカード/)){
        //   console.log("エポスNet検知");
        //   if( domain=="www.eposcard.co.jp"||
        //       domain=="eposcard.co.jp"){
        //     console.log("エポスNet正規サイトです。");
        //   }else{
        //     window.alert("エポスNetを騙るフィッシングの恐れあり Scaned By SETOKU");
        //   }
        }

        console.log("フィッシング検知終了");
      }
    }
});



function addColorChoiceMenu(idname){
  document.getElementById(idname).insertAdjacentHTML('beforeend', '<div class="tools_tab_content" id="tools_moodleColor_content"><h4><br>メインテーマ色変更</h4><input id="tools_moodle_default"    type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_default"class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_default"> デフォルト  </label><input id="tools_moodle_orange"    type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_orange"class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_orange"> Orange  </label><input id="tools_moodle_black"      type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_black"  class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_black">   black       </label><input id="tools_moodle_gray"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_gray"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_gray">    gray        </label><input id="tools_moodle_silver"     type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_silver" class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_silver">  silver      </label> <input id="tools_moodle_blue"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_blue"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_blue">    blue        </label><input id="tools_moodle_navy"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_navy"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_navy">    navy        </label><input id="tools_moodle_teal"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_teal"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_teal">    teal        </label><input id="tools_moodle_green"      type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_green"  class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_green">   green       </label><input id="tools_moodle_lime"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_lime"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_lime">    lime            </label><input id="tools_moodle_aqua"       type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_aqua"   class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_aqua">    aqua            </label><input id="tools_moodle_yellow"     type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_yellow" class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_yellow">  yellow          </label><input id="tools_moodle_red"        type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_red"    class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_red">     red             </label><input id="tools_moodle_fuchsia"     type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_fuchsia" class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_fuchsia">   fuchsia         </label><input id="tools_moodle_olive"      type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_olive"  class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_olive">    olive          </label><input id="tools_moodle_purple"     type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_purple" class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_purple">   purple         </label><input id="tools_moodle_maroon"     type="radio"    name="tools_moodle_color"><label id="tools_moodle_btn_maroon" class="tools_tab_moodle hvr-shutter-out-horizontal tools_moodleColor_button"     for="tools_moodle_maroon">   maroon         </label><h5 id="tools_moodle_choiceColorCodeMessage">RGBカラーコードで指定する</h5><p>↓↓↓クリックして選択↓↓↓</p><input type="color" id="tools_moodle_choiceColorCodeInput"><style>.tools_tab_moodle {position: relative;display: block;width:50%;padding: 0.50rem 0.625rem;background-color: #fff;border: 1px solid rgba(0,0,0,.125);}input[name="tools_moodle_color"] {display: none;}#tools_moodle_btn_default{border-bottom: 8px solid #75ac2d;  /*下のラインの色*/}#tools_moodle_btn_default::before{background: #75ac2d;}input:checked + #tools_moodle_btn_default {background-color: #578021;color: #fff;}#tools_moodle_btn_orange{border-bottom: 8px solid #e17400;  /*下のラインの色*/}#tools_moodle_btn_orange::before{background: #e17400;}input:checked + #tools_moodle_btn_orange {background-color: #e17400;color: #fff;}#tools_moodle_btn_black{border-bottom: 8px solid black;  /*下のラインの色*/}#tools_moodle_btn_black::before{background: black;}input:checked + #tools_moodle_btn_black {background-color: #000000;color: #fff;}#tools_moodle_btn_gray{border-bottom: 8px solid gray;  /*下のラインの色*/}#tools_moodle_btn_gray::before{background: gray;}input:checked + #tools_moodle_btn_gray {background-color: rgb(96, 95, 95);color: #fff;}#tools_moodle_btn_silver{border-bottom: 8px solid silver;  /*下のラインの色*/}#tools_moodle_btn_silver::before{background: silver;}input:checked + #tools_moodle_btn_silver {background-color: rgb(121, 121, 121);color: #fff;}#tools_moodle_btn_white{border-bottom: 8px solid white;  /*下のラインの色*/}#tools_moodle_btn_white::before{background: white;}input:checked + #tools_moodle_btn_white {background-color: rgb(245, 245, 245);color: #565656;}#tools_moodle_btn_blue{border-bottom: 8px solid blue;  /*下のラインの色*/}#tools_moodle_btn_blue::before{background: blue;}input:checked + #tools_moodle_btn_blue {background-color: rgb(0, 0, 173);color: #fff;}#tools_moodle_btn_navy{border-bottom: 8px solid navy;  /*下のラインの色*/}#tools_moodle_btn_navy::before{background: navy;}input:checked + #tools_moodle_btn_navy {background-color: rgb(0, 0, 96);color: #fff;}#tools_moodle_btn_teal{border-bottom: 8px solid teal;  /*下のラインの色*/}#tools_moodle_btn_teal::before{background: teal;}input:checked + #tools_moodle_btn_teal {background-color: rgb(0, 91, 91);color: #fff;}#tools_moodle_btn_green{border-bottom: 8px solid green;  /*下のラインの色*/}#tools_moodle_btn_green::before{background: green;}input:checked + #tools_moodle_btn_green {background-color: rgb(0, 110, 0);color: #fff;}#tools_moodle_btn_lime{border-bottom: 8px solid lime;  /*下のラインの色*/}#tools_moodle_btn_lime::before{background: lime;}input:checked + #tools_moodle_btn_lime {background-color: rgb(3, 180, 3);color: #fff;}#tools_moodle_btn_aqua{border-bottom: 8px solid aqua;  /*下のラインの色*/}#tools_moodle_btn_aqua::before{background: aqua;}input:checked + #tools_moodle_btn_aqua {background-color: rgb(0, 157, 157);color: #fff;}#tools_moodle_btn_yellow{border-bottom: 8px solid yellow;  /*下のラインの色*/}#tools_moodle_btn_yellow::before{background: yellow;color:#565656}input:checked + #tools_moodle_btn_yellow {background-color: rgb(168, 168, 0);color: #fff;}#tools_moodle_btn_red{border-bottom: 8px solid red;  /*下のラインの色*/}#tools_moodle_btn_red::before{background: red;}input:checked + #tools_moodle_btn_red {background-color: rgb(164, 0, 0);color: #fff;}#tools_moodle_btn_olive{border-bottom: 8px solid olive;  /*下のラインの色*/}#tools_moodle_btn_olive::before{background: olive;}input:checked + #tools_moodle_btn_olive {background-color: rgb(91, 91, 0);color: #fff;}#tools_moodle_btn_purple{border-bottom: 8px solid purple;  /*下のラインの色*/}#tools_moodle_btn_purple::before{background: purple;}input:checked + #tools_moodle_btn_purple {background-color: rgb(79, 0, 79);color: #fff;}/* Shutter Out Horizontal */.hvr-shutter-out-horizontal {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;background: #ffffff;-webkit-transition-property: color;transition-property: color;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;}.hvr-shutter-out-horizontal:before {content: "";position: absolute;z-index: -1;top: 0;bottom: 0;left: 0;right: 0;background: #2098D1;-webkit-transform: scaleX(0);transform: scaleX(0);-webkit-transform-origin: 50%;transform-origin: 50%;-webkit-transition-property: transform;transition-property: transform;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {color: white;}.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {-webkit-transform: scaleX(1);transform: scaleX(1);}#tools_moodle_choiceColorCodeInput{width:80%;}#tools_moodle_btn_fuchsia{border-bottom: 8px solid fuchsia;  /*下のラインの色*/}#tools_moodle_btn_fuchsia::before{background: fuchsia;}input:checked + #tools_moodle_btn_fuchsia {background-color: rgb(79, 0, 79);color: #fff;}/* Shutter Out Horizontal */.hvr-shutter-out-horizontal {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;background: #ffffff;-webkit-transition-property: color;transition-property: color;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;}.hvr-shutter-out-horizontal:before {content: "";position: absolute;z-index: -1;top: 0;bottom: 0;left: 0;right: 0;background: #2098D1;-webkit-transform: scaleX(0);transform: scaleX(0);-webkit-transform-origin: 50%;transform-origin: 50%;-webkit-transition-property: transform;transition-property: transform;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {color: white;}.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {-webkit-transform: scaleX(1);transform: scaleX(1);}#tools_moodle_choiceColorCodeInput{width:80%;}#tools_moodle_btn_maroon{border-bottom: 8px solid maroon;  /*下のラインの色*/}#tools_moodle_btn_maroon::before{background: maroon;}input:checked + #tools_moodle_btn_maroon {background-color: rgb(79, 0, 79);color: #fff;}/* Shutter Out Horizontal */.hvr-shutter-out-horizontal {display: inline-block;vertical-align: middle;-webkit-transform: perspective(1px) translateZ(0);transform: perspective(1px) translateZ(0);box-shadow: 0 0 1px rgba(0, 0, 0, 0);position: relative;background: #ffffff;-webkit-transition-property: color;transition-property: color;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;}.hvr-shutter-out-horizontal:before {content: "";position: absolute;z-index: -1;top: 0;bottom: 0;left: 0;right: 0;background: #2098D1;-webkit-transform: scaleX(0);transform: scaleX(0);-webkit-transform-origin: 50%;transform-origin: 50%;-webkit-transition-property: transform;transition-property: transform;-webkit-transition-duration: 0.3s;transition-duration: 0.3s;-webkit-transition-timing-function: ease-out;transition-timing-function: ease-out;}.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {color: white;}.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {-webkit-transform: scaleX(1);transform: scaleX(1);}#tools_moodle_choiceColorCodeInput{width:80%;}</style><style>::-webkit-scrollbar {width: 9px;height: 10px;}::-webkit-scrollbar-track {background-color: rgba(255, 255, 255, 0.3);border-radius: 100px;}::-webkit-scrollbar-thumb {background: var(--color_primary);border-radius: 100px;width: 130px;}</style></div>');  
}


function calculateNumberOfCharacters() {
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
              console.log(extractedStrings);
  });

  // 監視のオプションを設定
  const config = { childList: true, subtree: true, characterData: true};
  // 監視を開始
  observer.observe(textArea, config);
}


window.onload=function(){
  // Mooodleサイドバーにメニューを追加する Moodleのみで動作
  if(location.hostname=="kadai-moodle.kagawa-u.ac.jp"||location.hostname=="lms-sp.itc.kagawa-u.ac.jp"){
    console.log("Kadai-Portal:localstorageに保存されている色設定は "+localStorage.getItem('mainColorbyKadaiPortal'))
    //初回起動時に色を設定(Moodleサイトのlocalstorageに色がない場合)
    if(localStorage.getItem('mainColorbyKadaiPortal')==null){
      localStorage.setItem('mainColorbyKadaiPortal', '#e17400');
      console.log("Kadai-Portal:初回起動です。色を設定しました。")
    }
    // メインテーマ色を設定
    document.documentElement.style.setProperty('--color_primary',  localStorage.getItem('mainColorbyKadaiPortal'));
    /////Moodleサイドバーに設定画面追加
    if(document.getElementById('courseindex')){
      addColorChoiceMenu('courseindex');
    }else if(document.getElementById('block-region-side-pre')){
      addColorChoiceMenu('block-region-side-pre');
    }

    /////設定項目をクリックしたら発火、色を変える 設定も変更する
    setTimeout(function(){
      document.getElementById("tools_moodle_default").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','#75ac2d');    localStorage.setItem('mainColorbyKadaiPortal','#75ac2d');});
      document.getElementById("tools_moodle_orange").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','#e17400');     localStorage.setItem('mainColorbyKadaiPortal','#e17400'); });
      document.getElementById("tools_moodle_black").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','black');        localStorage.setItem('mainColorbyKadaiPortal','black'); });
      document.getElementById("tools_moodle_gray").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','gray');          localStorage.setItem('mainColorbyKadaiPortal','gray');  });
      document.getElementById("tools_moodle_silver").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','silver');      localStorage.setItem('mainColorbyKadaiPortal','silver');});
      document.getElementById("tools_moodle_blue").addEventListener("click", function(){document.documentElement.style.setProperty('--color_primary','blue');         localStorage.setItem('mainColorbyKadaiPortal','blue'); });
      document.getElementById("tools_moodle_navy").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','navy');          localStorage.setItem('mainColorbyKadaiPortal','navy');  });
      document.getElementById("tools_moodle_teal").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','teal');          localStorage.setItem('mainColorbyKadaiPortal','teal');  });
      document.getElementById("tools_moodle_green").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','green');        localStorage.setItem('mainColorbyKadaiPortal','green'); });
      document.getElementById("tools_moodle_lime").addEventListener("click", function(){document.documentElement.style.setProperty('--color_primary','lime');         localStorage.setItem('mainColorbyKadaiPortal','lime'); });
      document.getElementById("tools_moodle_aqua").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','aqua');          localStorage.setItem('mainColorbyKadaiPortal','aqua');   });
      document.getElementById("tools_moodle_yellow").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','yellow');      localStorage.setItem('mainColorbyKadaiPortal','yellow'); });
      document.getElementById("tools_moodle_red").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','red');            localStorage.setItem('mainColorbyKadaiPortal','red');     });  
      document.getElementById("tools_moodle_fuchsia").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','fuchsia');      localStorage.setItem('mainColorbyKadaiPortal','fuchsia'); });
      document.getElementById("tools_moodle_olive").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','olive');        localStorage.setItem('mainColorbyKadaiPortal','olive'); });
      document.getElementById("tools_moodle_purple").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','purple');      localStorage.setItem('mainColorbyKadaiPortal','purple'); });
      document.getElementById("tools_moodle_maroon").addEventListener("click",function(){document.documentElement.style.setProperty('--color_primary','maroon');      localStorage.setItem('mainColorbyKadaiPortal','maroon'); });
      document.getElementById("tools_moodle_choiceColorCodeInput").addEventListener("input",function(){
        let moodleColorCodeChoicebox=document.getElementById("tools_moodle_choiceColorCodeInput").value;
        document.documentElement.style.setProperty('--color_primary',moodleColorCodeChoicebox);  
        localStorage.setItem('mainColorbyKadaiPortal',moodleColorCodeChoicebox);
        // chrome.runtime.sendMessage({greeting: "messageFromPopup!!",color:moodleColorCodeChoicebox}, function(response) {});
      });
    },500);
    // 色設定に変更があった時用
    // chrome.runtime.sendMessage({greeting: "messageFromContentScripts!!"}, function(response) {
    //   document.documentElement.style.setProperty('--color_primary',  response.color);
    //   localStorage.setItem('mainColorbyKadaiPortal',response.color);
    // });

    calculateNumberOfCharacters();
  }
}




