const express = require('express');
//END OF IMPORTS
const PORT = process.env.PORT || 9000;
//END OF CONSTS
//MAIN PROGRAM
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT,()=>{console.log('Server running on port #'+PORT);});
