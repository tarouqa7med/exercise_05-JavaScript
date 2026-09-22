
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
                'mobile': /\+20\s1(0|1|2|5)[0-9]{8}$/
        };

form.addEventListener("submit", function (event) {
        event.preventDefault();

        let student = getStudent(++id);

        students.push(student);

        showStudent(student);

        console.log(students);

        this.reset();

        // addStudent(student);
})

