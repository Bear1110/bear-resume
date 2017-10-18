import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './navbar-cool.css']
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
  skill = ['jQury', 'vue.js', 'Angular2', 'PHP', 'Laravel', 'Java', 'Android', 'CSS', 'C#', 'C++'];
  background = ['assets/img/12.jpg', 'assets/img/19.jpg', 'assets/img/1.jpg'];
  now = "url('assets/img/12.jpg')";
  length = 0;
  nowNavbar = '';

  navBar = [{
    title: "簡介",
    icon: "fa-user",
    link: "intro"
  }, {
    title: "專案",
    icon: "fa-product-hunt",
    link: "project"
  }, {
    title: "經歷",
    icon: "fa-etsy",
    link: "experience"
  }, {
    title: "聯絡我",
    icon: "fa-envelope-o",
    link: "contact"
  }]

  ngOnInit() {
    let timer = Observable.timer(0, 4000);
    timer.subscribe(t => {
      this.changeBackground();
    });
  }
  ngAfterViewInit() {
    $(".text-change").typed({
      strings: ["web engineer.", "software engineer.", "aggressive student.", "Bear."],
      typeSpeed: 100, // typing speed
      backDelay: 800, // pause before backspacing
      loop: !0, // here
    });
  }
  changeBackground() {
    this.now = "url('" + this.background[this.length++ % 3] + "')";
  }
}
