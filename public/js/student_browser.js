const studentForm = document.querySelector('#student-form');
const firstInput = document.querySelector('#first-input');
const lastInput = document.querySelector('#last-input');
const emailInput = document.querySelector('#email-input');
const groupSelect = document.querySelector('#group-select');

function handleStudentSubmit(event) {
    event.preventDefault();

    // Send a fetch POST request /api/student
    // The method should be set to POST
    // The headers object should have a property of 'Content-Type' and a value of 'application/json'
    // The body should be a stringified json object matching the required fields on your student
    // Also include the group ID in your object
    fetch('/api/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: firstInput.ariaValueMax,
            last_name: lastInput.ariaValueMax,
            email: emailInput.ariaValueMax,
            group_id: groupSelect.value
        })
    }).then(res => {
        alert('Student added successfully!')
        firstInput.value = '';
        lastInput.value = '';
        emailInput.value = '';
    })
}

function getGroups() {
    // Make a server request to GET the groups from the database
    fetch('/api/groups')
        .then(res => res.json())
        .then(data => {
            // Loop over our data array of groups
            data.forEach(groupObj => {
                // For each group object, insert an option element into the groupSelect
                // The value should be the id of the group
                // The option text should be the name of the group
                groupSelect.insertAdjacentHTML('beforeend', 
                `<option value="${groupObj.id}">${groupObj.name}</option>`)
            });
                
        });
}

getGroups();
studentForm.addEventListener('submit', handleStudentSubmit);






// <option value="1">Team Google Ninjas</option>