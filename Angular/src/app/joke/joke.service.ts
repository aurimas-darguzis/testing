// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getJoke(): Observable<any> {
    return this.http.get(`http://api.icndb.com/jokes/random`)
      .map(response => response.json().value.joke);
  }

}
