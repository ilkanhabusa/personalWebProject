function sendEmail() { 
    let name = document.getElementById("idName").value;
    let email = document.getElementById("idEmail").value;
    let themessage = document.getElementById("idMessage").value;
    let finalmessage = "Name : "+ name + " <br>  Email : "+ email + " <br>  Message : " + themessage + "<br>";

   Email.send({  
        SecureToken : "7a7c3be8-27ca-452a-9de5-276940b319d4",
        To : "ilkanhabusa@gmail.com",
        From : "ilkanhabusa@gmail.com",
        Subject : "New email from your personal web site",
        Body : finalmessage
    }).then(
        message => alert(message)
    );
    
    


}