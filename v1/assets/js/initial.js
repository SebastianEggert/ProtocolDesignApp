
var sampleNum = 0;
var group = "<div class='card'><div class='card-header' role='tab' id='headingTwo2'><a class='collapsed grouptitle' data-toggle='collapse' data-parent='#accordionEx1' href='' aria-expanded='false' aria-controls='collapseTwo21'><h5 class='mb-0 '></h5></a></div><div id='' class='collapse control_c' role='tabpanel' aria-labelledby=''data-parent='#accordionEx1'><div class='card-body'><div class='row totalVolume' style='margin: 20px 0px;'><div class='col-sm-6'><span >Total Volume</span></div><div class='col-sm-5' ><div class='input-group'><input type='text' class='form-control volume' id='volume' name ='volume' placeholder='Microlitre'><div class='input-group-append'><span class='input-group-text'>(uL)</span></div></div></div></div><div class='row' style='margin: 20px 0px;'><div class='col-sm-6'><span class = 'cells_name'></span></div><div class='col-sm-5'><div class='input-group'><input type='text' class='form-control cell_conc' id='cell_conc' name ='cell_conc' placeholder='Concentration'><div class='input-group-append'><span class='input-group-text'>(Cells/mL)</span></div></div></div></div><div class='row' style='margin: 20px 0px;'><div class='col-sm-6'><input type='checkbox' name='' class='mixncheck' checked='true'><label>Apply Advanced Mixing Protocol</label></div></div><div class='row' style='margin: 20px 0px;'><div class='col-sm-6'><span>Number of Samples</span></div><div class='col-sm-5' ><input type='number' min='1' max='96' value='8' name='' class='groupSample1'></div></div></div></div></div>";

var groupstock = "<div class='row' style='margin: 20px 0px;'><div class='col-sm-6'><span class='stockName'></span></div><div class='col-sm-5'><div class='input-group'><input type='text' class='form-control stock_conc' id='' name ='stock_conc' placeholder='Concentration'><div class='input-group-append'><span class='input-group-text'>(%)</span></div></div></div></div>"
var cnt1 = 0;
var popcnt = 0;
var cnt_group = 1;
var stock_name = new Array();
var stock_concentration = new Array();
var stock = new Array(3);
var concentration;
var array = [];
var titleName = ["Setup","Specify Inputs", "Sample Well", "Prepare the Platform","Executing"];
var colors = ["#003399","#ffff00","#ff9966","#cc66ff","#99ff66","#804d00","#663300","#b35900","#5500ff","#009900","#003300","#00cc00"];
var cell_temp = "";
var sample_location = ["A","B","C"];
var group_location = ["A","B","C","D","E","F","G","H"];
var selected_stock_type ="";
var tab_cnt = 0;
var color_num = 12;
var group_CNT = 12;
var input_cnt = 6;
var groupsample_num = 96;
var select_num = 8;
var groupNum = 0;
var color_state = new Array();
var input_state = new Array();
var select_stat = new Array();
var stock_state = new Array();
var stockArray = new Array(6);
var group_loc = new Array(12);

for (var i = 0; i < stockArray.length; i++) {
  	stockArray[i] = new Array(5);
}
for (var i = 0; i < stockArray.length; i++) {
	for (var j = 0; j < 4; j++) {
		stockArray[i][j] = "";
	}
	stockArray[i][4] = new Array(12);
}
for (var i = 0; i < stock.length; i++) {
	stock[i] = new Array(3);
}
for (var i = 0; i < stock.length; i++) {
	for (var j = 0; j < stock[i].length; j++) {
		stock[i][j] = "";
	}

}
for (var i = 0; i < color_num; i++) {
	color_state[i] = 0;
}
for (var i = 0; i < input_cnt; i++) {
	input_state[i] = false;
}
for (var i = 0; i < select_num; i++) {
	select_stat[i] = 0;
}
for (var i = 0; i < 150; i++) {
	stock_state[i] = 0;
}
localStorage.clear();
$("#concentrat_unit").text("%");
$('[data-toggle="popover"]').popover();
