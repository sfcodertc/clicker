// I don't like writing comments a lot of times.
$(function(){
	console.log("Documentation is ready!!");

	var clickSound = new Audio("SFX/click.mp3");
	//var musicSound = new Audio("SFX/Jumbo_song.mp3");
	var musicSound = new Audio("SFX/Jumbo_Song.mp3");

	musicSound.loop = true;

	musicSound.addEventListener("ended", function() {
    	this.currentTime = 0;
    	this.play();
	}, false);

	var musicColor = false;
	var money = 0;
	var moneyPerClick = 1;

	$(".back").hide();
	$(".upgrade1").hide();
	// when the "money_button" get clicked..
	$(".money_button").on("click", function() {
		clickSound.play();
		// set the money to the money we currently have
		money = parseInt($(".value").text());
		moneyPerClick = parseInt($(".perClick").text());
		// increases the money by 1
		money += moneyPerClick;
		// makes it show
		$(".value").text(money);
	})

	$(".upgrade").on("click", function() {
		clickSound.play();
		// hiding all elements besides stats on screen.
		$(".upgrade").hide();
		$(".money_button").hide();
		$(".back").show();
		$(".upgrade1").show();
	})

	$(".back").on("click", function() {
		clickSound.play();
		$(".back").hide();
		$(".upgrade1").hide();
		$(".money_button").show();
		$(".upgrade").show();
	})

	$(".upgrade1").on("click", function() {
		var cost = parseInt($(".price").text());
		if (money >= cost) {
			clickSound.play();
			money -= cost;
			moneyPerClick ++;
			cost += 500

			$(".value").text(money);
			$(".perClick").text(moneyPerClick);
			$(".price").text(cost);

			// visuals

			$(".upgrade1").css("background-color", "#FF1a1a");
			setTimeout(function(){$(".upgrade1").css("background-color", "#3366FF")}, 500);
		}
	})

	$(".music").on("click", function() {
		if (musicColor == false) {
			musicColor = true;
			$(".music").css("background-color", "#FF6600");
			musicSound.play();
		}
		else {
			musicColor = false;
			$(".music").css("background-color", "#666666");
			musicSound.pause();
		}
	})
})

//"rgb(255, 102, 0)"

