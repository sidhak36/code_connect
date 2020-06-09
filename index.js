
const express = require('express');
const app = express();
const port = 8000;

//Use the express router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Successfully fired express server at port ${port}`);
});