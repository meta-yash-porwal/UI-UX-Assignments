
// const checked;

employeeNameInput();

function employeeNameInput() {
    document.querySelector('#emp-name').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // alert("Enter is Pressed!!");
            validateEmpName();
        }
    });
}

function validateEmpName() {
    let empName = document.querySelector('#emp-name').value;
    // alert(empName);
    let empNameRGEX = new RegExp("^([^0-9]*)$");          
    // alert(empNameRGEX);
    let len = empName.length;
    let res = empNameRGEX.test(empName);
    if(len > 2 && res) {
        document.querySelector('label[for="emp-name"]').classList.add("d-none");
        document.querySelector("#emp-name").classList.add("d-none");
        employeeGender(empName);
    }    
}

function employeeGender(empName) {
    document.querySelector('#emp-gender').innerHTML = "Hii " + empName + "! Can I know your gender";
    document.querySelector('#emp-gender').classList.remove("d-none");
    document.querySelector('label[for="male"]').classList.remove("d-none");
    document.querySelector('#male').classList.remove("d-none");
    document.querySelector('label[for="female"]').classList.remove("d-none");
    document.querySelector('#female').classList.remove("d-none");
    document.querySelector('label[for="other"]').classList.remove("d-none");
    document.querySelector('#other').classList.remove("d-none");

    let gender = document.querySelectorAll('#male, #female, #other');

    gender.forEach(function(elem) {
        elem.addEventListener('click', function (e) {
            document.querySelector('#emp-gender').classList.add("d-none");
            document.querySelector('label[for="male"]').classList.add("d-none");
            document.querySelector('#male').classList.add("d-none");
            document.querySelector('label[for="female"]').classList.add("d-none");
            document.querySelector('#female').classList.add("d-none");
            document.querySelector('label[for="other"]').classList.add("d-none");
            document.querySelector('#other').classList.add("d-none");
            employeeEmail(empName);
        });
    });           
}


function employeeEmail(empName) {
    document.querySelector('label[for="email"]').innerHTML = "Hii " + empName + "! Can I know your email";        
    document.querySelector('label[for="email"]').classList.remove("d-none");
    document.querySelector('#email').classList.remove("d-none");



    document.querySelector('#email').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // alert("Enter is Pressed!!");
            if(validateEmail()) {
                document.querySelector('label[for="email"]').classList.add("d-none");
                document.querySelector('#email').classList.add("d-none");
                employeePassword(empName);
            }    
        }
    });
}

function validateEmail() {
    let email = document.querySelector('#email').value;
    // alert(email);
    let emailRGEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    // alert(emailRGEX);
    let result = emailRGEX.test(email);
    return result;
}

function employeePassword(empName) {
    document.querySelector('label[for="pass"]').innerHTML = "Hii " + empName + "! Enter your password";
        document.querySelector('label[for="pass"]').classList.remove("d-none");
        document.querySelector('#pass').classList.remove("d-none");


        document.querySelector('#pass').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                // alert("Enter is Pressed!!");
                let pass = document.querySelector('#pass').value;
                if(validatePassword(pass)) {
                    document.querySelector('label[for="pass"]').classList.add("d-none");
                    document.querySelector('#pass').classList.add("d-none");
                    employeeConfirmPassword(empName, pass);
                }
            }
        });
}

function validatePassword(pass) {
    let passRGEX = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
    let result = passRGEX.test(pass);
    return result;
}

function employeeConfirmPassword(empName, pass) {
    document.querySelector('label[for="conf-pass"]').innerHTML = empName + ", Confirm your password";
    document.querySelector('label[for="conf-pass"]').classList.remove("d-none");
    document.querySelector('#conf-pass').classList.remove("d-none");
    
    document.querySelector('#conf-pass').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if(validateConfirmPassword(pass)) {
                document.querySelector('label[for="conf-pass"]').classList.add("d-none");
                document.querySelector('#conf-pass').classList.add("d-none");
                employeeRegistrationLast(empName);
            }
        }
    });
}

function validateConfirmPassword(pass) {
    let confPass = document.querySelector('#conf-pass').value;
    return pass === confPass ;
}




function employeeRegistrationLast(empName) {
    let id = 1;
    document.querySelector('label[for="emp-name"]').innerHTML = empName + ", your Employee Registration Id is " + id++;
    document.querySelector('label[for="emp-name"]').classList.remove("d-none");


    document.querySelector('#add-vehicle-head').classList.remove("d-none");
    document.querySelector('label[for="vehicle-name"]').classList.remove("d-none");
    document.querySelector('#vehicle-name').classList.remove("d-none");

    document.querySelector('#add-vehicle-head').addEventListener('click', function (e) {

        document.querySelector('#emp-details-header').classList.add("d-none");
        document.querySelector('label[for="emp-name"]').classList.add("d-none");
        // document.querySelector('#employee-details').classList.add("d-none");
        document.querySelector('#emp-details').classList.add("d-none");
        addVehicle();
    });

}

function addVehicle() {
    document.querySelector('#vehicle-name').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            
            document.querySelector('label[for="vehicle-name"]').classList.add("d-none");
            document.querySelector('#vehicle-name').classList.add("d-none");
            vehicleModel();
        }
    });
}

function vehicleModel() {
    document.querySelector('label[for="vehicle-model"]').classList.remove("d-none");
    document.querySelector('#vehicle-model').classList.remove("d-none");

    document.querySelector('#vehicle-model').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {    
            document.querySelector('label[for="vehicle-model"]').classList.add("d-none");
            document.querySelector('#vehicle-model').classList.add("d-none");
            vehicleType();
        }
    });
}

