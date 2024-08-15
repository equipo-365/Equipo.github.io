var express = require('express');
var router = express.Router();
var db = require("../repository/repo")

/* GET home page. */
router.get('/perros', async function(req, res, next) {
  let results = await db.findAll()
  console.log({ title: 'Express', results });
  res.render('perros', { title: 'Express', results });
});

module.exports = router;
