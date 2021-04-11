var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.employeeId = 1;
        this.isValidPassword = function (password) {
            var regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
            // let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return regex.test(password);
        };
        this.isValidConfirmPass = function (confirmPass) {
            return _this.password == confirmPass;
        };
        this.isValidName = function (name) {
            var regex = new RegExp("^[A-Za-z]{2,}$");
            return regex.test(name);
        };
        this.isValidEmail = function (email) {
            var regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
            return regex.test(email);
        };
        this.employeeNameInput = function () {
            var empNameInput = document.querySelector('#emp-name');
            empNameInput.addEventListener('keypress', function (event) {
                if (event.key == 'Enter') {
                    _this.fullName = (document.querySelector('#emp-name').value);
                    if (_this.isValidName(_this.fullName)) {
                        document.querySelector('label[for="emp-name"]').classList.add("d-none");
                        document.querySelector("#emp-name").classList.add("d-none");
                        _this.employeeGender();
                    }
                }
            });
        };
        this.employeeGender = function () {
            document.querySelector('#emp-gender').innerHTML = "Hii " + _this.fullName + "! Can I know your gender";
            document.querySelector('#emp-gender').classList.remove("d-none");
            document.querySelector('label[for="male"]').classList.remove("d-none");
            document.querySelector('#male').classList.remove("d-none");
            document.querySelector('label[for="female"]').classList.remove("d-none");
            document.querySelector('#female').classList.remove("d-none");
            document.querySelector('label[for="other"]').classList.remove("d-none");
            document.querySelector('#other').classList.remove("d-none");
            _this.gender = document.querySelectorAll('#male, #female, #other');
            _this.gender.forEach(function (elem) {
                elem.addEventListener('click', function (_event) {
                    document.querySelector('#emp-gender').classList.add("d-none");
                    document.querySelector('label[for="male"]').classList.add("d-none");
                    document.querySelector('#male').classList.add("d-none");
                    document.querySelector('label[for="female"]').classList.add("d-none");
                    document.querySelector('#female').classList.add("d-none");
                    document.querySelector('label[for="other"]').classList.add("d-none");
                    document.querySelector('#other').classList.add("d-none");
                    _this.employeeEmail();
                });
            });
        };
        this.employeeEmail = function () {
            document.querySelector('label[for="email"]').innerHTML = "Hii " + _this.fullName + "! Can I know your email";
            document.querySelector('label[for="email"]').classList.remove("d-none");
            document.querySelector('#email').classList.remove("d-none");
            var emailInput = document.querySelector('#email');
            emailInput.addEventListener('keypress', function (event) {
                if (event.key == 'Enter') {
                    // alert("Enter is Pressed!!");
                    _this.email = (document.querySelector('#email').value);
                    if (_this.isValidEmail(_this.email)) {
                        document.querySelector('label[for="email"]').classList.add("d-none");
                        document.querySelector('#email').classList.add("d-none");
                        _this.employeePassword();
                    }
                }
            });
        };
        this.employeePassword = function () {
            document.querySelector('label[for="pass"]').innerHTML = "Hii " + _this.fullName + "! Enter your password";
            document.querySelector('label[for="pass"]').classList.remove("d-none");
            document.querySelector('#pass').classList.remove("d-none");
            var passwordInput = document.querySelector('#pass');
            passwordInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    _this.password = (document.querySelector('#pass').value);
                    if (_this.isValidPassword(_this.password)) {
                        document.querySelector('label[for="pass"]').classList.add("d-none");
                        document.querySelector('#pass').classList.add("d-none");
                        _this.employeeConfirmPass();
                    }
                }
            });
        };
        this.employeeConfirmPass = function () {
            document.querySelector('label[for="conf-pass"]').innerHTML = _this.fullName + " Confirm your password";
            document.querySelector('label[for="conf-pass"]').classList.remove("d-none");
            document.querySelector('#conf-pass').classList.remove("d-none");
            var confirmPassInput = document.querySelector('#conf-pass');
            confirmPassInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    _this.confirmPass = (document.querySelector('#conf-pass').value);
                    if (_this.isValidConfirmPass(_this.confirmPass)) {
                        document.querySelector('label[for="conf-pass"]').classList.add("d-none");
                        document.querySelector('#conf-pass').classList.add("d-none");
                        _this.employeeRegistrationLast();
                    }
                }
            });
        };
        this.employeeRegistrationLast = function () {
            document.querySelector('label[for="emp-name"]').innerHTML = _this.fullName + ", your Employee Registration Id is " + _this.employeeId;
            document.querySelector('label[for="emp-name"]').classList.remove("d-none");
            document.querySelector('#add-vehicle-head').classList.remove("d-none");
            document.querySelector('label[for="vehicle-name"]').classList.remove("d-none");
            document.querySelector('#vehicle-name').classList.remove("d-none");
            var vehicleHeadingSelect = document.querySelector('#add-vehicle-head');
            vehicleHeadingSelect.addEventListener('click', function (_event) {
                // document.querySelector('#emp-details-header').classList.add("d-none");
                document.querySelector('label[for="emp-name"]').classList.add("d-none");
                document.querySelector('#employee-details').classList.add("d-none");
                document.querySelector('#emp-details').classList.add("d-none");
            });
        };
        this.employeeNameInput();
    }
    return Employee;
}());
// var employee = new Employee();
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super.call(this) || this;
        _this.addVehicle = function () {
            var vehicleNameInput = document.querySelector('#vehicle-name');
            vehicleNameInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    document.querySelector('label[for="vehicle-name"]').classList.add("d-none");
                    document.querySelector('#vehicle-name').classList.add("d-none");
                    _this.vehicleModel();
                }
            });
        };
        _this.vehicleModel = function () {
            document.querySelector('label[for="vehicle-model"]').classList.remove("d-none");
            document.querySelector('#vehicle-model').classList.remove("d-none");
            var vehicleModelInput = document.querySelector('#vehicle-model');
            vehicleModelInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    document.querySelector('label[for="vehicle-model"]').classList.add("d-none");
                    document.querySelector('#vehicle-model').classList.add("d-none");
                    _this.vehicleType();
                }
            });
        };
        _this.vehicleType = function () {
            document.querySelector('label[for="vehicle-type"]').classList.remove("d-none");
            document.querySelector('label[for="cycle"]').classList.remove("d-none");
            document.querySelector('#cycle').classList.remove("d-none");
            document.querySelector('label[for="motorcycle"]').classList.remove("d-none");
            document.querySelector('#motorcycle').classList.remove("d-none");
            document.querySelector('label[for="wheel4"]').classList.remove("d-none");
            document.querySelector('#wheel4').classList.remove("d-none");
            _this.type = document.querySelectorAll('input[name="vehicle-type"]');
            _this.type.forEach(function (elem) {
                elem.addEventListener('click', function (event) {
                    if (elem.checked) {
                        _this.typeChecked = elem;
                        console.log(_this.typeChecked);
                        document.querySelector('label[for="vehicle-type"]').classList.add("d-none");
                        document.querySelector('label[for="cycle"]').classList.add("d-none");
                        document.querySelector('#cycle').classList.add("d-none");
                        document.querySelector('label[for="motorcycle"]').classList.add("d-none");
                        document.querySelector('#motorcycle').classList.add("d-none");
                        document.querySelector('label[for="wheel4"]').classList.add("d-none");
                        document.querySelector('#wheel4').classList.add("d-none");
                        _this.vehicleNumber();
                    }
                });
            });
        };
        _this.vehicleNumber = function () {
            document.querySelector('label[for="vehicle-num"]').classList.remove("d-none");
            document.querySelector('#vehicle-num').classList.remove("d-none");
            var vehicleNumberInput = document.querySelector('#vehicle-num');
            vehicleNumberInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    document.querySelector('label[for="vehicle-num"]').classList.add("d-none");
                    document.querySelector('#vehicle-num').classList.add("d-none");
                    _this.employeeIdFn();
                }
            });
        };
        _this.employeeIdFn = function () {
            document.querySelector('label[for="emp-id"]').classList.remove("d-none");
            document.querySelector('#emp-id').classList.remove("d-none");
            var empIdInput = document.querySelector('#emp-id');
            empIdInput.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    document.querySelector('label[for="emp-id"]').classList.add("d-none");
                    document.querySelector('#emp-id').classList.add("d-none");
                    _this.vehicleIdLast();
                }
            });
        };
        _this.vehicleIdLast = function () {
            document.querySelector('label[for="vehicle-id"]').classList.remove("d-none");
            document.querySelector('#vehicle-id').classList.remove("d-none");
            document.querySelector('#pricing-header').classList.remove("d-none");
            document.querySelector('#pricing-header').addEventListener('click', function (event) {
                document.querySelector('label[for="vehicle-id"]').classList.add("d-none");
                document.querySelector('#vehicle-id').classList.add("d-none");
                document.querySelector('#add-vehicle-head').classList.add("d-none");
                document.querySelector('#add-vehicle').classList.add("d-none");
                _this.pricing();
            });
        };
        _this.pricing = function () {
            document.querySelector('#pricing').classList.remove("d-none");
            var cyclePricingLabel = document.querySelector('label[for="cycle-pricing"]');
            var motorcyclePricingLabel = document.querySelector('label[for="motorcycle-pricing"]');
            var wheel4PricingLabel = document.querySelector('label[for="wheel4-pricing"]');
            console.log(_this.typeChecked);
            if ((_this.typeChecked.value) == cyclePricingLabel.innerHTML) {
                document.querySelector('label[for="cycle-pricing"]').classList.remove("d-none");
                document.querySelector('#cycle-daily').classList.remove("d-none");
                document.querySelector('#input-cycle-daily').classList.remove("d-none");
                document.querySelector('#cycle-month').classList.remove("d-none");
                document.querySelector('#input-cycle-monthly').classList.remove("d-none");
                document.querySelector('#cycle-year').classList.remove("d-none");
                document.querySelector('#input-cycle-yearly').classList.remove("d-none");
            }
            else if ((_this.typeChecked.value) == motorcyclePricingLabel.innerHTML) {
                document.querySelector('label[for="motorcycle-pricing"]').classList.remove("d-none");
                document.querySelector('#motorcycle-daily').classList.remove("d-none");
                document.querySelector('#input-motorcycle-daily').classList.remove("d-none");
                document.querySelector('#motorcycle-month').classList.remove("d-none");
                document.querySelector('#input-motorcycle-monthly').classList.remove("d-none");
                document.querySelector('#motorcycle-year').classList.remove("d-none");
                document.querySelector('#input-motorcycle-yearly').classList.remove("d-none");
            }
            else if ((_this.typeChecked.value) == wheel4PricingLabel.innerHTML) {
                document.querySelector('label[for="wheel4-pricing"]').classList.remove("d-none");
                document.querySelector('#wheel4-daily').classList.remove("d-none");
                document.querySelector('#input-wheel4-daily').classList.remove("d-none");
                document.querySelector('#wheel4-month').classList.remove("d-none");
                document.querySelector('#input-wheel4-monthly').classList.remove("d-none");
                document.querySelector('#wheel4-year').classList.remove("d-none");
                document.querySelector('#input-wheel4-yearly').classList.remove("d-none");
            }
        };
        _this.addVehicle();
        return _this;
    }
    return Vehicle;
}(Employee));
var Pass = /** @class */ (function (_super) {
    __extends(Pass, _super);
    function Pass() {
        var _this = _super.call(this) || this;
        _this.getPass = function () {
            document.querySelector('#getPass').classList.remove("d-none");
            document.querySelector('#getPass').addEventListener('click', function (e) {
                var price = (document.querySelectorAll('#input-wheel4-daily,#input-wheel4-monthly,#input-wheel4-yearly,#input-cycle-daily,#input-cycle-monthly,#input-cycle-yearly,#input-motorcycle-daily,#input-motorcycle-monthly,#input-motorcycle-yearly'));
                price.forEach(function (elem) {
                    var ele = elem;
                    if (ele.checked) {
                        document.querySelector('#getPass').classList.add("d-none");
                    }
                });
            });
        };
        _this.getPass();
        return _this;
    }
    return Pass;
}(Vehicle));
// var emp = new Employee();
// emp.employeeNameInput();
// const vehicle = new Vehicle();
// vehicle.addVehicle();
var objPass = new Pass();
