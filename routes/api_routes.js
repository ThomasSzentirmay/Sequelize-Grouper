// HERE WE ARE LISTENING FOR FETCH REQUESTS AND SENDING THINGS BACK TO THE FRONT END WHEN WE GET A FETCH FROM THE FRONT END

const router = require('express').Router();
const Student = require('../models/Student');
const Group = require('../models/Group');

// Create Group
router.post('/api/group', (clientReq, serverRes) => {
    Group.create({
        name: clientReq.body.name
    }).then(newGroup => {
        serverRes.send('group added successfully!')
    }).catch(err => {
        console.log(err.errors);
    })
});

// GET all groups
router.get('/api/groups', (clientReq, serverRes) => {
    // Retrieve all groups from the db
    Group.findAll({
        include: {
            model: Student,
            order: [[Student, 'groupId', 'Asc']]
        }
    }).then(groups => {
        serverRes.send(groups)
    });
});

// Create Student
router.post('/api/student', (clientReq, serverRes) => {
    Student.create(clientReq.body)
        .then(() => serverRes.send('Student added'));
});

module.exports = router;