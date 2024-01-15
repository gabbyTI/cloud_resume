// Function to fetch visitor count from the API
function getVisitorCount() {
  fetch('https://counter-api/getVisitorCount')
    .then((response) => response.json())
    .then((data) => {
      // Update the counter on the webpage
      document.querySelector('.counter').textContent = data.visitorCount;

      // Call updateVisitorCount with the current count
      updateVisitorCount(data.visitorCount);
    })
    .catch((error) => {
      console.error('Error fetching visitor count:', error);
    });
}

// Function to update visitor count on the API
function updateVisitorCount(currentCount) {
  fetch('https://counter-api/updateVisitorCount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currentCount: currentCount,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Visitor count updated successfully:', data);
    })
    .catch((error) => {
      console.error('Error updating visitor count:', error);
    });
}

// Fetch the visitor count and update on page load
document.addEventListener('DOMContentLoaded', getVisitorCount);
