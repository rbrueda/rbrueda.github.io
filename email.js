function sendEmail(){
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    alert(firstName)
    alert(lastName)
    alert(email)
    alert(message)

    //checks for email validation
    var emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (emailRegx.test(email)){
        Email.send({
            SecureToken: "f31f6362-6201-4b1c-b05f-4a9ad705ee5f",
            From : email,
            To : 'rbrueda8@gmail.com',
            Subject: firstName + lastName + ' Sent Message from Website',
            Body : message,
        })
            .then(function(message){
                alert("Message has been sent! It might take a few days to get a response");
            })
    }
    else{
        alert("Invalid email. Please try again.")
    }
    


}