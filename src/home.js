import img from './images/food-dish.jpeg';

export default function section() {

    const newSection = document.createElement('section');
    newSection.classList.add('section-cont', 'grid', 'support-color', 'page-width');

    const sectionLeft = document.createElement('div');
    sectionLeft.classList.add('section-left', 'column', 'flex');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerText = sectionData.title;

    const sectionText = document.createElement('h4');
    sectionText.classList.add('section-text');
    sectionText.innerText = sectionData.text;

    const sectionBtn = document.createElement('button');
    sectionBtn.classList.add('section-btn');
    sectionBtn.innerText = 'Explore Menu';
    sectionBtn.id = 'explore';

    const sectionRight = document.createElement('div');
    sectionRight.classList.add('section-right', 'flex', 'column');

    const sectionImg = document.createElement('img');
    sectionImg.classList.add('section-img');
    sectionImg.src = sectionData.image;
    sectionImg.alt = sectionData.imgAlt;

    sectionLeft.append(sectionTitle, sectionText, sectionBtn)
    sectionRight.appendChild(sectionImg)
    newSection.append(sectionLeft, sectionRight)

    return newSection

}

const sectionData = {
    title: "Treat your tastebuds",
    text: "A daily menu, all freshly prepared in the pub kitchen. Including fresh fish, pies, steaks and chef's daily specials with main course prices ranging from £11.50 - £19.50.",
    image: img,
    imgAlt: 'Chicken and Rice Dish'
}