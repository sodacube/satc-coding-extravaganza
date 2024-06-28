// Load the 'express' module to make creating a web server simpler.
const express = require('express');

// Create an instance of an express application.
const app = express();

// Serve static files (like HTML, CSS, and JavaScript) located in the 'public' folder.
app.use(express.static('../public'));

// Define some data that the server will send to the client. This data is an array of objects, each containing an id, text, and an imageUrl.
const data = [
  { id: 1, text: "THE ULTIMATE GUIDE TO SA", imageUrl: "/images/image1.png" },
  { id: 2, text: "Australia's Darkest Night Sky", imageUrl: "/images/image2.png" },
  { id: 3, text: "The World's Best Wine", imageUrl: "/images/image2.png" }

  //TODO add CTA url for button
  //  { id: 3, text: "The World's Best Wine", imageUrl: "/images/image2.png", buttonUrl: "https://google.com" }

];

// Set up a route that listens for GET requests on the path '/data'. When a request is received, the server responds with the data in JSON format.
app.get('/data', (req, res) => {
  res.json(data);
});

// Define the port number that the server will listen on.
const PORT = 3000;
// Start the server and make it listen for requests on the specified port. A message is logged to the console when the server starts successfully.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
