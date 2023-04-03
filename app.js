const express = require('express');
const tourRouter = require('./routes/tourRouter');
const app = express();  

app.use(express.json());
app.use('/api/v1/tours', tourRouter);

// app.post('/', (req, res)=>{ 
//     console.log(req.body);
//     res.send('testasdad');
// });

module.exports = app; 
