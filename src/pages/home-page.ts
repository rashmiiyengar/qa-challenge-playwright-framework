import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  private readonly contactLink: Locator;

  constructor(page: Page) {
    super(page);
    this.contactLink = this.page.getByRole('navigation').getByRole('link', { name: 'Contact' });
  }

  async navigateToContactPage() {
    await this.contactLink.click();
  }
}