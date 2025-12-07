export default function validate() {
    let credentials = {

        "username": "Admin",
        "password": "12345"
    }
    let userdata = {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value,
        "remember":document.getElementById('remember').checked
    }

    // if(credentials.username == userdata.username && credentials.password == userdata.password)
    // {
    //     alert("login sucessfull")
    // }
    // else{
    //     alert("Invalid password or username")
    // }

    let userpromise = new Promise(
        function (resolve, reject) {
            if (credentials.username == userdata.username && credentials.password == userdata.password) {
                resolve("login sucessfull")
            }
            else {
                reject("Invalid password or username")
            }

        }


    );


    userpromise.then(
        function (sucessmessage) {
            alert(sucessmessage)
        }
    )
        .catch(
            function (failedmessage) {
                alert(failedmessage)
            }
        );

        if(userdata.remember)
        {
            localStorage.setItem('username',userdata.username);
            localStorage.setItem('password',userdata.password)
            alert("password stored");
        }
        else{
            sessionStorage.setItem('username',userdata.username);
            sessionStorage.setItem('password',userdata.password);
            alert("error");
        }
}
