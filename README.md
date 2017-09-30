# testing

## Test Types

* unit Tests - testing of individual functions or classes by mocking input and making sure the output is as expected
* integration Tests - testing several modules to ensure they work together as expected
* functional Tests - testing a scenario on the product itself (on the browser, for example) regardless the internal structure to ensure expected behavior
* end-to-end (e2e) - pretend you are a user and you want to accomplish a task and you go through the steps to reach that goal in your app
* performance
* penetration
* Load
* Usability
* A/B
* a11y

## Test Tools Types

It is common to usd a combination of tools to get what you need.

Provide a test environemnt - Mocha, Jasmine, Jest, Karma

Provide a testing structure - Mocha, Jasmine, Jest, Cucumber

Provide an asserions functions - Chai, Jasmine, Jest, Unexpected

Generate, display, and watch test results - Mocha, Jasmine, Jest, Karma

Generate and compare snapshots of component and data structures to make sure changes from previous runs are inteded - Jest, Ava

Provide mocks, spies, and stubs - Sinon, Jasmine, enzyme, Jest, testdouble

Generate code coverage reports - Istanbul, Jest

Provide a browser or browser-liek environment with a control on their scenarios execution - Protractor, Nightwatch, Phantom, Casper

### How do we prevent bugs?
* implement static types (Flow / TypeScript)
* use linting tool (EsLint). Learn how to write custom lint rools as well
* testing code
* manual testing

