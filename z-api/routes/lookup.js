const express = require('express');
const router = express.Router();

const applicationTypes = require('../data/applicationTypes');
const lookupData = require('../data/lookupData');

/* GET users listing. */
router.get('/lookup/applicationTypes', function(req, res, next) {
   res.status(200).json(applicationTypes);
});

router.get('/lookup/instances', function(req, res, next) {
   res.status(200).json(lookupData.instanceTypes);
});

router.get('/lookup/apps', function(req, res, next) {
   res.status(200).json(lookupData.apps);
});

module.exports = router;
