import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  private count = 0

  getCounter()
  {
    return this.count;
  }

  incrementCount()
  {
    return this.count = this.count+1
  }
}
 