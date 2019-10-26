# mongoose-CRUD

REST API with Express and Mongoose

## validation
### member
  1. Email format
  2. Email unique
  3. Phone number length must be between 11 and 13
## Default Value
### transaction
  - fine = 0
## Usage
Route                 | HTTP   | Header(s) | Body                                | Params          | Description
----------            | ------ | --------- |------------------------------       | --------        | -----------
/books                | GET    | none      | none                                | none            | Get all books
/books/:id            | GET    | none      | none                                | ObjectId        | Get single book
/books                | POST   | none      | {isbn,title,author,category,stock}  | none            | Create new book record
/books/:id            | DELETE | none      | none                                | ObjectId        | Delete book by ID
/books/:id            | PUT    | none      | {isbn,title,author,category,stock}  | ObjectId        | Update book
/books/:id            | PATCH  | none      | {stock}                             | ObjectId        | Update book
/members              | GET    | none      | none                                | none            | Get all members
/members/:id          | GET    | none      | none                                | ObjectId        | Get single member
/members              | POST   | none      | {name,address,zipcode,email,phone}   | none            | Create new member record
/members/:id          | DELETE | none      | none                                | ObjectId        | Delete member
/members/:id          | PUT    | none      | {name,address,zipcode,email,phone}   | ObjectId        | Update member
/members/:id          | PATCH  | none      | {phone}                             | ObjectId        | Update member
/transactions         | GET    | none      | none                                | none            | Get all transactions
/transactions/filter/:bookId | GET    | none      | none                         | ObjectId        | Search transaction by bookId
/transactions/:id     | GET    | none      | none                                | ObjectId        | Get single transaction
/transactions         | POST   | none      | {member,in_date,out_date,due_date,booklist} | none            | Create new transaction
/transactions/:id     | DELETE | none      | none                                | ObjectId        | Delete transaction
/transactions/:id     | PUT  | none      | {member,in_date,out_date,due_date,booklist} | ObjectId        | Update transaction
/transactions/:id     | PATCH  | none      | {fine}                              | ObjectId        | Update transaction


## Usage

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ git clone https://github.com/AudrickOng/mongoose-crud.git
$ cd mongoose-crud
$ npm install
$ npm run dev
```