# user_directory

https://sanjothebay.github.io/user_directory/

https://github.com/sanjothebay/user_directory


![image](https://user-images.githubusercontent.com/67298961/109753810-77d37100-7ba8-11eb-827c-33d5c08b3840.png)


# Table of contents

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
3. [Dependancies](#Dependancies)
4. [Components](#Components)
5. [Submission Video](#Submission_Video)
6. [LICENSE](#LICENSE)


## Instruction <a name="Instruction"></a>

create a employee directory with React. This assignment will require you to break up your application's UI into components, 
manage component state, and respond to user events.

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

* Deploy this site to GitHub Pages using the [Create React App docs for deployment.](https://create-react-app.dev/docs/deployment/#github-pages)



## Getting Started <a name="Getting_Started"></a>

npx create-react-app to create teh React Application.
running npm init from the command line.
npm install To added the dependancies:
The application will be invoked by using the following command:

```
npm start To run the App
npm run test To run the tests 
npm deploy To run gh-pages -d build
npm build To run npm react-scripts build
npm predeploy To run npm run build
```

## Dependancies <a name="Dependancies"></a>

```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.7.3",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "gh-pages": "^3.1.0",
    "moment": "^2.29.1",
    "react": "^17.0.1",
    "react-bootstrap": "^1.5.0",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.0"
  },
```

## Components <a name="Components"></a>

### Api Used

The APi that wasd use to get the Data for the application:

[Random User API](https://randomuser.me/)

![image](https://user-images.githubusercontent.com/67298961/109753911-af421d80-7ba8-11eb-9f31-23afdfb2c651.png)

### SearchResultsContainer

SearchResultsContainer File we are calling the API.
we are also Creating the Function for the onClick Function. When click on teh Table tittle it will ascending and descending.
We are also Devinding the fucntionality for the searching by filter fucntion. As when the user type in a letetr or a numebr 
it will filter search resluts.

![image](https://user-images.githubusercontent.com/67298961/109754977-b10ce080-7baa-11eb-98bb-45bdf43bddfb.png)

We are also Definding the Porps that well be sent out to be use. 

![image](https://user-images.githubusercontent.com/67298961/109755053-db5e9e00-7baa-11eb-926d-86e5b5406c1f.png)

### UserResultsList

In this section of the code, Its rendering the props that will be displayed in the table content.

![image](https://user-images.githubusercontent.com/67298961/109755131-ff21e400-7baa-11eb-8183-388c3b902095.png)

### SerachForm

This is the Form that is the user will use to filter out the serach Functionality. It is Hanlding the 
onChange event the will take place when the user types in a letter or a number and wil be filtered by the props.handleInputChange

![image](https://user-images.githubusercontent.com/67298961/109755203-309aaf80-7bab-11eb-8a4c-3a9f743fcd45.png)


## Submission Video <a name="Submission_Video"></a>

![5060lu](https://user-images.githubusercontent.com/67298961/109757857-3a72e180-7bb0-11eb-9547-0d8fe1a9abfe.gif)

## LICENSE <a name="LICENSE"></a>

License under the [MIT License](LICENSE)

License under the [MIT License](LICENSE)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# user_directory
# user_directory
