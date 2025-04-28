// //**
// 🧪 Test Cases
// Test Case 1 Description:
// Form Validation Tests:
// 	1. When a user clicks submit while required fields are empty, confirm that validation errors show up.
// 	2. When a user inputs email address, ensure relevant message is displayed for incorrect email formats.
// 	3. Verify checkbox for terms agreement must be checked before submission
// 	4. Test for minimum and maximum character limits for fields
// 	5. Verify only one radio button can be selected at a time
// 	6. Test successful form submission with all fields completed correctly and relevant messages displayed once submitted.
// 	7. Test form with special characters and potential XSS inputs

// UI/UX tests:
//     1. Test form responsiveness across different screen sizes	
//     2. Verify Privacy Policy link opens correct page
//     3. Verify Terms of Use link opens correct page
//     4. Verify FAQ link opens help page
//     5. Verify clicking "These resources" opens "gethelpnow" page
//  * 
// **//** */

export interface ContactFormData {
    inquiryType: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    acceptTerms?: boolean;
  }
  
  export const validClientInquiry: ContactFormData = {
    inquiryType: 'client',
    firstName: 'Rashmi',
    lastName: 'Soundar',
    email: 'rashmisoundar@example.com',
    message: 'I need help with my account.',
    acceptTerms: true
  };
  
  export const validTherapistInquiry: ContactFormData = {
    inquiryType: 'newTherapist',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    message: 'I am interested in joining as a therapist.',
    acceptTerms: true
  };

  export const invalidEmailInquiry: ContactFormData = {
    inquiryType: 'client',
    firstName: 'John',
    lastName: 'Doe',
    email: 'invalid-email',
    message: 'I need help with my account.',
    acceptTerms: true
  };
  
  export const missingTermsInquiry: ContactFormData = {
    inquiryType: 'client',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    message: 'I need help with my account.',
    acceptTerms: false
  };