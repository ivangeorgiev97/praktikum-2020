const getRegistrationData = () => {
    const registrationEmail = document.getElementById('registration-email').value;
    const registrationPassword = document.getElementById('registration-password').value;

    const finalUserData = {
        email: registrationEmail,
        password: registrationPassword
    }

    return finalUserData
}

const registrationButton = document.getElementById('registration-submit');
const registrationSelect = document.getElementById('registration-select');
const readMoreButton = document.getElementById('read-more-button');

registrationSelect.addEventListener("change", event => {
    console.log(event.target.value)
})

registrationButton.addEventListener("click", () => {
    console.log(getRegistrationData());
})

readMoreButton.addEventListener("click", () => {
    const elements = document.getElementsByClassName("icon-container");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('bg-white')) {
            elements[i].classList.remove('bg-white')
            elements[i].classList.add('bg-dark')
        }
    }
})
