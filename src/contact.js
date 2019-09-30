const contact = () => {
    const content = document.querySelector('#tabContent');
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contactTab');
    contactContent.classList.add('notDisplayedContent');
    content.appendChild(contactContent);

    const elements = {
        location: document.createElement('h2'),
        locInfo: document.createElement('p'),
        contactLine: document.createElement('h2'),
        contactInfo: document.createElement('p')
    }

    elements.location.textContent = "Location:";
    elements.locInfo.textContent = '1819 E Plaza Blvd #3701,\nNational City, CA 91950';
    elements.contactLine.textContent = 'Contact Us:';
    elements.contactInfo.textContent = 'Phone: 1(619)-477-6028\nEmail: maharlika@maharlika.com';

    for(let element in elements) {
        elements[element].classList.add(element);
        contactContent.appendChild(elements[element]);
    }
}

export default contact