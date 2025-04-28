import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class ContactPage extends BasePage {
  private readonly radioRegisterClientQuestion: Locator;
  private readonly radioCurrentTherapistQuestion: Locator;
  private readonly radioNewTherapistQuestion: Locator;
  private readonly radioServiceQuestion: Locator;
  private readonly radioBillingQuestion: Locator;
  private readonly radioPressQuestion: Locator;
  private readonly radioBuisnessInquiry: Locator;
  private readonly radioOrganizationQuestion: Locator;
  private readonly firstNameField: Locator;
  private readonly lastNameField: Locator;
  private readonly emailField: Locator;
  private readonly messageTextArea: Locator;
  private readonly acceptTerms: Locator;
  private readonly submitButton: Locator;
  private readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.radioRegisterClientQuestion = this.page.getByTestId('register-client-question');
    this.radioCurrentTherapistQuestion = this.page.getByTestId('current-therapist-question');
    this.radioNewTherapistQuestion = this.page.getByTestId('new-therapist-question');
    this.radioServiceQuestion = this.page.getByTestId('service-question');
    this.radioBillingQuestion = this.page.getByTestId('billing-question');
    this.radioPressQuestion = this.page.getByTestId('press-question');
    this.radioBuisnessInquiry = this.page.getByTestId('business-question');
    this.radioOrganizationQuestion = this.page.getByTestId('organization-question-text');
    this.firstNameField = this.page.getByTestId('first-name-field');
    this.lastNameField = this.page.getByTestId('last-name-field');
    this.emailField = this.page.getByTestId('email-field');
    this.messageTextArea = this.page.getByTestId('message-textarea');
    this.acceptTerms = this.page.getByTestId('contact-us-terms-checkbox');
    this.submitButton = this.page.getByTestId('btn-primary-submit');
    this.successMessage = this.page.locator('.success-message');
  }

  async navigateToContactPage() {
    await this.navigateTo('/contact/');
  }

  async selectInquiryType(type: string) {
    switch (type) {
      case 'client':
        await this.radioRegisterClientQuestion.check();
        break;
      case 'currentTherapist':
        await this.radioCurrentTherapistQuestion.check();
        break;
      case 'newTherapist':
        await this.radioNewTherapistQuestion.check();
        break;
      case 'service':
        await this.radioServiceQuestion.check();
        break;
      case 'billing':
        await this.radioBillingQuestion.check();
        break;
      case 'press':
        await this.radioPressQuestion.check();
        break;
      case 'business':
        await this.radioBuisnessInquiry.check();
        break;
      case 'organization':
        await this.radioOrganizationQuestion.check();
        break;
      default:
        throw new Error(`Inquiry type ${type} not supported`);
    }
  }

  private async fillFirstName(firstName: string) {
    await this.firstNameField.fill(firstName);
  }

  private async fillLastName(lastName: string) {
    await this.lastNameField.fill(lastName);
  }

  private async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  private async fillMessage(message: string) {
    await this.messageTextArea.fill(message);
  }

  private async checkAcceptTerms() {
    await this.acceptTerms.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async fillCompleteForm(data: {
    inquiryType: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    acceptTerms?: boolean;
  }) {
    await this.selectInquiryType(data.inquiryType);
    await this.fillFirstName(this.nameFormatter(data.firstName));
    await this.fillLastName(this.nameFormatter(data.lastName));
    await this.fillEmail(data.email);
    await this.fillMessage(data.message);
    
    if (data.acceptTerms !== false) {
      await this.checkAcceptTerms();
    }

  }

  private nameFormatter(name: string): string {
    return `~${name}`;
  }

  async isFormSubmissionSuccesfull(): Promise<boolean> {
    try {
      await this.successMessage.waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getValidationError(fieldName: string): Promise<string | null> {
    const errorLocator = this.page.locator(`[data-testid="${fieldName}-error"]`);
    if (await errorLocator.isVisible()) {
      return await errorLocator.textContent();
    }
    return null;
  }
}