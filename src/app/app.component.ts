import { Component } from '@angular/core';
import { JokeService } from './joke.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-4';
  joke = 'loading...'
  constructor(private jokes: JokeService) { }

  ngOnInit() {
    this.jokeBtn()
  }
  jokeBtn() {
    this.jokes.getJoke().subscribe((data: any) => {
      console.log(data.value)
      this.joke = data.value
    })
    
  }
}
