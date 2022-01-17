/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const fixedBottom = document.body.querySelector('.btn-my-fixed-bottom');

        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('menu--navbar-shrink')
        } else {
            navbarCollapsible.classList.add('menu--navbar-shrink')
        }

        if (window.scrollY <= 350) {
            fixedBottom.style.display = "none";
        } else {
            fixedBottom.style.display = "block";
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);



    // Activate Bootstrap scrollspy on the main nav element
    var mainNav = document.body.querySelector('#mainNav');

    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 220
        });

        window.addEventListener('activate.bs.scrollspy', function (e) {
            console.log(arguments[0].relatedTarget);
            if (e.relatedTarget == '#anasayfa') {
                document.title = "Bilgi Extra - Ana Sayfa";
            } else if (e.relatedTarget == '#urunler') {
                document.title = "Bilgi Extra - Ürünler";
            } else if (e.relatedTarget == '#calismalarimiz') {
                document.title = "Bilgi Extra - Çalışmalarımız";
            } else if (e.relatedTarget == '#hakkimizda') {
                document.title = "Bilgi Extra - Hakkımızda";
            } else if (e.relatedTarget == '#iletisim') {
                document.title = "Bilgi Extra - İletişim";
            } else {
                document.title = "BİLGİ EXTRA-FUAR MALZEMELERİ";
            }
        });
    };

    // Collapse responsive navbar when toggler is visible
    // Pc
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
