import './style.css';
import section from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function header() {

    const head = document.createElement('header');
    head.classList.add('flex', 'reversed-color', 'full-size');

    const headerCont = document.createElement('div');
    headerCont.classList.add('header-cont', 'flex', 'page-width', 'reversed-color');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Restaurant';

    const nav = document.createElement('nav');
    nav.classList.add('nav', 'flex');

    const navList = document.createElement('div');
    navList.classList.add('nav-list', 'flex');

    const homeLink = document.createElement('a');
    homeLink.classList.add('nav-link', 'border');
    homeLink.id = 'home';
    homeLink.innerText = 'HOME';

    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.id = 'menu';
    menuLink.innerText = 'MENU';

    const contactLink = document.createElement('a');
    contactLink.classList.add('nav-link', 'border');
    contactLink.id = 'contact';
    contactLink.innerText = 'CONTACT';

    navList.appendChild(homeLink);
    navList.appendChild(menuLink);
    navList.appendChild(contactLink);
    nav.appendChild(navList);
    headerCont.append(title, nav);
    head.appendChild(headerCont);

    return head

}

function main() {

    const mainCont = document.createElement('main');
    mainCont.classList.add('flex', 'full-size');
    
    return mainCont

}

function footer() {

    const foot = document.createElement('footer');
    foot.classList.add('flex','center', 'reversed-color', 'full-size');

    const credit = document.createElement('div');
    credit.classList.add('credit', 'flex');

    const creditText = document.createElement('a');
    creditText.classList.add('credit-text');
    creditText.innerText = 'Made with 🔥 by @tomcodedthis';
    creditText.href = 'https://github.com/tomcodedthis';

    credit.appendChild(creditText);
    foot.appendChild(credit);

    return foot

}

function changePages(e) {

    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('overline'))

    if (this.id === 'home') {

        document.querySelector('#home').classList.add('overline')
        document.querySelector('main').replaceChildren(section())

    } else if (this.id === 'menu') {

        document.querySelector('#menu').classList.add('overline')
        document.querySelector('main').replaceChildren(menu())

    } else if (this.id === 'contact') {

        document.querySelector('#contact').classList.add('overline')
        document.querySelector('main').replaceChildren(contact())

    }

}

function processBtns(e) {

    e.preventDefault();

    if (e.target.id === 'explore') {

        document.querySelector('#menu').click()

    }

}

document.body.classList.add('grid');
document.body.appendChild(header());
document.body.appendChild(main());
document.body.appendChild(footer());

document.querySelector('main').appendChild(section());
document.querySelector('#home').classList.add('overline');

const navLinks = document.body.querySelectorAll('.nav-link');
const buttons = document.body.querySelectorAll('.section-btn');

navLinks.forEach(link => link.addEventListener('click', changePages));
buttons.forEach(btn => btn.addEventListener('click', processBtns));