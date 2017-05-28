import { NgBookPage } from './app.po';

describe('ng-book App', () => {
  let page: NgBookPage;

  beforeEach(() => {
    page = new NgBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
