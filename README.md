```markdown
# WebdriverIO Cucumber Project

This is a WebdriverIO / Cucumber project that utilizes the page object model in a CI/CD pipeline.

## Setup

To set up the project, run the following commands:

```bash
npm init -y
npm init wdio
```

## WebdriverIO Setup Options:

- **Mode**: Local
- **Framework**: Cucumber
- **Compiler**: None
- **Test File Generation**: Auto-generate test files
- **Test File Location**: Default
- **Page Object Location**: Default
- **Reporters**: Spec reporter
- **Drivers**: Chromedriver

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

You can create a `README.md` file in the root directory of your project and copy-paste the content above into it. This will provide a clear and concise guide for anyone who wants to set up or run tests using your WebdriverIO Cucumber project.