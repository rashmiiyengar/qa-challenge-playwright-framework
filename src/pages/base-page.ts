import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async navigateTo(path: string) {
    await this.page.goto(path);
  }
  
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
  
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
  
  async isElementVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }
  
  async clickElement(locator: Locator) {
    await locator.click();
  }
  
  async waitForElement(locator: Locator, timeout = 5000) {
    await locator.waitFor({ timeout });
  }
}