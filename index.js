function signup(userName) {
    //Array with some userName
    let users = ["Ram", "Sham", "Radha", "Mira"];
    if (users.includes(userName)) {
        return "user already registered, Please Login";
    } else {
        return "Signup Successful Please Login";
    }
}
function login(userName, password) {
    //Array with some userName
    let arr = ["Raha", "Nisha", "Pavan", "Sonali"];
    if (users.include(userName)) {
        if (password == "Emp@123") {
            return "Login Successful...."
        } else {
            return "Wrong password"
        }
    } else {
        return "user not found, please sign up"
    }
}

