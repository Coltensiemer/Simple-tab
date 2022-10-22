const tabs = document.querySelectorAll('[data-tab-target'); 
const tabContents = document.querySelectorAll('[data-tab-content'); 

const body = document.body; 

const home = document.querySelector('.Home-Menu'); 
const newsLetter = document.querySelector('.NewsLetter'); 
const info = document.querySelector('.Info')



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



// Changing the background 
home.addEventListener('click', () => { 
    body.style.background = '#8BF151'
    body.style.transitionDuration = '800ms'
})

newsLetter.addEventListener('click', () => { 
    body.style.background = '#F16D51'
    body.style.transitionDuration = '800s'

})
info.addEventListener('click', () => { 
    body.style.background = '#CA51F1'
    body.style.transitionDuration = '800ms'

})