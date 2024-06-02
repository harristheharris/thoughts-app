console.log(`connection.js START`);

console.log(`import connect and connection from mongoose START`);
const { connect, connection } = require('mongoose');
console.log(`import connect and connection from mongoose DOWNLOAD`);
console.log(`import connect and connection from mongoose COMPLETE`);

const connectionString = 'mongodb://127.0.0.1:27017/thoughtsDB';
//const connectionString = 'mongodb://localhost:27017/';
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//lets log our queries
set("debug", true);

module.exports = connection;

console.log(`connection.js COMPLETE`);