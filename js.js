const tabs = document.querySelectorAll('[data-tab-target'); 
const tabContents = document.querySelectorAll('[data-tab-content'); 

const body = document.body; 

const home = document.querySelector('.Home-Menu'); 



tabs.forEach(tab => { 
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => { 
        tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
    })
})

home.addEventListener('click', () => { 
    body.style.background.blue; 
})
