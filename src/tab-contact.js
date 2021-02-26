let tab;
let tabListItem;
let tabLink;

function generateTab() {
    tab = document.createElement('div');
    tab.classList.add('tab');

    let p = document.createElement('p');
    p.textContent = 'About';

    p = document.createElement('p');
    p.innerHTML = 'GitHub: <a href="https://github.com/maksimoreo/restaurant-page">link</a>';
    tab.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = 'The Odin Project page: <a href="https://www.theodinproject.com/courses/javascript/lessons/restaurant-page">link</a>';
    tab.appendChild(p);
}

function findTabLink() {
    tabLink = document.querySelector('#link-contact');
    tabListItem = tabLink.parentNode;
}

function init() {
    generateTab();
    findTabLink();
    return getTabObject();
}

function getTabObject() {
    return { tab, tabListItem, tabLink };
}

export { init, getTabObject };
