
let form = document.querySelector("form"),
        formInputs = form.querySelectorAll("input"),
        students = [],
        id = 0,
        tBody = document.querySelector("tbody"),
        regex = {
                'firstName': /^[A-z]+$/,
                'lastName': /^[A-z]+$/,
                'email': /^[a-z][a-z0-9\.]+@(gmail|yahoo|outlook|hotmail)\.(com|org|edu)$/,
                'age': /^[0-9]{1,2}$/,
                'mobile': /\+20+(\s?)1(0|1|2|5)[0-9]{8}$/
        };

form.addEventListener("submit", function (event) {
        event.preventDefault();

        let focusInput = form.querySelector("input:focus");
        focusInput?.blur();

        let invalidInput = form.querySelector("input.is-invalid");
        if (invalidInput !== null) {
                return;
        }

        let student = getStudent(++id);

        students.push(student);

        console.log(student)
        console.log(students)

        showStudent(student);

        formReset();

        // addStudent(student);
})