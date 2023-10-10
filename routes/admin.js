
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.post('/addCourse' , adminController.addCourse);

router.get('/getCourse' , adminController.getCourse);

router.post('/addModule' , adminController.addModule);

router.get('/getModule' , adminController.getModule);

router.post('/addTopic' , adminController.addTopic);

router.get('/getTopic' , adminController.getTopic);

module.exports = router;