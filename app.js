$(document).ready(function() {

	var type1 = $('#type1').val();
	var type2 = $('#type2').val();
	var empty = "";

	var type1_index = -1;
	var type2_index = -1;

	var types = ["BUG", "DARK", "DRAGON", "ELECTRIC", "FAIRY", "FIGHTING", "FIRE", "FLYING", "GHOST", "GRASS", "GROUND", "ICE", "NORMAL", "POISON", "PSYCHIC", "ROCK", "STEEL", "WATER"];

	var typesDict = {
		"bug": 0,
		"dark": 1,
		"dragon": 2,
		"electric": 3,
		"fairy": 4,
		"fighting": 5,
		"fire": 6,
		"flying": 7,
		"ghost": 8,
		"grass": 9,
		"ground": 10,
		"ice": 11,
		"normal": 12,
		"poison": 13,
		"psychic": 14,
		"rock": 15,
		"steel": 16,
		"water": 17,
	  };

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
		addType('bug');
		calculate();
	})

	$('.button-dark').click(function(){
		addType('dark');
		calculate();
	})

	$('.button-dragon').click(function(){
		addType('dragon');
		calculate();
	})

	$('.button-electric').click(function(){
		addType('electric');
		calculate();
	})

	$('.button-fairy').click(function(){
		addType('fairy');
		calculate();
	})

	$('.button-fighting').click(function(){
		addType('fighting');
		calculate();
	})

	$('.button-fire').click(function(){
		addType('fire');
		calculate();
	})

	$('.button-flying').click(function(){
		addType('flying');
		calculate();
	})

	$('.button-ghost').click(function(){
		addType('ghost');
		calculate();
	})

	$('.button-grass').click(function(){
		addType('grass');
		calculate();
	})

	$('.button-ground').click(function(){
		addType('ground');
		calculate();
	})

	$('.button-ice').click(function(){
		addType('ice');
		calculate();
	})

	$('.button-normal').click(function(){
		addType('normal');
		calculate();
	})

	$('.button-poison').click(function(){
		addType('poison');
		calculate();
	})

	$('.button-psychic').click(function(){
		addType('psychic');
		calculate();
	})

	$('.button-rock').click(function(){
		addType('rock');
		calculate();
	})

	$('.button-steel').click(function(){
		addType('steel');
		calculate();
	})

	$('.button-water').click(function(){
		addType('water');
		calculate();
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
		$("#type1").removeClass();
		$("#type2").removeClass();
	})

	const addType = (typeName) => {
		type_index = typesDict[typeName];
		if(type1 == empty){
			type1_index = type_index;
			type1 = typeName.toUpperCase();
			$('#type1').html(type1);
			$('#type1').removeClass();
			$('#type1').addClass("type-name")
			$('#type1').addClass(typeName)
		}
		else if(type2 == empty && type1 != types[type_index]){
			type2_index = type_index;
			type2 = typeName.toUpperCase();
			$('#type2').html(type2);
			$('#type2').removeClass();
			$('#type2').addClass("type-name")
			$('#type2').addClass(typeName)
		}
	}

	const calculate = () => {
		var weak_list = $("#weakness-chart");

  		var title = $("#magic-title");
  		if(type2 == empty) { //just one type
  			var i;
  			for(i = 0; i < 18; i++){
  				effects[i] = type_chart[i][type1_index]/2;
  			}
  			add_lists();
  			add_html_lists();
  			title.hide(100);
  		}
  		else {
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

	const add_lists = () => {
		for(let i = 0; i < 18; i++){
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

	const clear_lists = () => {
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

	const add_html_lists = () => {

		for(var i = 0; i < x4.length; i++){
			string_weak.push("X4 " + x4[i]);
		}

		for(var i = 0; i < x2.length; i++){
			string_weak.push("X2 " + x2[i]);
		}

		for(var i = 0; i < x0_25.length; i++){
			string_res.push("X0.25 " + x0_25[i]);
		}

		for(var i = 0; i < x0_5.length; i++){
			string_res.push("X0.5 " + x0_5[i]);
		}

		for(var i = 0; i < x1.length; i++){
			string_norm.push("X1 " + x1[i]);
		}

		for(var i = 0; i < x0.length; i++){
			string_inmu.push("X0 " + x0[i]);
		}

		add_format_html(string_norm, "#norm_list");
		add_format_html(string_res, "#res_list");
		add_format_html(string_weak, "#weak_list");
		add_format_html(string_inmu, "#inmu_list");
	}

	const clear_html_lists = () => {
		$('#weak_list').empty()
		$('#norm_list').empty();
		$('#res_list').empty();
		$('#inmu_list').empty();
	}

	const add_format_html = (string_arr, list_id) => {
		string_arr.forEach(type => {
			let className = add_type(type);
			let string_add = '<p class="' + className + '">' + type + '</p>';
			$(list_id).append(string_add);
		});
	}
	const add_type = (string_type) => {
		return string_type.toLowerCase()	
	}
});