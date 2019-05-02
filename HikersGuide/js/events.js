/*
 * events.js
 * 
*/



// Validate Inputs
var contactForm = document.querySelector("#submissionForm");

// Disabling submit button
var submitButton = document.querySelector("#submissionForm button");
submitButton.setAttribute('class', 'disabled');

function validateForm(event) {
    event.preventDefault(); // Stop submission

    var form = document.querySelector('#submissionForm');
    var fields = form.querySelectorAll('.required');

    // Check for valid values
    var valid = true;
    for (var i=0; i < fields.length; i++) {
        if (!fields[i].value)
        {
            valid = false;
        }
    }

    // Open Submit
    if (valid === true) {

        var submit = form.querySelector('[type=submit]');
        submit.removeAttribute('class');
    }
}

function validateRequired(event) {
    var target = event.target;
    var parent = target.parentElement;
    var error = '<label class="error">You are missing information here.</label>';

    if (!target.value.length) {
        if (!parent.querySelector('.error'))
        {
            parent.insertAdjacentHTML('beforeend', error);
        }
    } else {
        parent.removeChild(parent.querySelector('.error'));
    }
}

// Check if Submissions are Allowed
var requiredFields = contactForm.querySelectorAll('.required');
for (var i=0; i < requiredFields.length; i++) {
    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateRequired);
}


// Form Submission
// ========================================
function send(event) {
    event.preventDefault(); // Stop submission

    var form = document.querySelector('#submissionForm');
    var message = '<h2>Thank You!</h2><p>Thank you for contacting Hikers Guide, we will contact your shortly!</p>';

    var target = event.target;


    var disabled = target.classList.contains('disabled');

    if (disabled === false) {
        form.innerHTML = message;
    }
}

// Submit Form
var submit = contactForm.querySelector('[type=submit]');
submit.addEventListener('click', send);