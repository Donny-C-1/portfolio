'use strict'
if (document.querySelector('.animated-menu-button')) {
    document.querySelector('.animated-menu-button').addEventListener('click', function () {
        this.classList.toggle('menu-open');
    })
}

scrollAnimations();

function scrollAnimations() {
    const scrlCont = document.querySelector('.as-cont');
    const scrllContent = scrlCont.getElementsByClassName('as-content-opacity')[0];
    scrlCont.addEventListener('scroll', () => {
        let scrllContentBox = scrllContent.getBoundingClientRect();
        if (scrllContentBox.top.toFixed() < (scrlCont.clientHeight * 0.75)) {
            scrllContent.classList.add('aos-content');
            //scrllContent.classList.remove('as-content-opacity');
        }
    })
    document.addEventListener('scroll', () => {
        let scrllContentBox = scrllContent.getBoundingClientRect();
        if (scrllContentBox.top.toFixed() < (scrlCont.clientHeight * 0.75)) {
            scrllContent.classList.add('aos-content');
            //scrllContent.classList.remove('as-content-opacity');
        }
    })
}

abtanim();

function abtanim() {
    const abt = document.getElementsByClassName('my-info')[0].getElementsByTagName('i')[0];
    const about_cont = document.getElementById('about');
    const alp = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z", "C", "D", "E", "I", "M", "N", "R", " ", ".", '(', ')'];
    let hed = abt.textContent;
    let heading = '';
    let a = 0;
    let z = 0;

    about_cont.addEventListener('scroll', anim);
    document.addEventListener('scroll', anim);

    function anim() {
        if (abt.getBoundingClientRect().top.toFixed() < (about_cont.clientHeight * 0.75)) {
            about_cont.removeEventListener('scroll', anim);
            document.removeEventListener('scroll', anim);
            abt.textContent = "";
            abt.style.opacity = 1;
            let Interval = setInterval(function () {
                abt.textContent += hed[a];
                a++;
                if (abt.textContent == hed) {
                    console.log('Finished');
                    clearInterval(Interval);
                }
            }, 20)
        }
    }

}
