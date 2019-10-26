# HacktivGit

## Usage

```
1. git clone https://github.com/AudrickOng/hacktivgit.git
2. cd hactivgit
3. npm install
4. npm run dev
```

## Errors

| Error Code | Message                        |
| :--------- | :----------------------------- |
| 401        | User Not Found                 |
| 401        | Starred Not Found              |
| 401        | Name Is Required               |
| 401        | Create Unsuccessful            |
| 401        | Username Is Required           |
| 401        | User Not Found                 |
| 401        | Owner And Repo Is Required     |
| 401        | Filter Field Must Not Be Empty |
| 401        | Current Search Returned 0      |
| 500        | Internal Server Error          |

## Routes

| Routes          | HTTP   | Header(s) | Body                             | Params                      | Description                              |
| --------------- | ------ | --------- | -------------------------------- | --------------------------- | ---------------------------------------- |
| /               | GET    | none      | none                             | none                        | Show All Repositories                    |
| /starred        | GET    | none      | none                             | none                        | Show All Starred Repositories            |
| /               | POST   | none      | {repository:object}              | none                        | Create New Repository                    |
| /user/:username | GET    | none      | none                             | {username:string}           | Find By Username                         |
| /:owner/:repo   | DELETE | none      | none                             | {owner:string, repo:string} | Unstar A Repository                      |
| /filter         | POST   | none      | {name:string, isPrivate:boolean} | none                        | Filter Repository By Name and/or Private |