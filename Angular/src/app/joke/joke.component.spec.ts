import { Observable } from 'rxjs/Observable';
import { JokeComponent } from './joke.component';
import 'rxjs/Rx';

describe(`Component: Joke Component`, () => {
  let component: JokeComponent;
  let fakeJokeService: any;

  beforeEach(() => {
    // fakeJokeService = {
    //   getJoke: () => Observable.of('FAKE JOKE')
    // };
    fakeJokeService = jasmine.createSpyObj(fakeJokeService, ['getJoke']);
    fakeJokeService.getJoke.and.returnValue(Observable.of('FAKE JOKE'));
    component = new JokeComponent(fakeJokeService);
  });

  it(`should add 1 + 1`, () => {
    expect(1 + 1).toEqual(2);
  });

  it(`should have a title of 'Chuck Norris Jokes`, () => {
    expect(component.title).toEqual('Chuck Norris Jokes')
  });

  it(`should set the joke property when initialised`, () => {
    component.ngOnInit();
    expect(component.joke).toEqual('FAKE JOKE');
  });
});
