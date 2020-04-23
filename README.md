# Jest & Enzyme Mini-Sprint

This sprint is intended to familiarize yourself with testing React using Jest, a popular JS testing framework.

You will be testing SearchSplash, a front-end image-search application, as you examine the application's behavior and implement various ways of asserting those behaviors.

- [ ] Clone the `student` branch of this repo to your local machine.

- [ ] To initialize a package.json file, from the root directory, run the command: `npm install`

- [ ] Start your server by running the command: `npm start`

- [ ] Start your tests in the interactive watch mode by running the command: `npm test`

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

**You will need an Unsplash API key to fill out** `/src/config.js`. **You can obtain one [here](https://unsplash.com/developers).**

## Dependencies

Although Create-React-App comes with Jest, we will also be making use of the following dependencies as listed in `package.json`. Familiarize yourself with the following:

**enzyme** - JavaScript Testing utility for React that makes it easier to test your React Components' output.<br/>
**jest-enzyme** - Allows connection between Jest & Enzyme.<br/>
**enzyme-adapter-react-16** - Adapts Enzyme to the code we will be providing it.<br/>
**prop-types** - Runtime type checking for React props and similar objects.<br/>
**check-prop-types** - Manually check proptypes, returning any errors instead of logging them to console.error.

---

## Step 1 - Getting Started

Take a few minutes to interact with the application to understand its behavior.

Explore the React components to see how data is being passed around the application.

Think about what details you would like to assert for each React component.

- For example, is my function being invoked on componentDidMount? Is state updating with user action? Are child components being rendered? These are the questions you'll be asking yourself as you determine what to test in your application.

## Step 2 - Configuration & Tools

Examine the following files.

`/src/setupTests.js` configures Enzyme with our EnzymeAdapter and other options we choose.

`/src/testUtils.js` contains 2 helper functions that we'll be using frequently throughout testing.

## Step 3 - ImageList

After you've examined the above, navigate to `/src/components/ImageList.test.js`.

This test file has been filled out already and provides some context on how you'll be approaching the remaining test files.

The **setup** function is a helper function that we build for each test file. Its purpose is to return a rendered copy of a component.

These copies can be a shallow render or a full DOM render depending on whether you call **shallow** or **mount**. More information about this can be found [here](https://blog.usejournal.com/testing-with-jest-and-enzyme-in-react-part-4-shallow-vs-mount-in-enzyme-d60cad73f85c). The way we build **setup** can vary between files, depending on what you need to render the component with.

- Example 1: ImageList's setup() will return a shallow render that uses made-up default props.
- Example 2: SearchBar's setup() will return a shallow render that accepts some props as a parameter.

After examining ImageList's test file, proceed to fill out the remaining test files with what you have learned. Browse through Jest and Enzyme's documentation for methods that may assist you in asserting behaviors.

## Step 4 - ImageCard

Similar to ImageList, ImageCard will also work with props. We mimic this behavior in `/src/components/ImageCard.test.js`.

- [ ] Complete ImageList's **beforeEach()** statement.
- [ ] Complete ImageList's 4 tests. You can use our provided **findByTestAttr** helper to help you accomplish these.

## Step 5 - SearchBar

SearchBar will receive a method prop **onSearchSubmit()** from App. We'll mock this function in `src/components/SearchBar.test.js`.

This test file will also introduce you to **.simulate()** to mimic user actions on specific HTML elements.

- [ ] The **_Renders_** test block has a completed **beforeEach()** statement. Complete its 4 incomplete tests.
- [ ] Complete the **beforeEach()** statement in the **_If search term is submitted_** test block.
- [ ] Complete the 4 tests in the **_If search term is submitted_** test block.

## Step 6 - App

The test blocks in `src/components/App.test.js` will be asserting behaviors related to rendering, componentDidMount, and an API call. This test file will introduce you to the **spyOn()** function and using **jest.fn()** to mock an API call.

- [ ] Write 3 tests from scratch from the instructions in the **_Renders_** test block.
- [ ] Complete the 2 tests in the **_On componentDidMount_** test block.
- [ ] Complete the **beforeEach()** statement and 1 test in the **_Unsplash API call_** test block.

---

## Testing Render

To test if an element or a component exists, we can use **wrapper.find** to search the component for a specific attribute. Our helper function **findByTestAttr** uses the Enzyme find method to more accurately select elements from the wrapper. Testing its existence then is as simple as making sure it has a length of 1 or by using **.exists()**.

## Testing State

To test a component's state, we can use **wrapper.state()** to obtain the value of a specific state property and even console log it using **debug()**.

To test if a component's state has changed, you will need to mimic the behavior that would cause that state change by applying several methods to the wrapper. Enzyme's **.simulate()** may offer several ways of doing so.

## Testing React Methods & Functions

Jest provides Mock Functions such as **jest.fn()** that can track a function of your choosing. These mocks can capture various kinds of information about your function for testing, such as how many times it was called, what arguments were passed in, etc.

Jest's **spyOn()** method is another way to keep track of a function. It works similarly to **jest.fn()** but may have different implementations for different scenarios.

## Conclusion

Once you have completed the test files for `ImageCard`, `SearchBar`, and `App`, think about what other behaviors could have been tested and what ways we could better organize them using **describe()**.

[Link](https://jestjs.io/docs/en/getting-started) to Jest documentation.
[Link](https://enzymejs.github.io/enzyme/) to Enzyme documentation.
