// var get spinners
var spinners = document.getElementsByClassName("spinner");

// get bonus buttons
var bonus_buttons = document.getElementsByClassName("bonus_button");


//////////////////////////////////////////////////
// points remaining
var remain = 15;
var remain_div = $("#remain");

// points spenting
var spent = 0;
var spent_div = $("#spent");

// Columns - all in arrays
var _cost = document.getElementsByClassName("_cost");
var _bmod = document.getElementsByClassName("_bmod");
var _rbon = document.getElementsByClassName("_rbon");
var _tota = document.getElementsByClassName("_tota");
var _tmod = document.getElementsByClassName("_tmod");


//////////////////////////////////////////////////
function cost_check(value) {
	if (value == 7) {
		return ["MIN", -4];
	}
	if (value == 8) {
		return [-1, -2];
	}
	if (value == 9) {
		return [-1, -1];
	}
	if (value == 10) {
		return [1, 0];
	}
	if (value == 11) {
		return [1, 1];
	}
	if (value == 12) {
		return [1, 2];
	}
	if (value == 13) {
		return [2, 3];
	}
	if (value == 14) {
		return [2, 5];
	}
	if (value == 15) {
		return [3, 7];
	}
	if (value == 16) {
		return [3, 10];
	}
	if (value == 17) {
		return [4, 13];
	}
	if (value == 18) {
		return ["MAX", 17];
	}
}


//////////////////////////////////////////////////
function get_modifier(num) {
	// 10-11 = 0: get offset from that
	var offset = (num) - 10;

	// divide offset by 2
	var mod = Math.floor(offset / 2);

	return mod
}


var last_bonus = "X";
function racial_bonus(button, num) {   

	_tota = document.getElementsByClassName("_tota");

	if (last_bonus != "X") {
		// reset total score and total mod of last clicked bonus
		_tota[last_bonus].innerHTML = parseInt(_tota[last_bonus].innerHTML) - 2;
		_tmod[last_bonus].innerHTML = get_modifier(parseInt(_tota[last_bonus].innerHTML));
	}

	console.log("clicked bonus button"+button+" "+num);

	// clear bonuses first
	for(var i=0; i < bonus_buttons.length; i++) {
		bonus_buttons[i].style.backgroundColor = "#dddddd";
		_rbon[i].innerHTML = '<span class="bonus_button" style="display: block; background-color: rgb(221, 221, 221);" onclick="racial_bonus(this,'+i+');"> </span>0';
	}

	// set color of clicked bonus
	button.style.backgroundColor = "#d0451b";
	button.style.opacity = "0.9";

	// set text 
	_rbon[num].innerHTML = '<span class="bonus_button" style="display: block; background-color: #d0451b; opacity: 0.9;"> </span>+2';
	_tota[num].innerHTML = parseInt(_tota[num].innerHTML) + 2;
	_tmod[num].innerHTML = get_modifier(parseInt(_tota[num].innerHTML));

	last_bonus = num;
}


//////////////////////////////////////////////////
function get_race_bonus() {

	// show selected race
	console.log(the_race);

	//change ALL existing race bunuses first
	for(var i=0; i < _rbon.length; i++) {

		var bonus_text = _rbon[i].innerHTML;

		if (bonus_text.substring(bonus_text.length-2,bonus_text.length-1) == "+") {

			console.log(i+" - Reset +2 for : "+bonus_text);

			_tota[i].innerHTML = (parseInt(_tota[i].innerHTML) - 2);
			_tmod[i].innerHTML = get_modifier(parseInt(_tota[i].innerHTML));

		}
		else if (bonus_text.substring(bonus_text.length-2,bonus_text.length-1) == "-") {

			console.log(i+" - Reset -2 for : "+bonus_text);

			_tota[i].innerHTML = (parseInt(_tota[i].innerHTML) + 2);
			_tmod[i].innerHTML = get_modifier(parseInt(_tota[i].innerHTML));

		}
		else {
			console.log(i+" - "+bonus_text);
		}
	}
	for(var i=0; i < _rbon.length; i++) {
		_rbon[i].innerHTML = '<span class="bonus_button" style="display: none;" onclick="racial_bonus(this,'+i+');"></span>0';
	}
	last_bonus = "X";
	document.getElementById("race_message").innerHTML = ("");





	var abs = [];

	if (the_race == "Dwarf") {
		// +2 Constitution, +2 Wisdom, –2 Charisma:
		$("#con_rbon").text("+2");
		$("#wis_rbon").text("+2");
		$("#cha_rbon").text("-2");

		abs = [2,4,5];
	}
	if (the_race == "Elf") {
		// +2 Dexterity, +2 Intelligence, –2 Constitution:
		$("#dex_rbon").text("+2");
		$("#int_rbon").text("+2");
		$("#con_rbon").text("-2");

		abs = [1,3,2];
	}
	if (the_race == "Gnome") {
		// +2 Constitution, +2 Charisma, –2 Strength:
		$("#con_rbon").text("+2");
		$("#cha_rbon").text("+2");
		$("#str_rbon").text("-2");		

		abs = [2,5,0];
	}
	if (the_race == "Half-elf" || the_race == "Half-orc" || the_race == "Human") {
		// +2 to One Ability Score:
		console.log("test2 - "+bonus_buttons.length);

		for(var i=0; i < bonus_buttons.length; i++) {
			bonus_buttons[i].style.display = "block";
		}

		// show race message 
		document.getElementById("race_message").innerHTML = ("** "+the_race+"s can choose to increase one ability by two. **");
	
	}
	if (the_race == "Halfling") {
		// +2 Dexterity, +2 Charisma, –2 Strength: 
		$("#dex_rbon").text("+2");
		$("#cha_rbon").text("+2");
		$("#str_rbon").text("-2");

		abs = [1,5,0];
	}

	if (the_race != "Half-elf" && the_race != "Half-orc" && the_race != "Human") {
		_tota[abs[0]].innerHTML = parseInt(_tota[abs[0]].innerHTML) + 2;
		_tota[abs[1]].innerHTML = parseInt(_tota[abs[1]].innerHTML) + 2;
		_tota[abs[2]].innerHTML = parseInt(_tota[abs[2]].innerHTML) - 2;

		_tmod[abs[0]].innerHTML = get_modifier(parseInt(_tota[abs[0]].innerHTML));
		_tmod[abs[1]].innerHTML = get_modifier(parseInt(_tota[abs[1]].innerHTML));
		_tmod[abs[2]].innerHTML = get_modifier(parseInt(_tota[abs[2]].innerHTML));
	}
}

