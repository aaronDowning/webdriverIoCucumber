
# WebdriverIO Cucumber Project

This is a WebdriverIO / Cucumber project that utilizes the page object model in a CI/CD pipeline.

## Setup

To set up the project, run the following commands:

```bash
npm init -y
npm init wdio
```

## WebdriverIO Setup Options:

```
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Web - web applications in the browser
? With which browser should we start? Chrome
? Which framework do you want to use? Cucumber (https://cucumber.io/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes
? What should be the location of your feature files? Use Default
? What should be the location of your step definitions? Use Default
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? Use Default
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? <skip>
? Do you want to add a service to your test setup? <skip>
? What is the base url? http://localhost
? Do you want me to run `npm install` Yes
```

## Optional Setup

Modify `wdio.conf.js` to adjust the path for step definitions:

From:
```bash
./features/step-definitions//steps.js
```
To:
```bash
./features/step-definitions/*.js
```

## Running Tests

### Run All Tests:

```bash
npx wdio
```

### Run Specific Tests:

```bash
npx wdio --spec ./features/login.demo.feature
```
```
