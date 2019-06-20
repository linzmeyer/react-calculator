const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

console.log('in history.router.js!');

router.get( '/', ( req, res ) => {
  console.log('in get route!!!!!!!');
  let sqlText = `SELECT "expression" FROM "history";`;
  pool.query( sqlText )
  .then(( result ) => {
    console.log( result.rows );
    res.send( result.rows );
  })
  .catch(( error ) => {
    res.sendStatus( 500 );
  })
})

module.exports = router;
