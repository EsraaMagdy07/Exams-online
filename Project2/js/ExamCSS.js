$(document).ready(function () {

        var Exams = {
            "ExameName": "CSS",
            "Questions": [
              {
                  "id": 1,
                  "name": "question1",
                  "question": "What does CSS stands for?",
                  "answer1": "Colorful Style Sheet",
                  "answer2": "Creative Style Sheet",
                  "answer3": "Cascading Style Sheet",
                  "answer4": "Computer Style Sheet",
                  "trueAnswer": 3
              },
              {
                  "id": 2,
                  "name": "question2",
                  "question": "	If we want define style for an unique element, then which css selector will we use ?",
                  "answer1": "Id",
                  "answer2": "text",
                  "answer3": "class",
                  "answer4": "name",
                  "trueAnswer": 1
              },
            {
                "id": 3,
                "name": "question3",
                "question": "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
                "answer1": "d-index",
                "answer2": "s-index",
                "answer3": "x-index",
                "answer4": "z-index",
                "trueAnswer": 4
            },
            {
                "id": 4,
                "name": "question4",
                "question": "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
                "answer1": "margin",
                "answer2": "clear",
                "answer3": "float",
                "answer4": "padding",
                "trueAnswer": 2
            },
              {
                  "id": 5,
                  "name": "question5",
                  "question": "How do you insert a comment in a CSS file?",
                  "answer1": "// this is a comment //",
                  "answer2": "/* this is a comment */",
                  "answer3": "' this is a comment",
                  "answer4": "// this is a comment",
                  "trueAnswer": 2
              },
                {
                    "id": 6,
                    "name": "question6",
                    "question": "If we want to wrap a block of text around an image, which css property will we use ?",
                    "answer1": "wrap",
                    "answer2": "push",
                    "answer3": "float",
                    "answer4": "align",
                    "trueAnswer": 3
                },
                    {
                        "id": 7,
                        "name": "question7",
                        "question": "Which property is used to change the background color?",
                        "answer1": "bgcolor:",
                        "answer2": "background-color:",
                        "answer3": "color:",
                        "answer4": "background color:",
                        "trueAnswer": 2
                    },
              {
                  "id": 8,
                  "name": "question8",
                  "question": "If we want to show an Arrow as cursor, then which value we will use ?",
                  "answer1": "pointerB",
                  "answer2": "default",
                  "answer3": "arrow",
                  "answer4": "arr",
                  "trueAnswer": 3
              },
               {
                   "id": 9,
                   "name": "question9",
                   "question": "If we want to use a nice looking green dotted border around an image, which css property will we use?",
                   "answer1": "border-color",
                   "answer2": "border-decoration",
                   "answer3": "border-style",
                   "answer4": "border-line",
                   "trueAnswer": 1
               },
                 {
                     "id": 10,
                     "name": "question10",
                     "question": "Which CSS property controls the text size?",
                     "answer1": "font-size",
                     "answer2": "font-style",
                     "answer3": "text-style",
                     "answer4": "text-size",
                     "trueAnswer": 1
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
  document.getElementById("scorecss").innerHTML = score;
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
     countDownDate = (new Date().getTime())+ 10* 60000;
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
    
 ///end html exam/////    


    ///end timer///// 

})