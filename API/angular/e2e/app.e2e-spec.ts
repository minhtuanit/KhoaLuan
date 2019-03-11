import { KhoaLuanTemplatePage } from './app.po';

describe('KhoaLuan App', function() {
  let page: KhoaLuanTemplatePage;

  beforeEach(() => {
    page = new KhoaLuanTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
