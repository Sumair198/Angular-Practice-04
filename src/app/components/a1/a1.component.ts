import { Component } from '@angular/core';
import { CounterService } from '../../counter.service'

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
  constructor(private counterService: CounterService) { }
  getCountValue()
  {
    return this.counterService.getCounter()
  }
  IncCount()
  {
    return this.counterService.incrementCount()
  }
}
