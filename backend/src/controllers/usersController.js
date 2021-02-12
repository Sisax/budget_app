const express = require('express');
const queryPromise = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
  const sqlSelect = 'SELECT * FROM users;';

  try {
    const result = await queryPromise(sqlSelect);
    res.status(200).json({
      users: result,
    });
  } catch (error) {
    console.error(error.sqlMessage);
    res.status(500).json({
      error: error,
    })
  }
});

module.exports = router;
