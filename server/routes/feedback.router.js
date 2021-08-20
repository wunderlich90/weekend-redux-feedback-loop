const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('GET api/feedback');
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET error /api/feedback', error)
        res.sendStatus(500);
        
    });
    
})

module.exports = router;