
// var img_url = {
// 		Input_Cell: "./assets/image/input.png",
// 		Mixing_Cell: "./assets/image/input.png",
// 		Output_Cell: "./assets/image/output.png",
// 		Trash_Cell: "./assets/image/trash.png",
// 		Tips_Cell_1000µL: "./assets/image/pipette-tip.png",
// 		Tips_Cell_100µL: "./assets/image/pipette-tip.png"
// 	};
var img_url = [
		"./assets/image/input.png",
		"./assets/image/input.png",
		"./assets/image/output.png",
		"./assets/image/trash.png",
		"./assets/image/pipette-tip.png",
		"./assets/image/pipette-tip.png"
	];
var optionTxt =[
	 "Input_Cell",
	 "Mixing_Cell",
	 "Output_Cell",
	 "Trash_Cell",
	 "Tips_Cell_1000µL",
	 "Tips_Cell_100µL",
	 "Empty_Cell"
	]

var select_slot = $(".slot").find('div').find("select");

$('.slotchecked').on('click',function(){
	var index = $(".slotchecked").index(this);
	var option_val = $($(".pos_select")[index]).find(":selected").text();
	console.log(option_val);
	var slotIndex = 0;
	for (var i = 0; i < 8; i++) {
		if (option_val == optionTxt[i] ) {
			slotIndex = i;
			console.log(optionTxt[i])
			console.log(i);
		}
	}

	var checked = $(this).is(":checked");
	if (checked) {
		select_stat[slotIndex] = 1;
		$($(".pos_select")[index]).attr('disabled','false');
	}
	else{
		select_stat[slotIndex] = 0;
		$($(".pos_select")[index]).removeAttr('disabled');
	}
	for (var i = 0; i < 8; i++) {
		if ((slotIndex == i) && (select_stat[i] == 1)) {
			$($(".stock_img")[index]).find("img").attr("src",img_url[slotIndex]);
			if ((slotIndex == 4) || (slotIndex == 5))
			{
				$($(".stock_img")[index]).find("img").css('width','20%');
			}
			else{
				$($(".stock_img")[index]).find("img").css('width','100%');
			}
		}
		else{
			for (var j = 0; j < 8; j++)
			{
				if (select_stat[j] == 1) {
					var optionName = ".option"+j;
					$($(".pos_select")[i]).find(optionName).prop('disabled', 'false');
				}
			}
		}
	}
})
