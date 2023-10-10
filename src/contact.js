import cat from './cat.jpg';

// Factory function for each contact
const contactFactory = (name, job, number, email, imgSrc, imgAlt) => {
    // Div to hold dom elements
    const div = document.createElement('div');

    // Create dom elements
    const contactImg = document.createElement('img');
    const contactName = document.createElement('p');
    const contactJob = document.createElement('p');
    const contactNumber = document.createElement('p');
    const contactEmail = document.createElement('p');

    // Set text content for name, job, number, and email
    contactName.textContent = name;
    contactJob.textContent = job;
    contactNumber.textContent = number;
    contactEmail.textContent = email;

    // Set img src and alt
    contactImg.src = imgSrc;
    contactImg.alt = imgAlt;

    // Add dom elements to div
    div.appendChild(contactImg);
    div.appendChild(contactName);
    div.appendChild(contactJob);
    div.appendChild(contactNumber);
    div.appendChild(contactEmail);

    return {div};
};

const catContact = contactFactory("Cat McCatface", 'Owner', '555-555-5555', 'cat@catmail.com', cat, 'Cat picture');

const contentDiv = document.createElement('div');

const contactHeader = document.createElement('h1');
contactHeader.textContent = 'Contact Us';

const addContent = (body) => {
    console.log('Loading contact page');
    
    // Remove all children from body
    while (body.firstChild) {
        body.removeChild(body.lastChild);
    }
    
    contentDiv.appendChild(contactHeader);
    contentDiv.appendChild(catContact.div);
    body.appendChild(contentDiv);
};

export default addContent;