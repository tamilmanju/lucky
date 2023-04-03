const Tour = require('./../models/tourModel');

exports.getTour = async (req, res) => {
    try {
        const id = req.params.id;
        //console.log(id); 
        const tour = await Tour.findOne({_id:id});
        res.status(200).json({
            status:"success",
            tour 
        });
    } catch(err) {
        res.status(404).json({
            status:"fail",
            err
        });
    }
}

exports.updateTour = async (req, res)=>{

    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        res.status(200).json({
            status:"success",
            tour
        });
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            err
        });
    }
    
}


exports.deleteTour = async (req, res)=>{

    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
            tour
        });
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            err
        });
    }
    
}

exports.getAllTours = async (req, res)=>{
    try {
        const tour = await Tour.find();
        res.status(200).json({
            status:"success",
            tour
        });
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            err
        });
    }
    
    // json 
    //res.send('GET from controller');
}


exports.createTour = async (req, res)=>{
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            message: "Success",
            tour: newTour._id
        });
    } catch(err) {
        res.status(500).json({
            status:"failure",
            err
        });
    }

   
} 