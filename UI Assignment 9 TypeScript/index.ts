class Employee {
    fullName!: string;
    gender!: any;
    email!: string ;
    password!: string;
    confirmPass!: string;
    contact!: number;
    employeeId:number = 1;

    constructor() {
        this.employeeNameInput();
    }

    isValidPassword = (password: string) => {
        let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
        // let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(password);
    }

    isValidConfirmPass = (confirmPass : string) => {
        return this.password == confirmPass;
    }

    isValidName = (name: string) => {
        let regex = new RegExp("^[A-Za-z]{2,}$");
        return regex.test(name);
    }

    isValidEmail = (email: string) => {
        let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        return regex.test(email);
    }

    employeeNameInput = () => {
        const empNameInput = document.querySelector('#emp-name') as HTMLInputElement;
        empNameInput.addEventListener('keypress', (event) => {

            if (event.key == 'Enter') {
                this.fullName = ((document.querySelector('#emp-name') as HTMLInputElement).value);
                if(this.isValidName(this.fullName)) {
                    document.querySelector('label[for="emp-name"]').classList.add("d-none");
                    document.querySelector("#emp-name").classList.add("d-none");
                    this.employeeGender();
                }
            }

        });
    }


    employeeGender = () => {
        document.querySelector('#emp-gender').innerHTML = `Hii ${this.fullName}! Can I know your gender`;
        document.querySelector('#emp-gender').classList.remove("d-none");
        document.querySelector('label[for="male"]').classList.remove("d-none");
        document.querySelector('#male').classList.remove("d-none");
        document.querySelector('label[for="female"]').classList.remove("d-none");
        document.querySelector('#female').classList.remove("d-none");
        document.querySelector('label[for="other"]').classList.remove("d-none");
        document.querySelector('#other').classList.remove("d-none");

        this.gender = document.querySelectorAll('#male, #female, #other')!;

        this.gender.forEach((elem) => {
            elem.addEventListener('click', (_event:Event) => {
                document.querySelector('#emp-gender').classList.add("d-none");
                document.querySelector('label[for="male"]').classList.add("d-none");
                document.querySelector('#male').classList.add("d-none");
                document.querySelector('label[for="female"]').classList.add("d-none");
                document.querySelector('#female').classList.add("d-none");
                document.querySelector('label[for="other"]').classList.add("d-none");
                document.querySelector('#other').classList.add("d-none");
                this.employeeEmail();
            });
        });           
    }

    employeeEmail = () => {
        document.querySelector('label[for="email"]').innerHTML = `Hii ${this.fullName}! Can I know your email`;        
        document.querySelector('label[for="email"]').classList.remove("d-none");
        document.querySelector('#email').classList.remove("d-none");


        
        const emailInput = document.querySelector('#email') as HTMLInputElement;
        emailInput.addEventListener('keypress', (event)  => {
            if (event.key == 'Enter') {
                // alert("Enter is Pressed!!");
                this.email = ((document.querySelector('#email') as HTMLInputElement).value);
                if(this.isValidEmail(this.email)) {
                    document.querySelector('label[for="email"]').classList.add("d-none");
                    document.querySelector('#email').classList.add("d-none");
                    this.employeePassword();
                }    
            }
        });
    }

    employeePassword = () => {
        document.querySelector('label[for="pass"]').innerHTML = `Hii ${this.fullName}! Enter your password`;
        document.querySelector('label[for="pass"]').classList.remove("d-none");
        document.querySelector('#pass').classList.remove("d-none");

        
        const passwordInput = document.querySelector('#pass') as HTMLInputElement; 
        passwordInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.password = ((document.querySelector('#pass') as HTMLInputElement).value);
                if(this.isValidPassword(this.password)) {
                    document.querySelector('label[for="pass"]').classList.add("d-none");
                    document.querySelector('#pass').classList.add("d-none");
                    this.employeeConfirmPass();
                }
            }
        });
    }

    employeeConfirmPass = () => {
        document.querySelector('label[for="conf-pass"]').innerHTML = `${this.fullName} Confirm your password`;
        document.querySelector('label[for="conf-pass"]').classList.remove("d-none");
        document.querySelector('#conf-pass').classList.remove("d-none");
        
        const confirmPassInput = document.querySelector('#conf-pass') as HTMLInputElement; 
        confirmPassInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.confirmPass = ((document.querySelector('#conf-pass') as HTMLInputElement).value);
                if(this.isValidConfirmPass(this.confirmPass)) {
                    document.querySelector('label[for="conf-pass"]').classList.add("d-none");
                    document.querySelector('#conf-pass').classList.add("d-none");
                    this.employeeRegistrationLast();
                }
            }
        });
    }

    employeeRegistrationLast = () => {
        document.querySelector('label[for="emp-name"]').innerHTML = `${this.fullName}, your Employee Registration Id is ${this.employeeId}`;
        document.querySelector('label[for="emp-name"]').classList.remove("d-none");


        document.querySelector('#add-vehicle-head').classList.remove("d-none");
        document.querySelector('label[for="vehicle-name"]').classList.remove("d-none");
        document.querySelector('#vehicle-name').classList.remove("d-none");

        const vehicleHeadingSelect = document.querySelector('#add-vehicle-head') as HTMLSelectElement;
        vehicleHeadingSelect.addEventListener('click', (_event: Event) => {

            // document.querySelector('#emp-details-header').classList.add("d-none");
            document.querySelector('label[for="emp-name"]').classList.add("d-none");
            document.querySelector('#employee-details').classList.add("d-none");
            document.querySelector('#emp-details').classList.add("d-none");
        });
    }


}

