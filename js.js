const tabs = document.querySelectorAll('data-tag-target'); 


tabs.forEach(tab => {
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.tabTarget); 
    target.classList.add('active');
    })
    
});