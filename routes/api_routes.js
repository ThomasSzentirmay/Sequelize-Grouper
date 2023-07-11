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
    });
});

// GET all groups
router.get('/api/groups', (clientReq, serverRes) => {
    // Retrieve all groups from the db
    Group.findAll()
    .then(groups => {
        serverRes.send(groups)
    });
});

// Create Student


module.exports = router;