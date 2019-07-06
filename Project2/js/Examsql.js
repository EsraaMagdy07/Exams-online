$(document).ready(function () {

    var Exams = {
        "ExameName": "SQL",
        "Questions": [
          {
              "id": 1,
              "name": "question1",
              "question": "Which SQL function is used to count the number of rows in a SQL query ?",
              "answer1": "COUNT()",
              "answer2": "NUMBER()",
              "answer3": "SUM()",
              "answer4": "COUNT(*)",
              "trueAnswer": "4"
              

          },
          {
              "id": 2,
              "name": "question2",
              "question": "Which SQL keyword is used to retrieve a maximum value ?",
              "answer1": " MOST",
              "answer2": " TOP",
              "answer3": "MAX",
              "answer4": "UPPER",
              "trueAnswer": "3"
          },
   
            
        {
            "id": 3,
            "name": "question3",
            "question": " Which of the following SQL clauses is used to DELETE tuples from a database table ?",
            "answer1": "DELETE",
            "answer2": "REMOVE",
            "answer3": "DROP",
            "answer4": " CLEAR",
            "trueAnswer": "1"
        },

        {
            "id": 4,
            "name": "question4",
            "question": "___________removes all rows from a table without logging the individual row deletions.",
            "answer1": " DELETE",
            "answer2": " REMOVE",
            "answer3": " DROP",
            "answer4": "TRUNCATE",
            "trueAnswer": "4"
        },

          {
              "id": 5,
              "name": "question5",
              "question": " Which of the following is not a DDL command ?",
              "answer1": "UPDATE",
              "answer2": "TRUNCATE",
              "answer1": "ALTER",
              "answer": "None of the Mentioned",
              "trueAnswer": "1"
          },
            
            {
                "id": 6,
                "name": "question6",
                "question": "Which of the following are TCL commands ?",
                "answer1": " UPDATE and TRUNCATE",
                "answer2": "SELECT and INSERT",
                "answer3": " GRANT and REVOKE",
                "answer4": "ROLLBACK and SAVEPOINT",
                "trueAnswer": "4"
            },

                            {
                    "id": 7,
                    "name": "question7",
                    "question": "________________ is not a category of SQL command.",
                    "answer1": "TCL",
                    "answer2": "SCL",
                    "answer3": "DCL",
                    "answer4": "DDL",
                    "trueAnswer": "2"
                },

          {
              "id": 8,
              "name": "question8",
              "question": " If you don’t specify ASC or DESC after a SQL ORDER BY clause, the following is used by default",
              "answer1": "ASC",
              "answer2": "DESC",
              "answer3": " There is no default value",
              "answer4": "None of the mentioned",
              "trueAnswer": "1"
          },
            
           {
               "id": 9,
               "name": "question9",
               "question": "Which of the following statement is true ?",
               "answer1": " DELETE does not free the space containing the table and TRUNCATE free the space containing the table",
               "answer2": " Both DELETE and TRUNCATE free the space containing the table",
               "answer3": "Both DELETE and TRUNCATE does not free the space containing the table",
               "answer4": "T DELETE free the space containing the table and TRUNCATE does not free the space containing the table",
               "trueAnswer": "1"
           },
             {
                 "id": 10,
                 "name": "question10",
                 "question": " What is the purpose of the SQL AS clause ?",
                 "answer1": "The AS SQL clause is used change the name of a column in the result set or to assign a name to a derived column",
                 "answer2": "The AS clause is used with the JOIN clause only",
                 "answer3": "The AS clause defines a search condition",
                 "answer4": " All of the mentioned",
                 "trueAnswer": "1"
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
    radio1.value="1";
     label1.appendChild(radio1);
    label1.appendChild(document.createTextNode(RadText1));
    divanswer.appendChild(label1);

    var label2 = document.createElement("label");
    var radio2 = document.createElement("input");
    radio2.type = "radio";
    radio2.name = name;
    radio2.value="2";
    label2.appendChild(radio2);
    label2.appendChild(document.createTextNode(RadText2));
    divanswer.appendChild(label2);

    var label3 = document.createElement("label");
    var radio3 = document.createElement("input");
    radio3.type = "radio";
    radio3.name = name;
    radio3.value="3";
    label3.appendChild(radio3);
    label3.appendChild(document.createTextNode(RadText3));
    divanswer.appendChild(label3);

    var label4 = document.createElement("label");
    var radio4 = document.createElement("input");
    radio4.type = "radio";
    radio4.name = name;
    radio4.value="4";
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
  document.getElementById("scoresql").innerHTML = score;
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
    
 ///end html exam/////    


    ///end timer///// 
})