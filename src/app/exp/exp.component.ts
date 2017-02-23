import { Component,AfterViewInit ,OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css','./style.css']
})
export class ExpComponent implements OnInit {
  skill = [
    {
      title :"inQ 好奇人工智慧公司(實習生)",
      content : ["使用 Angular 2 開發前端網頁","<a href='http://inq.ai'>inQ公司官網</a>"],
      time : '2015~現在',
      icon : 'fa fa-briefcase fa-3x'
    },{
      title :"校務資訊系統網頁開發(校內工讀)",
      content : ["主要從事網頁開發，使用 Laravel 框架 去執行Project","並結合 vue.js 來設計前端"],
      time : '2015~現在',
      icon : 'fa fa-chrome fa-3x'
    },{
      title :"國立中央大學 資訊工程",
      content : ["設計中央大學新生資訊網","擔任解放音樂節志工","參與過高中生營隊，系學會"],
      time : '2014~2018',
      icon : 'fa fa-graduation-cap fa-3x'
    },{
      title :"新莊高中",
      content : ["曾經擔任吉他社教學"],
      time : '2011~2014',
      icon : 'fa fa-music fa-3x'
    }
  ]
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit(){
	
  }
  

}
