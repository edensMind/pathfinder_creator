// Gender
var gender = "Male";

// Pic container
var pic = $("#race_pic");


var the_race = "Dwarf"

// function to set banner text and set input values
function set_race_banner(){

	// get race / gender values
	console.log("Race: "+the_race+" - Gen: "+gender);

	// set input values
	$("#race_input").val(the_race);
	$("#gender_input").val(gender);

	// set banner text
	//  - name container
	var banner_name = $("#race_name"); 
	banner_name.text(gender+" "+the_race);

}

// function to change race
function change_race(button) {

	// set active button to not active
	$(".active_race").attr('class', 'raceButton');

	the_race = button.innerHTML;

	// Dwarf Button
	if (button.innerHTML == "Dwarf") {

		// check gender and apply proper picture
		if (gender == "Male") {
			pic.css("background-image","url('static/races/dwarf_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/dwarf_female.png')");
		}

		// set button to active race
		$("#Dwarf").attr('class', 'active_race');

		//set race text
		$("#race_text").html('<p><span id="race_title">Dwarves</span> are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins. More than any other race, the dwarves have acquired a reputation as dour and humorless craftsmen of the earth. It could be said that dwarven history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins, and other such horrors.</p><p><b>Physical Description:</b>Dwarves are a short and stocky race, and stand about a foot shorter than most humans, with wide, compact bodies that account for their burly appearance. Male and female dwarves pride themselves on the length of their hair, and men often decorate their beards with a variety of clasps and intricate braids. A clean-shaven male dwarf is a sure sign of madness, or worse—no one familiar with their race trusts a beardless dwarf.</p><p><b>Society:</b> The great distances between their mountain citadels account for many of the cultural differences that exist within dwarven society. Despite these schisms, dwarves throughout the world are characterized by their love of stonework, their passion for stone- and metal-based craftsmanship and architecture, and a fierce hatred of giants, orcs, and goblinoids.			</p>			<p>			<b>Relations:</b> Dwarves and orcs have long dwelt in proximity, theirs a history of violence as old as both their races. Dwarves generally distrust and shun half-orcs. They find halflings, elves, and gnomes to be too frail, flighty, or "pretty" to be worthy of proper respect. It is with humans that dwarves share the strongest link, for humans industrious nature and hearty appetites come closest to matching those of the dwarven ideal.			</p>			<p>			<b>Alignment and Religion:</b> Dwarves are driven by honor and tradition, and while they are often satirized as standoffish, they have a strong sense of friendship and justice, and those who win their trust understand that, while they work hard, they play even harder—especially when good ale is involved. Most dwarves are lawful good.			<p>');

		//set race text
		$("#race_bonus").html('<b>+2 Constitution, +2 Wisdom, –2 Charisma:</b> Dwarves are both tough and wise, but also a bit gruff.<br/><br/>		<b>Slow and Steady:</b> Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.<br/><br/>		<b>Darkvision:</b> Dwarves can see in the dark up to 60 feet.<br/><br/>		<b>Defensive Training:</b> Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.<br/><br/>		<b>Greed:</b> Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones.<br/><br/>		<b>Hatred:</b> Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes.<br/><br/>		<b>Hardy:</b> Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.<br/><br/>		<b>Stability:</b> Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.<br/><br/>		<b>Stonecunning:</b> Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.<br/><br/>		<b>Weapon Familiarity:</b> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word "dwarven" in its name as a martial weapon.<br/><br/>		<b>Languages:</b> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon. ');
	}

	// Elf Button
	if (button.innerHTML == "Elf") {
		
		if (gender == "Male") {
			pic.css("background-image","url('static/races/elf_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/elf_female.png')");
		}
		$("#Elf").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Elves</span> are children of the natural world, similar in many superficial ways to fey creatures, yet different as well. Elves value their privacy and traditions, and while they are often slow to make friends, at both the personal and national levels, once an outsider is accepted as a comrade, such alliances can last for generations. Elves have a curious attachment to their surroundings, perhaps as a result of their incredibly long lifespans or some deeper, more mystical reason. Elves who dwell in a region for long find themselves physically adapting to match their surroundings, most noticeably taking on coloration reflecting the local environment. Those elves that spend their lives among the short-lived races, on the other hand, often develop a skewed perception of mortality and become morose, the result of watching wave after wave of companions age and die before their eyes.</p><p><b>Physical Description:</b> Although generally taller than humans, elves possess a graceful, fragile physique that is accentuated by their long, pointed ears. Their eyes are wide and almond-shaped, and filled with large, vibrantly colored pupils. While elven clothing often plays off the beauty of the natural world, those elves that live in cities tend to bedeck themselves in the latest fashion.</p><p><b>Society:</b> Many elves feel a bond with nature and strive to live in harmony with the natural world. Most, however, find manipulating earth and stone to be distasteful, and prefer instead to indulge in the finer arts, with their inborn patience making them particularly suited to wizardry.</p><p><b>Relations:</b> Elves are prone to dismissing other races, writing them off as rash and impulsive, yet they are excellent judges of character. An elf might not want a dwarf neighbor, but would be the first to acknowledge that dwarfs skill at smithing. They regard gnomes as strange (and sometimes dangerous) curiosities, and halflings with a measure of pity, for these small folk seem to the elves to be adrift, without a traditional home. Elves are fascinated with humans, as evidenced by the number of half-elves in the world, even if they usually disown such offspring. They regard half-orcs with distrust and suspicion.</p><p><b>Alignment and Religion:</b> Elves are emotional and capricious, yet value kindness and beauty. Most elves are chaotic good.</p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 Dexterity, +2 Intelligence, –2 Constitution:</b> Elves are nimble, both in body and mind, but their form is frail.</p><p><b>Normal Speed:</b> Elves have a base speed of 30 feet.</p><p><b>Low-Light Vision:</b> Elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p><b>Elven Immunities:</b> Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p><b>Elven Magic:</b> Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.</p><p><b>Keen Senses:</b> Elves receive a +2 racial bonus on Perception skill checks.</p><p><b>Weapon Familiarity:</b> Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word "elven" in its name as a martial weapon.</p><p><b>Languages:</b> Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.</p>');
	}

	// Gnome Button
	if (button.innerHTML == "Gnome") {
		if (gender == "Male") {
			pic.css("background-image","url('static/races/gnome_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/gnome_female.png')");
		}
		$("#Gnome").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Gnomes</span> trace their lineage back to the mysterious realm of the fey, a place where colors are brighter, the wildlands wilder, and emotions more primal. Unknown forces drove the ancient gnomes from that realm long ago, forcing them to seek refuge in this world; despite this, the gnomes have never completely abandoned their fey roots or adapted to mortal culture. As a result, gnomes are widely regarded by the other races as alien and strange.</p><p><b>Physical Description:</b> Gnomes are one of the smallest of the common races, generally standing just over 3 feet in height. Their hair tends toward vibrant colors such as the fiery orange of autumn leaves, the verdant green of forests at springtime, or the deep reds and purples of wildflowers in bloom. Similarly, their flesh tones range from earthy browns to floral pinks, frequently with little regard for heredity. Gnomes possess highly mutable facial characteristics, and many have overly large mouths and eyes, an effect which can be both disturbing and stunning, depending on the individual.</p><p><b>Society:</b> Unlike most races, gnomes do not generally organize themselves within classic societal structures. Whimsical creatures at heart, they typically travel alone or with temporary companions, ever seeking new and more exciting experiences. They rarely form enduring relationships among themselves or with members of other races, instead pursuing crafts, professions, or collections with a passion that borders on zealotry. Male gnomes have a strange fondness for unusual hats and headgear, while females often proudly wear elaborate and eccentric hairstyles.</p><p><b>Relations:</b> Gnomes have difficulty interacting with the other races, on both emotional and physical levels. Gnome humor is hard to translate and often comes across as malicious or senseless to other races, while gnomes in turn tend to think of the taller races as dull and lumbering giants. They get along well with halflings and humans, but are overly fond of playing jokes on dwarves and half-orcs, whom most gnomes feel need to lighten up. They respect elves, but often grow frustrated with the comparatively slow pace at which members of the long-lived race make decisions. To the gnomes, action is always better than inaction, and many gnomes carry several highly involved projects with them at all times to keep themselves entertained during rest periods.</p><p><b>Alignment and Religion:</b> Although gnomes are impulsive tricksters, with sometimes inscrutable motives and equally confusing methods, their hearts are generally in the right place. They are prone to powerful fits of emotion, and find themselves most at peace within the natural world.</p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 Constitution, +2 Charisma, –2 Strength:</b> Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable.</p><p><b>Small:</b> Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p><b>Slow Speed:</b> Gnomes have a base speed of 20 feet.</p><p><b>Low-Light Vision:</b> Gnomes can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p><b>Defensive Training:</b> Gnomes get a +4 dodge bonus to AC against monsters of the giant type.</p><p><b>Gnome Magic:</b> Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnomes level. The DC for these spells is equal to 10 + the spell&#39;s level + the gnome&#39;s Charisma modifier.</p><p><b>Hatred:</b> Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.</p><p><b>Illusion Resistance:</b> Gnomes get a +2 racial saving throw bonus against illusion spells or effects.</p><p><b>Keen Senses:</b> Gnomes receive a +2 racial bonus on Perception skill checks.</p><p><b>Obsessive:</b> Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.</p><p><b>Weapon Familiarity:</b> Gnomes treat any weapon with the word "gnome" in its name as a martial weapon.</p><p><b>Languages:</b> Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.</p>');
	}

	// Half-elf Button
	if (button.innerHTML == "Half-elf") {
		if (gender == "Male") {
			pic.css("background-image","url('static/races/half-elf_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/half-elf_female.png')");
		}
		$("#Half-elf").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Half-elves</span>. Elves have long drawn the covetous gazes of other races. Their generous life spans, magical affinity, and inherent grace each contribute to the admiration or bitter envy of their neighbors. Of all their traits, however, none so entrance their human associates as their beauty. Since the two races first came into contact with each other, the humans have held up elves as models of physical perfection, seeing in the fair folk idealized versions of themselves. For their part, many elves find humans attractive despite their comparatively barbaric ways, drawn to the passion and impetuosity with which members of the younger race play out their brief lives.</p><p>Sometimes this mutual infatuation leads to romantic relationships. Though usually short-lived, even by human standards, these trysts commonly lead to the birth of half-elves, a race descended of two cultures yet inheritor of neither. Half-elves can breed with one another, but even these "pureblood" half-elves tend to be viewed as bastards by humans and elves alike.</p><p><b>Physical Description:</b> Half-elves stand taller than humans but shorter than elves. They inherit the lean build and comely features of their elven lineage, but their skin color is dictated by their human side. While half-elves retain the pointed ears of elves, theirs are more rounded and less pronounced. A half-elfs human-like eyes tend to range a spectrum of exotic colors running from amber or violet to emerald green and deep blue.</p><p><b>Society:</b> The lack of a unified homeland and culture forces half-elves to remain versatile, able to conform to nearly any environment. While often attractive to both races for the same reasons as their parents, half-elves rarely fit in with either humans or elves, as both races see too much evidence of the other in them. This lack of acceptance weighs heavily on many half-elves, yet others are bolstered by their unique status, seeing in their lack of a formalized culture the ultimate freedom. As a result, half-elves are incredibly adaptable, capable of adjusting their mindsets and talents to whatever societies they find themselves in.</p><p><b>Relations:</b> A half-elf understands loneliness, and knows that character is often less a product of race than of life experience. As such, half-elves are often open to friendships and alliances with other races, and less likely to rely on first impressions when forming opinions of new acquaintances.</p><p><b>Alignment and Religion:</b> Half-elves isolation strongly influences their characters and philosophies. Cruelty does not come naturally to them, nor does blending in and bending to societal convention—as a result, most half-elves are chaotic good. Half-elves lack of a unified culture makes them less likely to turn to religion, but those who do generally follow the common faiths of their homeland.</p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 to One Ability Score:</b> Half-elf characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p><b>Medium:</b> Half-elves are Medium creatures and have no bonuses or penalties due to their size.</p><p><b>Normal Speed:</b> Half-elves have a base speed of 30 feet.</p><p><b>Low-Light Vision:</b> Half-elves can see twice as far as humans in conditions of dim light. See Additional Rules.</p><p><b>Adaptability:</b> Half-elves receive Skill Focus as a bonus feat at 1st level.</p><p><b>Elf Blood:</b> Half-elves count as both elves and humans for any effect related to race.</p><p><b>Elven Immunities:</b> Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.</p><p><b>Keen Senses:</b> Half-elves receive a +2 racial bonus on Perception skill checks.</p><p><b>Multitalented:</b> Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes. See Classes for more information about favored classes.</p><p><b>Languages:</b> Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).</p>');
	}

	// Half-orc Button
	if (button.innerHTML == "Half-orc") {
		if (gender == "Male") {
			pic.css("background-image","url('static/races/half-orc_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/half-orc_female.png')");
		}
		$("#Half-orc").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Half-orcs</span> are monstrosities, their tragic births the result of perversion and violence—or at least, that&#39;s how other races see them. It&#39;s true that half-orcs are rarely the result of loving unions, and as such are usually forced to grow up hard and fast, constantly fighting for protection or to make names for themselves. Feared, distrusted, and spat upon, half-orcs still consistently manage to surprise their detractors with great deeds and unexpected wisdom—though sometimes it&#39;s easier just to crack a few skulls.</p><p><b>Physical Description:</b> Both genders of half-orc stand between 6 and 7 feet tall, with powerful builds and greenish or grayish skin. Their canines often grow long enough to protrude from their mouths, and these "tusks," combined with heavy brows and slightly pointed ears, give them their notoriously bestial appearance. While half-orcs may be impressive, few ever describe them as beautiful.</p><p><b>Society:</b> Unlike half-elves, where at least part of society&#39;s discrimination is born out of jealousy or attraction, half-orcs get the worst of both worlds: physically weaker than their orc kin, they also tend to be feared or attacked outright by the legions of humans who don&#39;t bother making the distinction between full orcs and halfbloods. Still, while not exactly accepted, half-orcs in civilized societies tend to be valued for their martial prowess, and orc leaders have actually been known to spawn them intentionally, as the halfbreeds regularly make up for their lack of physical strength with increased cunning and aggression, making them natural chieftains and strategic advisors.</p><p><b>Relations:</b> A lifetime of persecution leaves the average half-orc wary and quick to anger, yet those who break through his savage exterior might find a well-hidden core of empathy. Elves and dwarves tend to be the least accepting of half-orcs, seeing in them too great a resemblance to their racial enemies, but other races aren&#39;t much more understanding. Human societies with few orc problems tend to be the most accommodating, and there half-orcs make natural mercenaries and enforcers.</p><p><b>Alignment & Religion:</b> Forced to live either among brutish orcs or as lonely outcasts in civilized lands, most half-orcs are bitter, violent, and reclusive. Evil comes easily to them, but they are not evil by nature—rather, most half-orcs are chaotic neutral, having been taught by long experience that there&#39;s no point doing anything but that which directly benefits themselves.</p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 to One Ability Score:</b> Half-orc characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p><b>Medium:</b> Half-orcs are Medium creatures and have no bonuses or penalties due to their size.</p><p><b>Normal Speed:</b> Half-orcs have a base speed of 30 feet.</p><p><b>Darkvision:</b> Half-orcs can see in the dark up to 60 feet.</p><p><b>Intimidating:</b> Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.</p><p><b>Orc Blood:</b> Half-orcs count as both humans and orcs for any effect related to race.</p><p><b>Orc Ferocity:</b> Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.</p><p><b>Weapon Familiarity:</b> Half-orcs are proficient with greataxes and falchions and treat any weapon with the word "orc" in its name as a martial weapon.</p><p><b>Languages:</b> Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.</p>');
	}

	// Halfling Button
	if (button.innerHTML == "Halfling") {
		if (gender == "Male") {
			pic.css("background-image","url('static/races/halfling_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/halfling_female.png')");
		}
		$("#Halfling").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Halflings</span> are inveterate opportunists. Optimistic and cheerful by nature, blessed with uncanny luck and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity. At once excitable and easy-going, halflings like to keep an even temper and a steady eye on opportunity, and are not as prone as some of the more volatile races to violent or emotional outbursts. Even in the jaws of catastrophe, a halfling almost never loses his sense of humor.</p><p>Unable to physically defend themselves from the rigors of the world, they know when to bend with the wind and when to hide away. Yet a halfling&#39;s curiosity often overwhelms his good sense, leading to poor decisions and narrow escapes.</p><p>Though their curiosity drives them to travel and seek new places and experiences, halflings possess a strong sense of house and home, often spending above their means to enhance the comforts of home life.</p><p><b>Physical Description:</b> Halflings rise to a humble height of 3 feet. They prefer to walk barefoot, leading to the bottoms of their feet being roughly calloused. Tufts of thick, curly hair warm the tops of their broad, tanned feet. Their skin tends toward a rich almond color and their hair toward light shades of brown. A halfling&#39;s ears are pointed, but proportionately not much larger than those of a human.</p><p><b>Society:</b> Halflings claim no cultural homeland and control no settlements larger than rural assemblies of free towns. Far more often, they dwell at the knees of their human cousins in human cities, eking out livings as they can from the scraps of larger societies. Many halflings lead perfectly fulfilling lives in the shadow of their larger neighbors, while some prefer more nomadic lives on the road, traveling the world and experiencing all it has to offer.</p><p><b>Relations:</b> A typical halfling prides himself on his ability to go unnoticed by other races—it is this trait that allows so many halflings to excel at thievery and trickery. Most halflings, knowing full well the stereotyped view other races take of them as a result, go out of their way to be forthcoming and friendly to the bigger races when they&#39;re not trying to go unnoticed. They get along fairly well with gnomes, although most halflings regard these eccentric creatures with a hefty dose of caution. Halflings coexist well with humans as a general rule, but since some of the more aggressive human societies value halflings as slaves, halflings try not to grow too complacent when dealing with them. Halflings respect elves and dwarves, but these races generally live in remote regions far from the comforts of civilization that halflings enjoy, thus limiting opportunities for interaction. Only half-orcs are generally shunned by halflings, for their great size and violent natures are a bit too intimidating for most halflings to cope with.</p><p><b>Alignment and Religion:</b> Halflings are loyal to their friends and families, but since they dwell in a world dominated by races twice as large as themselves, they&#39;ve come to grips with the fact that sometimes they&#39;ll need to scrap and scrounge for survival. Most halflings are neutral as a result.</p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 Dexterity, +2 Charisma, –2 Strength:</b> Halflings are nimble and strong-willed, but their small stature makes them weaker than other races.</p><p><b>Small:</b> Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.</p><p><b>Slow Speed:</b> Halflings have a base speed of 20 feet.</p><p><b>Fearless:</b> Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.</p><p><b>Halfling Luck:</b> Halflings receive a +1 racial bonus on all saving throws.</p><p><b>Keen Senses:</b> Halflings receive a +2 racial bonus on Perception skill checks.</p><p><b>Sure-Footed:</b> Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks.</p><p><b>Weapon Familiarity:</b> Halflings are proficient with slings and treat any weapon with the word "halfling" in its name as a martial weapon.</p><p><b>Languages:</b> Halflings begin play speaking Common and Halfling. Halflings with high Intelligence scores can choose from the following: Dwarven, Elven, Gnome, and Goblin.</p>');
	}

	// Human Button
	if (button.innerHTML == "Human") {
		if (gender == "Male") {
			pic.css("background-image","url('static/races/human_male.png')");
		}
		else {
			pic.css("background-image","url('static/races/human_female.png')");
		}
		$("#Human").attr('class', 'active_race');

		$("#race_text").html('<p><span id="race_title">Humans</span> possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world. Their empires and nations are vast, sprawling things, and the citizens of these societies carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is best characterized by its tumultuousness and diversity, and human cultures run the gamut from savage but honorable tribes to decadent, devil-worshiping noble families in the most cosmopolitan cities. Human curiosity and ambition often triumph over their predilection for a sedentary lifestyle, and many leave their homes to explore the innumerable forgotten corners of the world or lead mighty armies to conquer their neighbors, simply because they can.</p><p><b>Physical Description:</b> The physical characteristics of humans are as varied as the world&#39;s climes. From the dark-skinned tribesmen of the southern continents to the pale and barbaric raiders of the northern lands, humans possess a wide variety of skin colors, body types, and facial features. Generally speaking, humans&#39; skin color assumes a darker hue the closer to the equator they live.</p><p><b>Society:</b> Human society comprises a multitude of governments, attitudes, and lifestyles. Though the oldest human cultures trace their histories thousands of years into the past, when compared to the societies of common races like elves and dwarves, human society seems to be in a state of constant flux as empires fragment and new kingdoms subsume the old. In general, humans are known for their flexibility, ingenuity, and ambition.</p><p><b>Relations:</b> Humans are fecund, and their drive and numbers often spur them into contact with other races during bouts of territorial expansion and colonization. In many cases, this leads to violence and war, yet humans are also swift to forgive and forge alliances with races who do not try to match or exceed them in violence. Proud, sometimes to the point of arrogance, humans might look upon dwarves as miserly drunkards, elves as flighty fops, halflings as craven thieves, gnomes as twisted maniacs, and half-elves and half-orcs as embarrassments—but the race&#39;s diversity among its own members also makes humans quite adept at accepting others for what they are.</p><p><b>Alignment and Religion:</b> Humanity is perhaps the most heterogeneous of all the common races, with a capacity for great evil and boundless good. Some assemble into vast barbaric hordes, while others build sprawling cities that cover miles. Taken as a whole, most humans are neutral, yet they generally tend to congregate in nations and civilizations with specific alignments. Humans also have the widest range in gods and religion, lacking other races&#39; ties to tradition and eager to turn to anyone offering them glory or protection.</p><p>');

		//set race text
		$("#race_bonus").html('<p><b>+2 to One Ability Score:</b> Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.</p><p><b>Medium:</b> Humans are Medium creatures and have no bonuses or penalties due to their size.</p><p><b>Normal Speed:</b> Humans have a base speed of 30 feet.</p><p><b>Bonus Feat:</b> Humans select one extra feat at 1st level.</p><p><b>Skilled:</b> Humans gain an additional skill rank at first level and one additional rank whenever they gain a level.</p><p><b>Languages:</b> Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).</p>');
	}

	set_race_banner();

	// set first time to false and then apply racial bonus to ability scores when race changes
	do_it_first_time = false;
	get_race_bonus();

}


