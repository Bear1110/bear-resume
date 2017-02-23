import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  skill = ['jQury','vue.js','Angular2','PHP','Laravel','Java','Android','CSS']
  constructor() { }
  ngOnInit() {
  }

}
