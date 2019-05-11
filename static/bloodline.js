// bloodline array
var bloodline_names = [
	"Aberrant",
	"Abyssal",
	"Accursed",
	"Aquatic",
	"Arcane",
	"Astral",
	"Boreal",
	"Celestial",
	"Daemon",
	"Deep Earth",
	"Destined",
	"Div",
	"Djinni",
	"Draconic",
	"Dreamspun",
	"Ectoplasm",
	"Efreeti",
	"Elemental",
	"Fey",
	"Ghoul",
	"Harrow",
	"Imperious",
	"Impossible",
	"Infernal",
	"Kobold Sorcerer",
	"Maestro",
	"Marid",
	"Martyred",
	"Naga",
	"Nanite",
	"Oni",
	"Orc",
	"Pestilence",
	"Possessed",
	"Protean",
	"Psychic",
	"Rakshasa",
	"Salamander",
	"Scorpion",
	"Serpentine",
	"Shadow",
	"Shaitan",
	"Shapechanger",
	"Solar",
	"Starsoul",
	"Stormborn",
	"Undead",
	"Verdant",
	"Vestige"
];

var bloodline_descs = [
"There is a taint in your blood, one that is alien and bizarre.",
"Generations ago, a demon spread its filth into your heritage.",
"Misfortune, pestilence, and nightmares follow your family like vermin drawn to carrion.",
"Your family traces its heritage back to the ocean depths, whether scions of undersea empires left in the wake of nomadic sea-tribes, or the spawn of creeping ichthyic infiltrators into remote seaside villages.",
"Your family has always been skilled in the eldritch art of magic.",
"Whether you were raised on the Astral Plane, had an ancestor with a strong connection to the Astral, or simply had a freak brush with an astral conduit in your youth, you have an unusual connection to both time and space. Your senses extend through the Astral Plane to the far reaches of the multiverse, allowing you to perceive and manipulate the timeless potential that binds the multiverse together. Your ancestors may have also held a connection to one of the astral isles or conduits, or like you, may have plied this cosmic ocean—and some may even survive there to this day.",
"Descended from inhabitants of the lands of ice and snow, you count among your ancestors giant-kin, troll-born, and frost-rimed spirits.",
"Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention.",
"Your powers derive from daemons, who take pleasure and gain power from manipulating mortal frailties like aging, pestilence, famine, and the horrors of war.",
"The echoing cave-songs and the rumble and creak of primal spirits deep below the ground thrum in your soul and in all your family line.",
"Your family is destined for greatness in some way.",
"You can trace your ancestry to one of the foul, corrupted genies known as divs.",
"You were born with the power of air genies, and the magic of the djinn is strong in you.",
"At some point in your family's history, a dragon interbred with your bloodline, and now its ancient power flows through your veins.",
"Your family is a long line of dreamers, who dream not as ordinary mortals do but rather as those who reach through and touch the supernal realm of dreams and the farthest shores of night.",
"The power of the Ethereal Plane thrums in your mind and pulls at your flesh.",
"You were born with the power of fire genies, and the magic of the efreet is strong in you.",
"The power of the elements resides in you, and at times you can hardly control its fury.",
"The capricious nature of the fey runs in your family due to some intermingling of fey blood or magic.",
"Your connection to the hungering undead shapes your magic.",
"Just as knowledge of the harrow has passed from generation to generation since time immemorial, so too has a deep spiritual connection to the otherworldly forces bound by the harrow passed through the ages.",
"(Human Only) A scion of forgotten kings, with a lineage rich with the dust of ancient empires spanning every golden age of humanity's history, an imperious embodies the apex of human potential, as well as human temerity and uninhibited hubris.",
"You can see beyond the mundane, and are capable of visualizing the improbable, and even the impossible.",
"Somewhere in your family's history, a relative made a deal with a devil, and that pact has influenced your family line ever since.",
"(Kobold Only) While many kobold sorcerers tout their purely draconic bloodline, over generations of eldritch training, some such spellcasters have created a bloodline that, while tinged with some draconic magic, is the embodiment of the race's virtue distilled into arcane form.",
"The spiritual power of art and song runs strongly through your family line.",
"You were born with the power of water genies, and the magic of the marids is strong in you.",
"One of your ancestors paid the ultimate price for your beliefs.",
"Naga blood flows within your veins. Perhaps a curious naga experimented upon one of your ancestors in an attempt to create the perfect servant, or maybe one of your ancestors was a shapeshifting naga. Either way, you boast powers similar to those of true nagas.",
"Either you were born from one of the forgewombs scattered throughout the wastelands, or you were infected by nanites, which now course through your blood.",
"As slaves of capricious oni lords, your ancestors were forced to yield to their masters’ hedonistic desires, inevitably tainting their descendents with oni blood.",
"The rage of your ancestors burns within you, and the taint of savage orc blood flows through your veins.",
"You were born during the height of a great magical plague, to a mother suffering from an eldritch disease, or you suffered an eldritch pox as a child, such that your very soul now carries a blight of pestilence within it.",
"The mystical connection with your possessing spirit allows you to gain more control over your body and mind.",
"You have in your veins the ever-changing wildness of primal chaos, the raw essence of unbound creation.",
"Psychic power runs thorough your blood, whether it be from a familial predisposition to psychic power or exposure to a powerful psychic phenomenon. Whatever the source of this power, your mind is a dangerous weapon.",
"At some point in your family's history, one of your ancestors was tainted by the influence of a rakshasa.",
"You are descended from the elemental outsiders known as salamanders. You wield flame as a weapon and a tool, and your smithing skills are unrivaled.",
"Whether your ancestors served a scorpion goddess or simply worked closely with more mundane members of the species, the venom from these arachnids has seeped down through generations into your blood.",
"Your bloodline carries the lingering stain of ancient serpent races that ruled when the world was young.",
"Spirits from the shadow plane dally at times in the world of light, and such as these lay with your ancestors once upon a time, imparting the mystery of shadow-stuff into your lineage.",
"You were born with the power of earth genies, and the magic of the shaitans is strong in you.",
"Channeling the power of your shapeshifting ancestors that you carry in your blood, you gain powers that allow you to change your shape and alter your appearance and physical abilities.",
"Sorcerers who serve in the sun goddess’s court display powers infused with the glory of the sun itself.",
"You come from a line of stargazers and explorers who delved deeply into the darkness beyond the stars.",
"You trace your heritage to fierce and proud spirits of storm and sky, and living lightning sings in your veins.",
"The taint of the grave runs through your family.",
"Your progenitors infused themselves with raw plant life, binding it into their own tissue and passing it down to their literal seed, giving you innate communion with nature.",
"You trace your ancestry to a bygone civilization and can call upon its forgotten people or places for power.",
];

