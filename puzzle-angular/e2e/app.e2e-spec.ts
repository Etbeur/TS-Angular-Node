import { PuzzleAngularPage } from './app.po';

describe('puzzle-angular App', () => {
  let page: PuzzleAngularPage;

  beforeEach(() => {
    page = new PuzzleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
