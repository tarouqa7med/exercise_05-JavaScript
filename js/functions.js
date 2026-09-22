
function addStudent(student) {
        checkStudentData(student);

        let focusInput = form.querySelector("input:focus"),
                falseInput=form.querySelector("input[data-valid='false']");
        focusInput?.blur();

        let invalidInput = form.querySelector("input.is-invalid");
        if (invalidInput !== null || falseInput !== null) {
                return;
        }

        student = getStudent(++id);

        students.push(student);

        updateLocalStorage();

        showStudent(student);

        formReset();

        isNoData(students);
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
        tBody.innerHTML += `<tr data-student-id="${student.id}">
                                                <th>${student.id}</th>
                                                <td>${student.firstName}</td>
                                                <td>${student.lastName}</td>
                                                <td>${student.email}</td>
                                                <td>${student.age}</td>
                                                <td>${student.mobile}</td>
                                                <td>
                                                        <div class="btns">
                                                                <button class="btn btn-info text-light mx-1" onclick="editStudentIntoForm(${student.id})">Edit</button>
                                                                <button class="btn btn-danger mx-1" onclick="deleteStudent(${student.id}, this)">Delete</button>
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
                input.dataset.valid = false;
                warningP.classList.remove("d-none");
                warningP.textContent = "This field is required"
        } else if (!isValid) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                input.dataset.valid = false;
                warningP.classList.remove("d-none");
                warningP.textContent = "Invalid Field"
        } else {
                input.classList.add("is-valid")
                input.classList.remove("is-invalid");
                input.dataset.valid = true;
                warningP.classList.add("d-none");
                warningP.textContent = "";
        }
}

function formReset() {
        form.reset();

        formInputs.forEach(function (input) {
                input.classList.remove("is-valid");
                input.classList.remove("is-invalid");
                document.querySelector(`div.alert[data-error="${input.name}"]`).classList.add("d-none");
        })

        form.setAttribute("data-type", "add");
}

function updateLocalStorage() {
        localStorage.setItem('students', JSON.stringify(students));
}
function showStudents(data) {

        tBody.innerHTML = "";

        data.forEach(function (student) {
                showStudent(student);
        })
        isNoData(data);
}

function getStudentIndex(id) {
        return students.findIndex(function (student) {
                return student.id == id;
        })
}

function deleteStudent(id, that) {

        if (!confirm("Delete his student???")) {
                return;
        }

        let index = students.findIndex(function (student) {
                return student.id === id;
        })
        students.splice(index, 1)
        console.log(students);

        let trElement = that.closest('tr');
        console.log(trElement)
        trElement.remove();
        updateLocalStorage();
        isNoData(students);
}

function isNoData(data) {
        let divNoDataAlert = document.querySelector("div.alert.alert-warning");
        if (data.length == 0) {
                divNoDataAlert.classList.remove("d-none");
        } else {
                divNoDataAlert.classList.add("d-none");
        }
}

function editStudentIntoForm(id) {

        formReset();

        let editStudent = students.find(function (student) {
                return student.id == id;
        })
        
        for (let input of formInputs) {
                input.value = editStudent[input.name];
        }

        let submitBtn = document.getElementById("submitBtn"),
                editBtns = document.querySelectorAll(".btn-info"),
                deleteBtns = document.querySelectorAll(".btn-danger");
        submitBtn.classList.add("text-light", "btn-info");
        submitBtn.classList.remove("btn-success");
        submitBtn.textContent = "Edit";


        console.log(editStudent);


        form.setAttribute("data-type", "edit");
        form.setAttribute("data-student-id", id);
}

function editStudent() {
        let studentId = form.dataset.studentId,
                student = getStudent(studentId),
                studentIndex = getStudentIndex(studentId),
                trElement = document.querySelector(`tr[data-student-id="${studentId}"]`);
        
        students[studentIndex] = student;

        trElement.innerHTML = `
                                        <th>${student.id}</th>
                                        <td>${student.firstName}</td>
                                        <td>${student.lastName}</td>
                                        <td>${student.email}</td>
                                        <td>${student.age}</td>
                                        <td>${student.mobile}</td>
                                        <td>
                                        <div class="btns">
                                                <button class="btn btn-info text-light mx-1" onclick="editStudentIntoForm(${student.id})">Edit</button>
                                                <button class="btn btn-danger mx-1" onclick="deleteStudent(${student.id}, this)">Delete</button>
                                        </div>
                                        </td>`;

        updateLocalStorage();

        formReset();

        let submitBtn = document.getElementById("submitBtn"),
                editBtns = document.querySelectorAll(".btn-info"),
                deleteBtns = document.querySelectorAll(".btn-danger");
                submitBtn.classList.add("btn-success");
        submitBtn.classList.remove("text-light", "btn-info");
        submitBtn.textContent = "Add";
}

function search(searchResult) {
        let filterStudents = students.filter(function (student) {
                return student.firstName.toLowerCase().includes(searchResult.toLowerCase()) ||
                        student.lastName.toLowerCase().includes(searchResult.toLowerCase()) ||
                        student.email.toLowerCase().includes(searchResult.toLowerCase()) ||
                        student.age.toLowerCase().includes(searchResult.toLowerCase()) ||
                        student.mobile.toLowerCase().includes(searchResult.toLowerCase());
        })
        showStudents(filterStudents);
}