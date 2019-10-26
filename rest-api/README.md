# rest-api

REST API built with Express, Sequelize and PostgreSQL

## REST API Documentation

### List of basic routes:

| **Route** | **HTTP** | **Header(s)** | **Body** | **Description**         |
| --------- | -------- | ------------- | -------- | ----------------------- |
| `/`       | GET      | `none`        | `none`   | Display "Welcome to Audrick's Todo App!" |

### List of todo routes:

| **Route** | **HTTP** | **Header(s)** | **Body**  | **Description** |
| --------- | -------- | ------------- | --------- | --------------- |
| `/api/todos` | GET    | `token`      | `none`   | Get all todos from logged user |
| `/api/todos` | POST   | `token`      | title:string, description:string          | Create a todo for logged user        |
| `/api/todos/:id` | GET | `token`     | `none`   | Get certain todo from logged user |
| `/api/todos/:id` | DELETE   | `token`| `none`   | Delete certain todo from logged user |
| `/api/todos/:id` | PUT      | `token`| title: string, description: string | Replace todo data from logged user   |
| `/api/todos/:id/description` | PATCH    | `token`       | description: string    | Update todo data from logged user    |

### Create a todo

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos               |
| ---------------- | ------------------------------------------------------------ |
| Method           | `POST`                                                       |
| Params           | `none`                                                       |
| Headers          | `none`                                                       |
| Data             | `title: string, description:string`                          |
| Success Response | `status: 201` , Content: {<br/>  "id": 1,<br/>  "title": "Make bed",<br/>  "description": "Before 6:30",<br/>  "user_id": 1,<br/>  "updatedAt": "2019-09-30T09:58:57.689Z",<br/>  "createdAt": "2019-09-30T09:58:57.689Z",<br/>}                                                 |
| Error Response   | `status:400` , Content: <br/>  "Please insert title and                                                                            description!"|

### Get all user's todos

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos      |
| ---------------- | ------------------------------------------------------------ |
| Method           | `GET`                                                        |
| Params           | `none`                                                       |
| Headers          | `token: string`                                              |
| Data             | `none`                                                       |
| Success Response | `status: 200` , Content: [<br/>  {<br/>    "id": 1,<br/>    "title": "Make bed",<br/>    "description": "Before 6:30",<br/>, <br/>    "user_id": 1,<br/>    "createdAt": "2019-09-30T09:58:57.689Z",<br/>    "updatedAt": "2019-09-30T09:58:57.689Z"<br/>  }<br/>] |
| Error Response   | `status:401` , Content: "You must sign in first!"            |

### Get a single todo

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos/:id           |
| ---------------- | ------------------------------------------------------------ |
| Method           | `GET`                                                        |
| Params           | `id: integer`                                                |
| Headers          | `token: string`                                              |
| Data             | `none`                                                       |
| Success Response | `status: 200` , Content: {<br/>  "id": 1,<br/>  "title": "Make Bed",<br/>  "description": "Before 6:30",<br/>  "user_id": 1,<br/>  "createdAt": "2019-09-30T09:58:57.689Z",<br/>  "updatedAt": "2019-09-30T09:58:57.689Z"<br/>} |
| Error Response   | `status:401` , Content: "You must sign in first!"            |
| Error Response 2 | `status:404` , Content: "Todo is not found"                  |

### Delete todo

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos/:id           |
| ---------------- | ------------------------------------------------------------ |
| Method           | `DELETE`                                                     |
| Params           | `id: integer`                                                |
| Headers          | `token: string`                                              |
| Data             | `none`                                                       |
| Success Response | `status: 200` , Content: {<br/>  "message": "Successfully deleted!"<br/>} |
| Error Response 1 | `status:401` , Content: "You must sign in first!"            |
| Error Response 2 | `status:404` , Content: "Todo is not found"                  |

### Update all todo

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos/:id  |
| ---------------- | ------------------------------------------------------------ |
| Method           | `PUT`                                                        |
| Params           | `id: integer`                                                |
| Headers          | `token: string`                                              |
| Data             | `title: string, description: string`        |
| Success Response | `status: 200` , Content: {<br/>  "message": "Successfully updated!"<br/>} |
| Error Response 1 | `status:401` , Content: "You must sign in first!"            |
| Error Response 2 | `status:404` , Content: "Todo is not found"                  |

### Update todo's description only

| URL              | https://limitless-citadel-47292.herokuapp.com/api/todos/:id/description |
| ---------------- | ------------------------------------------------------------ |
| Method           | `PATCH`                                                      |
| Params           | `id: integer`                                                |
| Headers          | `token: string`                                              |
| Data             | `description: string`                                        |
| Success Response | `status: 200` , Content: {<br/>  "message": "Successfully updated!"<br/>} |
| Error Response 1 | `status:401` , Content: "You must sign in first!"            |
| Error Response 2 | `status:404` , Content: "Todo is not found"                  |

### List of user signin and signup routes:

| **Route**       | **HTTP** | **Header(s)** | **Body**                           | **Description**                                        |
| --------------- | -------- | ------------- | ---------------------------------- | ------------------------------------------------------ |
| `/api/register` | POST     | `none`        | username: string, password: string | Sign up with new user info                             |
| `/api/login`    | POST     | `none`        | username: string, password: string | Sign in to get an access token based on credentials |

### Register User

| URL              | https://limitless-citadel-47292.herokuapp.com/api/signup              |
| ---------------- | ------------------------------------------------------------ |
| Method           | `POST`                                                       |
| Params           | `none`                                                       |
| Headers          | `none`                                                       |
| Data             | `username: string, password:string`                          |
| Success Response | `status: 201` , Content: {<br/>  "message": "User created",<br/>  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhbmRyZWFzc29zaWxvIiwiaWF0IjoxNTY5ODE5MTkyfQ.2DbuH10GPsGrUSHnWO6xbxlIO7w6MtULPnyzclfyPQA"<br/>}      |
| Error Response   | `status:400` , Content: [<br/>  "Invalid input!"]            |

### Login User

| URL              | https://limitless-citadel-47292.herokuapp.com/api/signin              |
| ---------------- | ------------------------------------------------------------ |
| Method           | `POST`                                                       |
| Params           | `none`                                                       |
| Headers          | `none`                                                       |
| Data             | `username: string, password:string`                          |
| Success Response | `status: 200` , Content: {<br/>  "message": "User successfully signed in...",<br/>  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbmRyZWFzc29zaWxvIiwiaWF0IjoxNTY5ODM3MzMyfQ.tpvF9LWFcK4dKmvUZQeRdpYeIjM2UXAPpif5EwXXdW4"<br/>}     |
| Error Response   | `status:400` , Content: "Incorrect username/password!"      |



## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ git clone https://github.com/AudrickOng/rest-api.git
$ cd rest-api
$ npm install
$ npm start
```

## Heroku Link

Access the website via https://limitless-citadel-47292.herokuapp.com/