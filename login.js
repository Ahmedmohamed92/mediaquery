function formValidate() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = '';

    if ( email.length < 7) {
        text="Please enter valid email";
        error.innerHTML= text;
        return false;
    }

    else if (pass.length <8) {
        text="Please enter valid password";
        error.innerHTML= text;
        return false;
    }
    else {
        alert("done");
        return true;
    }
}

