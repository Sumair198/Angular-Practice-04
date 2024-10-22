import { Component } from '@angular/core';
import { CounterService } from '../../counter.service'


@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component {
  constructor(private counterService: CounterService) { }
  getCount()
  {
   return this.counterService.getCounter()
  }
  incrementCount()
  {
    return this.counterService.incrementCount()
  }
}
