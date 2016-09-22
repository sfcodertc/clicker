$(function(){
	console.log("Document is Ready!!")
	$(".money").on("click", function() {
		var money_value;
		var IncreaseMoney;
		money_value = parseInt($(".value").text());
		IncreaseMoney = 1;
		money_value += IncreaseMoney;

		$(".value").text(money_value);
	})
})







// var moneyIncreaseBy;
// var money;

