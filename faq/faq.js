var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
function answer(card) {
	switch (card) {
		case 1:
			q1.style.transform = 'rotateX(360deg)';
			q1.innerHTML = "Zero. Zip. Zilch. Nada. Nothing. InOut is free for all accepted hackers. We'll provide you with a weekend's worth of swag, meals, drinks, and snacks and a place to crash when you need a break from coding.";
			break;
		case 2:
			q2.style.transform = 'rotateX(360deg)';
			q2.innerHTML = "This hackathon is strictly a team competition. No lone crusaders please. Max team size : 3 members.";
			break; 
	}
	
}
function question(card) {
	switch (card) {
		case 1:
			q1.style.transform = 'rotateX(0deg)';
			q1.innerHTML = 'How much will it cost?';
			break;
		case 2:
			q2.style.transform = 'rotateX(0deg)';
			q2.innerHTML = "How big can a team be?";
			break; 
	}
}