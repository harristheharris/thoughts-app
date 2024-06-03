const db = require('./config/connections.js');

function seed() {


    db.collection('thoughtusers').insertOne({
        username: 'daDoodHere',
        email: 'dadooder@gmail.com',
        thoughts: {},
        friends: {}
    });

    db.collection('thoughts').insertOne({
        thoughtText: "so many thought so many thought",
        createdAt: "2024-04-11 06:42:23",
        username: "daDoodHere",
        reactions: {}
    })
}

seed();