function myfunction(){
    let name = {
        "username":"giyu",
        "password":"giyu123"
    };

    let a = [document.getElementById('user').value,document.getElementById('pass').value];

    if (a[0] === name.username && a[1] === name.password) {
        alert("Login successful");
        window.location.href = "index.html";

    } else {
        alert("Incorrect username or password");
    }
}
// let d = new Date();
// console.log(d.getDate())