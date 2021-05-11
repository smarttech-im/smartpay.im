

/* Clear emails
===================*/
const emailLinks = document.querySelectorAll('.email');
emailLinks.forEach(function(link) {
if (link !== undefined) {
    link.setAttribute('href', link.getAttribute('href').replace("...", "@").replace(/\.\.\./g, ".") );
    link.innerHTML = link.innerHTML.replace("...", "@").replace(/\.\.\./g, ".");
}
});


/* Menu
===================*/
var toggleMenu = function() {
var menu = document.querySelector('.navbar') // Using a class instead, see note below.
menu.classList.toggle('navbar-dropdown');
menu.classList.toggle('navbar-collapse');
}
document.getElementById("navbar-toggle").addEventListener("click", toggleMenu);


/* Menu item click
===================*/
var hideMenu = function() {
var menu = document.querySelector('.navbar') // Using a class instead, see note below.
menu.classList.remove('navbar-dropdown');
menu.classList.add('navbar-collapse');
}
document.getElementById("primary-menu").addEventListener("click", hideMenu);


/* Scroll
===================*/
const menuItems = document.querySelectorAll('.navbar-nav > li');
let last_known_scroll_position = 0;
let ticking = false;
document.addEventListener('scroll', function(e) {
last_known_scroll_position = window.scrollY;

if (!ticking) {
    window.requestAnimationFrame(function() {
    var elementList = document.getElementsByClassName("scroll-trigger");
    if (elementList !== undefined) {
        for (let index = 0; index < elementList.length; index++) {
            const element = elementList[index];
            let eTop = element.getBoundingClientRect().top;
            let eBottom = element.getBoundingClientRect().bottom;
            let isInView = eTop < window.innerHeight
                || eBottom < window.innerHeight;
            
            if (element.hasAttribute('scroll-trigger')) {
                let className = element.getAttribute('scroll-trigger');

                if (isInView) {
                    element.classList.add(className);
                } else {
                    element.classList.remove(className);
                }

                if (element.hasAttribute('scroll-trigger-alt-class')) {
                    let altClass = element.getAttribute('scroll-trigger-alt-class');
                    if (isInView) {
                        element.classList.remove(altClass);
                        
                    } else {
                        element.classList.add(altClass);
                    }
                }
            }

            // change menu selection
            if (isInView && element.hasAttribute('id')) {
                let id = '#' + element.getAttribute('id');
                menuItems.forEach(function(menuLink) {
                    if (!menuLink) {
                        return;
                    }
                    if (menuLink.children.length !== 1) {
                        return;
                    }

                    if (menuLink.children[0].getAttribute('href') === id) {
                        menuLink.classList.add('active');
                    } else {
                        menuLink.classList.remove('active');
                    }
                });

            }
        }
    }


    // Change menu bg on scroll
    var header = document.getElementsByClassName("header");
    if (header !== undefined && header.length === 1) {
        if (last_known_scroll_position > 100) {
            header[0].classList.add('header-solid');
        } else {
            header[0].classList.remove('header-solid');
        }
    }
    
        
    ticking = false;
    });

    ticking = true;
}
});