import { Bear1110Page } from './app.po';

describe('bear1110 App', function() {
  let page: Bear1110Page;

  beforeEach(() => {
    page = new Bear1110Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
