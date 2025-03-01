let currentArtworkIndex = 0; // Starting index

// Function to display the current artwork
function showArtwork(direction) {
    const artworks = document.querySelectorAll('.artwork');
    const totalArtworks = artworks.length;

    // Hide the current artwork
    artworks[currentArtworkIndex].classList.remove('active');

    // Update the index based on the direction
    if (direction === 'next') {
        currentArtworkIndex = (currentArtworkIndex + 1) % totalArtworks; // Loops back to the first artwork
    } else if (direction === 'prev') {
        currentArtworkIndex = (currentArtworkIndex - 1 + totalArtworks) % totalArtworks; // Loops back to the last artwork
    }

    // Show the new artwork
    artworks[currentArtworkIndex].classList.add('active');
}

// Initialize by showing the first artwork
document.addEventListener('DOMContentLoaded', () => {
    showArtwork('next');
});
