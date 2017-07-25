import { JokeService } from './joke.service';
import { HttpModule, Http } from '@angular/http';
import { TestBed, ComponentFixture, fakeAsync, async, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { JokeComponent } from './joke.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import 'rxjs/Rx';

describe(`Component: Joke Component`, () => {
  let fixture: ComponentFixture<JokeComponent>;
  let component: JokeComponent;
  let de: DebugElement;
  let jokeService: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [JokeComponent],
      providers: [JokeService]
    });

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.debugElement.componentInstance;
    de = fixture.debugElement;
    jokeService = TestBed.get(JokeService);
  });

  it(`should have a title of 'Chuck Norris Jokes`, () => {
    const testTitle = 'Chuck Norris Jokes';
    const el = de.query(By.css('h1')).nativeElement;
    expect(component.title).toEqual(testTitle);
  });

  it(`should set the joke property when initialised`, () => {
    spyOn(jokeService, 'getJoke')
      .and.returnValue(Observable.of('FAKE JOKE'));

    fixture.detectChanges();
    const el = de.query(By.css('p')).nativeElement;

    expect(el.textContent).toEqual('FAKE JOKE');
  });

  it(`should show a new joke when button clicked`, fakeAsync( () => {
    spyOn(jokeService, 'getJoke')
      .and.returnValues(
        Observable.of('FAKE JOKE'),
        Observable.of('FAKE JOKE 2').timeout(2000)
      );

    fixture.detectChanges();

    const el = de.query.apply(By.css('p')).nativeElement;

    expect(el.textContent).toEqual('FAKE JOKE');
    const button = de.query(By.css('button')).nativeElement;
    button.click();
    // tick(3000);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('FAKE JOKE 2');
    })
  }))
});
