function sendEmail() { 
    let name = document.getElementById("idName").value;
    let email = document.getElementById("idEmail").value;
    let message = document.getElementById("idMessage").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;

   //alert(finalmessage);  
   Email.send({  
        SecureToken : "c7be8369-488c-475a-892e-0e8264b24a84",
        To : 'famherrod.sat@gmail.com',
        From : "famherrod.sat@gmail.com",
        Subject : "New email from your personal web site",
        Body : finalmessage
    }).then(
    message => alert(message)
    );
}