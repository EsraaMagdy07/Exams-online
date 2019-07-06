$(document).ready(function () {
    score = 0;
    var Exams = {
        "ExameName": "jQuery",
        "Questions": [
          {
              "id": 1,
              "name": "question1",
              "question": "jQuery is a ",
              "answer1": "JavaScript Library",
              "answer2": "JavaScript Language",
              "answer3": "JavaScript Method",
              "answer4": "PHP Method",
              "trueAnswer": "1"
          },
          {
              "id": 2,
              "name": "question2",
              "question": "Which jQuery method is used to hide selected elements?",
              "answer1": "hidden()",
              "answer2": "hide()",
              "answer3": "visible(false)",
              "answer4": "display(none)",
              "trueAnswer": "2"
          },
        {
            "id": 3,
            "name": "question3",
            "question": "Which jQuery method should be used to deal with name conflicts?",
            "answer1": "noNameConflict()",
            "answer2": "noConflict()",
            "answer3": "nameConflict()",
            "answer4": "conflict()",
            "trueAnswer": "4"
        },
        {
            "id": 4,
            "name": "question4",
            "question": "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
            "answer1": "toggleClass()",
            "answer3": "switch()",
            "answer3": "altClass()",
            "answer4": "switchClass()",
            "trueAnswer": "4"
        },
          {
              "id": 5,
              "name": "question5",
              "question": "jQuery's main focus is..",
              "answer1": "AJAX",
              "answer2": "DOM Manipulation",
              "answer3": "Animations",
              "answer4": "All of the above",
              "trueAnswer": "4"
          },
            {
                "id": 6,
                "name": "question6",
                "question": "You can test whether the browser supports specific features using...",
                "answer1": "$.support",
                "answer2": "$.browser",
                "answer3": "$.featureTest",
                "answer4": "$.browserTest",
                "trueAnswer": "1"
            },
                {
                    "id": 7,
                    "name": "question7",
                    "question": "You can attach a handler to an event using which method?",
                    "answer1": "eventBind",
                    "answer2": "bind",
                    "answer3": "attach",
                    "answer4": "eventAttach",
                    "trueAnswer": "2"
                },
          {
              "id": 8,
              "name": "question8",
              "question": "What is the each function used for?",
              "answer1": "The Each function allows you to loop though every element in a parent element.",
              "answer2": "The Each function allows you to put the word 'Each' into each element",
              "answer3": "The Each function allows you to loop through different elements with a class or ID.",
              "answer4": "None of the above",
              "trueAnswer": "3"
          },
           {
               "id": 9,
               "name": "question9",
               "question": "What are the various speed options?",
               "answer1": "The words 'slow' and 'fast' as well as integers for the milliseconds",
               "answer2": " Only the words 'slow', 'fast', and 'medium'",
               "answer3": "All of the above",
               "answer4": "None of the above",
               "trueAnswer": "1"
           },
             {
                 "id": 10,
                 "name": "question10",
                 "question": "If you want to stop your jQuery for a few milliseconds, which function do you use?",
                 "answer1": "stop()",
                 "answer2": "pause()",
                 "answer3": "slowdown()",
                 "answer4": "delay()",
                 "trueAnswer": "4"
             },
        ]
    }
    debugger;

  var nums = Exams.Questions;
var gen_nums = [];
/****** */
debugger;
function in_array(array, el) {
     for(var i = 0 ; i < array.length; i++) 
         if(array[i] == el) return true;
     return false;
  }
  var item = Exams.Questions
  for(var i=0;i<10;i++)
  { 

    var rand = Math.floor(Math.random()*Exams.Questions.length);
    if(!in_array(gen_nums, rand)) 
    {
       gen_nums.push(rand); 
    var item2 = Exams.Questions[rand];
    radio_home.appendChild(makeQuestion(item2.question,item2.name, item2.answer1 , item2.answer2, item2.answer3,item2.answer4,item2.trueAnswer));

    }else{
      i--;
    }
  }
 
  addsubmitButton();
 

  function makeQuestion(questionName,name,  RadText1,RadText2,RadText3,RadText4,trueAnswer) {
var div=document.createElement("div")
div.setAttribute("id","maindiv")
div.setAttribute("class","exam");
var lblQuestion = document.createElement("label");
lblQuestion.setAttribute("id","nameQuestion")
lblQuestion.innerText=questionName;
div.appendChild(lblQuestion);
    
var divanswer=document.createElement("div");
divanswer.setAttribute("id","divanswer");
divanswer.setAttribute("class","answer");
    var label1 = document.createElement("label");
    var radio1 = document.createElement("input");
    radio1.type = "radio";
    radio1.name = name;
    radio1.value=RadText1;
     label1.appendChild(radio1);
    label1.appendChild(document.createTextNode(RadText1));
    divanswer.appendChild(label1);

    var label2 = document.createElement("label");
    var radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = name;
    radio2.value=RadText2;
    label2.appendChild(radio2);
    label2.appendChild(document.createTextNode(RadText2));
    divanswer.appendChild(label2);

    var label3 = document.createElement("label");
    var radio3 = document.createElement("input");
    radio3.type = "radio";
    radio3.name = name;
    radio3.value=RadText3;
    label3.appendChild(radio3);
    label3.appendChild(document.createTextNode(RadText3));
    divanswer.appendChild(label3);

    var label4 = document.createElement("label");
    var radio4 = document.createElement("input");
    radio4.type = "radio";
    radio4.name = name;
    radio4.value=RadText4;
     label4.appendChild(radio4);
    label4.appendChild(document.createTextNode(RadText4));
    divanswer.appendChild(label4);
debugger;
var divhidden=document.createElement("div");

    var hiddendata=document.createElement("input");
    hiddendata.type="hidden";
    hiddendata.value=trueAnswer;
    hiddendata.id="hidTrueAnswer";
  divanswer.appendChild(hiddendata);
  div.appendChild(divanswer);

    return div;
  }

  function addsubmitButton(){
   var submitbutton=$("#btnsubmit").attr("style","display: none");
    submitbutton.click(checkanswer);
  }
  var score=0;
 function checkanswer()
 {
   debugger;
   var divsradio = $('.answer input[type="radio"]').toArray();
   var hiddtrueanswer = $('.answer input[type="hidden"]').toArray();
   
  for(var y=0;y<hiddtrueanswer.length;y++){
  for ( var i = y*4; i < (y*4 )+4; i++ ) {
    
    if(divsradio[i].checked && divsradio[i].value==hiddtrueanswer[y].value)
    {
      score++;
    }
  
  }
}
  alert(score);
  document.getElementById("scorejquery").innerHTML = score;
  clearInterval(timeInt);
  document.getElementById("mytime").innerHTML = "Exam Ended!!"
  $("input[type=radio]").attr('disabled', true);
 }
 //start timer ///////
    
     $("#startExambtn").click(openexam)
    
    function openexam()
    {
                $(".exam").css("display","block");

$("#radio_home").css("display","block");
               $("#mytimer").css("display","block");
                       $("#btnsubmit").css("display","block");
                  $("#startExambtn").css("display","none");

         timeInt = setInterval(function () {
            startTimer();
            if(distance<0)
                {
                     clearInterval(timeInt);
                    document.getElementById("mytime").innerHTML = "Time Out!!";
$("input[type=radio]").attr('disabled', true);                    
                }
    },1000);
        

    }
     countDownDate = (new Date().getTime())+ 10 * 60000;
distance = 0;
function startTimer() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="mytimer"
        document.getElementById("mytime").innerHTML = "Timer: " +minutes + "m " + seconds + "s ";
}
    
 ///end timer exam/////    

 
})