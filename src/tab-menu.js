let tab;
let tabListItem;
let tabLink;

function generateTab() {
    tab = document.createElement('div');
    tab.classList.add('tab');

    let p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem illum ratione porro et maxime obcaecati aut in adipisci? Repudiandae similique in, officiis ea nobis quidem iure, exercitationem qui beatae distinctio quod minus laboriosam dolorem. Quibusdam alias, amet repellendus temporibus distinctio cumque ex assumenda fuga? Necessitatibus eveniet maxime, ipsum iste enim quis quibusdam amet earum at ea, vero perspiciatis eligendi. Similique, facere magni sed voluptatem deleniti fugit nostrum minima. Delectus ullam nostrum debitis saepe et a, illo corrupti quaerat facere? Nam aperiam doloribus ea molestiae necessitatibus porro, voluptas nobis dolorum, tempore possimus vitae soluta, sit distinctio aliquid nostrum repudiandae nisi pariatur?';
    tab.appendChild(p);
}

function findTabLink() {
    tabLink = document.querySelector('#link-menu');
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
