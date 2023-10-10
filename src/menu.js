// Import images
import food1 from './food1.jpg';
import food2 from './food2.jpg';

// Factory funtion for each menu item
const menuItemFactory = (name, desc, price, imgSrc, imgAlt) => {
    // Div to hold menuItem elements
    const div = document.createElement('div');
    
    // Create dom elements
    const menuItemName = document.createElement('p');
    const menuItemDesc = document.createElement('p');
    const menuItemPrice = document.createElement('p');
    const menuItemImg = document.createElement('img');

    // Set text content for name, desc, and price
    menuItemName.textContent = name;
    menuItemDesc.textContent = desc;
    menuItemPrice.textContent = `$${price}`;

    // Set image source and alt
    menuItemImg.src = imgSrc;
    menuItemImg.alt = imgAlt;

    // Add dom elements to div
    div.appendChild(menuItemName);
    div.appendChild(menuItemDesc);
    div.appendChild(menuItemPrice);
    div.appendChild(menuItemImg);

    return {div};
};

// Factory function for each menu section
const menuSectionFactory = (headerName, ...menuItems) => {
    // Div to hold section content
    const div = document.createElement('div');

    // Section header Dom Element
    const sectionHeader = document.createElement('h2');
    sectionHeader.textContent = headerName;
    div.appendChild(sectionHeader);

    // Append all menuItems to div
    menuItems.forEach((menuItem) => div.appendChild(menuItem.div)); 

    return {div};
};

const contentDiv = document.createElement('div');

// Menu Header
const menuHeader = document.createElement('h1');
menuHeader.textContent = 'Menu';

// Menu Items
let description1 = 'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eget nunc lobortis mattis aliquam faucibus purus in.';
let description2 = 'Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Aliquet nibh praesent tristique magna sit amet.';

const item1 = menuItemFactory('Food 1', description1, 2, food1, 'food1.jpg');
const item2 = menuItemFactory('Food 2', description2, 5, food2, 'food2.jpg');

// Menu Section 1
let menuSection1 = menuSectionFactory('Section 1', item1, item2);

const addContent = (body) => {
    console.log('Loading menu page');
    
    // Remove all children from body
    while (body.firstChild) {
        body.removeChild(body.lastChild);
    }
    
    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuSection1.div);
    body.appendChild(contentDiv);
};

export default addContent;

