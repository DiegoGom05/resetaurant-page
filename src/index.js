import { initializeContent, homeTab, menuTab, contactTab } from './load-page';
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    initializeContent();

    const tabs = document.querySelectorAll('[data-tab-target]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(otherTab => {
                const otherTarget = document.querySelector(otherTab.dataset.tabTarget);
                otherTarget.classList.remove('active');
                otherTarget.classList.add('hidden');
                otherTarget.style.display = 'none';
            })
            const target = document.querySelector(tab.dataset.tabTarget);
            target.style.display = 'flex';
            target.classList.add('active');
            console.log('click');
        });  
    });
});
