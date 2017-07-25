import { browser, element, by } from 'protractor';

describe(`Page: Joke Page`, () => {
  it(`should have a title of 'Chuck Norris Jokes'`, () => {
    browser.get('/');
    const title = element(by.css('h2')).getText();
    expect(title).toEqual('Chuck Norris Jokes');
  });

  it(`should have different second joke`, async () => {
    browser.get('/');
    const joke1 = element(by.css('p')).getText();
    element(by.css('button')).click();
    const joke2 = await element(by.css('p')).getText();
    expect(joke1).not.toEqual(joke2);

  })
});

// Default setup:
// import { AngularPage } from './app.po';

// describe('angular App', () => {
//   let page: AngularPage;

//   beforeEach(() => {
//     page = new AngularPage();
//   });

//   it('should display message saying app works', () => {
//     page.navigateTo();
//     expect(page.getParagraphText()).toEqual('app works!');
//   });
// });
