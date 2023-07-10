const router = require('express').Router();
const Student = require('../models/Student');

router.get('/api/test', (clientReq, serverRes) => {
    serverRes.send('test works!');
});

module.exports = router;