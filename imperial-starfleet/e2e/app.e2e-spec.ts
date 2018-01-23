import { ImperialStarfleetPage } from './app.po';

describe('imperial-starfleet App', function() {
  let page: ImperialStarfleetPage;

  beforeEach(() => {
    page = new ImperialStarfleetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
