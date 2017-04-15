import { FrontendCliPage } from './app.po';

describe('frontend-cli App', () => {
  let page: FrontendCliPage;

  beforeEach(() => {
    page = new FrontendCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
