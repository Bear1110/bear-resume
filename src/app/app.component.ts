import { Component ,OnInit, AfterViewInit} from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
  skill = ['jQury','vue.js','Angular2','PHP','Laravel','Java','Android','CSS']
  ngAfterViewInit() {
       $(".text-change").typed({
            strings: ["web engineer.", "aggressive student.", "Bear."],
            typeSpeed: 100, // typing speed
            backDelay: 700, // pause before backspacing
            loop: !0, // here

    });
    $.backstretch([
        "assets/img/12.jpg",
        "assets/img/19.jpg",
        "assets/img/1.jpg"
    ], {
        fade: 750,
        duration: 4000
    });
    }
}
