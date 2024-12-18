function toggleDiv(event) {
    // Prevent event bubbling for the close button
    if (event) {
      event.stopPropagation();
    }
    
    const div = document.getElementById('expandable-div');
    div.classList.toggle('expanded');
    div.classList.toggle('collapsed');
  }
  
  // Prevent collapsing when clicking inside the expanded div
  document.getElementById('expandable-div').addEventListener('click', (event) => {
    if (event.target.classList.contains('expanded')) {
      event.stopPropagation();
    }
  });
  