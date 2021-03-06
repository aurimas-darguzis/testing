import { JokeService } from './joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent implements OnInit {
  joke: string;
  title = 'Chuck Norris Jokes';
  // title: string;

  constructor(private jokeService: JokeService) {
    // this.title = 'Chuck Norris Jokes';
   }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke()
      .subscribe(joke => this.joke = joke);
  }

}
