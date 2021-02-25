function generatePage() {
    let content = document.querySelector('#content');

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
}

function clearTabContent() {
    tabContent.innerHTML = '';
}

export { generatePage, clearTabContent };
