var express = require('express');
var router = express.Router();
const request = require('request')

router.get('/', (req, res) => {
  const fakeCaseId = () => Math.random().toString(16)
  const requestBody = () => ({
    // eslint-disable-next-line max-len
    'apiKey': '63ba67bf989fb8860251a70f1458b7a4338155a69a68f0e3b41fd3c6d52ad3fe901b8c100472f2b048e6efd5ec30307801f56814bcefb297fc96469b1e600dea',
    'caseId': fakeCaseId(),
  })

  const requestOptions = {
    url: 'https://urlgen.inspektlabs.com/newToken',
    method: 'POST',
    json: requestBody(),
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      res.send(body)
      console.log(body);
    } else {
      console.log(response.statusCode);
    }
  });
})

module.exports = router;
