const mongoConnect = require('../config/mongoConnect')
const ObjectId = require('mongodb').ObjectId

class Book {
    static findAll() {
        return new Promise((resolve, reject) => {
            let mongoClient
            mongoConnect
            .then(({db, client}) => {
                mongoClient = client
                const bookCollection = db.collection('books')
                return bookCollection.find().toArray()
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                mongoClient.close()
            })
        })
    }
    static findById(id) {
        return new Promise((resolve, reject) => {
            let mongoClient
            mongoConnect
            .then(({ db, client }) => {
                mongoClient = client
                const bookCollection = db.collection('books')
                return bookCollection.findOne({
                    _id: ObjectId(id)
                })
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                mongoClient.close()
            })
        })
    }
    static create(obj) {
        return new Promise((resolve, reject) => {
            let mongoClient
            mongoConnect
            .then(({db, client}) => {
                mongoClient = client
                const bookCollection = db.collection('books')
                return bookCollection.insertOne(obj)
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                mongoClient.close()
            })
        })
    }
    static update(id, obj) {
        return new Promise((resolve, reject) => {
            let mongoClient
            mongoConnect
            .then(({db, client}) => {
                mongoClient = client
                const bookCollection = db.collection('books')
                return bookCollection.updateOne({
                    _id: ObjectId(id)
                }, obj)
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                mongoClient.close()
            })
        })
    }
    static delete(id) {
        return new Promise((resolve, reject) => {
            let mongoClient
            mongoConnect
            .then(({db, client}) => {
                mongoClient = client
                const bookCollection = db.collection('books')
                return bookCollection.deleteOne({
                    _id : ObjectId(id)
                })
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                mongoClient.close()
            })
        })
    }
}

module.exports = Book