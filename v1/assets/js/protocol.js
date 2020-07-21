

/*This part fill name field according on stock-select*/
$('#stock-select').on('change, mouseup', function() {

	var selceted_val = $(this).find(":selected").val();
	selected_stock_type = selceted_val;

	if (selceted_val == "Cells")
	{
		$("#stock_name").val(selceted_val);
		$("#concentrat_unit").text("Cells/mL");
	}else if(selceted_val == "Diluent 1" || selceted_val == "Diluent 2")
	{
		$("#stock_name").val(selceted_val) ;
		$("#stock_concentration").prop("disabled",true);
		$("#stock_concentration").val("null");

	}else{

		$("#stock_name").val(selceted_val) ;
		$("#concentrat_unit").text("%");
		$("#stock_concentration").prop("disabled",false);
	}
});

$("#add_btn").click(function() {

	//Var Key and Value
	var name = $('#stock_name').val();
	var concentration = $('#stock_concentration').val();
	var count = 0;
	var flag = false;
	//Check if Key or Value is empty
	if ($.trim(name) == '' || $.trim(concentration) == '')
	{
		alert('Please enter a name and a concentration');
	}
		//If not empty then store data
	else
	{
		var samplecount = Number($("#sample_num").val());

		for (var i = 0; i < cnt1; i++) {
			if ((input_state[i] === true) && (stockArray[i][0] === selected_stock_type)){
				sampleNum = sampleNum + (samplecount -Number(stockArray[i][3]));
				flag = true;
			}
			}
			if (flag == false)
			{
				sampleNum = sampleNum + samplecount;
			}

			if (sampleNum < 13) {
				cnt1++;
				for (var i = 0; i < cnt1; i++) {

					if (input_state[i] === false)
					{

						stockArray[i][0] = selected_stock_type;
						stockArray[i][1] = name;
						stockArray[i][2] = concentration;
						stockArray[i][3] = samplecount;
						input_state[i] = true;

					}
					else if (stockArray[i][0] === selected_stock_type){

						// var samplecount = $("#sample_num").val();
						// sampleNum = sampleNum - stockArray[i][3] + samplecount;
						stockArray[i][0] = selected_stock_type;
						stockArray[i][1] = name;
						stockArray[i][2] = concentration;
						stockArray[i][3] = samplecount;
						cnt1--;
						// sampleNum = sampleNum - samplecount;
					}

				}
				for ( i = 0; i < color_num; i++) {
					var stockname = ".stock"+ (i+1);
					$(stockname).css("background-color",'white');


				}
				for ( i = 0; i < input_cnt; i++) {
					for (var j = 0; j < color_num; j++) {
						stockArray[i][4][j] =  "";
					}
				}
				for (i = 0; i < cnt1; i++) {
					temp = Number(stockArray[i][3]);

					for (var j = 0; j < temp; j++) {

						var stockname = ".stock"+ (j+count+1);
						$(stockname).css("background-color",colors[i]);
						var x = (j+count)%3;
						var y = parseInt((j+count)/3 + 1);
						var loc = sample_location[x] + y;
						stockArray[i][4][j] =  loc;
					}
					count = count +temp;
				}


				stock_name.push(name);
				stock_concentration.push(concentration);
				localStorage.setItem("name", JSON.stringify(stock_name));
				localStorage.setItem("concentration", JSON.stringify(stock_concentration));
				clear_all();
				localStorage.setItem("stock_cnt", cnt1);

		}else
		{
			alert("Too many Samples for this tray");
			sampleNum = sampleNum - Number($("#sample_num").val());
		}
	}
});

function clear_all() {
    $('#stock_name').val('');
    $('#stock_concentration').val('');
}

/* To check or uncheck crosslinking fields according on checkbox*/
$("#cross_state").click(function(){
	var crosslink_state = $("#cross_state").is(':checked');
	if (!crosslink_state) {
		$("#cross_time").prop("disabled",true);
		$("#cross_intensity").prop("disabled",true);
	}
	else{
		$("#cross_time").prop("disabled",false);
		$("#cross_intensity").prop("disabled",false);
	}
})
