const formOrder = document.querySelector('#form-order');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validateForm(formOrder)) {
        const data = {
            name: formOrder.elements.name.value,
            phone: formOrder.elements.phone.value,
            street: formOrder.elements.street.value,
            house: formOrder.elements.house.value,
            housing: formOrder.elements.housing.value,
            apartment: formOrder.elements.apartment.value,
            floor: formOrder.elements.floor.value,
            comment: formOrder.elements.comment.value,
            payment: formOrder.elements.radiobutton.value,
            callback: formOrder.elements.checkbox.checked,
        };

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));

    }
    
    function validateForm(form) {
        let valid = true;

        if (!validateField(formOrder.elements.name)) {
            valid = false;
        }

        if (!validateField(formOrder.elements.phone)) {
            valid = false;
        }

        if (!validateField(formOrder.elements.house)) {
            valid = false;
        }
        if (!validateField(formOrder.elements.housing)) {
            valid = false;
        }
        if (!validateField(formOrder.elements.apartment)) {
            valid = false;
        }
        if (!validateField(formOrder.elements.floor)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {
            field.nextElementSibling.textContent = field.validationMessage;
            return field.checkValidity;
    }

});
