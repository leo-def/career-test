import { CareerTestWebappPage } from './app.po';

describe('career-test-webapp App', () => {
  let page: CareerTestWebappPage;

  beforeEach(() => {
    page = new CareerTestWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
