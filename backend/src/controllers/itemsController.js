const { query } = require('express');
const express = require('express');
const queryPromise = require('../database');
const timeUnit = require('timeunit');

const router = express.Router();

const priceCalculator = (price, startDate, endDate) => {
  let start = timeUnit.milliseconds.toDays(Date.parse(startDate));
  let end = timeUnit.milliseconds.toDays(Date.parse(endDate));

  let timeDiff = Math.floor(end - start);

  return price / timeDiff;
}

router.get('/', async (req, res) => {
  try {
    const sqlSelect = 'SELECT * FROM items;'

    const result = await queryPromise(sqlSelect);

    result.forEach(item => {
      item.daily = priceCalculator(item.price, item.saving_date_start, item.saving_date_end);
    })

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      error: 'Oops! Something went wrong'
    })
  }
})

module.exports = router;