import * as tabMain from './tab-main';
import * as tabMenu from './tab-menu';

let currentTab = null;

function initTabs(tabContent) {
    for (let tabModule of [tabMain, tabMenu]) {
        console.log(tabModule);
        tabModule.init();
        let tabObject = tabModule.getTabObject();
        console.log(tabObject);

        tabObject.tabLink.onclick = () => {
            setCurrentTab(tabObject.tab);
        };

        tabObject.tab.classList.add('tab-hidden');
        tabContent.appendChild(tabObject.tab);

        console.log(tabObject);
    }
}

function generatePage() {

    let nav = document.createElement('nav');
    nav.classList.add('navbar');
    content.appendChild(nav);

    let h1 = document.createElement('h1');
    h1.classList.add('align-center');
    h1.textContent = "Restaurant Page";
    nav.appendChild(h1);

    let p = document.createElement('p');
    p.classList.add('sub-h');
    p.classList.add('align-center');
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    nav.appendChild(p);

    let ul = document.createElement('ul');
    ul.classList.add('navbar-list');
    nav.appendChild(ul);

    for (let tabName of ['Main', 'Menu', 'Contact']) {
        let li = document.createElement('li');
        ul.appendChild(li);

        let a = document.createElement('a');
        a.textContent = tabName;
        a.id = 'link-' + tabName.toLowerCase();
        a.setAttribute('href', '#');
        li.appendChild(a);
    }

    ul.querySelector('li').classList.add('navbar-list-active');

    let tabContent = document.createElement('div');
    tabContent.id = '#tab-content';
    content.appendChild(tabContent);

    return tabContent;
}

function init() {
    let content = document.querySelector('#content');
    let tabContent = generatePage(content);
    initTabs(tabContent);
}

function setCurrentTab(tab) {
    if (currentTab) {
        currentTab.classList.add('tab-hidden');
    }

    currentTab = tab;
    currentTab.classList.remove('tab-hidden');
}

export { init };
