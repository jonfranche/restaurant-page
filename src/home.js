const home = () => {
    const content = document.querySelector('#tabContent');
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'homeTab');
    homeContent.classList.add('displayedContent');
    content.appendChild(homeContent);

    const elements = {
        image: document.createElement('img'),
        headline: document.createElement('h1'),
        info: document.createElement('p'),
        navbar: document.createElement('nav')
    }

    elements.image.setAttribute('src', 'filipino_food.jpg');
    elements.headline.textContent = 'Maharlika Cafe & Grill';
    elements.info.textContent = 'Savor the taste of authentic filipino food here at Maharlika Cafe & Grill. Established in 2000,\n Maharlika is a family owned restaurant that is widely enjoyed by the community in National City.';

    for(let element in elements) {
        elements[element].classList.add(element);
        homeContent.appendChild(elements[element]);
    }
}

export default home