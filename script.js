document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.glass-nav a');
    
    // Get all content panels
    const contentPanels = document.querySelectorAll('.content-panel');
    
    // Set home as active by default
    document.querySelector('.home-content').classList.add('active');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and panels
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding content panel
            const contentId = this.getAttribute('data-content');
            document.querySelector(`.${contentId}-content`).classList.add('active');
        });
    });
});