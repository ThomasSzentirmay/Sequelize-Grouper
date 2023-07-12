const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('index', {
        user: [
            {
                email: 'jd@test.com'
            },
            {
                email: 'bob@test.com'
            },
            {
                email: 'tom@test.com'
            }
        ]
    });
})

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;