## QA Challenge: SDET Technical Evaluation

**Overview:**
This repository contains a Playwright-based testing framework written in TypeScript for automating end-to-end tests of web applications.

### 💻 Prerequisites
Node.js (v14 or higher)\
npm (v6 or higher)\
Playwright installed globally or locally in the project\

### 🚀 Technologies Used:
Playwright\
TypeScript\
JSON

### 🛠 Project Setup

Clone the repository:

```bash
git clone https://github.com/rashmiiyengar/qa-challenge-playwright-framework.git
cd qa-challenge-playwright-framework
```

Install dependencies: Run the following command to install the necessary Node.js modules:
```bash
npm install
```

## 🚀 Running the Tests

### Running All Tests
To execute all test cases with auto report generation, use the following command:

```bash
npx playwright test
```

### Running Specific Tests
You can also run tests based on their tags or specific test files:

```bash
npx playwright test src/tests/test.spec.ts
```

## 🧪 Test Cases

Form Validation Tests:
	1. When a user clicks submit while required fields are empty, confirm that validation errors show up.
	2. When a user inputs email address, ensure relevant message is displayed for incorrect email formats.
	3. Verify checkbox for terms agreement must be checked before submission
	4. Test for minimum and maximum character limits for fields
	5. Verify only one radio button can be selected at a time
	6. Test successful form submission with all fields completed correctly and relevant messages displayed once submitted.
	7. Test form with special characters and potential XSS inputs


## 📊 Test Report
This project is integrated with Allure Playwright for detailed test reports. After running the tests, the reports can be generated and viewed as follows:

```bash
npm run test:allure
```


