import pageLoad from './pageLoad';
import home from './home';
import menu from './menu';
import contact from './contact';

pageLoad();
home();
menu();
contact();

const homeTab = document.querySelector('#homeTab');
const menuTab = document.querySelector('#menuTab');
const contactTab = document.querySelector('#contactTab');

function addListeners() {
    document.addEventListener('click', function(event) {
        if (event.target.matches('.notDisplayed')) {
            let active = document.querySelector('.displayed');
            active.classList.remove('displayed');
            active.classList.add('notDisplayed');
            event.target.classList.remove('notDisplayed');
            event.target.classList.add('displayed');

            if (event.target.matches('#Home')) {
                homeTab.classList.remove('notDisplayedContent');
                homeTab.classList.add('displayedContent');
                menuTab.classList.remove('displayedContent');
                contactTab.classList.remove('displayedContent');
                menuTab.classList.add('notDisplayedContent');
                contactTab.classList.add('notDisplayedContent');
            } else if (event.target.matches('#Menu')) {
                menuTab.classList.remove('notDisplayedContent');
                menuTab.classList.add('displayedContent');
                homeTab.classList.remove('displayedContent');
                contactTab.classList.remove('displayedContent');
                homeTab.classList.add('notDisplayedContent');
                contactTab.classList.add('notDisplayedContent');
            } else if (event.target.matches('#Contact')) {
                contactTab.classList.remove('notDisplayedContent');
                contactTab.classList.add('displayedContent');
                homeTab.classList.remove('displayedContent');
                menuTab.classList.remove('displayedContent');
                homeTab.classList.add('notDisplayedContent');
                menuTab.classList.add('notDisplayedContent');
            }
        }
    }, false);
}

addListeners();