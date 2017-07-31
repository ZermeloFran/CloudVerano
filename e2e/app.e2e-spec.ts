import { CloudProjectPage } from './app.po';

describe('cloud-project App', () => {
  let page: CloudProjectPage;

  beforeEach(() => {
    page = new CloudProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