// var employee = new Employee();


class Vehicle extends Employee{
    vehicleName!: string;
    modelName!: string;
    type!: any; 
    public typeChecked!: any;
    number!: string ;

    constructor() {
        super();
        this.addVehicle();
    }

    addVehicle = () => {
        const vehicleNameInput = document.querySelector('#vehicle-name') as HTMLInputElement;
        vehicleNameInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                
                document.querySelector('label[for="vehicle-name"]').classList.add("d-none");
                document.querySelector('#vehicle-name').classList.add("d-none");
                this.vehicleModel();
            }
        });
    }

    vehicleModel = () => {

        document.querySelector('label[for="vehicle-model"]').classList.remove("d-none");
        document.querySelector('#vehicle-model').classList.remove("d-none");

        const vehicleModelInput = document.querySelector('#vehicle-model') as HTMLInputElement;
        vehicleModelInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {    
                document.querySelector('label[for="vehicle-model"]').classList.add("d-none");
                document.querySelector('#vehicle-model').classList.add("d-none");
                this.vehicleType();
            }
        });
    }

    vehicleType = () => {
        document.querySelector('label[for="vehicle-type"]').classList.remove("d-none");

        document.querySelector('label[for="cycle"]').classList.remove("d-none");
        document.querySelector('#cycle').classList.remove("d-none");

        document.querySelector('label[for="motorcycle"]').classList.remove("d-none");
        document.querySelector('#motorcycle').classList.remove("d-none");

        document.querySelector('label[for="wheel4"]').classList.remove("d-none");
        document.querySelector('#wheel4').classList.remove("d-none");

        this.type = document.querySelectorAll('input[name="vehicle-type"]');

        this.type.forEach((elem:any) => {
            elem.addEventListener('click', (event:Event) => {

                if(elem.checked) {
                    this.typeChecked = elem as HTMLInputElement;
                    console.log(this.typeChecked);

                    document.querySelector('label[for="vehicle-type"]').classList.add("d-none");

                    document.querySelector('label[for="cycle"]').classList.add("d-none");
                    document.querySelector('#cycle').classList.add("d-none");

                    document.querySelector('label[for="motorcycle"]').classList.add("d-none");
                    document.querySelector('#motorcycle').classList.add("d-none");

                    document.querySelector('label[for="wheel4"]').classList.add("d-none");
                    document.querySelector('#wheel4').classList.add("d-none");

                   
                    this.vehicleNumber();
                }
            });

        });
    }

    vehicleNumber = () => {
        document.querySelector('label[for="vehicle-num"]').classList.remove("d-none");
        document.querySelector('#vehicle-num').classList.remove("d-none");

        const vehicleNumberInput = document.querySelector('#vehicle-num') as HTMLInputElement;
        vehicleNumberInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                            
                document.querySelector('label[for="vehicle-num"]').classList.add("d-none");
                document.querySelector('#vehicle-num').classList.add("d-none");
                this.employeeIdFn();    
            }
        });
    }

    employeeIdFn = () => {
        document.querySelector('label[for="emp-id"]').classList.remove("d-none");
        document.querySelector('#emp-id').classList.remove("d-none");

        const empIdInput = document.querySelector('#emp-id') as HTMLInputElement;
        empIdInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {

                document.querySelector('label[for="emp-id"]').classList.add("d-none");
                document.querySelector('#emp-id').classList.add("d-none");
                this.vehicleIdLast();
            }
        });
    }

    vehicleIdLast = () => {
        document.querySelector('label[for="vehicle-id"]').classList.remove("d-none");
        document.querySelector('#vehicle-id').classList.remove("d-none");    
                
        document.querySelector('#pricing-header').classList.remove("d-none");

        document.querySelector('#pricing-header').addEventListener('click', (event) => {
                    
            document.querySelector('label[for="vehicle-id"]').classList.add("d-none");
            document.querySelector('#vehicle-id').classList.add("d-none");
            document.querySelector('#add-vehicle-head').classList.add("d-none");
            document.querySelector('#add-vehicle').classList.add("d-none");

            this.pricing();

        });
    };

    pricing = () => {

        document.querySelector('#pricing').classList.remove("d-none");
    
        const cyclePricingLabel = document.querySelector('label[for="cycle-pricing"]') as HTMLLabelElement;
        const motorcyclePricingLabel = document.querySelector('label[for="motorcycle-pricing"]') as HTMLLabelElement;
        const wheel4PricingLabel = document.querySelector('label[for="wheel4-pricing"]') as HTMLLabelElement;
        console.log(this.typeChecked);
        if(((this.typeChecked as HTMLInputElement).value) == cyclePricingLabel.innerHTML) {
    
            document.querySelector('label[for="cycle-pricing"]').classList.remove("d-none");
            document.querySelector('#cycle-daily').classList.remove("d-none");
            document.querySelector('#input-cycle-daily').classList.remove("d-none");
            document.querySelector('#cycle-month').classList.remove("d-none");
            document.querySelector('#input-cycle-monthly').classList.remove("d-none");
            document.querySelector('#cycle-year').classList.remove("d-none");
            document.querySelector('#input-cycle-yearly').classList.remove("d-none");
        }

        else if(((this.typeChecked as HTMLInputElement).value) == motorcyclePricingLabel.innerHTML) {
    
            document.querySelector('label[for="motorcycle-pricing"]').classList.remove("d-none");
            document.querySelector('#motorcycle-daily').classList.remove("d-none");
            document.querySelector('#input-motorcycle-daily').classList.remove("d-none");
            document.querySelector('#motorcycle-month').classList.remove("d-none");
            document.querySelector('#input-motorcycle-monthly').classList.remove("d-none");
            document.querySelector('#motorcycle-year').classList.remove("d-none");
            document.querySelector('#input-motorcycle-yearly').classList.remove("d-none");
        
        }
    
    
    
        else if(((this.typeChecked as HTMLInputElement).value) == wheel4PricingLabel.innerHTML) {
    
            document.querySelector('label[for="wheel4-pricing"]').classList.remove("d-none");
            document.querySelector('#wheel4-daily').classList.remove("d-none");
            document.querySelector('#input-wheel4-daily').classList.remove("d-none");
            document.querySelector('#wheel4-month').classList.remove("d-none");
            document.querySelector('#input-wheel4-monthly').classList.remove("d-none");
            document.querySelector('#wheel4-year').classList.remove("d-none");
            document.querySelector('#input-wheel4-yearly').classList.remove("d-none");
    
    
        }

    };


}

class Pass extends Vehicle{


    constructor() {
        super();
        this.getPass();

    }

    getPass = () => {
        document.querySelector('#getPass').classList.remove("d-none");

        document.querySelector('#getPass').addEventListener('click',function(e){

            const price = (document.querySelectorAll('#input-wheel4-daily,#input-wheel4-monthly,#input-wheel4-yearly,#input-cycle-daily,#input-cycle-monthly,#input-cycle-yearly,#input-motorcycle-daily,#input-motorcycle-monthly,#input-motorcycle-yearly'));
            price.forEach((elem) => {
                let ele = <HTMLInputElement> elem;
                if(ele.checked) {
                    document.querySelector('#getPass').classList.add("d-none");
                }
            });
        });
    }

}


// var emp = new Employee();
// emp.employeeNameInput();

// const vehicle = new Vehicle();
// vehicle.addVehicle();

const objPass = new Pass();

 


