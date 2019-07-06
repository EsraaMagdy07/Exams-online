$(document).ready(function(){


	var Exams = {
		"ExameName": "HTMLExame",
		"Questions": [
		  {
		  	"id": 1,
		  	"name": "question1",
		  	"question": "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
		  	"answer1": "class",
		  	"answer2": "id",
		  	"answer3": "article",
		  	"answer4": "html",
		  	"trueAnswer": "id"
		  },
		  {
		  	"id": 2,
		  	"name": "question2",
		  	"question": "The _____________ attribute specifies an inline style associated with an element, which determines the rendering of the affected element.",
		  	"answer1": "dir",
		  	"answer2": "style",
		  	"answer3": "class",
		  	"answer4": "article",
		  	"trueAnswer": "style"
		  },
			  {
			  	"id": 3,
			  	"name": "question3",
			  	"question": "Which attribute is used to provide an advisory text about an element or its contents?",
			  	"answer1": "tooltip",
			  	"answer2": "dir",
			  	"answer3": "title",
			  	"answer4": "head",
			  	"trueAnswer": "title"
			  },
	{
		"id": 4,
		"name": "question4",
		"question": "The __________ attribute sets the text direction as related to the lang attribute.",
		"answer1": "lang",
		"answer2": "sub",
		"answer3": "dir",
		"answer4": "ds",
		"trueAnswer": "dir"
	},
		{
			"id": 5,
			"name": "question5",
			"question": "Which of the following is the attribute that specifies the column name from the data source object that supplies the bound data?",
			"answer1": "dataFormatAs",
			"answer2": "datafld",
			"answer3": "disabled",
			"answer4": "datasrc",
			"trueAnswer": "datafld"
		},
		{
			"id": 6,
			"name": "question6",
			"question": "Which of the following is the attribute that indicates the name of the data source object that supplies the data that is bound to this element?",
			"answer1": "dataFormatAs",
			"answer2": "datafld",
			"answer3": "disabled",
			"answer4": "datasrc",
			"trueAnswer": "datasrc"
		},
{
	"id": 7,
	"name": "question7",
	"question": "Which of the following is the attribute that specifies additional horizontal space, in pixels, to be reserved on either side of an embedded item like an iframe, applet, image, and so on?",
	"answer1": "height",
	"answer2": "hspace",
	"answer3": "hidefocus",
	"answer4": "datasrc",
	"trueAnswer": "hspace"

},
	{
"id": 8,
	"name": "question8",
	"question": "With which element width attribute is not define?",
	"answer1": "<input>",
	"answer2": "<object>",
	"answer3": "<embed>",
	"answer4": "<textarea>",
	"trueAnswer": "<textarea>"

	},
		{
"id": 9,
	"name": "question9",
	"question" : "Which attribute indicates a descending order of displaying a list?",
	"answer1": "reversed",
	"answer2": "forward",
	"answer3": "straight",
	"answer4": "circular",
	"trueAnswer": "reversed"

	},
	{
"id": 10,
	"name": "question10",
	"question": "Which parameter is commonly used for size attribute?",
	"answer1": "centimeter",
	"answer2": "pixels",
	"answer3": "inch",
	"answer4": "millimeter",
	"trueAnswer": "pixels"
	}


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
  document.getElementById("scorehtml").innerHTML = score;
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