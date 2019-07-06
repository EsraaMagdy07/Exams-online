$(document).ready(function () {


    $("#btn_login").click(function openForm() {
        document.getElementById("myForm").style.display = "block";
    })
    $("#popupcancelbtn").click(function closeForm() {
        document.getElementById("myForm").style.display = "none";
    })
    $("#btn_register").click(function () {
        window.location.replace("Register.html");
    });


    /***register*** */

    // json Array of User
    var usersJson = [];
    // json object of one User
    var userObject;
    //register data

    var email = $('#Reg_name');
    var psw = $('#Reg_password');
    var btnReg = $('#Reg');

    $("#Reg").click(function () {
   if($("#Reg_name").val()=="")
            {
                document.getElementById("regnamereq").innerText="please enter name";
            }
        else
            {
                                document.getElementById("regnamereq").innerText="";

            }
        if($("#Reg_password").val()==""){
                      document.getElementById("regpassreq").innerText="please enter password";

        }
        
        else{
        var saved = JSON.parse(localStorage.getItem('users'));
        if (saved == null) {
            userObject = [{
                "userID": usersJson.length + 1,
                "UserName": email.val(),
                "password": psw.val()



            }]
            usersJson.push(userObject);
            localStorage.setItem('users', JSON.stringify(usersJson))
        } else {
            userObject = [{
                "userID": usersJson.length + 1,
                "UserName": email.val(),
                "password": psw.val()

            }]
            debugger;
            var existUser = false;

            for (var i = 0; i < saved.length; i++) {

                if (email.val() == saved[i].map(a => a.UserName)) {

                    existUser = true;
                    break;
                }
            }
        } if (existUser == false) {
            saved.push(userObject);
            // Put the object into storage
            localStorage.setItem('users', JSON.stringify(saved));
            alert("Register  Successfully");
            document.getElementById("Register").style.display = "none"
            document.getElementById("register_sucess").style.display = "block";
            // break;
        } else if (existUser == true) {
            alert("your mail registered before");
            document.getElementById("fault_name").style.display = "inline-block"
        }
        }
    })

    //login data

    var logemail = $('#email');
    var logepsw = $('#psw');

    var logBtn = $('#popuploginbtn');
    logBtn.click(function () {
        if($("#email").val()=="")
            {
                document.getElementById("namereq").innerText="please enter name";
            }
        if($("#psw").val()==""){
                            document.getElementById("passreq").innerText="please enter password";

        }
      else{
        var saved = JSON.parse(localStorage.getItem('users'));
        if (saved == null) {
            alert("Please you shoud Register ");

        } 
          else {

            for (var i = 0; i < saved.length; i++) {
                var x = saved[i].map(a => a.UserName);
                console.log(x)
                var y = saved[i].password;
                var x1 = logemail.val();
                var y1 = logepsw.val();
                if (saved[i].map(a => a.UserName) == logemail.val() && saved[i].map(a => a.password) == logepsw.val()) {
                    sessionStorage.setItem("loged", "true");
                    sessionStorage.setItem("currentUser", saved[i].map(a => a.UserName));


                    window.confirm("log Sucessfully")
              
               window.location.replace("home.html");

 //  document.getElementById("nameuser").innerHTML = saved[i].map(a => a.UserName);
 
                    
                    document.getElementById("fo").style.display = "none";
                         document.getElementById("fo2").style.display = "none";

                    document.getElementById("btn_register").style.display = "none";
                    document.getElementById("btn_login").style.display = "none";
                    document.getElementById("drop").style.display = "block";

                }

                }
            }
        }
    })
  document.getElementById("signout").onclick = outfun

    function outfun() {
        sessionStorage.setItem("loged", "false");
        alert("sign out")
        document.getElementById("btn_register").style.display = "block";
        document.getElementById("btn_login").style.display = "block";
        document.getElementById("drop").style.display = "none";
    }


    $("#btnGOExamOOp").click(FunCheckUser0);

    function FunCheckUser0() {
        debugger;
        if (sessionStorage.getItem("loged") == "true") {
            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamOOp": "1"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamOOp);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamOOp) == "1") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamOOp": "1"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("Exam OOP.html");



                    }
                }
            }
        }
        else {
            window.confirm("you must login")
        }
    }


    $("#btnGOExamhtml").click(FunCheckUser1);
    function FunCheckUser1() {
        if ((sessionStorage.getItem("loged")) == "true") {
            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamhtml": "2"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamhtml);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamhtml) == "2") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamhtml": "2"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("Examhtml.html");
                    }
                }

            }
        }
        else {
            window.confirm("you must login")
        }
    }
    $("#btnGOExamcss").click(FunCheckUser2);
    function FunCheckUser2() {

        if ((sessionStorage.getItem("loged")) == "true") {


            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamcss": "3"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamcss);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamcss) == "3") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamcss": "3"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("ExamCSS.html");
                    }
                }

            }
        }
        else {
            window.confirm("you must login")
        }

    }
    $("#btnGOExamjs").click(FunCheckUser3);
    function FunCheckUser3() {
        if ((sessionStorage.getItem("loged")) == "true") {


            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamjs": "4"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamjs);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamjs) == "4") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamjs": "4"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("Exam JS.html");
                    }
                }

            }
        }
        else {
            window.confirm("you must login")
        }

    }
    $("#btnGOExamjquery").click(FunCheckUser4);
    function FunCheckUser4() {

        if ((sessionStorage.getItem("loged")) == "true") {


            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamjquery": "5"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamjquery);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamjquery) == "5") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamjquery": "5"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("jQuery.html");
                    }
                }

            }
        }
        else {
            window.confirm("you must login")
        }


    }
    $("#btnGOExamsql").click(FunCheckUser5);
    function FunCheckUser5() {
        if ((sessionStorage.getItem("loged")) == "true") {


            if ((sessionStorage.getItem("loged")) == "true");
            var currentUserr = sessionStorage.getItem("currentUser");
            //var saved = JSON.parse(localStorage.getItem('users'));
            var ExamusersJson = [];

            var ExamuserObject;
            var savedExame = JSON.parse(localStorage.getItem('Examusers'));
            if (savedExame == null) {
                ExamuserObject = [{
                    "UserName": currentUserr,
                    "takeExamsql": "6"
                }]
                ExamusersJson.push(ExamuserObject);
                localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
            } else {
                for (var i = 0; i < savedExame.length; i++) {
                    var x = savedExame[i].map(a => a.takeExamsql);
                    var x2 = savedExame[i].map(a => a.UserName);
                    if (currentUserr == savedExame[i].map(a => a.UserName) && savedExame[i].map(a => a.takeExamsql) == "6") {

                        alert("you take this exame")
                    } else {
                        ExamuserObject = [{
                            "UserName": currentUserr,

                            "takeExamsql": "6"

                        }]
                        ExamusersJson.push(ExamuserObject);
                        localStorage.setItem('Examusers', JSON.stringify(ExamusersJson))
                        window.location.replace("examsql.html");
                    }
                }

            }

        }
        else {
            window.confirm("you must login")
        }
    }
});