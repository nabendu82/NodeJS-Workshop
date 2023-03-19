const { MongoClient } = require('mongodb');

const connURL = 'mongodb+srv://admin:admin@cluster0.p3hxgep.mongodb.net/taskManagerDB?retryWrites=true&w=majority'
const dbName = 'task-manager-db';

MongoClient.connect(connURL, { userNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database');

    const db = client.db(dbName);
    // db.collection('users').insertOne({
    //     name: 'Shikha',
    //     age: 36
    // })
    // .then(result => console.log("Data inserted", result.ops))
    // .catch(error => console.log(error))

    db.collection('users').insertMany([
        {name: 'Shikha', age: 36},{name: 'Nabendu', age: 40}
    ])
    .then(result => console.log("Data inserted", result.ops))
    .catch(error => console.log(error))
})