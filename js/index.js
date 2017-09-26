$(document).ready(function(){
	var t_body = $(".table tbody");
	t_body.children('tr').remove();
	table_date.forEach( function(ele, index) {
		var tr = "";
		for(key in ele){
			tr += "<td>" + ele[key] + "</td>"
		}
		tr = "<tr>" + tr + "<tr>"
		t_body.append(tr);
	});
});
table_date = 
[
	{
		"1":"fdh哈发的",
		"2":"放大",
		"3":"发放地方",
		"4":"发顺丰"
	},
	{
		"1":"一台热一天",
		"2":"高富股份",
		"3":"高富帅的",
		"4":"一头热"
	}
];