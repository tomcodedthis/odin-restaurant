export default function contact() {

    const newSection = document.createElement('section');
    newSection.classList.add('section-cont', 'flex', 'column', 'support-color', 'page-width', 'contact-cont');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerText = sectionData.title;

    const sectionText = document.createElement('h4');
    sectionText.classList.add('section-text');
    sectionText.innerText = sectionData.text;

    function createForm() {

        const form = document.createElement('form');
        form.classList.add('contact-form', 'grid');
    
        const nameLabel = document.createElement('legend');
        nameLabel.classList.add('name-label', 'form-label');
        nameLabel.name = 'name';
        nameLabel.textContent = 'Name:';

        const formName = document.createElement('input');
        formName.classList.add('contact-name', 'form-input');
        formName.type = 'text';
        formName.name = 'name';

        nameLabel.append(formName)

        const emailLabel = document.createElement('legend');
        emailLabel.classList.add('email-label', 'form-label');
        emailLabel.name = 'email';
        emailLabel.textContent = 'Email:';

        const formEmail = document.createElement('input');
        formEmail.classList.add('contact-email', 'form-input');
        formEmail.type = 'email';
        formEmail.name = 'email';

        emailLabel.append(formEmail)

        const messageLabel = document.createElement('legend');
        messageLabel.classList.add('message-label', 'form-label');
        messageLabel.name = 'message';
        messageLabel.textContent = 'Message:';

        const formMessage = document.createElement('textarea');
        formMessage.classList.add('contact-message', 'form-input');
        formMessage.name = 'message';
  
        messageLabel.append(formMessage)

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('contact-submit', 'section-btn');
        submitBtn.innerText = 'SEND';

        form.append(nameLabel, emailLabel, messageLabel, submitBtn)

        return form

    }

    newSection.append(sectionTitle, sectionText, createForm())

    return newSection

}

const sectionData = {
    title: "CONTACT",
    text: "Send us a message by filling the form out below.",
}