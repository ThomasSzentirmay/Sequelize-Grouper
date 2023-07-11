const studentForm = document.querySelector('#student-form');
const firstInput = document.querySelector('#first-input');
const lastInput = document.querySelector('#last-input');
const emailInput = document.querySelector('#email-input');

function handleStudentSubmit(event) {
    event.preventDefault();


}

function getGroups() {
    // Make a server request to GET the groups from the database
    fetch('/api/groups')
        .then(res = res.json())
        .then(data => {

        });
}

getGroups();
studentForm.addEventListener('submit', handleStudentSubmit);






// <option value="1">Team Google Ninjas</option>