const pageLoad = () => {
    const body = document.querySelector('body');
    const main = document.createElement('main');

    body.appendChild(main);

    const mainElements = {
        titleDiv: document.createElement('div'),
        container: document.createElement('div')
    }

    for (let element in mainElements) {
        mainElements[element].setAttribute('id', `${element}`);
        main.appendChild(mainElements[element]);
    }

    const titleElements = {
        title1: document.createElement('h1'),
        title2: document.createElement('h2')
    }

    titleElements.title1.textContent = 'Maharlika ';
    titleElements.title2.textContent = 'Cafe & Grill';

    for (let element in titleElements) {
        titleDiv.appendChild(titleElements[element]);
    }

    const containerElements = {
        tabBar: document.createElement('nav'),
        tabContent: document.createElement('div')
    }

    containerElements.tabContent.setAttribute('id', 'tabContent');

    for (let element in containerElements) {
        container.appendChild(containerElements[element]);
    }

    const navElements = {
        label1: document.createElement('span'),
        label2: document.createElement('span'),
        label3: document.createElement('span')
    }

    navElements.label1.textContent = 'Home';
    navElements.label2.textContent = 'Menu';
    navElements.label3.textContent = 'Contact';
    

    for (let element in navElements) {
        navElements[element].setAttribute('id', `${navElements[element].textContent}`);
        containerElements.tabBar.appendChild(navElements[element]);
        navElements[element].classList.add('notDisplayed');
    }

    navElements.label1.classList.remove('notDisplayed');
    navElements.label1.classList.add('displayed');
}

export default pageLoad