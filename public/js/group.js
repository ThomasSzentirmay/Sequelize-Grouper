const groupForm = document.querySelector('#group-form');

function handleGroupSubmit(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#group-name-input');

    fetch('/group', {
        method: 'POST',
        headers: {
            'CONTENT-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    }).then(res => {
        alert('Group successfully added!');
    });
};

groupForm.addEventListener(submit, handleGroupSubmit);