//////////////////////////////////////////////////
// - score :the spinner element that changed
// - num :array index of the column 0-5
function change_score(score, num) {

	_bmod = document.getElementsByClassName("_bmod");


	//Get Changed Score Value
	new_score = score.value;
	console.log("Score I got: "+new_score);

	// prevent people from entering values not within limit
	if (new_score < 7) {
		new_score = "7";
	}

	if (new_score > 18) {
		new_score = "18";
	}

	point = cost_check(new_score)[1];
	console.log("Point Value: "+point);

	// get all scores
	total_score = 0
	for (var i = 0; i < spinners.length; i++) {
		total_score += cost_check(spinners[i].value)[1];
	}

	// set points spent
	spent_div.text(total_score);

	// set points remaining
	remain_div.text(remain - total_score);

	//change texts on table 
	// _cost
		var new_cost = cost_check(new_score)[0];
		_cost[num].innerHTML = (new_cost);

	// _bmod
		_bmod[num].innerHTML = get_modifier(new_score);

	// _tota
		// get bonus
		var bonus_text = _rbon[num].innerHTML;
		console.log(bonus_text);

		if (bonus_text.substring(bonus_text.length-1,bonus_text.length) == "0") {
			_tota[num].innerHTML = new_score;
		}
		else if (bonus_text.substring(bonus_text.length-2,bonus_text.length-1) == "+") {
			_tota[num].innerHTML = (parseInt(new_score) + 2);
		}
		else {
			_tota[num].innerHTML = (parseInt(new_score) - 2);
		}

	// _tmod
		_tmod[num].innerHTML = get_modifier(parseInt(_tota[num].innerHTML));

	console.log("--------------------------------"); //END
}

//////////////////////////////////////////////////
// function to set total points - based on fantasy
function set_total_points(button, total) {

	// set active button to not active
	$(".active_fant").attr('class', 'fantButton');

	// set the pushed button to active
	// button.attr('class', 'active_fant');
	button.setAttribute("class", "active_fant");

	// get current ramaining
	var cur_remain = remain_div.text();

	// get offset from base (15)
	var offset = total - remain;

	// change remaining points based on fantasy
	var ch = parseInt(cur_remain)+offset;
	console.log(ch);
	remain_div.text(ch);

	// change remain to reflect change
	remain = total;
}


//////////////////////////////////////////////////
// function to reset reset_points
function reset_points() {

	//console.log("reset_points - inside native function");

	for(var i=0; i < spinners.length; i++) {
		spinners[i].value = 10;
		_tota[i].innerHTML = 10;
		_cost[i].innerHTML = 1;
		_rbon[i].innerHTML = '<span class="bonus_button" onclick="racial_bonus(this,'+i+');"> </span>0';
		_bmod[i].innerHTML = 0;
		_tmod[i].innerHTML = 0;

		bonus_buttons[i].style.display = "none";
	}
	remain_div.text(remain);
	$("#spent").text("0");


	console.log("get_race_bonus - inside reset_points function");
	get_race_bonus();
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
$('#str').on("spinstop", function(){
	change_score(this, 0);
});

//////////////////////////////////////////////////
$('#dex').on("spinstop", function(){
	change_score(this, 1);
});

//////////////////////////////////////////////////
$('#con').on("spinstop", function(){
	change_score(this, 2);
});

//////////////////////////////////////////////////
$('#int').on("spinstop", function(){
	change_score(this, 3);
});

//////////////////////////////////////////////////
$('#wis').on("spinstop", function(){
	change_score(this, 4);
});

//////////////////////////////////////////////////
$('#cha').on("spinstop", function(){
	change_score(this, 5);
});