var blood_button_box = document.getElementById("blood_button_box");
var blood_desc_box = document.getElementById("blood_desc_box");

// creates blooline elemets when user first clicks on sorcerer
function create_bloodline_elements() {

	var blood_button_box_html = "";

	for (var i=0; i < bloodline_names.length; i++) {
		if (i == 4) {
			blood_button_box_html += "<span class='bloodline_name_active' onclick='set_bloodline.call(this);'>"+bloodline_names[i]+"</span>";
		}
		else {
			blood_button_box_html += "<span class='bloodline_name_button' onclick='set_bloodline.call(this);'>"+bloodline_names[i]+"</span>";
		}
	}

	blood_button_box.innerHTML = blood_button_box_html;
	blood_desc_box.innerHTML = "<p>"+bloodline_descs[4]+"</p>";
}

function set_bloodline() {
	// this = the span button clicked

	// get active button
	var active = document.getElementsByClassName("bloodline_name_active");

	// clear last button from active status
	if (active.length > 0) {
		active[0].className = "bloodline_name_button";
	}
	// set active button (this)
	this.className = "bloodline_name_active";

	// set favored enemy input value
	$("#bloodline_input").val(this.innerHTML);

	// - get index of name
	var index = 0;

	for (var i=0; i < bloodline_names.length; i++) {
		if (bloodline_names[i] == this.innerHTML) {
			index = i;
		}
	}
	// set description text
	blood_desc_box.innerHTML = "<p>"+bloodline_descs[index]+"</p>";

}