var schools = [
"Abjuration",
"Conjuration",
"Divination",
"Enchantment",
"Evocation",
"Illusion",
"Necromancy",
"Transmutation",
"Universalist"
];

var school_descs = [
"Banishment, Counterspell",
"Cheliax: Egorian Academy Infernal Binder, Creation, Extradimension, Teleportation",
"Foresight, Prophecy, Scryer",
"Controller, Manipulator",
"Admixture, Generation",
"Deception, Phantasm, Qadira: Mage of the Veil, Shadow",
"Life, Undead",
"Enhancement, Shapechange",
"Absalom: Arcanamirium Crafter"
];

var bonds = [
"Amulet", 
"Ring", 
"Staff", 
"Wand", 
"Weapon",
"Familiar"
];

var familiars = [
"Archaeopteryx","Arctic fox","Arctic hare","Arctic tern","Armadillo","Bat","Butterfly","Cat","Cat, margay","Centipede, house","Chicken",
"Cockroach","Compsognathus dinosaur","Crab, king","Creeper ivy","Dodo","Dolphin, popoto","Donkey rat","Dwarf caiman","Dweomer cap","Ermine",
"Fire salamander","Flowering lattice","Flying squirrel","Fox","Giant flea","Giant isopod","Goat","Hawk","Hedgehog","Horned lizard","Ioun wyrd",
"Ioun wyrn","Isopod, giant","Jerboa","Kakapo","Koala","Lamprey","Lemming","Leopard slug","Leopard Slug","Lich newt","Lizard","Marine iguana",
"Meerkat","Mole","Mongoose","Monkey","Moth","Octopus, blue-ringed","Osprey","Otter","Owl","Parrot","Peacock","Peafowl","Penguin","Petrifern",
"Petromin","Pig","Platypus","Ptarmigan","Pufferfish","Puffin","Rabbit","Raccoon","Rat","Raven","Ravenous tumbleweed","Razor fern","Rhamphorhynchus",
"Rock Tuatara","Sawleg locust","Scorpion, greensting","Sea krait","Seal","Shimmerwing dragonfly","Skunk","Sloth","Snail kite","Snapping turtle",
"Snark","Snowy owl","Spider, scarlet","Spiny starfish","Squirrel","Squirrel, flying","Suture vine","Tardigrade, giant","Tarsier","Thrush","Toad",
"Torble","Toucan","Tuatara","Turtle","Vampire squid","Viper","Wallaby","Weasel"];


var school_button_box = document.getElementById("school_button_box");
var bond_button_box = document.getElementById("bond_button_box");

// creates wizard elemets when user first clicks on wizard
function create_wiz_elements() {

	// show school
	var school_button_box_html = "";

	for (var i=0; i < schools.length; i++) {
		if (i == schools.length-1) {
			school_button_box_html += "<span class='school_active' onclick='set_school.call(this);'>"+schools[i]+"</span>";
		}
		else {
			school_button_box_html += "<span class='school_button' onclick='set_school.call(this);'>"+schools[i]+"</span>";
		}
	}

	school_button_box.innerHTML = school_button_box_html;
	school_desc_box.innerHTML = "<p>"+school_descs[schools.length-1]+"</p>";

	// show bond
	var bond_button_box_html = "";

	for (var i=0; i < bonds.length; i++) {
		if (i == 0) {
			bond_button_box_html += "<span class='bond_active' onclick='set_bond.call(this);'>"+bonds[i]+"</span>";
		}
		else {
			bond_button_box_html += "<span class='bond_button' onclick='set_bond.call(this);'>"+bonds[i]+"</span>";
		}
	}

	bond_button_box_html += "<select name='familiar' id='familiar_input' disabled>";

	for (var i=0; i < familiars.length; i++) {
		bond_button_box_html += "<option value='"+familiars[i]+"'>"+familiars[i]+"</option>";
	}

	bond_button_box_html += "</select>";

	bond_button_box.innerHTML = bond_button_box_html;
}


// function to set school
function set_school() {

}

// function to set bond
function set_bond() {
	
}