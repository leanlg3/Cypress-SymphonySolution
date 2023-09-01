# Cypress-Automation-Framework

Running Automated Tests Locally
Prerequisites
Before running the automated tests locally, make sure you have the following prerequisites installed on your machine:

Node.js:https://nodejs.org/en

Setup

Clone the Repository:
git clone <repository_url>
cd <repository_directory>

Install Dependencies:

npm install

Configure Cypress:

Cypress may require additional configuration, such as setting up custom commands or environment variables. You can configure Cypress in the cypress.json or through environment variables.

Running the Tests
To run the automated tests locally, use the following command:

npm run cy:open

This command will open the Cypress Test Runner, and you can select the test suite you want to run from the UI.

On CI using Cypress Dashboard

Ensure you have a Cypress Dashboard account.

Create a new project on the Cypress Dashboard.

Obtain your project's record key from the Cypress Dashboard settings.

Configure your CI/CD pipeline to run Cypress tests and report results to the Cypress Dashboard.

In your CI/CD provider settings, add a secret or environment variable called CYPRESS_RECORD_KEY and set its value to your project's record key.

Trigger your CI/CD pipeline (e.g., by pushing changes to the repository).
