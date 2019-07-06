$(document).ready(function () {

    var Exams = {
        "ExameName": "OOP",
        "Questions": [
            {
                "id": 1,
                "name": "question1",
                "question": "Which of the following keyword is used for including the namespaces in the program in C#?",
                "answer1": "imports",
                "answer2": "using",
                "answer3": "exports",
                "answer4": "None of the above",
                "trueAnswer": "2"
            },
            {
                "id": 2,
                "name": "question2",
                "question": "Which of the following converts a type to a single Unicode character, where possible in C#?",
                "answer1": "ToSingle",
                "answer2": "ToByte",
                "answer3": "ToChar",
                "answer4": "ToDateTime",
                "trueAnswer": "3"
            },
            {
                "id": 3,
                "name": "question3",
                "question": "Which of the following converts a type to a signed byte type in C#?",
                "answer1": "ToInt64",
                "answer2": "ToSbyte",
                "answer3": "ToSingle",
                "answer4": "ToInt32",
                "trueAnswer": "2"
            },
            {
                "id": 4,
                "name": "question4",
                "question": "Which of the following operator returns the type of a class in C#?",
                "answer1": "sizeof",
                "answer2": "typeof",
                "answer3": "&</a>",
                "answer4": "*",
                "trueAnswer": "2"
            },
            {
                "id": 5,
                "name": "question5",
                "question": " Which of the following access specifier in C# allows a class to hide its member variables and member functions from other functions and objects?",
                "answer1": "public",
                "answer2": "private",
                "answer1": "protected",
                "answer": "internal",
                "trueAnswer": "1"
            },
            {
                "id": 6,
                "name": "question6",
                "question": "Which of the following preprocessor directive allows testing a symbol or symbols to see if they evaluate to true in C#?",
                "answer1": "define",
                "answer2": "undef",
                "answer3": "if",
                "answer4": "elif",
                "trueAnswer": "3"
            },
            {
                "id": 7,
                "name": "question7",
                "question": "CLR is the .NET equivalent of ?",
                "answer1": "Java Virtual Machine",
                "answer2": "Common Language Runtime",
                "answer3": "Common Type System",
                "answer4": "Common Language Specification",
                "trueAnswer": "1"
            },
            {
                "id": 8,
                "name": "question8",
                "question": "Boxing converts a value type on the stack to an ______ on the heap.",
                "answer1": "Bool type",
                "answer2": "Instance type",
                "answer3": "Class type",
                "answer4": "Object type",
                "trueAnswer": "4"
            },
            {
                "id": 9,
                "name": "question9",
                "question": "In C#, all binary operators are ______.",
                "answer1": "Center-associative",
                "answer2": "Right-associative",
                "answer3": "Left-associative",
                "answer4": "Top-associative",
                "trueAnswer": "3"
            },
            {
                "id": 10,
                "name": "question10",
                "question": "________causes the loop to continue with the next iteration after skipping any statements in between.",
                "answer1": "Loop",
                "answer2": "Exit",
                "answer3": "Break",
                "answer4": "Continue",
                "trueAnswer": '4'
            },
        ]
    }
    debugger;

    var nums = Exams.Questions;
    var gen_nums = [];
    /****** */
    debugger;
    function in_array(array, el) {
        for (var i = 0; i < array.length; i++)
            if (array[i] == el) return true;
        return false;
    }
    var item = Exams.Questions
    for (var i = 0; i < 10; i++) {

        var rand = Math.floor(Math.random() * Exams.Questions.length);
        if (!in_array(gen_nums, rand)) {
            gen_nums.push(rand);
            var item2 = Exams.Questions[rand];
            radio_home.appendChild(makeQuestion(item2.question, item2.name, item2.answer1, item2.answer2, item2.answer3, item2.answer4, item2.trueAnswer));

        } else {
            i--;
        }
    }

    addsubmitButton();


    function makeQuestion(questionName, name, RadText1, RadText2, RadText3, RadText4, trueAnswer) {
        var div = document.createElement("div")
        div.setAttribute("id", "maindiv")
        div.setAttribute("class", "exam");
        var lblQuestion = document.createElement("label");
        lblQuestion.setAttribute("id", "nameQuestion")
        lblQuestion.innerText = questionName;
        div.appendChild(lblQuestion);

        var divanswer = document.createElement("div");
        divanswer.setAttribute("id", "divanswer");
        divanswer.setAttribute("class", "answer");
        var label1 = document.createElement("label");
        var radio1 = document.createElement("input");
        radio1.type = "radio";
        radio1.name = name;
        radio1.value = "1";
        label1.appendChild(radio1);
        label1.appendChild(document.createTextNode(RadText1));
        divanswer.appendChild(label1);

        var label2 = document.createElement("label");
        var radio2 = document.createElement("input");
        radio2.type = "radio";
        radio2.name = name;
        radio2.value = "2";
        label2.appendChild(radio2);
        label2.appendChild(document.createTextNode(RadText2));
        divanswer.appendChild(label2);

        var label3 = document.createElement("label");
        var radio3 = document.createElement("input");
        radio3.type = "radio";
        radio3.name = name;
        radio3.value = "3";
        label3.appendChild(radio3);
        label3.appendChild(document.createTextNode(RadText3));
        divanswer.appendChild(label3);

        var label4 = document.createElement("label");
        var radio4 = document.createElement("input");
        radio4.type = "radio";
        radio4.name = name;
        radio4.value = "4";
        label4.appendChild(radio4);
        label4.appendChild(document.createTextNode(RadText4));
        divanswer.appendChild(label4);
        debugger;
        var divhidden = document.createElement("div");

        var hiddendata = document.createElement("input");
        hiddendata.type = "hidden";
        hiddendata.value = trueAnswer;
        hiddendata.id = "hidTrueAnswer";
        divanswer.appendChild(hiddendata);
        div.appendChild(divanswer);

        return div;
    }

    function addsubmitButton() {
        var submitbutton = $("#btnsubmit").attr("style", "display: none");
        submitbutton.click(checkanswer);
    }
    var score = 0;
    function checkanswer() {
        debugger;
        var divsradio = $('.answer input[type="radio"]').toArray();
        var hiddtrueanswer = $('.answer input[type="hidden"]').toArray();

        for (var y = 0; y < hiddtrueanswer.length; y++) {
            for (var i = y * 4; i < (y * 4) + 4; i++) {

                if (divsradio[i].checked && divsradio[i].value == hiddtrueanswer[y].value) {
                    score++;
                }

            }
        }
        document.getElementById("score").innerHTML = score;
        clearInterval(timeInt);
        document.getElementById("mytime").innerHTML = "Exam Ended!!"
        $("input[type=radio]").attr('disabled', true);
    }
    //start timer ///////

    $("#startExambtn").click(openexam)

    function openexam() {
        $(".exam").css("display", "block");

        $("#radio_home").css("display", "block");
        $("#mytimer").css("display", "block");
        $("#btnsubmit").css("display", "block");
        $("#startExambtn").css("display", "none");

        timeInt = setInterval(function () {
            startTimer();
            if (distance < 0) {
                clearInterval(timeInt);
                document.getElementById("mytime").innerHTML = "Time Out!!";
                $("input[type=radio]").attr('disabled', true);
            }
        }, 1000);


    }
    countDownDate = (new Date().getTime()) + 10 * 60000;
    distance = 0;
    function startTimer() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="mytimer"
        document.getElementById("mytime").innerHTML = "Timer: " + minutes + "m " + seconds + "s ";
    }

    ///end html exam/////    


    ///end timer///// 
})