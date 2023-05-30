
invitedGuest = [
  {
    dp: './assets/speekers/IMG-0235.JPG',
    name: 'Dorcas Charlse',
    title: 'Doctor, Surgion at Meritime Hospital', 
    about: 'lorhishsh jaisoao aosaoao'
  },
  {
    dp: './assets/speekers/IMG-0235.JPG',
    name: 'Dorcas Charlse',
    title: 'Doctor, Surgion at Meritime Hospital', 
    about: 'lorhishsh jaisoao aosaoao'
  },
  {
    dp: './assets/speekers/IMG-0235.JPG',
    name: 'Dorcas Charlse',
    title: 'Doctor, Surgion at Meritime Hospital', 
    about: 'lorhishsh jaisoao aosaoao'
  }, 
  {
    dp: './assets/speekers/IMG-0235.JPG',
    name: 'Dorcas Charlse',
    title: 'Doctor, Surgion at Meritime Hospital', 
    about: 'lorhishsh jaisoao aosaoao'
  }
]


// Get the features container element
const featuresContainer = document.querySelector('.features');

// Loop through the featureData array
invitedGuest.forEach((invitedGuest) => {
  // Create the feature element
  const featureElement = document.createElement('li');
  featureElement.classList.add('feature');

  // Build the HTML content for the feature
  featureElement.innerHTML = `
    <span class="dp">
      <img class="speaker-img" src="${invitedGuest.dp}" alt="speaker">
    </span>
    <span class="speaker-details">
      <div class="speaker">
        <h3 class="speaker-name">${invitedGuest.name}</h3>
        <p class="speaker-title">${invitedGuest.title}</p>
      </div>
      <p class="speaker-paragraph">${invitedGuest.about}</p>
    </span>
  `;

  // Append the feature element to the features container
  featuresContainer.appendChild(featureElement);
});

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
    moreLessButton.textContent = 'LESS';
  } else {
    moreLessButton.textContent = 'MORE';
  }

  // Update the toggle state
  isExpanded = !isExpanded;
}

// Attach a click event listener to the more/less button
moreLessButton.addEventListener('click', toggleFeaturesVisibility);

// Initially show the specified number of features
toggleFeaturesVisibility();
