const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.status(200).json({
      result: 'Hello, World!',
    });
  } catch (err) {
    res.status(500).json({
      error: 'Oops! Something went wrong'
    })
  }
})

module.exports = router;