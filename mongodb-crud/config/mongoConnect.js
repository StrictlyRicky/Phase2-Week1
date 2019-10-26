const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'MongoDB_CRUD'

module.exports =
    new Promise((resolve, reject) => {
        MongoClient.connect(url,
            { useNewUrlParser : true ,
            useUnifiedTopology: true }, (err, client) => {
            if (err) {
                reject(err)
            }
            else {
                const db = client.db(dbName)
                console.log('Successfully connected to server')
                resolve({
                    db,
                    client
                })
            }
        })
    })