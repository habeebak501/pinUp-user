import { PinUpPage } from './app.po';

describe('pin-up App', function() {
  let page: PinUpPage;

  beforeEach(() => {
    page = new PinUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
