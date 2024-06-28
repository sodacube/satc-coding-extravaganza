// Listen for the event that the web page has fully loaded, then run the function called fetchData.
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});


// Define the fetchData function that requests data from the server.
function fetchData() {
    // Make a request to the server at the '/data' endpoint to get the data.
    fetch('/data')
        .then(response => response.json()) // Once the data is received, convert it from JSON format to JavaScript objects.
        .then(data => updatePage(data)) // After conversion, send this data to updatePage function to display it on the page.
        .catch(error => console.error('Error fetching data:', error)); // If there is an error during this process, print the error in the console.
}

// Define the updatePage function which updates the web page with new data.
function updatePage(items) {
    // Find the part of the webpage where we want to add the images and text.
    const container = document.getElementById('imageTextContainer');
    container.innerHTML = ''; // Clear any existing content in this part of the page.

    // Loop through each item in the data received.
    items.forEach(item => {
        // Create a new division for each item and set up its structure.
        const element = document.createElement('div');
        element.className = 'imageTextItem'; // Assign a class name for styling purposes.
        element.innerHTML = `
        <div class="content-block">
            <img src="${item.imageUrl}" alt="Image for ${item.text}" class="dynamic-image">
            <div class="text-container">
                <p class="dynamic-text">${item.text}</p>
                <p class="additional-text">Learn more about this topic and how it can benefit you by clicking below.</p>
                <button class="cta-button">Learn More</button>
            </div>
        </div>
    `;
        container.appendChild(element); // Add this new division to the page.
    });
}
