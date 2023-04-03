const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.route('/').get(tourController.getAllTours).post(tourController.createTour).patch((req, res)=>{
    res.send('patch');
});

router.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.getTour);

// tourController.deleteTour
module.exports = router;