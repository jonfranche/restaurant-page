const menu = () => {
    const content = document.querySelector('#tabContent');
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuTab');
    menuContent.classList.add('notDisplayedContent');
    content.appendChild(menuContent);
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    menuContent.appendChild(menuContainer);

    const elements = {
        item1: document.createElement('div'),
        item2: document.createElement('div'),
        item3: document.createElement('div'),
        item4: document.createElement('div'),
        item5: document.createElement('div'),
        item6: document.createElement('div')
    }

    for (let element in elements) {
        elements[element].classList.add('menuItem');
        elements[element].setAttribute('id', `${element}`);
        menuContainer.appendChild(elements[element]);

        const itemElements = {
            title: document.createElement('h3'),
            image: document.createElement('img'),
            description: document.createElement('p')
        }
        
        for (let itemElement in itemElements) {
            elements[element].appendChild(itemElements[itemElement]);
        }
    }

    elements.item1.querySelector('h3').textContent = 'Combo #1';
    elements.item2.querySelector('h3').textContent = 'Combo #2';
    elements.item3.querySelector('h3').textContent = 'Combo #3';
    elements.item4.querySelector('h3').textContent = 'Lumpia';
    elements.item5.querySelector('h3').textContent = 'Arroz Caldo';
    elements.item6.querySelector('h3').textContent = 'Halo Halo';

    elements.item1.querySelector('img').setAttribute('src', 'combo1.png');
    elements.item2.querySelector('img').setAttribute('src', 'combo2.jpg');
    elements.item3.querySelector('img').setAttribute('src', 'combo3.jpg');
    elements.item4.querySelector('img').setAttribute('src', 'lumpia.jpg');
    elements.item5.querySelector('img').setAttribute('src', 'arrozcaldo.jpg');
    elements.item6.querySelector('img').setAttribute('src', 'halohalo.jpg');

    elements.item1.querySelector('p').textContent = 'This combination plate comes with two scoops of rice/fried rice and two choices of entrees.';
    elements.item2.querySelector('p').textContent = 'This combination plate comes with pancit and two choices of entrees.';
    elements.item3.querySelector('p').textContent = 'This combination plate comes with one half rice/fried rice, one half pancit, and two choices of entrees.';
    elements.item4.querySelector('p').textContent = 'Order a plate of our delicious lumpia with beef and sweet and sour sauce';
    elements.item5.querySelector('p').textContent = 'Order a bowl of our appetizing Arroz Caldo that can be optioned with hard boiled egg';
    elements.item6.querySelector('p').textContent = 'Have dessert with our sweet Halo Halo!';
}

export default menu