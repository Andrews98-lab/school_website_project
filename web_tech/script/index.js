// JavaScript code in index.js

// Array of image paths
var imagePaths = [
    "images/f4.jpg",
    "images/f3.jpg",
    "images/f1.jpg",
    "images/f2.jpg"
];

// Index of the current image
var currentImageIndex = 0;

// Function to change the image
function changeImage(direction) {
    // Increment or decrement the current image index based on the direction
    currentImageIndex += direction;

    // Ensure the index stays within bounds
    if (currentImageIndex < 0) {
        currentImageIndex = imagePaths.length - 1;
    } else if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0;
    }

    // Update the src attribute of the image
    document.getElementById("currentImage").src = imagePaths[currentImageIndex];
}

// Add event listeners to the buttons
document.getElementById("prevButton").addEventListener("click", function() {
    changeImage(-1); // Go to previous image
});

document.getElementById("nextButton").addEventListener("click", function() {
    changeImage(1); // Go to next image
});
/** search Functionality **/
 function search() {
        var searchQuery = document.getElementById('search-input').value;
        // Check if the query is empty
        if (searchQuery.trim() === '') {
            alert('Please enter a search term.');
            return;
        }
        
        // Check if the query is a URL
        if (isValidURL(searchQuery)) {
            // If it's a URL, open it in a new tab
            window.open(searchQuery, '_blank');
        } else {
            // If it's not a URL, search Google
            window.open('https://www.google.com/search?q=' + encodeURIComponent(searchQuery), '_blank');
        }
    }
    
    // Function to check if a string is a valid URL
    function isValidURL(string) {
        // Regular expression to match URLs
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        
        return pattern.test(string);
    }