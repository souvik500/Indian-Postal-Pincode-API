This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### `Task`

Create a form with an input field where the user can enter a 6-digit Indian Postal Code. When the user submits the form, fetch the corresponding data from the API and display it on the page.
You need to create a Pincode Lookup app that uses the Indian Postal Pincode API to retrieve the details of a pincode.
The app should have an input field where the user can enter a pincode. There should also be a "Lookup" button that the user can click to fetch the details of the pincode.
When the "Lookup" button is clicked, the app should make a GET request to the API to retrieve the details of the pincode.

### The API endpoint to use is

https://api.postalpincode.in/pincode/<PINCODE>, where PINCODE is the pincode entered by the user.

The app should display the following details about the pincode:

Post office name

Pincode

District

State

`The details should be displayed in a UI as shown in the figma `-
https://www.figma.com/file/3cNCfMB8eiGezRAkt7T91s/Contest-3

### `Requirements`

The app should also allow the user to filter the results by post office name using an input field. The app should update the Ui dynamically as the user types in the filter input field.

Also handle errors accordingly- ie - if the postal code is not 6 digits then don't fetch the API rather show a message or an alert that the code is not 6 digits. Similarly if there is an error in the response, show that error on the screen. Also if the filtered Array has no object inside it after filtering even then show a message like “Couldn’t find the postal data you’re looking for…”

While the API is fetching data, please also show a loader of your choice. You can use a library for a loader or make a custom-css-loader. Show the loader till the data is fetching, once fetched don’t show the loader again. The filtering should happen real time and no loader is needed for that.

`API endpoint` - https://api.postalpincode.in/pincode/${pincode}
