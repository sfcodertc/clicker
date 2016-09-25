// I don't like writing comments a lot of times.
$(function(){
	console.log("Documentation is ready3!!");

	var clickSound = new Audio("SFX/click.mp3");
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
		if (money >= 1000) {
			var cost = parseInt($(".price").text());
			clickSound.play();
			money -= cost;
			moneyPerClick ++;
			cost += 500

			$(".value").text(money);
			$(".perClick").text(moneyPerClick);
			$(".price").text(cost);
		}
	})
})