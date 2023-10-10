// Import image
import restJpg from './restaurant.jpg';

// Create div
const contentDiv = document.createElement('div');

// Create elements to add to contentDiv
let restaurantImg = document.createElement('img');
let restaurantHeader = document.createElement('h1');
let restaurantDesc = document.createElement('p');

// Set img source and alt
restaurantImg.src = restJpg;
restaurantImg.alt = 'Restaurant Image';

// Set header text
restaurantHeader.textContent = 'Restaurant is Great!';

// Set description text
restaurantDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const addContent = (body) => {
    console.log('Loading home page');
    
    // Remove all children from body
    while (body.firstChild) {
        body.removeChild(body.lastChild);
    }

    contentDiv.appendChild(restaurantImg);
    contentDiv.appendChild(restaurantHeader);
    contentDiv.appendChild(restaurantDesc);
    body.appendChild(contentDiv);
};

export default addContent;