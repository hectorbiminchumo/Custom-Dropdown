// Get elements
const dropdownSelected = document.getElementById('dropdown-selected');
const dropdownOptions = document.getElementById('dropdown-options');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Toggle dropdown visibility
dropdownSelected.addEventListener('click', () => {
  dropdownOptions.style.display = 
    dropdownOptions.style.display === 'block' ? 'none' : 'block';
});

// Handle item selection
dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(dropdownItems)
    
    // Highlight the selected item
    dropdownItems.forEach((i) => i.classList.remove('selected'));
    event.target.classList.add('selected');
    
    // Set selected item text
    dropdownSelected.textContent = event.target.textContent;
    
    // Close the dropdown
    dropdownOptions.style.display = 'none';
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownOptions.style.display = 'none';
  }
});
