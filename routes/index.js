var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  var type = req.body.type;

  if(type === 'url_verification') {
    var challenge = req.body.challenge;
    console.log('url verification challenge: ' + challenge);
    res.status(200).json({'challenge': challenge});
  }

  /* else handle message events */
});

module.exports = router;
