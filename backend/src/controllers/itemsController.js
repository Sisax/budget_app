const express = require('express');
const timeUnit = require('timeunit');
const Item = require('../model/Item');

const router = express.Router();

const priceCalculator = (price, startDate, endDate) => {
  let start = timeUnit.milliseconds.toDays(Date.parse(startDate));
  let end = timeUnit.milliseconds.toDays(Date.parse(endDate));

  let timeDiff = Math.floor(end - start);

  return price / timeDiff;
}

router.get('/', async (req, res) => {
  try {
    Item.find({}, (err, items) => {
      items.forEach(item => {
        item.daily = priceCalculator(item.price, item.saving_date_start, item.saving_date_end);
      })
      
      res.status(200).json(items)
    })
  } catch (error) {
    res.status(500).json({
      error: 'Oops! Something went wrong'
    })
  }
})

router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    savingDateStart: req.body.start,
    savingDateEnd: req.body.end,
    imageUrl: req.body.image
  });

  try {
    const savedItem = await item.save();
    res.send(savedItem);
  } catch (err) {
    res.status(400).send(err);
  }
})

module.exports = router;