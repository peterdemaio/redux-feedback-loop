const express = require('express');
const router = express.Router();
const pg = require('pg')
const Pool = pg.Pool
const pool = new Pool({
    database: 'prime_feedback',
    host: 'localhost',
    port: 5432,

    max: 10,
    idleTimeoutMillis: 10000
})
// This is the post route with the SQL query text to add responses to the database.
router.post('/', (req, res) => {
    let feedbackToAdd = req.body
    console.log(feedbackToAdd)
    let queryText = 
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
    VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText, [feedbackToAdd.feeling, feedbackToAdd.understanding, feedbackToAdd.support, feedbackToAdd.comments, feedbackToAdd.flagged])
    .then((response) => {
        res.sendStatus(201)
    }).catch((e) => {
        console.log('Error in Post /feedback', e)
        res.sendStatus(500)
    })
})


module.exports = router