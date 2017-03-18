import {
  Component,
  OnInit
} from '@angular/core';
import {
  exp
} from './exp';
import {
  MockService
} from '../mock.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css', './style.css']
})
export class ExpComponent implements OnInit {
  exps: exp[];
  constructor(private mockService: MockService) {}
  ngOnInit() {
    this.mockService.getExps().then(heroes => this.exps = heroes);
  }

}
