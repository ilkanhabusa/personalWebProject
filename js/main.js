function sendEmail() { 
    let name = document.getElementById("idName").value;
    let email = document.getElementById("idEmail").value;
    let message = document.getElementById("idMessage").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;

   alert(finalmessage);    /*
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "You were contacted by:"
    }).then(
    message => alert(message)
    );*/
}