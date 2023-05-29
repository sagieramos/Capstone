// Get the necessary elements
const featuresContainer = document.querySelector('.features');
const moreLessButton = document.querySelector('.more-less');

// Define the number of initially visible features and the toggle state
const initiallyVisibleFeatures = 2;
let isExpanded = false;

// Function to toggle the visibility of features
function toggleFeaturesVisibility() {
  const features = Array.from(featuresContainer.querySelectorAll('.feature'));

  // Toggle the visibility of features based on the toggle state
  features.forEach((feature, index) => {
    if (isExpanded || index < initiallyVisibleFeatures) {
      feature.style.display = 'flex';
    } else {
      feature.style.display = 'none';
    }
  });

  // Toggle the text of the more/less button
  if (isExpanded) {
    moreLessButton.textContent = 'MORE';
  } else {
    moreLessButton.textContent = 'LESS';
  }

  // Update the toggle state
  isExpanded = !isExpanded;
}

// Attach a click event listener to the more/less button
moreLessButton.addEventListener('click', toggleFeaturesVisibility);

// Initially show the specified number of features
toggleFeaturesVisibility();
