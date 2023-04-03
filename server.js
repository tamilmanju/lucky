const mongoose = require('mongoose');
const dotenv   = require('dotenv');
dotenv.config({path:'./config.env'}); 
 
// Database connection
mongoose.connect(process.env.DEV_DB).then(()=>{
    console.log('DB Connected!');
}).catch((err)=>{
    console.log(err);
});   
 
const app = require('./app');
 
// Server Creation
const port = process.env.PORT || 4000  
app.listen(port, ()=>{
    console.log(port);   
  //  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});     
// app.listen(port, function(err){
//     if (err) console.log("Error in server setup")
//     console.log("Server listening on Port", port);
// }); 


  

// 1. express
// 2. Mongoose
// 3. Dotenv