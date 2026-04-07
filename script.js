function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "user123" && pass === "user123"){
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password");
    }
}