// function to switch gender 
function change_gen(button) {
	// set active button to not active
	$(".active_gender").attr('class', 'raceButton');

	// get active race
	var active_race = document.getElementsByClassName("active_race")[0].innerHTML;


	// Male Button
	if (button.innerHTML == "M") {

		if (active_race == "Dwarf") {
			pic.css("background-image","url('static/races/dwarf_male.png')");
		}
		if (active_race == "Elf") {
			pic.css("background-image","url('static/races/elf_male.png')");
		}
		if (active_race == "Gnome") {
			pic.css("background-image","url('static/races/gnome_male.png')");
		}
		if (active_race == "Half-elf") {
			pic.css("background-image","url('static/races/half-elf_male.png')");
		}
		if (active_race == "Half-orc") {
			pic.css("background-image","url('static/races/half-orc_male.png')");
		}
		if (active_race == "Halfling") {
			pic.css("background-image","url('static/races/halfling_male.png')");
		}
		if (active_race == "Human") {
			pic.css("background-image","url('static/races/human_male.png')");
		}



		$("#male").attr('class', 'active_gender');
		gender = "Male";
	}

	// Female Button
	if (button.innerHTML == "F") {

		if (active_race == "Dwarf") {
			pic.css("background-image","url('static/races/dwarf_female.png')");
		}
		if (active_race == "Elf") {
			pic.css("background-image","url('static/races/elf_female.png')");
		}
		if (active_race == "Gnome") {
			pic.css("background-image","url('static/races/gnome_female.png')");
		}
		if (active_race == "Half-elf") {
			pic.css("background-image","url('static/races/half-elf_female.png')");
		}
		if (active_race == "Half-orc") {
			pic.css("background-image","url('static/races/half-orc_female.png')");
		}
		if (active_race == "Halfling") {
			pic.css("background-image","url('static/races/halfling_female.png')");
		}
		if (active_race == "Human") {
			pic.css("background-image","url('static/races/human_female.png')");
		}

		$("#female").attr('class', 'active_gender');
		gender = "Female";
	}

	set_race_banner();
}

