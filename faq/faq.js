var toggle = 0;
function answer(card) {
	if(toggle == 0 ) {
		toggle = 1;
		switch (card) {
			case 1:
				$('#q1').animate( { opacity : '0' }, 400, function(){
	       				 $(this).html("Zero. Zip. Zilch. Nada. Nothing. InOut is free for all accepted hackers. We'll provide you with a weekend's worth of swag, meals, drinks, and snacks and a place to crash when you need a break from coding.").animate({'opacity': 1}, 400);    
	    		});
	    		 break;
			case 2:
				$('#q2').animate( { opacity : '0' }, 400, function(){
	       				 $(this).html("This hackathon is strictly a team competition. No lone crusaders please. Max team size : 3 members.").animate({'opacity': 1}, 400);    
	    		});
				break; 
		}
	}
}
function question(card) {
	if(toggle == 1) {
		toggle = 0;

		switch (card) {
			case 1:
				$('#q1').animate( { opacity : '0' }, 400, function(){
       				 $(this).html("How much will it cost?").animate({'opacity': 1}, 400);    
    			});
				break;
			case 2:
				$('#q2').animate( { opacity : '0' }, 400, function(){
       				 $(this).html("How big can a team be?").animate({'opacity': 1}, 400);    
    			});
				break; 
		}
	}
}