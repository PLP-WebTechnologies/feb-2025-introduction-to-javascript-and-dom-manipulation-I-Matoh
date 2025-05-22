// Changing the text content of the "About Us" paragraph
const changeTextBtn = document.getElementById('change-text-btn');
const aboutText = document.getElementById('about-text');

changeTextBtn.addEventListener('click', () => {
  aboutText.textContent = "Our team is passionate about creating amazing digital experiences!";
});

// Toggle to CSS styles on the services list
const toggleStyleBtn = document.getElementById('toggle-style-btn');
const servicesList = document.getElementById('services-list');

toggleStyleBtn.addEventListener('click', () => {
  servicesList.classList.toggle('highlighted');
});

// Add a new contact info element dynamically
const addContactBtn = document.getElementById('add-contact-btn');
const removeContactBtn = document.getElementById('remove-contact-btn');
const contactContainer = document.getElementById('contact-container');

addContactBtn.addEventListener('click', () => {
  // Check if contact info already exists
  if (!document.getElementById('contact-info')) {
    const contactInfo = document.createElement('p');
    contactInfo.id = 'contact-info';
    contactInfo.textContent = 'Email: info@kiira.com';
    contactContainer.appendChild(contactInfo);
  }
});

// Remove the contact info element if it exists
removeContactBtn.addEventListener('click', () => {
  const contactInfo = document.getElementById('contact-info');
  if (contactInfo) {
    contactContainer.removeChild(contactInfo);
  }
});
