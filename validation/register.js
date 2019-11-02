const Validator = requrie("validator");
const isEmpty = require("is-empty")

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // convert emptyfields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email: "";
    // password
    data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

//   name check
if(Validator.isEmpty(data.name)){
    errors.name = "Name Field is required"
}

// email check
if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required"
}else if (!Validator.isEmpty(data.email)){
    errors.email = "Email is invalid"
}

// Password Checks
if(Validator.isEmpty(data.password)){
    errors.password = "Password Field is required"
}
if(Validator.isEmpty(data.password2)){
    errors.password = "Confirm password field is required"
}
if(!Validator.isLength(data.password), {min: 6, max:30}) {
    errors.password = "Password must be at least 6 characters"
}
if(!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
}
}