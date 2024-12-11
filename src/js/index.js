/**
 * @DECLARE_ELEMENT
 */

// SMALL SCREEN
let hamburger = document.getElementById('hamburger-sm'),
    navbar = document.getElementById('navbar-sm'),
    profile = document.getElementById('profile-sm');

// BIG SCREEN
let hamburgerMD = document.getElementById('hamburger-md'),
    navbarMD = document.getElementById('navbar-full'),
    asideDashBoard = document.getElementById('aside-dashboard'),
    aside = document.getElementById('aside'),
    menus = document.querySelectorAll('#menus')

/**
 * @ADD_EVENT
 */
hamburger.addEventListener('click', toggleNavbar);
hamburgerMD.addEventListener('click', toggleNavbarMD);

/**
 * @CONTROLLER
 */

// SMALL SCREEN
function toggleNavbar() {
    navbar.classList.toggle('hidden')
    profile.classList.toggle('hidden')
}

// LARGE SCREEN
function toggleNavbarMD() {
    // ASIDE DASHBOARD HEADER
    asideDashBoard.firstElementChild.classList.toggle('hidden')
    asideDashBoard.classList.toggle('flex')
    asideDashBoard.classList.toggle('border-b')
    
    // ASIDE
    aside.classList.toggle('!w-auto')

    // BUTTON
    var icon = hamburgerMD.firstElementChild;    

    if(icon.classList.contains('fa-circle-left')) {
        icon.classList.remove('fa-circle-left')
        icon.classList.add('fa-circle-right')
    } else {
        icon.classList.add('fa-circle-left')
        icon.classList.remove('fa-circle-right')
    }

    // NAVBAR
    menus.forEach(element => {
        let links = element.children[1];
        links.classList.toggle('hidden')
    });

    
}

