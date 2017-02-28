import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  skill = [
    {
      title :"inQ官方網站",
      subTitle : "Angular 2 寫成",
      content : "<p><a target='_blank' href='https://bear1110.github.io/demo-website/'>官方網站Link</p>",
      time : '2015~現在',
      icon : 'fa fa-globe fa-5x'
    },{
      title :"戰艦棋",
      subTitle : "Java-SocketProgram(TCP/UDP)",
      content : "<p>使用Java 寫成 有附聊天室 <a target='_blank' href='https://github.com/Bear1110/Java-SocketProgram'>Github</a></p>",
      time : '2015~現在',
      icon : 'fa fa-ship fa-5x'
    },{
      title :"中央大學-問卷系統",
      subTitle : "Laravel 結合 vue.js",
      content : "<p>使用Laravel  做為 後端平台並結合 Vue.js 寫成 <a target='_blank' href='http://140.115.19.197/QuestionSys/'>Link</a></p>",
      time : '2015~現在',
      icon : 'fa fa-quora fa-5x'
    },{
      title :"中央大學-新生資訊網",
      subTitle : "Laravel 為基礎而完成",
      content : "<p>使用 Laravel 做為 整個平台的框架寫成，由於每年都會換新，我所做的那年已經下架。</p><p>不過此處有我錄製的  <a target='_blank' href='https://drive.google.com/drive/folders/0B9pxsA4Zx9Q8WkJhMkwwNTZoYXM?usp=sharing'>Demo 影片 Link</a> 只附上我有參與的部分</p>",
      time : '2015~現在',
      icon : 'fa fa-newspaper-o fa-5x'
    },{
      title :"大三專題-AR 貪食蛇 ( 製作中 )",
      subTitle : "Androind 平台下去設計 正在進行中",
      content : "<p>Android Studio 開發中，我負責的部分為 繪製地圖、TCP連線。</p>",
      time : '2015~現在',
      icon : 'fa fa-android fa-5x'
    }

  ]
  constructor() { }
  ngOnInit() {
  }


}
