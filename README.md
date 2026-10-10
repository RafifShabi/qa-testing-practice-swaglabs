# QA Testing Practice Project – Swag Labs

## Overview

This project demonstrates my software testing skills through manual testing and UI test automation on [Swag Labs](https://www.saucedemo.com/), a sample e-commerce web application.

The project covers functional testing of key user flows, including authentication, product sorting, shopping cart management, and checkout.

## Project Objectives

* Practice designing and executing manual test cases.
* Apply functional testing techniques to common e-commerce workflows.
* Implement UI test automation using Playwright and TypeScript.
* Organize automated tests using the Page Object Model (POM).
* Integrate automated test execution with GitHub Actions.

## Application Under Test

* **Application:** Swag Labs
* **URL:** https://www.saucedemo.com/
* **Test Environment:** Web browser
* **Test Account:** Standard User

## Testing Scope

### Manual Testing

Manual test cases are documented in Excel workbooks under `Test-Cases/`.

The documentation includes test cases for different application behaviors and user scenarios, with separate workbooks for the Standard User and Problem User.

### Automation Testing

Automated UI tests are located in `Automation/playwright/`.

The current automated test coverage includes:

| Feature        | Test Coverage                                                                  |
| -------------- | ------------------------------------------------------------------------------ |
| Authentication | Valid login, incorrect password, unregistered username                         |
| Products       | Products page verification, sorting by name and price, adding products to cart |
| Shopping Cart  | Cart item verification, removing products                                      |
| Checkout       | Completing checkout with valid information                                     |

## Tools and Technologies

* **Playwright** — Browser automation and UI testing
* **TypeScript** — Programming language for automated tests
* **Node.js & npm** — Runtime and dependency management
* **Git & GitHub** — Version control and repository hosting
* **GitHub Actions** — Continuous integration for automated test execution
* **Microsoft Excel** — Manual test case documentation

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── Test-Cases/
│   ├── QA-Testing-SwagLabs-Standard-User.xlsx
│   └── QA-Testing-SwagLabs-Problem-User.xlsx
├── Automation/
│   └── playwright/
│       ├── pages/
│       ├── tests/
│       ├── playwright.config.ts
│       ├── package.json
│       └── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js
* npm
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RafifShabi/qa-testing-practice-swaglabs.git
   ```

2. Navigate to the Playwright project directory:

   ```bash
   cd qa-testing-practice-swaglabs/Automation/playwright
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Install the Chromium browser:

   ```bash
   npx playwright install chromium
   ```

## Running Automated Tests

Run all automated tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode to observe browser interactions:

```bash
npx playwright test --project=chromium --headed
```

View the HTML test report:

```bash
npx playwright show-report
```

## Continuous Integration

This project uses GitHub Actions to run automated Playwright tests when code is pushed to the repository or a pull request is opened.

The workflow runs the tests in Chromium and uploads the HTML test report as a workflow artifact.

## Current Status

* Manual test case documentation created.
* Playwright UI automation implemented for authentication, products, cart, and checkout.
* Page Object Model (POM) applied to organize page interactions.
* GitHub Actions workflow configured and successfully executed.

## Repository

[QA Testing Practice Project – Swag Labs](https://github.com/RafifShabi/qa-testing-practice-swaglabs)

---

This project is part of my ongoing learning and portfolio development in software quality assurance and test automation.
