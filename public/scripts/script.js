'use strict'

window.addEventListener('load', () => {
    loadPage();
    animateText();
    setupLinks();
    disableLinks();
});

// var a = self.setInterval(function () {
//     console.log(document.readyState);
//     if (document.readyState === 'complete') {
//         loadPage();
//         animateText();
//         // setupLinks();
//         clearInterval(a);
//     }
// }, 10);

window.addEventListener('popstate', loadPage);
window.addEventListener('scroll', animate);
document.getElementById('resume').addEventListener('scroll', animate);
document.querySelector('.animated-menu-button').addEventListener('click', slide);
document.addEventListener('scroll', () => {console.count('scroll')});

function animate(e) {
    let elmn = document.getElementById('resume');
    let top = elmn.scrollTop;
    let bodyTop = document.documentElement.scrollTop || document.body.scrollTop;
    let svg_elmn = document.querySelectorAll('.cy-top');
    if (top > 1800) {
        for (let i = 0; i < svg_elmn.length; i++) {
            svg_elmn[i].classList.add('animated');
        }
    } else if (bodyTop > 5000) {
        for (let i=0; i<svg_elmn.length; i++) {
            svg_elmn[i].classList.add('animated');
        }
    }
}

function disableLinks() {
    let links = document.getElementsByClassName('link');
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = null;
        links[i].addEventListener('click', (e) => {
            e.preventDefault()
        });
    }
}

function slide() {
    document.getElementById('sidebar').classList.toggle('slide');
    document.getElementById('main').classList.toggle('slide');
}

function setupLinks() {
    let links = document.getElementsByClassName('nav-links');
    for (let i = 0; i < links.length; i++) {
        ajaxify(links[i], links[i].textContent)
    }
}

function ajaxify(link_element, title) {
    link_element.onclick = null;
    link_element.addEventListener('click', (e) => {
        e.preventDefault();
        let id = link_element.getAttribute('data-id').toLowerCase();

        changeUrl(link_element.href, title)
        slidePage(id)
        console.log(`${title} clicked ${location.pathname}`);
    })

}

function loadPage() {
    switch (location.pathname) {
        default:
            slidePage('home');
            break;
        case '/about':
            slidePage('about');
            break;
        case '/portfolio':
            slidePage('portfolio');
            break;
        case '/resume':
            slidePage('resume');
            break;
        case '/contact':
            slidePage('contact');
            break;
    }

}
function slidePage(id) {
    let pages = document.getElementsByClassName('article');
    for (let i = 0; i < pages.length; i++) {
        pages[i].className = pages[i].className.replace(' display', '');
    }
    document.getElementById(id).className += " display";
    document.getElementById(id).scrollTop = 0;
}

function changeUrl(url, title) {
    history.pushState(null, title, url);
}

function animateText() {
    let txt = document.getElementById('shifting-text');
    txt.innerText = '';
    let val1;
    let val = '';
    let i = 0;
    let turn = true;
    let dir = true;
    let timeout = 150;
    setInterval(function () {
        val1 = turn ? 'WEB DEVELOPER...    ' : 'WEB DESIGNER...  ';
        if (dir) {
            val += val1[i];
            i++;
            txt.innerText = val;
            if (val.length == val1.length) {
                dir = false;
                i = 1;
                timeout = 100;
            }
        } else {
            val = val.slice(0, val.length - 1);
            txt.innerText = val;
            if (val.length == 1) {
                dir = true;
                timeout = 250;
                if (turn) {
                    turn = false;
                } else {
                    turn = true;
                }
            }
        }
    }, timeout)
}