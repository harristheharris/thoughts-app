console.log(`.exe routes/index.js`);
console.log(`routes/index.js START`);

console.log(`routes/index.js START`);
console.log(`creating a routes instance`);
const router = require('express').Router();
console.log(`routes/index.js COMPLETE`);

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

console.log(`routes/index.js COMPLETE`);
