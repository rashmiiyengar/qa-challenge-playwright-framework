import { test, expect } from '../fixtures/page-fixtures';
import { validClientInquiry, invalidEmailInquiry, missingTermsInquiry } from '../test-data/contact-form-data';
//import { generateRandomEmail } from '../utils/test-helpers';

test.describe('Contact Form Tests', () => {
  test.beforeEach(async ({ contactPage }) => {
    await contactPage.navigateToContactPage();
  });

  test('should successfully submit client inquiry form', async ({ contactPage,page }) => {
    await contactPage.fillCompleteForm(validClientInquiry);
    await expect(page).toHaveURL('/contact/');
  });

  test('should show validation error for invalid email', async ({ contactPage }) => {
    await contactPage.fillCompleteForm(invalidEmailInquiry);
    await contactPage.submitForm();
    
    const emailError = await contactPage.getValidationError('email-field');
    console.log(emailError)
    expect(emailError).toContain('Email is required');
  });
  
  test('should require acceptance of terms', async ({ contactPage }) => {
    await contactPage.fillCompleteForm(missingTermsInquiry);
    await contactPage.submitForm();
    
    const termsError = await contactPage.getValidationError('terms');
    expect(termsError).not.toBeNull();
  });
  
  test('should validate all required fields', async ({ contactPage }) => {
    // Only click submit without filling anything
    await contactPage.submitForm();
    
    // Check that all required fields show validation errors
    const firstNameError = await contactPage.getValidationError('first-name');
    const lastNameError = await contactPage.getValidationError('last-name');
    const emailError = await contactPage.getValidationError('email');
    const messageError = await contactPage.getValidationError('message');
    
    expect(firstNameError).not.toBeNull();
    expect(lastNameError).not.toBeNull();
    expect(emailError).not.toBeNull();
    expect(messageError).not.toBeNull();
  });
});