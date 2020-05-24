$(document).ready(function() {

	var type1 = $('#type1').val();
	var type2 = $('#type2').val();
	var empty = "";

	var type1_index = -1;
	var type2_index = -1;

	var types = ["BUG", "DARK", "DRAGON", "ELECTRIC", "FAIRY", "FIGHTING", "FIRE", "FLYING", "GHOST", "GRASS", "GROUND", "ICE", "NORMAL", "POISON", "PSYCHIC", "ROCK", "STEEL", "WATER"];

	var effects = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	var x0    = [];
	var x1    = [];
	var x2    = [];
	var x4    = [];
	var x0_5  = [];
	var x0_25 = [];
	var string_weak = [];
	var string_res = [];
	var string_norm = [];
	var string_inmu = [];

	var type_chart = [
		/*bug*/
		[2,4,2,2,1,1,1,1,1,4,2,2,2,1,4,2,1,2],
		/*dark*/
		[2,1,2,2,1,1,2,2,4,2,2,2,2,2,4,2,2,2],
		/*dragon*/
		[2,2,4,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2],
		/*electric*/
		[2,2,1,1,2,2,2,4,2,1,0,2,2,2,2,2,2,4],
		/*fairy*/
		[2,4,4,2,2,4,1,2,2,2,2,2,2,1,2,2,1,2],
		/*fighting*/
		[1,4,2,2,1,2,2,1,0,2,2,4,4,1,1,4,4,2],
		/*fire*/
		[4,2,1,2,2,2,1,2,2,4,2,4,2,2,2,1,4,1],
		/*flying*/
		[4,2,2,1,2,4,2,2,2,4,2,2,2,2,2,1,1,2],
		/*ghost*/
		[2,1,2,2,2,2,2,2,4,2,2,2,0,2,4,2,2,2],
		/*grass*/
		[1,2,1,2,2,2,1,1,2,1,4,2,2,1,2,4,1,4],
		/*ground*/
		[1,2,2,4,2,2,4,0,2,1,2,2,2,4,2,4,4,2],
		/*ice*/
		[2,2,4,2,2,2,1,4,2,4,4,1,2,2,2,2,1,1],
		/*normal*/
		[2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,1,2],
		/*poison*/
		[2,2,2,2,4,2,2,2,1,4,1,2,2,1,2,1,0,2],
		/*psychic*/
		[2,0,2,2,2,4,2,2,2,2,2,2,2,4,1,2,1,2],
		/*rock*/
		[4,2,2,2,2,1,4,4,2,2,1,4,2,2,2,2,1,2],
		/*steel*/
		[2,2,2,1,4,2,1,2,2,2,2,4,2,2,2,4,1,1],
		/*water*/
		[2,2,1,2,2,2,4,2,2,1,4,2,2,2,2,4,2,1]
	];

	$('.button-bug').click(function(){

		if(type1 == empty){
			type1 = types[0];
			$('#type1').html(types[0]);
			$('#type1').css("color", "#59ff12");
			type1_index = 0;
			calculate();
		}
		else if(type2 == empty && type1 != types[0]){
			type2 = types[0];
			$('#type2').html(types[0]);
			$('#type2').css("color", "#59ff12");
			type2_index = 0;
			calculate();
		}

	})

	$('.button-dark').click(function(){

		if(type1 == empty){
			type1 = types[1];
			$('#type1').html(types[1]);
			type1_index = 1;
			calculate();
		}
		else if(type2 == empty && type1 != types[1]){
			type2 = types[1];
			$('#type2').html(types[1]);
			type2_index = 1;
			calculate();
		}

	})

	$('.button-dragon').click(function(){

		if(type1 == empty){
			type1 = types[2];
			$('#type1').html(types[2]);
			$('#type1').css("color", "#2d1662");
			type1_index = 2;
			calculate();
		}
		else if(type2 == empty && type1 != types[2]){
			type2 = types[2];
			$('#type2').html(types[2])
			$('#type2').css("color", "#2d1662");
			type2_index = 2;
			calculate();
		}

	})

	$('.button-electric').click(function(){

		if(type1 == empty){
			type1 = types[3];
			$('#type1').html(types[3]);
			$('#type1').css("color", "#ffff00");
			type1_index = 3;
			calculate();
		}
		else if(type2 == empty && type1 != types[3]){
			type2 = types[3];
			$('#type2').html(types[3]);
			$('#type2').css("color", "#ffff00");
			type2_index = 3;
			calculate();
		}

	})

	$('.button-fairy').click(function(){

		if(type1 == empty){
			type1 = types[4];
			$('#type1').html(types[4]);
			$('#type1').css("color", "#ff33ff");
			type1_index = 4;
			calculate();
		}
		else if(type2 == empty && type1 != types[4]){
			type2 = types[4];
			$('#type2').html(types[4]);
			$('#type2').css("color", "#ff33ff");
			type2_index = 4;
			calculate();
		}

	})

	$('.button-fighting').click(function(){

		if(type1 == empty){
			type1 = types[5];
			$('#type1').html(types[5]);
			$('#type1').css("color", "#a52a2a");
			type1_index = 5;
			calculate();
		}
		else if(type2 == empty && type1 != types[5]){
			type2 = types[5];
			$('#type2').html(types[5]);
			$('#type2').css("color", "#a52a2a");
			type2_index = 5;
			calculate();
		}

	})

	$('.button-fire').click(function(){

		if(type1 == empty){
			type1 = types[6];
			$('#type1').html(types[6]);
			$('#type1').css("color", "#ff5000");
			type1_index = 6;
			calculate();
		}
		else if(type2 == empty && type1 != types[6]){
			type2 = types[6];
			$('#type2').html(types[6]);
			$('#type2').css("color", "#ff5000");
			type2_index = 6;
			calculate();
		}

	})

	$('.button-flying').click(function(){

		if(type1 == empty){
			type1 = types[7];
			$('#type1').html(types[7]);
			$('#type1').css("color", "#3dffff");
			type1_index = 7;
			calculate();
		}
		else if(type2 == empty && type1 != types[7]){
			type2 = types[7];
			$('#type2').html(types[7]);
			$('#type2').css("color", "#3dffff");
			type2_index = 7;
			calculate();
		}

	})

	$('.button-ghost').click(function(){

		if(type1 == empty){
			type1 = types[8];
			$('#type1').html(types[8]);
			$('#type1').css("color", "#a292bc");
			type1_index = 8;
			calculate();
		}
		else if(type2 == empty && type1 != types[8]){
			type2 = types[8];
			$('#type2').html(types[8]);
			$('#type2').css("color", "#a292bc");
			type2_index = 8;
			calculate();
		}

	})

	$('.button-grass').click(function(){

		if(type1 == empty){
			type1 = types[9];
			$('#type1').html(types[9]);
			$('#type1').css("color", "#09dd09");
			type1_index = 9;
			calculate();
		}
		else if(type2 == empty && type1 != types[9]){
			type2 = types[9];
			$('#type2').html(types[9]);
			$('#type2').css("color", "#09dd09");
			type2_index = 9;
			calculate();
		}

	})

	$('.button-ground').click(function(){

		if(type1 == empty){
			type1 = types[10];
			$('#type1').html(types[10]);
			$('#type1').css("color", "#cc8236");
			type1_index = 10;
			calculate();
		}
		else if(type2 == empty && type1 != types[10]){
			type2 = types[10];
			$('#type2').html(types[10]);
			$('#type2').css("color", "#cc8236");
			type2_index = 10;
			calculate();
		}

	})

	$('.button-ice').click(function(){

		if(type1 == empty){
			type1 = types[11];
			$('#type1').html(types[11]);
			$('#type1').css("color", "#0bffff");
			type1_index = 11;
			calculate();
		}
		else if(type2 == empty && type1 != types[11]){
			type2 = types[11];
			$('#type2').html(types[11]);
			$('#type2').css("color", "#0bffff");
			type2_index = 11;
			calculate();
		}

	})

	$('.button-normal').click(function(){

		if(type1 == empty){
			type1 = types[12];
			$('#type1').html(types[12]);
			$('#type1').css("color", "#fffaf0");
			type1_index = 12;
			calculate();
		}
		else if(type2 == empty && type1 != types[12]){
			type2 = types[12];
			$('#type2').html(types[12]);
			$('#type2').css("color", "#fffaf0");
			type2_index = 12;
			calculate();
		}

	})

	$('.button-poison').click(function(){

		if(type1 == empty){
			type1 = types[13];
			$('#type1').html(types[13]);
			$('#type1').css("color", "#9a009a");
			type1_index = 13;
			calculate();
		}
		else if(type2 == empty && type1 != types[13]){
			type2 = types[13];
			$('#type2').html(types[13]);
			$('#type2').css("color", "#9a009a");
			type2_index = 13;
			calculate();
		}

	})

	$('.button-psychic').click(function(){

		if(type1 == empty){
			type1 = types[14];
			$('#type1').html(types[14]);
			$('#type1').css("color", "#f700f7");
			type1_index = 14;
			calculate();
		}
		else if(type2 == empty && type1 != types[14]){
			type2 = types[14];
			$('#type2').html(types[14]);
			$('#type2').css("color", "#f700f7");
			type2_index = 14;
			calculate();
		}

	})

	$('.button-rock').click(function(){

		if(type1 == empty){
			type1 = types[15];
			$('#type1').html(types[15]);
			$('#type1').css("color", "#8b4513");
			type1_index = 15;
			calculate();
		}
		else if(type2 == empty && type1 != types[15]){
			type2 = types[15];
			$('#type2').html(types[15]);
			$('#type2').css("color", "#8b4513");
			type2_index = 15;
			calculate();
		}

	})

	$('.button-steel').click(function(){

		if(type1 == empty){
			type1 = types[16];
			$('#type1').html(types[16]);
			$('#type1').css("color", "#adadad");
			type1_index = 16;
			calculate();
		}
		else if(type2 == empty && type1 != types[16]){
			type2 = types[16];
			$('#type2').html(types[16]);
			$('#type2').css("color", "#adadad");
			type2_index = 16;
			calculate();
		}

	})

	$('.button-water').click(function(){

		if(type1 == empty){
			type1 = types[17];
			$('#type1').html(types[17]);
			$('#type1').css("color", "#0483ff");
			type1_index = 17;
			calculate();
		}
		else if(type2 == empty && type1 != types[17]){
			type2 = types[17];
			$('#type2').html(types[17]);
			$('#type2').css("color", "#0483ff");
			type2_index = 17;
			calculate();
		}

	})



	$('.button-reset').click(function(){

		type1_index = -1;
		type2_index = -1;
		type1 = empty;
		type2 = empty;
		$('#type1').html("")
		$('#type2').html("")
		var weak_list = $("#weakness-chart");
		weak_list.slideUp(900);
		var title = $("#magic-title");
		title.fadeOut(200);
		clear_lists();
		clear_html_lists();
		$('#type1').css("color", "#000000");
		$('#type2').css("color", "#000000");
	})


	function calculate() {
		var weak_list = $("#weakness-chart");

  		var title = $("#magic-title");
  		if(type2 == empty){ //just one type
  			var i;
  			for(i = 0; i < 18; i++){
  				effects[i] = type_chart[i][type1_index]/2;
  			}
  			add_lists();
  			add_html_lists();
  			title.hide(100);
  		}
  		else{

  			clear_lists();
  			clear_html_lists();
  			for(var i = 0; i < 18; i++){
  				effects[i] = type_chart[i][type1_index]*type_chart[i][type2_index]/4;
  			}

  			add_lists();
  			add_html_lists();
  			document.querySelector('#weakness-chart').scrollIntoView({ 
  				behavior: 'smooth' 
			});
  		}
  		weak_list.slideDown();
  		title.show(700);

	}

	function add_lists(){
		var i;
		for(i  = 0; i < 18; i++){
			if(effects[i] == 0){
				x0.push(types[i]);
			}
			if(effects[i] == 0.5){
				x0_5.push(types[i]);
			}
			if(effects[i] == 1){
				x1.push(types[i]);
			}
			if(effects[i] == 2){
				x2.push(types[i]);
			}
			if(effects[i] == 0.25){
				x0_25.push(types[i]);
			}
			if(effects[i] == 4){
				x4.push(types[i]);
			}
		}
	}

	function clear_lists(){
		x0.length = 0;
		x1.length = 0;
		x2.length = 0;
		x0_25.length = 0;
		x0_5.length = 0;
		x4.length = 0;	
		string_weak.length = 0;
		string_res.length  = 0;
		string_norm.length = 0;
		string_inmu.length = 0;
	}

	function add_html_lists(){

	for(var i = 0; i < x4.length; i++){
		string_weak.push("X4 " + x4[i]);
	}

	for(var i = 0; i < x2.length; i++){
		string_weak.push("X2 " + x2[i]);
	}

	add_format_html(string_weak, "#weak_list");

	for(var i = 0; i < x0_25.length; i++){
		string_res.push("X0.25 " + x0_25[i]);
	}

	for(var i = 0; i < x0_5.length; i++){
		string_res.push("X0.5 " + x0_5[i]);
	}

	add_format_html(string_res, "#res_list");


	for(var i = 0; i < x1.length; i++){
		string_norm.push("X1 " + x1[i]);
	}

	add_format_html(string_norm, "#norm_list");

	for(var i = 0; i < x0.length; i++){
		string_inmu.push("X0 " + x0[i]);
	}

	add_format_html(string_inmu, "#inmu_list");


	add_color();

	}

	function clear_html_lists(){
		$('#weak_list').empty()
		$('#norm_list').empty();
		$('#res_list').empty();
		$('#inmu_list').empty();
	}

	function add_color(){

	}

	function add_format_html(string_arr, table_name){
			var cont = 0;
			var string_add = "";
	for(var i = 0; i < string_arr.length; i++){

		var id = add_id(string_arr[i]);

		if(cont == 0 && i + 1 != string_arr.length){
			string_add = "<tr>" + '<td id="' + id + '">' + string_arr[i] + "</td>";
			cont++;
		}
		else if(cont == 0 && i + 1 == string_arr.length){
			string_add = "<tr>" + '<td id="' + id + '">' + string_arr[i] + "</td> </tr>";
			$(table_name).append(string_add);
			cont=0;
			string_add = "";
		}
		else if(cont == 1 && i + 1 != string_arr.length || cont == 1 && i + 1 != string_arr.length){
			string_add+='<td id="' + id + '">' + string_arr[i] +"</td>";
  			cont++;
		}
		else if(cont == 2 || i + 1 == string_arr.length){
			string_add+= '<td id="' + id + '">' + string_arr[i] + "</td> </tr>";
			$(table_name).append(string_add);
			cont=0;
			string_add = "";
		}
	}

	}

	function add_id(string_type){
		if(string_type.includes("BUG")){
			return "bug";
		}
		if(string_type.includes("DARK")){
			return "dark";
		}
		if(string_type.includes("DRAGON")){
			return "dragon";
		}
		if(string_type.includes("ELECTRIC")){
			return "electric";
		}
		if(string_type.includes("FAIRY")){
			return "fairy";
		}
		if(string_type.includes("FIGHTING")){
			return "fighting";
		}
		if(string_type.includes("FIRE")){
			return "fire";
		}
		if(string_type.includes("FLYING")){
			return "flying";
		}
		if(string_type.includes("GHOST")){
			return "ghost";
		}
		if(string_type.includes("GRASS")){
			return "grass";
		}
		if(string_type.includes("GROUND")){
			return "ground";
		}
		if(string_type.includes("ICE")){
			return "ice";
		}
		if(string_type.includes("NORMAL")){
			return "normal";
		}
		if(string_type.includes("POISON")){
			return "poison";
		}
		if(string_type.includes("PSYCHIC")){
			return "psychic";
		}
		if(string_type.includes("ROCK")){
			return "rock";
		}
		if(string_type.includes("STEEL")){
			return "steel";
		}
		if(string_type.includes("WATER")){
			return "water";
		}
		else{
			return "unknown-type";
		}
	}

});