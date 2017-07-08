import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  skill = [{
    title: "What-does-the-box-say (軟體工程課程團隊專案)",
    subTitle: "遊戲內容為 TCP/UDP 2D地圖連線遊戲，為 7 人合作所完成",
    content: `<p>途中練習使用團隊開發方式</p>
    <p>像是<b>design各種遊戲需求</b>(像是遊戲中有<b>子彈飛行</b>設計)後訂定<b>明確的Spec</b>，<b>Coding Style</b></p><p>並且練習如何使用Debug工具及使用<b>JUnit Test</b></p>
    <img src="assets/img/box.png" class="img-responsive" width="500" height="250">
    <p>我主要負責的是一些TCP的玩家<b>邏輯參數管理(秒數部分)</b>，及<b>JUnit Test Case 撰寫</b></p>
      <p><a target='_blank' href='https://github.com/Bear1110/What-does-the-box-say'>Github專案Link</a></p>`,
    time: '2015~現在',
    icon: 'fa fa-archive fa-5x'
  }, {
    title: "國立中央大學-問卷系統",
    subTitle: "Laravel 結合 vue.js 來做動態的新增與修改 (包含跳題功能及各種彈性設計)",
    content: `<p>與同學一同並使用 Git 當作版控系統，與同學前後花約一年的時間，從零到有完成此系統</p>
      <p><b>即時更新、跳題邏輯、問卷防呆</b> 等等 都是使用 Vue.js完成複雜需求 <a target='_blank' href='http://questionsys.is.ncu.edu.tw/home'>問卷系統連結</a></p>`,
    time: '2015~現在',
    icon: 'fa fa-quora fa-5x'
  }, {
    title: "國立中央大學-活動報名系統",
    subTitle: "Laravel 結合 vue.js 並且使用 socket.io 來達成即時通知的效果",
    content: `<p>主要負責整個架構的修改，及一些細節部分的優化...等等，</p>
      <p><b>即時通知</b> 是使用 socket.io 配合 redis 及 Laravel 中的broadcast 系統完成 <a target='_blank' href='http://140.115.19.197/ActivitySys/'>活動報名系統連結</a></p>`,
    time: '2015~現在',
    icon: 'fa fa-quora fa-5x'
  }, {
    title: "戰艦棋 (計算機網路課程實作專案)",
    subTitle: "Java-SocketProgram(TCP/UDP) 程式碼約 1500行 點我可看程式精簡UML圖",
    content: `<p>遊戲流程:先擺好自己的船 之後猜對方的船隻方位。</p>
        <p>附有聊天室功能方便溝通互動，與同學協力完成 </p>
      <p>主要負責<b>連線MVC邏輯部分撰寫</b>
      <img src="assets/img/UML.png" class="img-responsive" width="1241" height="944" >
      <a target='_blank' href='https://github.com/Bear1110/Java-SocketProgram'>Github</a></p>`,
    time: '2015~現在',
    icon: 'fa fa-ship fa-5x'
  }, {
    title: "AR 貪食蛇 ( 大三專題 )",
    subTitle: "想達到人與人外出跑步運動的AR貪食蛇，創意Android 遊戲App",
    content: `<p>以Pokemon GO為發想，運用GPS定位、TCP Server和AR技術，將畫面中的玩家描繪成蛇，進行遊戲。透過玩家的行走，旨在將貪食蛇遊戲融入在日常生活中。
</p>
                  <p>連線架構( 如玩家的資料型態，TCP protocal協定) 都是由我負責完成。</p>
                  <p>小地圖的座標繪製等等</p>
                  <img src="assets/img/slither.png" class="img-responsive" width="200" height="300" >\
                  <p>此為遊戲示意圖，紅色原點為對方身體，下方灰色區塊為小地圖。</p>`,
    time: '2015~現在',
    icon: 'fa fa-android fa-5x'
  }, {
    title: "inQ官方網站",
    subTitle: "Angular 2 寫成，具有RWD功能、Router、GooleMapApi，方便維護及增修資料",
    content: `<p>完全拆分成component切版，方便維護及增修改資料。
                  <a target='_blank' href='https://bear1110.github.io/demo-website/'>官方網站Link</p>`,
    time: '2015~現在',
    icon: 'fa fa-globe fa-5x'
  }, {
    title: "Todo List ( Angular 2 http API 套用 )",
    subTitle: "使用Angular2 所完成的Todo List 並且有連線到 jsonbin.org 串接API",
    content: `<p>可記錄自己的任何代辦事項 並且任何平台皆適用 有網路即可共享
    <a target='_blank' href='https://github.com/Bear1110/todomvc-angular'>Github專案Link</a></p>`,
    time: '2015~現在',
    icon: 'fa fa-list-ol fa-5x'
  }, {
    title: "中央大學-新生資訊網",
    subTitle: "中央大學每年為了新進學生所架設的新生專屬網站，Laravel 為基礎而完成",
    content: "<p>內容包含大大小小知識及Q&A發問區，使用 Laravel 做為 整個平台的框架寫成，由於每年都會換新，我所做的那年已經下架。</p><p>不過此處有我錄製的  <a target='_blank' href='https://drive.google.com/drive/folders/0B9pxsA4Zx9Q8WkJhMkwwNTZoYXM?usp=sharing'>Demo 影片 Link</a> 只附上我有參與的部分</p>",
    time: '2015~現在',
    icon: 'fa fa-newspaper-o fa-5x'
  }, {
    title: "統一發票兌獎系統 (組合語言程式)",
    subTitle: "可彈性輸入 兌獎號碼 ， 並且 輸入 發票後三碼來完成兌獎",
    content: "<p>使用組合語言完成 ，為課程之實作<a target='_blank' href='https://github.com/Bear1110/assembly-language-Lotto'>Github專案Link</a></p>",
    time: '2015~現在',
    icon: 'fa fa-terminal fa-5x'
  }]

  constructor() { }
  ngOnInit() { }
}
