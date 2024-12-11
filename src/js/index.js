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
    menus = document.querySelectorAll('#menus'),
    profileMD = document.getElementById('profile'),
    profileBtn = document.getElementById('profile-button')

/**
 * @ADD_EVENT
 */
hamburger.addEventListener('click', toggleNavbar);
hamburgerMD.addEventListener('click', toggleNavbarMD);
profileBtn.addEventListener('click', toggleProfile);

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
    aside.classList.toggle('w-1/2'); // Toggle between 50% width and 0 width
    aside.classList.toggle('w-[6%]');

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
        let links = element.children[1]
        if(!links.classList.contains('hidden')) {
            links.classList.add('hidden')
        } else {
            setTimeout(function() {
                links.classList.remove('hidden')
            }, 150)
        }
    });
}

function toggleProfile() {
    if (profileMD.classList.contains('opacity-0')) {
        profileMD.classList.remove('opacity-0', 'invisible');
        profileMD.classList.add('opacity-100');
    } else {
        profileMD.classList.remove('opacity-100');
        profileMD.classList.add('opacity-0', 'invisible');
    }
}



