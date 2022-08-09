export default function menu() {

    const newSection = document.createElement('section');
    newSection.classList.add('section-cont', 'flex', 'column', 'support-color', 'page-width');

    const sectionTitle = document.createElement('h3');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerText = 'MENU';

    const startersCont = document.createElement('div');
    startersCont.classList.add('menu-cont', 'full-size', 'flex', 'column');

    const starterTitle = subtitle('STARTERS');
    startersCont.append(starterTitle);
    sectionData.starters.forEach(starter => {

        let line = document.createElement('div');
        line.classList.add('item-line');

        let item = menuItem(starter.item, starter.description, starter.price);

        if (sectionData.starters.indexOf(starter) === (sectionData.starters.length - 1)) {
            
            startersCont.append(item)

        } else {

            startersCont.append(item, line)

        }

    })

    const mainsCont = document.createElement('div');
    mainsCont.classList.add('menu-cont', 'full-size', 'flex', 'column');

    const mainTitle = subtitle('MAINS');
    mainsCont.append(mainTitle);
    sectionData.mains.forEach(main => {

        let line = document.createElement('div');
        line.classList.add('item-line');

        let item = menuItem(main.item, main.description, main.price);

        if (sectionData.mains.indexOf(main) === (sectionData.mains.length - 1)) {
            
            mainsCont.append(item)

        } else {

            mainsCont.append(item, line)

        }

    })

    const dessertsCont = document.createElement('div');
    dessertsCont.classList.add('menu-cont', 'full-size', 'flex', 'column');

    const desertsTitle = subtitle('DESSERTS');
    dessertsCont.append(desertsTitle);
    sectionData.desserts.forEach(dessert => {

        let line = document.createElement('div');
        line.classList.add('item-line');

        let item = menuItem(dessert.item, dessert.description, dessert.price);

        if (sectionData.desserts.indexOf(dessert) === (sectionData.desserts.length - 1)) {
            
            dessertsCont.append(item)

        } else {

            dessertsCont.append(item, line)

        }

    })

    newSection.append(sectionTitle, startersCont, mainsCont, dessertsCont)

    function subtitle(title) {

        const tempTitle = document.createElement('h2');
        tempTitle.classList.add('menu-title');
        tempTitle.innerText = title;

        return tempTitle

    }

    function menuItem(item, info, price) {

        const itemCont = document.createElement('div');
        itemCont.classList.add('item-cont', 'grid', 'border');

        const itemName = document.createElement('h3');
        itemName.classList.add('item-title', 'item-data');
        itemName.innerText = item;

        const itemInfo = document.createElement('h4');
        itemInfo.classList.add('item-info', 'item-data');
        itemInfo.innerText = info;

        const itemPrice = document.createElement('h3');
        itemPrice.classList.add('item-price', 'item-data');
        itemPrice.innerText = price;

        itemCont.append(itemName, itemInfo, itemPrice);

        return itemCont

    }


    return newSection

}

const sectionData = {
    starters: [
        {
            item: 'Sticky Beef Brisket',
            description: 'Served with horseradish cream mayonnaise.',
            price: '£5.99'
        },
        {
            item: 'Smoked Salmon',
            description: 'Served with sourdough bread.',
            price: '£6.49'
        },
        {
            item: 'Soup of the Day (V)',
            description: 'Served with sourdough bread. Vegan serve available.',
            price: '£4.99'
        }
    ],
    mains: [
        {
            item: '10OZ RIBEYE STEAK',
            description: '21-day-aged ribeye steak with garlic butter, a roasted flat mushroom, beef tomato and triple-cooked chips.',
            price: '£11.99'
        },
        {
            item: 'GRILLED SEA BASS',
            description: 'Two sea bass fillets with chorizo, chargrilled peppers, baby potatoes and long stem broccoli.',
            price: '£10.49'
        },
        {
            item: 'NOURISH BOWL (VE)',
            description: 'A tabbouleh salad on a houmous base, with chargrilled long stem broccoli, topped with pumpkin seeds.',
            price: '£9.99'
        },
        {
            item: 'OCEAN FISH & CHIPS',
            description: 'A combination of hand-battered haddock and breaded wholetail Scottish scampi served with triple-cooked chips, mushy peas and tartare sauce.',
            price: '£11.49'
        },
        {
            item: 'TOAD IN THE HOLE',
            description: 'Outdoor-bred British pork sausages, in a Yorkshire pudding. Served with mash, seasonal vegetables and crispy onions. Vegetarian serve available.',
            price: '£10.99'
        },
    ],
    desserts: [
        {
            item: 'BELGIAN CHOCOLATE BROWNIE (V)',
            description: 'With vanilla pod ice cream.',
            price: '£6.99'
        },
        {
            item: 'STICKY TOFFEE PUDDING (V)',
            description: 'With your choice of vanilla pod ice cream or custard.',
            price: '£5.49'
        },
        {
            item: 'BRAMLEY APPLE PIE (V)',
            description: 'With a choice of vanilla pod ice cream or custard. Vegan serve available.',
            price: '£4.99'
        },
    ],
}