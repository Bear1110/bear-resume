import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  skill = ['jQury','vue.js','Angular2','PHP','Laravel','Java','Android','CSS']
  constructor() { }
  ngOnInit() {
  }


}
