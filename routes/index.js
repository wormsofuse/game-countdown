var express = require('express');
var router = express.Router();

const launchTime = new Date("12/07/2024 10:00").getTime()

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime();
  const numberOfMilliseconds = parseInt(launchTime - currentTime)
  res.render(
    'index',
     { title: 'Time until I cry', countDown: numberOfMilliseconds });
});

module.exports = router;
