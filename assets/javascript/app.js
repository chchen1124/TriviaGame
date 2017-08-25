//$(document).ready(function()
//{
window.onload=function()
{
	$("#startpage").show();
	$("#quizpage").hide();
	$("#resultspage").hide();
	$("#startquiz").on("click",timer.start);
	$("#goback").on("click",timer.reset());
};

//alert($("#sol1c").val());
//alert(solution_array[0][1]);
//alert(Unanswered);

var intervalid;
var clockRunning=false;
var solution_array=[[$("#ques1").html,$("#sol1c").val()],[$("#ques2").html,$("#sol2b").val()],[$("#ques3").html,$("#sol3c").val()],[$("#ques4").html,$("#sol4a").val],[$("#ques5").html,$("#sol5b").val],[$("#ques6").html,$("#sol6b").val],[$("#ques7").html,$("#sol7b").val],[$("#ques8").html,$("#sol8d").val],[$("#ques9").html,$("#sol9a").val],[$("#ques10").html,$("#sol10b").val]];
var correct=0;
var incorrect=0;
var unanswered=10;

var timer={

	time:60,
	start: function()
	{
		$("#startpage").hide();
		$("#quizpage").show();
		$("#resultspage").hide();
		if(!clockRunning)
		{
			intervalid=setInterval(timer.clocking,1000);
			clockRunning=true;
		}
	},
	clocking: function()
	{
		timer.time--;
		if(timer.time>0)
		{
			$("#cur_time").text(timer.time);
		}
		else
		{
			$("#resultspage").show();
			$("#quizpage").hide();
			$("#startpage").hide();
		}
	},
	stop:function()
	{
		clearInterval(clocking);
		clockRunning=false;
	},
	reset:function()
	{
		$("#cur_time").text(60);
		timer.time=60;
	}
}

//alert(solution_array.length);
//alert(Unanswered);

/*
 $("input:radio[name=selection]").click(function() {
        var value = $(this).val();
        alert(value);
        var id= $(this).attr('id');
        alert(id);
    });
*/
//debugger;
//$('#test2.test1').prop('checked', true);
//document.getElementbyId("resultspage").innerHTML = unanswered;
//var seeit= document.querySelector('input[id=sol1c]:checked').value;
//alert(seeit);

/*function checking()
{
	if($('#q1.s3').prop('checked',true))
	{
		console.log("Hey you: "+correct);
	}
}*/ 

//checking();

function checktoseeifchecked()
{
//	var ar = new Array(10);
	for(var a=0;a<solution_array.length;a++)
	{
		//alert("The value of a: "+a);
		//var this_s=$("#q"+1+".s1").val();
		//alert(this_s);
		//$('#test2.test1').prop('checked', true);
		//$('input:radio[class=test1][id=test2]').prop('checked', true);
	//	ar[a]=("q"+parseInt(a+1));
	//	alert(ar[a]);
		//if(($('input:'))||($('#q'+parseInt(a+1)+'.s2').prop('checked',true))||($('#q'+parseInt(a+1)+'.s3').prop('checked',true))||($('#q'+parseInt(a+1)+'.s4').prop('checked',true)))
		//if(($('input:radio[id="q"parseInt(a+1)][class=s1]').prop('checked',true))||($('input:radio[id="q"parseInt(a+1)][class=s2]').prop('checked',true))||($('input:radio[id="q"parseInt(a+1)][class=s3]').prop('checked',true))||($('input:radio[id="q"parseInt(a+1)][class=s4]').prop('checked',true)))
		if(($(".s1").is(':checked'))||($(".s2").is(':checked'))||($(".s3").is(':checked'))||($(".s4").is(':checked')))
		//if(($('input:radio[id="q"+a+1][class=s1]:checked'))||($('input[id="q"+a+1][class=s2]:checked'))||($('input[id="q"+a+1][class=s3]:checked'))||($('input[id="q"+a+1][class=s4]:checked')))
		//if(($(".s1").attr('checked', true))||($(".s2").attr('checked', true))||($(".s3").attr('checked', true))||($(".s4").attr('checked', true)))
		{
			unanswered--;
			//alert("Number not answerd is: "+unanswered);
			//document.getElementbyId("resultspage").innerHTML = a;
			//document.getElementbyId("startpage").innerHTML = unanswered;
			if(($(".s1").val()===solution_array[a][1])||($(".s2").val()===solution_array[a][1])||($(".s3").val()===solution_array[a][1])||($(".s4").val()===solution_array[a][1]))
			{
				//document.getElementbyId("resultspage").innerHTML = a;
				correct++;
			}
			else
			{
				incorrect++;
			}
		}
		else
		{
			alert("Nothing clicked");
		}
	}
}
/*function checktoseeifcorrect(array)
{
	for(var i=0;i<array.length;i++)
	{
		if(array[i])
		{

		}

	}
}*/

$("#turnin").click(function ()
{
	//checking();
	checktoseeifchecked();
	$("#resultspage").show();
	$("#quizpage").hide();
	$("#startpage").hide();
});

$("#goback").click(function(){
	$("#resultspage").hide();
	$("#quizpage").hide();
	timer.reset();
	$(".s1").prop('checked',false);
	$(".s2").prop('checked',false);
	$(".s3").prop('checked',false);
	$(".s4").prop('checked',false);
	$("#startpage").show();
});

var html="<p>Correct: "+correct+"</p><br>"+"<p>Incorrect: "+incorrect+"</p><br>"+"<p>Unanswered: "+unanswered+"</p>";
document.querySelector("#your_score").innerHTML=html;
//});