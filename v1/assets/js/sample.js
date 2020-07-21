

$('.groupSample1').on("change", function(){

	group_color_num = 0;
	var temp=0;
	var cnt_temp = 0;

	if (cnt_group <=1) {
		cnt_temp = cnt_group;
	}
	else{
		cnt_temp = cnt_group -1;
	}

	for(var i = 0; i < groupsample_num; i++)
	{

		var group_color_name = ".group"+ (i+1);
		$(group_color_name).css("background-color",'white');

	}
	var compare_cnt = 0;
	for (i = 0; i < cnt_temp; i++) {

		compare_cnt = compare_cnt + Number($($(".groupSample1")[i]).val());
		if(compare_cnt < groupsample_num+1)
		{
			temp = Number($($(".groupSample1")[i]).val());

			for (var j = 0; j < temp ;j++) {

				var group_color_name = ".group"+ (j+group_color_num+1);
				$(group_color_name).css("background-color",colors[i]);
			}
			group_color_num = group_color_num +temp;
		}
		else{
			alert("Too many Samples for this tray");
			group_color_num = group_color_num -temp;
			compare_cnt = compare_cnt - temp;
			return;
		}
	}
});

$("#addGroup").click(function()
{
	cnt_group++;
	group_color_num = 0;
	var temp=0;

	for(var i =0;i<groupsample_num;i++)
	{
		var group_color_name = ".group"+ (i+1);
		$(group_color_name).css("background-color",'white');
	}
	var color_cnt = 0;

	for (i = 0; i < (cnt_group-1); i++) {

		color_cnt = color_cnt + Number($($(".groupSample1")[i]).val());

		if (color_cnt < groupsample_num+1) {
			temp = Number($($(".groupSample1")[i]).val());
			group_loc[i] = new Array(temp);
			for (var j = 0; j < temp ;j++) {

				var group_color_name = ".group"+ (j+group_color_num+1);
				$(group_color_name).css("background-color",colors[i]);
				var x = (j+group_color_num)%8;
				var y = parseInt((j+group_color_num)/8 + 1);
				var loc = group_location[x] + y;
				group_loc[i][j] = loc;
			}
			group_color_num = group_color_num +temp;
		}
		else{

			alert("Too many Samples for this tray");
			group_color_num = group_color_num -temp;
			color_cnt = color_cnt - temp;
		}

	}

	$('.groupSample1').on("change",function(){

		group_color_num = 0;
		var temp=0;
		var cnt_temp = 0;
			if (cnt_group <= 1) {
				cnt_temp = cnt_group;
			}
			else{
				cnt_temp = cnt_group -1;
			}
		for(var i =0;i<96;i++)
		{

			var group_color_name = ".group"+ (i+1);
			$(group_color_name).css("background-color",'white');

		}
		var compare_cnt = 0;
		for (i = 0; i < cnt_temp; i++) {

			compare_cnt = compare_cnt + Number($($(".groupSample1")[i]).val());

			if(compare_cnt < groupsample_num+1)
			{
				temp = Number($($(".groupSample1")[i]).val());

				for (var j = 0; j < temp ;j++) {

					var group_color_name = ".group"+ (j+group_color_num+1);
					$(group_color_name).css("background-color",colors[i]);
				}

				group_color_num = group_color_num +temp;
			}
			else
			{
				alert("Too many Samples for this tray");
				group_color_num = group_color_num -temp;
				compare_cnt = compare_cnt - temp;
				return;
			}
		}
	});

	if (cnt_group <= 12) {

		$(".accordion").append(group);
		$($(".grouptitle")[cnt_group-2]).find("h5").text('Group'+ cnt_group);
		$($(".grouptitle")[cnt_group-2]).attr("href","#collapseETX"+cnt_group);
		$($(".grouptitle")[cnt_group-2]).css("text-decoration","none");
		$($(".control_c")[cnt_group-2]).attr("id","collapseETX"+cnt_group);
		var count =0;
		for (var i = 0; i < cnt1; i++) {

			$($(".card-body")[cnt_group-1]).find(".totalVolume").before(groupstock);
			count = (cnt_group-1)*cnt1+i;
			$($(".stockName")[count]).text(stock[i][1]);
			$($(".stock_conc")[count]).attr("id","stock_conc" + i);
		}

		if (cell_temp === "") {
			$($(".cells_name")[cnt_group-1]).text("Cells");
		}
		else{
			$($(".cells_name")[cnt_group-1]).text(cell_temp);
		}
	}
	else {
		return;
	}

});

$('#sample_add').click(function(){

	$($(".nav-item a")[2]).tab('refresh');
})
