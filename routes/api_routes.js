const router = require('express').Router();
const Student = require('../models/Student');
const Group = require('../models/Group');

// Create Group
router.post('/api/group', (clientReq, serverRes) => {
    Group.create({
        name: clientReq.body.name
    }).then(newGroup => {
        serverRes.send('group added successfully!')
    });
});

// Create Student
router.post('/api/student', (clientReq, serverRes) => {
    Student.create({
        firstInput: clientReq.body.firstInput
        lastInput: clientReq.body.lastInput
        emailInput: clientReq.body.emailInput
    }).then(newGroup => {
        serverRes.send('group added successfully!')
    });
});

module.exports = router;