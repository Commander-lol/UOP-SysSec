var express = require('express'),
    router = express.Router(),
    util = require("../local_modules/utils"),
    mem = require("../local_modules/memdb");

/* GET home page. */
router.get('/', function(req, res, next) {
    var s = util.sources;
    s.posts = mem.posts;
    res.render('index', util.merge({ title: 'Express' }, s));
});

router.post('/new', function(req, res, next) {
    res.json({title: "TEST", body: "aoisdnoaisn doiansdoi n"});
});

module.exports = router;
