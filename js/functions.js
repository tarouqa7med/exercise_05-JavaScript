
function addStudent(student) {
        checkStudentData(student);
}

function checkStudentData(student) {

        for (check in student) {
                let inputName = check,
                        inputValue = student[check];
        }
}

function getStudent(id) {

        let student = { id: id };

        formInputs.forEach(function (formInput) {
                let key = formInput.name,
                        value = formInput.value;
                
                student[key] = value;
        })

        return student;
}
function showStudent(student) {
        tBody.innerHTML += `<tr>
                                                <th>${student.id}</th>
                                                <td>${student.firstName}</td>
                                                <td>${student.lastName}</td>
                                                <td>${student.email}</td>
                                                <td>${student.age}</td>
                                                <td>${student.mobile}</td>
                                                <td>
                                                        <div class="btns">
                                                                <button class="btn btn-info text-light mx-1">Edit</button>
                                                                <button class="btn btn-danger mx-1">Delete</button>
                                                        </div>
                                                </td>
                                        </tr>`;
}
function inputCheck(input) {
        let inputName = input.name,
                inputValue = input.value,
                warningP = document.querySelector(`div.alert[data-error="${inputName}"`),
                isValid = regex[inputName].test(inputValue);

        if (inputValue === "") {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                warningP.classList.remove("d-none");
                warningP.textContent = "This field is required"
        } else if (!isValid) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                warningP.classList.remove("d-none");
                warningP.textContent = "Invalid Field"
        } else {
                input.classList.add("is-valid")
                input.classList.remove("is-invalid");
                warningP.classList.add("d-none");
                warningP.textContent = "";
        }
}