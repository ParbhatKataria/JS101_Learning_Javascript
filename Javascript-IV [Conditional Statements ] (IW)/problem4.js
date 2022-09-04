// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let req_email = "abc@gmail.com";
let req_pass = "12345";

let fill_email = "abc@gmail.com";
let fill_pass = "12345";

if(req_email == fill_email){
  if(req_pass == fill_pass){
    console.log("Logging In");
  }
  else {
    console.log("Password Incorrect");
  }
}
else {
  console.log("Email Incorrect");
}
