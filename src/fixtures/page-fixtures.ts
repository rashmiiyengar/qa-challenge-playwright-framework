import { test as base, Page, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';

export const test = base.extend<{
  page: Page;
  contactPage: ContactPage;
  homePage: HomePage;
}>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect };