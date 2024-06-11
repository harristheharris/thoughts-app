console.log(`.exe index.js`);
console.log(`index.js START`);

console.log(`importing express START`);
const express = require('express');
console.log(`importing express DOWNLOAD`);
console.log(`importing express COMPLETE`);

console.log(`importing db from ./config/connection START`);
const db = require('./config/connections.js');
console.log(`importing db from ./config/connection DOWNLOAD`);
console.log(`importing db from ./config/connection COMPLETE`);

console.log(`importing routes from ./routes START`);
const routes = require('./routes');
console.log(`importing routes from ./routes DOWNLOAD`);
console.log(`importing routes from ./routes COMPLETE`);

console.log(`port 3001 var PORT`);
const PORT = process.env.PORT || 3001;
console.log(`express var app`);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server  running on port ${PORT}! @ http://localhost:3001/`);
    });
  });


console.log(`index.js COMPLETE`);