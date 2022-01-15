function formValidation()
{

var useremai = document.getElementById("semail").value;
var phone = document.getElementById("phone").value;
var name = document.getElementById("username").value;
var pwd1 = document.getElementById("password1").value;
var pwd2 = document.getElementById("password2").value;






//var passid = document.registration.passid;


if (ValidateAllFields(useremai,phone,name,pwd1,pwd2))
        {
          console.log("done checkinf fields");
          if (ValidateEmail(useremai))

          {

            console.log("email correct");
            if(ValidatePhone(phone))
            {
              console.log("corect phone");
              if(ValidatedBothPasswords(pwd1,pwd2))
              {
                console.log("password correct");
                return true;
              }
            }

          }
              

          
        }






return false;



} 


function ValidatedBothPasswords(pwd1,pwd2)
{

  if(pwd1===pwd2)
  {
    alert('Account created Succesfully !!');
    return true;
    
  }
  else
  {
    alert("Paswwords doesn't match")
    return false;

  }

}



function ValidateAllFields(useremai,phone,name,pwd1,pwd2)
{


  if (useremai===""||phone===""||name===""||pwd1===""||pwd2==="")
  {
    
    alert("Fields Should not be empty");
    return false;
  
  }
  else
  {
    
    return true;
  }
    
  

}





function ValidateEmail(useremai)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(useremai.match(mailformat) )
    {

        
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    
    return false;
    }
}





  
function ValidatePhone(phone)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((phone.match(phoneno)))
        {

            
      return true;
        }
      else
        {
        alert("Enter form xxx-xxx-xxxx/xxx.xxx.xxxx/xx xx xxx");
        //phone.focus();
        return false;
        }
}










