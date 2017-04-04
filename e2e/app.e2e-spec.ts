import { AuthenticatedDashboardPage } from './app.po';

describe('authenticated-dashboard App', function() {
  let page: AuthenticatedDashboardPage;

  beforeEach(() => {
    page = new AuthenticatedDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
