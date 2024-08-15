var express = require('express');
var router = express.Router();
var db = require("../repository/repo")

/* GET home page. */
router.get('/PERROS', async function(req, res, next) {
  let results = await db.findAll()
  console.log({ title: 'Express', results });
  res.render('PERROS', { title: 'Express', results });
});

module.exports = router;
