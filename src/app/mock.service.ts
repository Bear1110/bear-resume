import { Injectable } from '@angular/core';
import { exp } from './exp/exp'
import { EXPS } from './exp/mock-exps'

@Injectable()
export class MockService {

  constructor() { }
  getExps(): Promise<exp[]> {
    return Promise.resolve(EXPS);
  }
}
