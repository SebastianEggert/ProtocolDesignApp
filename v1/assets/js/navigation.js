
$(".nav-item a").click(function(){
	var index = $( ".nav-item a" ).index( this );
	if (index >= 2) {
		if (stock_name.length<2) {
			alert("Please enter 2 more stock solutions");
			$($( ".nav-item a" )[index]).prop("disabled",true);
		}else{
			$($( ".nav-item a" )[index]).prop("disabled",false);
			$($(".nav-item a")[index]).tab('show');
		}
	}
});

$('.nav-item a').on('shown.bs.tab', function(e){
	var index = $('.nav-item a').index(this);
	var temp = Number($(".groupSample1").val());
    $("#title").text(titleName[index]);
    if (index == 1) {
		data.protocolName = $('#protocol_name').val();
		selected_stock_type = "Gel 1";
    }
    if (index == 2) {

		tab_cnt ++;
		if (tab_cnt == 1) {
			var count = 0;
			for (var i = 0; i < stockArray.length; i++) {
				var tempp = stockArray[i][0];
				if (((tempp ==="Cells") || (tempp === "Diluent 1")) ||((tempp === "Diluent 2") || (tempp === ""))) {
					if (tempp === "Cells") {
						cell_temp = stockArray[i][1];
						cnt1--;
					}
					if ((tempp === "Diluent 1") || (tempp === "Diluent 2")) {
						cnt1--;
					}
				}else{
					stock[count][0] = stockArray[i][0];
					stock[count][1] = stockArray[i][1];
					count ++;
				}

			}

			for ( i = 0; i < cnt1; i++) {

				$(".totalVolume").before(groupstock);
				$($(".stockName")[i]).text(stock[i][1]);
				$($(".stock_conc")[i]).attr("id","stock_conc" + i);
			}
			if (cell_temp === "") {
				$(".cells_name").text("Cells");
			}
			else{
				$(".cells_name").text(cell_temp);
			}
			for ( i = 0; i < temp; i++) {
				var groupName = ".group"+ (i+1);
				$(groupName).css("background-color",colors[0]);
			}
			{
				data.Input.wellplateType = $("#well-select1").val();
				data.Input.stockCNT = cnt1;
				for (var i = 0; i < input_cnt; i++) {
					data.Input.stock[i].type = stockArray[i][0];
					data.Input.stock[i].name = stockArray[i][1];
					data.Input.stock[i].concentration = stockArray[i][2];
					data.Input.stock[i].sampleNumer = stockArray[i][3];
					data.Input.stock[i].location = new Array(Number(stockArray[i][3]));
					for (var j = 0; j < Number(stockArray[i][3]); j++) {
						data.Input.stock[i].location[j] = stockArray[i][4][j];
					}
					data.Input.crosslink.checked = $("#cross_state").is(':checked');
					data.Input.crosslink.Duration = $("#cross_time").val();
					data.Input.crosslink.Intensity = $('#cross_intensity').val();
				}
			}
		}
    }

});

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}

$(".continue").click(function(){

	var index = $( ".continue" ).index( this );
	if (index == 0) {
		$($(".nav-item a")[index+1]).tab('show');
	}
	if (index >= 1) {
		if (stock_name.length<2) {
			alert("Please enter 2 more stock solution");
			$($( ".nav-item a" )[index+1]).prop("disabled",true);
		}else{
			$($( ".nav-item a" )[index+1]).prop("disabled",false);
			$($(".nav-item a")[index+1]).tab('show');
			if (index == 2) {
				data.Output.wellplateType = $('#well_select2').val();
				for (var i = 0; i < group_CNT; i++) {
					for (var j = 0; j < stock.length; j++) {

						switch(stock[j][0]){
							case "Gel 1":

								data.Output.group[i].Gel1.name = stock[j][1];
								break;
							case "Gel 2":

								data.Output.group[i].Gel2.name = stock[j][1];
								break;
							case "Photo Initiator":

								data.Output.group[i].PhotoInitiator.name = stock[j][1];
								break;
						}
						data.Output.group[i].Gel1.concentration = $("#stock_conc0").val();
						data.Output.group[i].Gel2.concentration = $("#stock_conc1").val();
						data.Output.group[i].PhotoInitiator.concentration = $("#stock_conc2").val();
						data.Output.group[i].TotalVolume = $($(".volume")[i]).val();
						data.Output.group[i].Cells.name = cell_temp;
						data.Output.group[i].Cells.concentration = $($(".cell_conc")[i]).val();
						data.Output.group[i].MixPrecursorSolution.checked = $($('.mixcheck')[i]).is(":checked");
						data.Output.group[i].MixPrecursorSolution.value = $($('.mixnum')[i]).val();
						data.Output.group[i].sampleNumer = $($('.groupSample1')[i]).val();
						data.Output.group[i].location = new Array(group_loc[i].length);
						for (var k = 0; k < group_loc[i].length; k++) {
							data.Output.group[i].location[k] = group_loc[i][k];
						}
					}
				}
			}
		}
	}

});
$(".run").click(function(){
	data.Postion.A1 = $($('.pos_select')[0]).find(":selected").val();
	data.Postion.A2 = $($('.pos_select')[1]).find(":selected").val();
	data.Postion.B1 = $($('.pos_select')[2]).find(":selected").val();
	data.Postion.B2 = $($('.pos_select')[3]).find(":selected").val();
	data.Postion.C1 = $($('.pos_select')[4]).find(":selected").val();
	data.Postion.C2 = $($('.pos_select')[5]).find(":selected").val();
	data.Postion.D1 = $($('.pos_select')[6]).find(":selected").val();
	data.Postion.D2 = $($('.pos_select')[7]).find(":selected").val();
	data.Postion.PiptteLeft.type = $($('.pipette_select')[0]).val();
	data.Postion.PiptteLeft.A_Speed = $('#A_Speed1').val();
	data.Postion.PiptteLeft.D_Speed = $('#D_Speed1').val();
	data.Postion.PiptteRight.type = $($('.pipette_select')[1]).val();
	data.Postion.PiptteRight.A_Speed = $('#A_Speed2').val();
	data.Postion.PiptteRight.D_Speed = $('#D_Speed2').val();

	console.log(data);
	$($(".nav-item a")[4]).tab('show');

})
