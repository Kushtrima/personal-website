

// toggle menu >>> -----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active'); // Toggle the active class on the nav-toggle
        document.querySelector('.nav-menu').classList.toggle('show'); // Toggle the show class on the nav-menu
    });
});

// toggle menu <<< -----------------------------------------------------------------


// Links color hover and active affects ----------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-menu a');
    var currentLocation = window.location.href; 
    var pathname = window.location.pathname;

    links.forEach(function(link) {
        if(currentLocation.endsWith(link.getAttribute('href')) || pathname === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });
});

// Links color hover and active affects ----------------------------------------