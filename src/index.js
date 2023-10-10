import homeContent from './init-load';
import menuContent from './menu';

const domElements = (() => {
    // Create list
    const tabList = document.createElement('ul');

    // Create tabs (list items)
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    // Create div to add content to
    const contentDiv = document.createElement('div');

    // Set tab text
    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact';

    // Add event listeners to tabs
    homeTab.addEventListener('click', () => homeContent(contentDiv));
    menuTab.addEventListener('click', () => menuContent(contentDiv));
    contactTab.addEventListener('click', () => console.log('contactTab clicked'));

    // Add tabs to tabList
    tabList.appendChild(homeTab);
    tabList.appendChild(menuTab);
    tabList.appendChild(contactTab);

    // Add DOM elements to body
    document.body.appendChild(tabList);
    document.body.appendChild(contentDiv);

    return {tabList, homeTab, menuTab, contactTab, contentDiv};
})();

// Page will start with homeContent
homeContent(domElements.contentDiv);
