
let form = document.querySelector("form"),
        formInputs = form.querySelectorAll("input"),
        id = 0,
        tBody = document.querySelector("tbody"),
        regex = {
                'firstName': /^[A-z]+$/,
                'lastName': /^[A-z]+$/,
                'email': /^[a-z][a-z0-9\.]+@(gmail|yahoo|outlook|hotmail)\.(com|org|edu)$/,
                'age': /^[0-9]{1,2}$/,
                'mobile': /\+20+(\s?)1(0|1|2|5)[0-9]{8}$/
        },
        searchInput = document.querySelector("input#search");
        
        console.log(searchInput)

if (localStorage.getItem('students') === null) {
        students = [];
        updateLocalStorage();
} else {
        students = JSON.parse(localStorage.getItem('students'));
        id = students[students.length - 1]?.id ?? 0;
        showStudents(students);
}

form.addEventListener("submit", function (event) {
        event.preventDefault();

        let formType = form.getAttribute("data-type");
        if (formType == "add") {
                addStudent();
        } else if (formType == "edit") {
                editStudent();
        }

        

        // addStudent(student);
})

searchInput.addEventListener("keyup", function () {
        search(this.value)
})