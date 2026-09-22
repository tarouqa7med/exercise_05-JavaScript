
let registerForm = document.querySelector("form"),
        registerInputs = registerForm.querySelectorAll("input"),
        tBody=document.querySelector("tbody");

registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let _Student = {};

        registerInputs.forEach(function (registerInput) {
                let key = registerInput.name,
                        value = registerInput.value;

                for (let index = 0; index < registerInputs.length; index++) {
                        _Student[key] = value;
                }
        })

        let regex = {
                'firstName': /^[A-z]+$/,
                'lastName': /^[A-z]+$/,
                'email': /^[a-z][a-z0-9\.]+@(gmail|yahoo|outlook|hotmail)\.(com|org|edu)$/,
                'age': /^[0-9]{1,2}$/,
                'mobile': /\+20\s1(0|1|2|5)[0-9]{8}$/
        };

        for (let key in _Student) {
                let inputName = key,
                        inputValue = _Student[key];

                        console.log(regex[key].test(inputValue));
                }
                
        console.log(_Student)
})