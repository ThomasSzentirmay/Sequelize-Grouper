const groupOutput = document.querySelector('.group-output');

function getGroups() {
    fetch('/api/groups')
        .then(res => res.json())
        .then(groups => {
            groups.forEach(group => {
                let studentHTML = '';

                group.students.forEach(student => {
                    studentHTML += `<li>${student.first_name} ${student.last_name}</li>`
                })

                groupOutput.insertAdjacentHTML('beforeend', `
                <div class="group">
                    <h3>${group.name}</h3>
                    <ul>${studentHTML}</ul>
                </div>
                `)
            })
        });
}

getGroups();