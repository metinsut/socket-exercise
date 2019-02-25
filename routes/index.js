const express = require("express");
const Home = require('./home.js');
const router = express.Router();

router.get('/', Home);

module.exports = router;