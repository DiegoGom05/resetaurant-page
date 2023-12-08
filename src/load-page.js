
export const initializeContent  = () => {
   
    const content = document.querySelector('#content'); 
    
    const tab = document.createElement('ul'); 

    const home = document.createElement('li');
    home.innerHTML = 'Home';
    home.dataset.tabTarget = '#home';
    
    const menu = document.createElement('li'); 
    menu.innerHTML = 'Menu';
    menu.dataset.tabTarget = '#menu';


    const contact = document.createElement('li');
    contact.innerHTML = 'Contact';
    contact.dataset.tabTarget = '#contact';

    
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');

    const homeDiv = document.createElement('div');
    homeDiv.id = 'home';

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';

    content.appendChild(tab);
    tab.appendChild(home);
    tab.appendChild(menu);
    tab.appendChild(contact);
    content.appendChild(tabContent);
    tabContent.appendChild(homeDiv);
    tabContent.appendChild(menuDiv);
    tabContent.appendChild(contactDiv);
    homeTab(homeDiv);
    menuTab(menuDiv);
    contactTab(contactDiv);
}

export const homeTab = (homeDiv) =>  {
    const homeHeader = document.createElement('h1');
    homeHeader.innerText = 'VolksBurguer';
    

    const homeDescription = document.createElement('div');
    homeDescription.innerHTML = 'Welcome to VolksBurger, where the sizzle of the grill meets the joy of your taste buds! At our hamburger haven, we take pride in crafting mouthwatering experiences with every bite. From the savory aroma of freshly grilled patties to the irresistible combination of premium ingredients, each burger is a work of art. '

    const hoursTitle = document.createElement('h2');
    hoursTitle.innerHTML = 'Hours';
    hoursTitle.style.fontWeight = 700;

    const hours = document.createElement('div');
    hours.innerHTML = 'Sunday: 8am - 8pm  Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm'
    

    const location = document.createElement('h2');
    location.innerHTML = 'Location';
    location.style.fontWeight = 700;

    const locationContent = document.createElement('div')
    locationContent.innerHTML ='123 Forest Drive, Forestville, Maine';
    

    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(homeDescription);
    homeDiv.appendChild(hoursTitle);
    homeDiv.appendChild(hours);
    homeDiv.appendChild(location);
    homeDiv.appendChild(locationContent);
    homeDiv.classList.add('active');
}

export const menuTab = (menuDiv) => {
    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Menu';

    const beveragesTitle = document.createElement('h2');
    beveragesTitle.innerText = 'Beverages';
    
    const beverages = document.createElement('div');
    beverages.innerText = ' Classic Cola - $2.99 Refreshing cola served over ice. Lemon Lime Fizz - $3.49 A zesty blend of lemon and lime, carbonated to perfection. Iced Tea Delight - $2.79 Chilled black tea sweetened just right. Berry Burst Smoothie - $4.99 A fruity medley of berries blended into a smooth and refreshing treat. Caramel Espresso Shake - $5.49 For coffee lovers – a creamy blend of espresso and caramel.'

    const burgersTitle = document.createElement('h2');
    burgersTitle.innerHTML = 'Burguers';

    const burguers = document.createElement('div');
    burguers.innerText = 'Classic Cheeseburger - $6.99 Juicy beef patty topped with melted cheddar, lettuce, tomato, and our signature sauce. BBQ Bacon Bliss Burger - $8.99 Grilled to perfection, smothered in BBQ sauce, topped with crispy bacon and cheddar cheese. Veggie Delight Burger - $7.49 A delicious veggie patty with lettuce, tomato, red onion, and our special sauce. Spicy Jalapeño Fiesta Burger - $9.29 For those who like it hot! Spicy beef patty, jalapeños, pepper jack cheese, and chipotle mayo. Mushroom Swiss Sensation - $8.49 Sautéed mushrooms, Swiss cheese, and a touch of truffle aioli on a perfectly grilled patty.'

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(beveragesTitle);
    menuDiv.appendChild(beverages);
    menuDiv.appendChild(burgersTitle);
    menuDiv.appendChild(burguers);
    menuDiv.style.display ='none';

}

export const contactTab = (contactDiv) => {
    const contactHeader = document.createElement('h1');
    contactHeader.innerText = 'Contact Us';

    const contactContent = document.createElement('div');
    contactContent.innerText ='Chef  555-555-5554 totallyRealEmail@notFake.com | Manager 555-555-5555 perfectlyRealEmail@notFake.com | Waiter 555-555-5556 totallyRealEmail@notFake.com'

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactContent);
    contactDiv.style.display ='none';

}
