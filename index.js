function signup(userName){
    //Array with some userName
 let users = ["Ram","Sham","Radha","Mira"];
  if(users.includes(userName)){
    return "user already registered, Please Login";
  }else {
    return "Signup Successful Please Login";
  }
}