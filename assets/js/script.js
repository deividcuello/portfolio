const sections = document.querySelectorAll('section'),
headerMenu = document.querySelectorAll('header ul li:not(:first-child) a'),
projectBtn = document.querySelector('.projects-btn'),
contactBtn = document.querySelector('.contact-btn'),
logoMain = document.querySelector('.brand .logo'),
faBars = document.querySelector('.fa-bars'),
menuUl = document.querySelector('header ul'),
xmark = document.querySelector('.fa-xmark')

const section = (id) => document.querySelector(id)

headerMenu.forEach(menu => {
    menu.addEventListener('click', () => {
        sections.forEach(element => {
            element.classList.remove('active')
        });
        section(`#${menu.dataset.id}`).classList.add('active')
        headerMenu.forEach(element => {
            element.classList.remove('active')
        });
        menu.classList.add('active')
    })
});

projectBtn.addEventListener('click', () => {
    sections.forEach(element => {
        element.classList.remove('active')
    });

    section(`#projects`).classList.add('active')
    headerMenu.forEach(element => {
        element.classList.remove('active')
    });
    section("[data-id='projects']").classList.add('active')
})

contactBtn.addEventListener('click', () => {
    sections.forEach(element => {
        element.classList.remove('active')
    });

    section(`#contact`).classList.add('active')
    headerMenu.forEach(element => {
        element.classList.remove('active')
    });
    section("[data-id='contact']").classList.add('active')
})

faBars.addEventListener('click', () => {
    faBars.classList.toggle('active')
    if(faBars.classList.contains('active')){
        logoMain.style.opacity = 0
        menuUl.style.display = 'flex'
    } else {
        logoMain.style.opacity = 1
        menuUl.style.display = 'none'
    }
})

xmark.addEventListener('click', () => {
    menuUl.style.display = 'none'
    logoMain.style.opacity = 1
})

window.addEventListener('resize',() => {
    const width = window.innerWidth;
    if(width > 849 && !getComputedStyle(logoMain).opacity == 0 && faBars.classList.contains('active')){
        logoMain.style.opacity = 1
        menuUl.style.display = 'none'
        faBars.classList.remove('active')
    } else if(width > 849 && getComputedStyle(logoMain).opacity == 0){

    }
});