

function loginValidation()
{

var loginmail = document.getElementById("email").value;
var loginpwd = document.getElementById("password").value;



//var ppp = document.registration.pwd;

    if (ValidateLoginFields(loginmail,loginpwd))
    {
        if(ValidateLoginEmail(loginmail))
          {
             
            return true;
          }
    }
          


return false;



} 


function ValidateLoginFields(loginmail,loginpwd)

{
    if(loginmail===''||loginpwd==='')
    {
       alert("Please fill all the fields");
       return false; 
       
    }
    else
    {
        return true;
    }

}



function ValidateLoginEmail(loginmail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(loginmail.match(mailformat) )
{

  alert('Login Successful');
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;

}
}