function vehicleType() {
    document.querySelector('label[for="vehicle-type"]').classList.remove("d-none");

    document.querySelector('label[for="cycle"]').classList.remove("d-none");
    document.querySelector('#cycle').classList.remove("d-none");

    document.querySelector('label[for="motorcycle"]').classList.remove("d-none");
    document.querySelector('#motorcycle').classList.remove("d-none");

    document.querySelector('label[for="wheel4"]').classList.remove("d-none");
    document.querySelector('#wheel4').classList.remove("d-none");

    let  ele = document.querySelectorAll('input[name="vehicle-type"]');

    ele.forEach(function(elem) {
        elem.addEventListener('click', function (e) {

            if(elem.checked) {
                const checked = elem;
                console.log(checked);

                document.querySelector('label[for="vehicle-type"]').classList.add("d-none");

                document.querySelector('label[for="cycle"]').classList.add("d-none");
                document.querySelector('#cycle').classList.add("d-none");

                document.querySelector('label[for="motorcycle"]').classList.add("d-none");
                document.querySelector('#motorcycle').classList.add("d-none");

                document.querySelector('label[for="wheel4"]').classList.add("d-none");
                document.querySelector('#wheel4').classList.add("d-none");

                vehicleNumber(checked);
            }
        });
    });
}



function vehicleNumber(checked) {
    document.querySelector('label[for="vehicle-num"]').classList.remove("d-none");
    document.querySelector('#vehicle-num').classList.remove("d-none");

    document.querySelector('#vehicle-num').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
                        
            document.querySelector('label[for="vehicle-num"]').classList.add("d-none");
            document.querySelector('#vehicle-num').classList.add("d-none");
            employeeId(checked);    
        }
    });
}



function employeeId(checked) {
    document.querySelector('label[for="emp-id"]').classList.remove("d-none");
    document.querySelector('#emp-id').classList.remove("d-none");
    document.querySelector('#emp-id').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {

            document.querySelector('label[for="emp-id"]').classList.add("d-none");
            document.querySelector('#emp-id').classList.add("d-none");
            vehicleIdLast(checked);
        }
    });
}

function vehicleIdLast(checked) {
    document.querySelector('label[for="vehicle-id"]').classList.remove("d-none");
    document.querySelector('#vehicle-id').classList.remove("d-none");    
            
    document.querySelector('#pricing-header').classList.remove("d-none");

    document.querySelector('#pricing-header').addEventListener('click', function (e) {
                
        document.querySelector('label[for="vehicle-id"]').classList.add("d-none");
        document.querySelector('#vehicle-id').classList.add("d-none");
        document.querySelector('#add-vehicle-head').classList.add("d-none");
        document.querySelector('#add-vehicle').classList.add("d-none");

        pricing(checked);
        
    });

}



function pricing(checked) {

    document.querySelector('#pricing').classList.remove("d-none");

    
                
    if(checked.value == document.querySelector('label[for="cycle-pricing"]').innerHTML) {

        document.querySelector('label[for="cycle-pricing"]').classList.remove("d-none");
        document.querySelector('#cycle-daily').classList.remove("d-none");
        document.querySelector('#input-cycle-daily').classList.remove("d-none");
        document.querySelector('#cycle-month').classList.remove("d-none");
        document.querySelector('#input-cycle-monthly').classList.remove("d-none");
        document.querySelector('#cycle-year').classList.remove("d-none");
        document.querySelector('#input-cycle-yearly').classList.remove("d-none");
    }

    else if(checked.value == document.querySelector('label[for="motorcycle-pricing"]').innerHTML) {

        document.querySelector('label[for="motorcycle-pricing"]').classList.remove("d-none");
        document.querySelector('#motorcycle-daily').classList.remove("d-none");
        document.querySelector('#input-motorcycle-daily').classList.remove("d-none");
        document.querySelector('#motorcycle-month').classList.remove("d-none");
        document.querySelector('#input-motorcycle-monthly').classList.remove("d-none");
        document.querySelector('#motorcycle-year').classList.remove("d-none");
        document.querySelector('#input-motorcycle-yearly').classList.remove("d-none");
    
    }



    else if(checked.value == document.querySelector('label[for="wheel4-pricing"]').innerHTML) {

        document.querySelector('label[for="wheel4-pricing"]').classList.remove("d-none");
        document.querySelector('#wheel4-daily').classList.remove("d-none");
        document.querySelector('#input-wheel4-daily').classList.remove("d-none");
        document.querySelector('#wheel4-month').classList.remove("d-none");
        document.querySelector('#input-wheel4-monthly').classList.remove("d-none");
        document.querySelector('#wheel4-year').classList.remove("d-none");
        document.querySelector('#input-wheel4-yearly').classList.remove("d-none");


    }

    getPass();

}


function getPass() {
    document.querySelector('#getPass').classList.remove("d-none");

    document.querySelector('#getPass').addEventListener('click',function(e){

        var price = document.querySelectorAll('#input-wheel4-daily,#input-wheel4-monthly,#input-wheel4-yearly,#input-cycle-daily,#input-cycle-monthly,#input-cycle-yearly,#input-motorcycle-daily,#input-motorcycle-monthly,#input-motorcycle-yearly');
        price.forEach(function(elem) {
            if(elem.checked) {
                document.querySelector('#getPass').classList.add("d-none");
            }
        });
    });

}