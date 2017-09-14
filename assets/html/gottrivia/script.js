$(document).ready(function(){
	



                               
                               
// oooo    ooo  .oooo.   oooo d8b 
//  `88.  .8'  `P  )88b  `888""8P 
//   `88..8'    .oP"888   888     
//    `888'    d8(  888   888     
//     `8'     `Y888""8o d888b    
                               
                               

	// WHEN DOCUMENT STARTS, HIDE JUMBOTRON3.
	

	// WHEN PLAYER HITS START BUTTON, MAKE SURE J3 IS REVEALED.

var timer = "00:00";
var number = 15;
var x=0;
var y=0;
var i=0;
var countdown="";


var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered= 0;




/*
             .                          .   
           .o8                        .o8   
 .oooo.o .o888oo  .oooo.   oooo d8b .o888oo 
d88(  "8   888   `P  )88b  `888""8P   888   
`"Y88b.    888    .oP"888   888       888   
o.  )88b   888 . d8(  888   888       888 . 
8""888P'   "888" `Y888""8o d888b      "888"   

*/


// IF X=0, START BUTTON CLICK = START TIMER...
$('#start').on('click', function() {startTimer(); newScreen();});

$('.answerBox').mouseover( function(){
	$(this).addClass('answerBox1'); });

$('.answerBox').mouseleave( function(){
	$(this).removeClass('answerBox1'); });





$('.answerBox').click(function(){

	if($(this).attr('value')== 'correct1'){correctAnswers = correctAnswers + 1; correct1();}
	else if($(this).attr('value')== 'correct2'){correctAnswers = correctAnswers + 1; correct2();}
	else if($(this).attr('value')== 'correct3'){correctAnswers = correctAnswers + 1; correct3();}
	else if($(this).attr('value')== 'correct4'){correctAnswers = correctAnswers + 1; correct4();}

	else if($(this).attr('value')== 'incorrect1'){incorrectAnswers = incorrectAnswers + 1; incorrect1();}
	else if($(this).attr('value')== 'incorrect2'){incorrectAnswers = incorrectAnswers + 1; incorrect2();}
	else if($(this).attr('value')== 'incorrect3'){incorrectAnswers = incorrectAnswers + 1; incorrect3();}
	else if($(this).attr('value')== 'incorrect4'){incorrectAnswers = incorrectAnswers + 1; incorrect4();}
	
	else{gameOver();}
});





/*                                  
    .    o8o                                       
  .o8    `"'                                       
.o888oo oooo  ooo. .oo.  .oo.    .ooooo.  oooo d8b 
  888   `888  `888P"Y88bP"Y88b  d88' `88b `888""8P 
  888    888   888   888   888  888ooo888  888     
  888 .  888   888   888   888  888    .o  888     
  "888" o888o o888o o888o o888o `Y8bod8P' d888b    
*/


                                                                                    


	function startTimer(){
		counter = setInterval(decrement, 1000);};


	function decrement(){
		
		number--;

		
		$('#jumbotron1').html('<div class="timer text-center"><h2> Time Remaining: '+ number +' </h2></div>');

		if(number==15){$('#jumbotron1').show();}
		if(number==15){$('#jumbotronStill').hide();} 
		
		if(number== -1 && x==1) {unanswered = unanswered + 1; incorrect1();}
		else if(number== -1 && x==2) {unanswered = unanswered + 1; incorrect2();}	
		else if(number== -1 && x==3) {unanswered = unanswered + 1; incorrect3();}	
		else if(number== -1 && x==4) {unanswered = unanswered + 1; incorrect4();}	
		else if(number== -1 && x==5){$('#jumbotron1').hide();}
		}
	





/* .o88o.                                       .    o8o                                  
   888 `"                                     .o8    `"'                                  
  o888oo  oooo  oooo  ooo. .oo.    .ooooo.  .o888oo oooo   .ooooo.  ooo. .oo.    .oooo.o  
   888    `888  `888  `888P"Y88b  d88' `"Y8   888   `888  d88' `88b `888P"Y88b  d88(  "8  
   888     888   888   888   888  888         888    888  888   888  888   888  `"Y88b.   
   888     888   888   888   888  888   .o8   888 .  888  888   888  888   888  o.  )88b  
  o888o    `V88V"V8P' o888o o888o `Y8bod8P'   "888" o888o `Y8bod8P' o888o o888o 8""888P'  
  
*/

// WHEN START IS PRESSED
function newScreen(){
	
	if(x==0){screen1()}
	else if(x==1){screen2()}
	else if(x==2){screen3()}
	else if(x==3){screen4()}
	else if(x==4){gameOver()}
	x=x+1;

};


/*
 .oooo.o  .ooooo.  oooo d8b  .ooooo.   .ooooo.  ooo. .oo.   
d88(  "8 d88' `"Y8 `888""8P d88' `88b d88' `88b `888P"Y88b  
`"Y88b.  888        888     888ooo888 888ooo888  888   888  
o.  )88b 888   .o8  888     888    .o 888    .o  888   888  
8""888P' `Y8bod8P' d888b    `Y8bod8P' `Y8bod8P' o888o o888o 
*/

	function screen1(){
		$('#jumbotron0').hide();
		$('#jumbotron2').hide();
		$('#directions').hide();

		$('#jumbotron1').removeClass('hidden');
		$('#jumbotron3').removeClass('hidden');
		
	};

	function screen2(){
		$('#jumbotronStill').removeClass('hidden');

		$('#correctQuestion1').hide();
		$('#incorrectQuestion1').hide();
		
		$('#jumbotron3').hide();
		$('#jumbotronQuestion2').removeClass('hidden');
		
	};

	function screen3(){

		$('#jumbotronStill').show();
		$('#jumbotron1').hide();
		
		$('#correctQuestion2').hide();
		$('#incorrectQuestion2').hide();

		$('#jumbotronQuestion2').hide();
		$('#jumbotronQuestion3').removeClass('hidden');
		
	};

	function screen4(){

		$('#jumbotronStill').show();
		$('#jumbotron1').hide();

		$('#jumbotronQuestion3').hide();
		$('#incorrectQuestion3').hide();

		$('#correctQuestion3').hide();
		$('#jumbotronQuestion4').removeClass('hidden');
	};




/*                                                              .   
                                                            .o8   
 .ooooo.   .ooooo.  oooo d8b oooo d8b  .ooooo.   .ooooo.  .o888oo 
d88' `"Y8 d88' `88b `888""8P `888""8P d88' `88b d88' `"Y8   888   
888       888   888  888      888     888ooo888 888         888   
888   .o8 888   888  888      888     888    .o 888   .o8   888 . 
`Y8bod8P' `Y8bod8P' d888b    d888b    `Y8bod8P' `Y8bod8P'   "888" 

*/



function correct1(){
	clearInterval(counter); number=16;
	$('#jumbotron3').hide();
	$('#jumbotron1').hide();
	$('#correctQuestion1').removeClass('hidden');

	$('#correctQuestion1').on('click', function()
		{newScreen(); startTimer();})
	}

	function correct2(){
	clearInterval(counter); number=16;
	$('#jumbotron1').hide();
	$('#jumbotronQuestion2').hide();
	$('#correctQuestion2').removeClass('hidden');
	$('#correctQuestion2').on('click', function()
		{newScreen(); startTimer();})
	}

	function correct3(){
	clearInterval(counter); number=16;
	$('#jumbotron1').hide();
	$('#jumbotronQuestion3').hide();
	$('#correctQuestion3').removeClass('hidden');
	$('#correctQuestion3').on('click', function()
		{newScreen(); startTimer();})
	}

	function correct4(){
	clearInterval(counter); number=16;
	$('#jumbotron1').hide();
	$('#jumbotronQuestion4').hide();
	$('#correctQuestion4').removeClass('hidden');
	$('#correctQuestion4').on('click', function()
		{newScreen();})
	}




/*
 o8o                                                                            .   
 `"'                                                                          .o8   
oooo  ooo. .oo.    .ooooo.   .ooooo.  oooo d8b oooo d8b  .ooooo.   .ooooo.  .o888oo 
`888  `888P"Y88b  d88' `"Y8 d88' `88b `888""8P `888""8P d88' `88b d88' `"Y8   888   
 888   888   888  888       888   888  888      888     888ooo888 888         888   
 888   888   888  888   .o8 888   888  888      888     888    .o 888   .o8   888 . 
o888o o888o o888o `Y8bod8P' `Y8bod8P' d888b    d888b    `Y8bod8P' `Y8bod8P'   "888" 

*/


function incorrect1(){
	
	clearInterval(counter); number=16;
	
	$('#jumbotron3').hide();
	$('#jumbotron1').hide();
	$('#incorrectQuestion1').removeClass('hidden');

	$('#incorrectQuestion1').on('click', function()
		{newScreen(); startTimer();});
	}

function incorrect2(){
	
	clearInterval(counter); number=16;

	$('#jumbotron3').hide();
	$('#jumbotron1').hide();
	$('#incorrectQuestion2').removeClass('hidden');
	$('#jumbotronQuestion2').hide();
	
	$('#incorrectQuestion2').on('click', function()
		{newScreen(); startTimer(); });
	}

function incorrect3(){
	clearInterval(counter); number=16;

	$('#jumbotron1').hide();
	$('#jumbotron3').hide();
	$('#jumbotronQuestion3').hide();
	$('#incorrectQuestion3').removeClass('hidden');
	$('#incorrectQuestion3').on('click', function()
		{newScreen(); startTimer();})
	}

function incorrect4(){
	clearInterval(counter); number=16;
	$('#jumbotron1').hide();
	$('#jumbotron3').hide();
	$('#jumbotronQuestion4').hide();
	$('#incorrectQuestion4').removeClass('hidden');
	
	$('#incorrectQuestion4').on('click', function()
		{newScreen(); })
	}


/*
 .oooooooo  .oooo.   ooo. .oo.  .oo.    .ooooo.  
888' `88b  `P  )88b  `888P"Y88bP"Y88b  d88' `88b 
888   888   .oP"888   888   888   888  888ooo888 
`88bod8P'  d8(  888   888   888   888  888    .o 
`8oooooo.  `Y888""8o o888o o888o o888o `Y8bod8P' 
d"     YD                                        
"Y88888P'                                        
                                                
 .ooooo.  oooo    ooo  .ooooo.  oooo d8b         
d88' `88b  `88.  .8'  d88' `88b `888""8P         
888   888   `88..8'   888ooo888  888             
888   888    `888'    888    .o  888             
`Y8bod8P'     `8'     `Y8bod8P' d888b            
                                        
*/



	function gameOver(){
		clearInterval(counter);
		$('#jumbotron1').hide();
		
	

	$('#jumbotronQuestion4').hide();
	$('#correctQuestion4').hide();
	$('#incorrectQuestion4').hide();		 
		
		$('#jumbotron3').addClass('hidden');
		$('#jumbotron4').removeClass('hidden');
		
		$('#jumbotron5').removeClass('hidden');
		$('#next').addClass('hidden');


		$('#jumbotron4').html('<div><h2>Game Over</h2></div><hr><br><h3> Correct: '+ correctAnswers +'<br> Incorrect: ' + incorrectAnswers + '<br> Unanswered: ' + unanswered + '</h3><br><img src="puQXP1.gif" class="img-thumbnail center-block" id="end" "></div>');


	};






















// END DOCUMENT READY
});