const express = require('express');
const cors = require('cors');
const app =express();




app.use(cors());
app.use(express.json());
// Import route files
const CBCRouter = require('./routes/CBCroute');
// Use the imported route files as middleware
app.use('/cbc', CBCRouter);



// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
