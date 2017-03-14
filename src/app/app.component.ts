import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

import {
  Angulartics2GoogleAnalytics
} from 'angulartics2';
import {
  Observable
} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./navbar-cool.css']
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
  skill = ['jQury', 'vue.js', 'Angular2', 'PHP', 'Laravel', 'Java', 'Android', 'CSS'];
  background = ['assets/img/12.jpg', 'assets/img/19.jpg', 'assets/img/1.jpg'];
  now = "url('assets/img/12.jpg')";
  length = 0;
  flex : boolean [] = [true,false,false,false,false];
  lastOneClick = 0;

  ngOnInit() {
    let timer = Observable.timer(0, 4000);
    timer.subscribe(t => {
      this.changeBackground();
    });
  }
  ngAfterViewInit() {
    $(".text-change").typed({
      strings: ["web engineer.", "aggressive student.", "Bear."],
      typeSpeed: 100, // typing speed
      backDelay: 700, // pause before backspacing
      loop: !0, // here
    });
    this.changeBackground();
  }
  navbarClick(i){
    // this.flex.forEach((item, index, theArray) => {
    //   theArray[index] = false;
    // });
    this.flex[this.lastOneClick] = false;
    this.flex[i] = true;
    this.lastOneClick = i;
  }
  changeBackground() {
      this.now = "url('" + this.background[this.length] + "')";
      (this.background[++this.length]==null)? this.length = 0 : "";
  }

}
