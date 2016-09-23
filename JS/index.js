// I don't like writing comments a lot of times.
$(function(){
	console.log("Documentation is ready!!");

	var clickSound = new Audio("SFX/click.mp3");

	$(".back").hide();

	// when the "money_button" get clicked..
	$(".money_button").on("click", function() {
		clickSound.play();
		// declares a variable named "money"
		var money;
		// declares a variable named "moneyPerClick"
		var moneyPerClick;
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
	})

	$(".back").on("click", function() {
		clickSound.play();
		$(".back").hide();
		$(".money_button").show();
		$(".upgrade").show();
	})
})