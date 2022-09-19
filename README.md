# RxMobile-Dummy-react-myntra-node_gql

- This is the server side API code of react-myntra-dummy web/app and react-myntra-admin.

# The Clean Architecture

Clean Architecture is a set of standards that aims to develop layered architectures that make it easier to write quality code that will perform better, is easy to maintain, and has fewer dependencies as the project grows.
The illustration below shows the four concentric circles that compose a Clean Architecture, how they interact with each other, and their dependencies.

<p align="center">
    <img height="350" src="docs/images/high-level-diagram.jpg">
  </p>

## Features

- **User Api**

- Register API
  - We have added the register API to register the user on the react-myntra-dummy web and app.
- Login API
  - We have added the login API in which user can login on the app/web using the email and password.
- Change password API
  - We have added the change password API in which user can change there password if they remember there existing password.
- Forgot password API
  - We have added the forgot password API, if you forgot your password then In this API you will receiver OTP on register email.
- Reset password API
  - We have added the Reset password API, In which you can enter Received OTP and new password to reset your password.
- Add Address API
  - We have added the Add Address API, In which user will add there product delivery address.
- Get Address List API
  - We have added the Address List APi, In which user will get there added address in a list.
- Edit Address
  - We have added the Edit address APi, In which user can edit there added address information.
- Delete Address
  - We have added the Delete address APi, In which user can delete there added address.
- Add Payment Info (card/upi)
  - We have added the Add Payment Info API, In which user can save there payment method card/upi.
- Get Payment Info list (card/upi)
  - We have added the get Payment Info List API, In which user can get there saved payment details card/upi.
- Edit Payment Info (card/upi)
  - We have added the edit Payment Info API, In which user can edit there payment details card/upi.
- Delete Payment Info (card/upi)

  - We have added the delete Payment Info API, In which user can delete there payment details card/upi.

- **Admin API**
- Register API
- We have added the register API to register the admin on the react-myntra-dummy web and app.
- Login API
  - We have added the login API in which admin can login on the app/web using the email and password
- Change password API
  - We have added the change password API in which admin can change there password if they remember there existing password.
- Forget Password API
  - We have added the Forget password API in which admin can change there password if they forget there existing password we will sent the otp on mail for verification.
- Reset Password API
  - We have added the reset password API in which admin can change there password if they forget there existing password we will sent the otp on mail for verification and if otp is matched than they are able to change password.  
- Product Api
- Add main category API
 - We have added the Add main category API to Add new main category of products in the react-myntra-dummy web and app.
 - Get all main category API
  - We have added the get all  main category API to to get all main categories of products in the react-myntra-dummy web and app.
# Tech components

- **Node**

  - Node.js is one of the most popular back-end JavaScript and TypeScript libraries for building Server side apis and database operations

- **TypeScript**

  - TypeScript Code is converted into Plain JavaScript Code: TypeScript code can’t be natively interpreted by browsers. So if the code was written in TypeScript, it gets compiled and converted into JavaScript. This process is known as Trans-piled. With the help of JavaScript code, browsers are able to read the code and display it.
  - JavaScript is TypeScript: Whatever code is written in JavaScript can be converted to TypeScript by changing the extension from .js to .ts.
  - Use TypeScript anywhere: TypeScript can be compiled to run on any browser, device, or operating system. TypeScript is not specific to any single environment.
  - TypeScript supports JS libraries: With TypeScript, developers can use already existing JavaScript code, incorporate popular JavaScript libraries, or call the TS Code from native JavaScript code.

- **GraphQL**

  - GraphQL is a query language for APIs that has quickly gained popularity over the last few years as an alternative to REST. As more developers build their APIs in GraphQL

- **MongoDB**

  - MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.

- **Unit Testing**
  - Junit Framework
  - Offers a CLI tool to control your tests easily
  - Comes with an interactive mode that automatically runs all affected tests for the code changes you’ve made in your last commit
  - Provides syntax to test a single test or skip tests with .only and .skip. This feature is useful when debugging individual
    tests

## Running the apps

run `npm install` under the project , and then run `npm run build` to build the dist.
then run `npm run dev` to start the local development server
