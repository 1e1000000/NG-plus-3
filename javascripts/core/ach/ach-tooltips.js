function setR1Tooltip() {
	// Row 1 (1/8)
	//r11/////
	let alot = getEl("100 antimatter is a lot")
	//r13/////
	//r14/////
	//r15/////
	//r16/////
	//r17/////
	//r18/////

	//ACHIEVEMENT ROW 1 
	alot.setAttribute('ach-tooltip', "Buy a single Second Dimension." + (tmp.mod.ngmX >= 4 ? " Reward: You gain 100x more Time Shards." : ""))
}

function setNGm5Tooltip() {
	// Row 1.5 (NG-5 only) (1/8)
	//ngm5p11/
	//ngm5p12/
	//ngm5p13/
	//ngm5p14/
	//ngm5p15/
	//ngm5p16/
	//ngm5p17/
	let TimePx = getEl("Time Paradox")
	//ACHIEVEMENT ROW 1.5
	TimePx.setAttribute('ach-tooltip', "Get at least " + formatValue(player.options.notation, 1e20, 0, 0) + " Paradox Power.")
}

function setR2Tooltip() {
	// Row 2 (6/8)
	let infinity = getEl("To infinity!")
	//r22/////
	let ndial = getEl("The 9th Dimension is a lie");
	let apocAchieve = getEl("Antimatter Apocalypse");
	//r25/////
	let gal = getEl("You got past The Big Wall")
	let doubleGal = getEl("Double Galaxy");
	let noPointAchieve = getEl("There's no point in doing that");

	//ACHIEVEMENT ROW 2
	ndial.setAttribute('ach-tooltip', "Have exactly 99 Eighth Dimensions. Reward: Eighth Dimensions are 10% stronger" + (player.tickspeedBoosts == undefined ? "." : " and you gain more GP based on your Eighth Dimensions and your Tickspeed Boosts."));
	apocAchieve.setAttribute('ach-tooltip', "Get over " + formatValue(player.options.notation, 1e80, 0, 0) + " antimatter.");
	gal.setAttribute('ach-tooltip', 'Buy an Antimatter Galaxy. ' + (inNGM(4) ? "Reward: Upon a Time Dimension Boost, your Dimension Boosts don’t reset unless you have more Time Dimension Boosts than your Dimension Boosts." : ""));
	doubleGal.setAttribute('ach-tooltip', 'Buy 2 Antimatter Galaxies. ' + (player.tickspeedBoosts !== undefined ? "Reward: Upon a Tickspeed Boost, your Dimension Boosts" + (inNGM(4) ? " and Time Dimension Boosts" : "") + " don’t reset unless you have more Tickspeed Boosts than " + (inNGM(5) ? "four times your Antimatter Galaxies." : "five times your Antimatter Galaxies minus eight.") : '') + (inNGM(4) ? " You start with 3 Time Dimension Boosts." : ""));
	noPointAchieve.setAttribute('ach-tooltip', "Buy a single First Dimension when you have over " + formatValue(player.options.notation, 1e150, 0, 0) + " of them. Reward: First Dimensions are 10% stronger" + (player.tickspeedBoosts == undefined ? "." : " and you can max buy Dimension and Tickspeed Boosts."));
	infinity.setAttribute('ach-tooltip', "Big Crunch for the first time. Reward: Start with 100 antimatter" + (inNGM(2) ? " and always have at least 10x lower Dimension costs." : "."));
}

function setR3Tooltip() {
	// Row 3 (5/8)
	let nerf = getEl("I forgot to nerf that")
	//r32/////
	let lot = getEl("That's a lot of infinites");
	let didnt = getEl("You didn't need it anyway")
	//r35/////
	let claustrophobic = getEl("Claustrophobic");
	let fast = getEl("That's fast!");
	//r38/////

	//ACHIEVEMENT ROW 3
	claustrophobic.setAttribute('ach-tooltip', "Big Crunch with just 1 Antimatter Galaxy. Reward: Reduce the starting tick interval by 2%" + (inNGM(2) && player.tickspeedBoosts == undefined ? " and keep Galaxy upgrades on Infinity" : "") + (tmp.mod.ngmX >= 4 ? ", Time Dimension Boosts do not reset anything, and you can buy Time Dimensions beyond " + shortenMoney(Number.MAX_VALUE) + " antimatter" : "") + "." );
	nerf.setAttribute('ach-tooltip',"Get the first dimension multiplier over " + shortenCosts(1e31) + ". Reward: First Dimensions are 5% stronger.")
	didnt.setAttribute('ach-tooltip',"Big Crunch without having any 8th Dimensions. Reward: Dimensions 1-7 are 2" + (inNGM(2) ? "x" : "%") + " stronger.")
	fast.setAttribute('ach-tooltip', "Big Crunch in under 2 hours. Reward: Start with " + shortenCosts(1e3) + " antimatter" + (inNGM(2) ? " and get a multiplier to galaxy points based on fastest infinity (5 hours / x, 10x softcap)." : "."));
	lot.setAttribute('ach-tooltip', "Get at least 10 Infinities." + (inNGM(2) ? " Reward: " + (player.tickspeedBoosts == undefined ? "Start Infinities with Galaxy points based on your infinities (x^2/100)." : " Keep Galaxy upgrades on Infinity.") : ""));
}

function setR4Tooltip() {
	// Row 4 (6/8)
	let cancer = getEl("Spreading Cancer");
	let sanic = getEl("Supersanic")
	let zero = getEl("Zero Deaths");
	//r44/////
	let potato = getEl("Faster than a potato")
	let dimensional = getEl("Multidimensional")
	//r47/////
	let anti = getEl("AntiChallenged")

	//ACHIEVEMENT ROW 4
	sanic.setAttribute('ach-tooltip', "Get over " + formatValue(player.options.notation, 1e63, 0, 0) + " antimatter" + (tmp.mod.ngmX >= 4 ? " and unlock new galaxy upgrades at " + formatValue(player.options.notation, 1e666, 0, 0) + " antimatter" : "") + ".")
	cancer.setAttribute('ach-tooltip', "Buy " + (tmp.mod.newGameMinusVersion ? "10,000" : "10") + " Galaxies in total while using Cancer notation." + (inNGM(2) && player.tickspeedBoosts == undefined ? " Reward: Gain a multiplier to IP based on the number of galaxies bought in Cancer Notation.":""))
	zero.setAttribute('ach-tooltip',"Big Crunch without Dimension Shifts, Boosts or Galaxies in a challenge. Reward: Dimensions 1-4 are 25% stronger" + (inNGM(2) && player.tickspeedBoosts == undefined ? " and you get 1.25x more IP" : "") + (tmp.mod.ngmX >= 4 ? " and gain more passive GP gain based on GP." : "."))
	potato.setAttribute('ach-tooltip', "Get more than " + formatValue(player.options.notation, 1e29, 0, 0) + " ticks per second. Reward: Reduce the starting tick interval by 2%.");
	dimensional.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 1e12, 0, 0) + " of all Normal Dimensions, except for the 8th Dimension.");
	anti.setAttribute('ach-tooltip', "Complete all the challenges. Reward: All Normal Dimensions are 10% stronger"+(inNGM(2) && player.tickspeedBoosts == undefined ? ", and the tickspeed cost is also reduced based on your Dimension cost reduction." : "."))
}

function setR5Tooltip() {
	// Row 5 (4/8)
	let limitBreak = getEl("Limit Break")
	//r52/////
	//r53/////
	//r54/////
	let forever = getEl("Forever isn't that long")
	let many = getEl("Many Deaths")
	//r57/////
	let is = getEl("Is this hell?")

	//ACHIEVEMENT ROW 5
	forever.setAttribute('ach-tooltip', "Big Crunch in 1 minute or less. Reward: Start with "+shortenCosts(1e10)+" antimatter" + (inNGM(2) && player.tickspeedBoosts == undefined ? ", and gain a multiplier to IP based on your best Infinity time." : "."))
	many.setAttribute('ach-tooltip', "Complete the Second Dimension Autobuyer challenge in 3 minutes or less. Reward: All Normal Dimensions are stronger in the first 3 minutes of an Infinity" + (player.tickspeedBoosts == undefined ? "." : ", and you gain 1% of GP gained on Galactic Sacrifice per second."));
	is.setAttribute('ach-tooltip', "Complete the Tickspeed Autobuyer challenge in 3 minutes or less. Reward: The multiplier per-10 dimensions" + (player.tickspeedBoosts != undefined ? " is boosted based on your best time of the Tickspeed Autobuyer challenge." : inNGM(2) ? " is raised to the power of ^1.0666." : " is 1% more powerful."))
	limitBreak.setAttribute('ach-tooltip', "Break Infinity." + (inNGM(2) && player.tickspeedBoosts == undefined ? " Reward: Gain a multiplier to IP based on galaxies." : ""))
}

function setR6Tooltip() {
	// Row 6 (6/8)
	//r61/////
	let oh = getEl("Oh hey, you're still here")
	let begin = getEl("A new beginning.")
	let mil = getEl("1 million is a lot")
	//r65/////
	let potato2 = getEl("Faster than a squared potato")
	let infchall = getEl("Infinitely Challenging")
	let right = getEl("You did this again just for the achievement right?")

	let e58 = formatValue(player.options.notation, 1e58, 0, 0)

	//ACHIEVEMENT ROW 6
	potato2.setAttribute('ach-tooltip', "Get more than " + e58 + " ticks per second. Reward: Reduces starting tick interval by 2%" + (tmp.mod.ngmX >= 4 ? " and Galaxy Points past " + e58 + " boost tickspeed multiplier per purchase" : "") + ".");
	oh.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e8) + " IP per minute." + (inNGM(2) && player.tickspeedBoosts == undefined ? " Reward: Gain a multiplier to GP based on the logarithm of your IP." : ""))
	mil.setAttribute('ach-tooltip',"Reach " + shortenCosts(1e6) + " infinity power." + (inNGM(2) ? " Reward: First Dimensions are " + shortenCosts(1e6) + " times stronger" : "") + (tmp.mod.ngmX >= 4 ? " and each IC boosts g32 by 2%." : "."))
	right.setAttribute('ach-tooltip',"Complete the Third Dimension Autobuyer challenge in 10 seconds or less. Reward: First Dimensions are 5" + (inNGM(2) ? "x" : "0%") + " stronger.")
	infchall.setAttribute('ach-tooltip', "Complete an Infinity Challenge." + (inNGM(2) ? " Reward: Galaxies and " + (player.tickspeedBoosts === undefined ? "g11 is" : "Tickspeed Boosts are") + " more effective based on IC's completed." : ""))
	begin.setAttribute('ach-tooltip', "Begin generation of infinity power." + (tmp.mod.ngmX >= 4 ? " Reward: Each galaxy upgrade boosts g32 by 1%." : ""))
}

function setR7Tooltip() {
	// Row 7 (5/8)
	let not = getEl("ERROR 909: Dimension not found")
	let cant = getEl("Can't hold all these infinities")
	let dne1 = getEl("This achievement doesn't exist")
	let endme = getEl("End me")
	let newDim = getEl("NEW DIMENSIONS???")
	//r76/////
	let tables = getEl("How the antitables have turned")
	let blink = getEl("Blink of an eye")

	//ACHIEVEMENT ROW 7
	not.setAttribute('ach-tooltip',"Big Crunch with only a single First Dimension without Dimension Boosts, Shifts or Galaxies while in the Automatic Galaxies Challenge. Reward: First Dimensions are " + (inNGM(2) ? 909 : 3) + " times stronger" + (tmp.mod.ngmX >= 4 ? ", and buff the more expensive Break Infinity upgrade based on Infinities to be more effective" : "") + ".")
	cant.setAttribute('ach-tooltip', "Get all Dimension multipliers over " + shortenCosts(1e308) + ". Reward: All Normal Dimensions  are 10" + (inNGM(2) ? "x" : "%") + " stronger" + (tmp.mod.ngmX >= 4 ? ", achievement multiplier multiplies GP gain and make the break infinity upgrades based on antimatter 4x more powerful." : "."))
	dne1.setAttribute('ach-tooltip', "Get 9.9999e9999 antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have" + (tmp.mod.ngmX >= 4 ? ", you now bulk buy Time Dimension Boosts, and time dimension boosts boost infinity dimensions (more to higher dimensions)." : "."))
	endme.setAttribute('ach-tooltip', "Get the sum of all your Normal Challenge times under " + (tmp.mod.ngmX >= 4 ? 5 : 2) + " seconds. Reward: All Normal Dimensions are 40% stronger in challenges.")
	newDim.setAttribute('ach-tooltip', "Unlock the 4th Infinity Dimension." + (player.boughtDims ? "" : " Reward: Your achievement bonus affects Infinity Dimensions.") + (tmp.mod.ngmX >= 4 ? " Reward: The first four upgrades in the third column of galaxy upgrades have double effecitveness." : ""))
	tables.setAttribute('ach-tooltip', "Get 8th Dimension multiplier to be highest, 7th Dimension multiplier second highest, etc. Reward: Each dimension gains a boost proportional to their tier (8th dimension gets 8" + (inNGM(2) ? "0" : "") + "%, 7th gets 7" + (inNGM(2) ? "0" : "") + "%, etc.)")
	blink.setAttribute('ach-tooltip', "Big Crunch in under 200 milliseconds. Reward: Start with " + formatValue(player.options.notation, 2e25, 0, 0) + " antimatter, and all Normal Dimensions are stronger in the first 300 milliseconds of this Infinity.");
}

function setR8Tooltip() {
	// Row 8 (5/8)
	let hevipelledidnothing = getEl("Hevipelle did nothing wrong")
	//r82/////
	//r83/////
	let spare = getEl("I got a few to spare")
	let IPBelongs = getEl("All your IP are belong to us")
	//r86/////
	let twomillion = getEl("2 Million Infinities")
	let reference = getEl("Yet another infinity reference")

	//ACHIEVEMENT ROW 8
	IPBelongs.setAttribute('ach-tooltip', "Big Crunch for " + shortenCosts(1e150) + " IP. " + (!tmp.mod.newGameMinusVersion ? "Reward: Gain an additional 4x multiplier to IP." : ""))
	reference.setAttribute('ach-tooltip', "Get a x" + shortenDimensions(Number.MAX_VALUE) + " multiplier in a single sacrifice. Reward: Sacrifices are stronger.")
	spare.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, new Decimal("1e35000"), 0, 0) + " antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have.");
	twomillion.setAttribute('ach-tooltip', "Get 2,000,000 Infinities. Reward: Infinities longer than 5 seconds give 250 Infinities" + (inNGM(2) ? ", and you gain an additive +249 Infinities per crunch post multipliers" : "") + ".")
	hevipelledidnothing.setAttribute('ach-tooltip', "Beat Infinity Challenge " + (inNGM(2) ? (player.tickspeedBoosts == undefined ? 7 : 13) : 5) + " in 10 seconds or less" + (player.galacticSacrifice == undefined ? "" : " Reward: g13's effect is more powerful when outside of Eternity Challenges") + ".")
}

function setR9Tooltip() {
	// Row 9 (7/8)
	let speed = getEl("Ludicrous Speed")
	let speed2 = getEl("I brake for nobody")
	let overdrive = getEl("MAXIMUM OVERDRIVE")
	let minute = getEl("Minute of infinity")
	let isthissafe = getEl("Is this safe?")
	//r96/////
	let hell = getEl("Yes. This is hell.")
	let zerodeg = getEl("0 degrees from infinity")

	//ACHIEVEMENT ROW 9
	speed.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e200)+" IP in 2 seconds or less. Reward: All Normal Dimensions are significantly stronger in the first 5 seconds of an Infinity.")
	speed2.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e250)+" IP in 20 seconds or less. Reward: All Normal Dimensions are significantly stronger in the first 60 seconds of an Infinity.")
	overdrive.setAttribute('ach-tooltip', "Big Crunch with " + shortenCosts(1e300) + " IP/min. Reward: Gain an additonal 4x multiplier to IP.")
	minute.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e260) + " infinity power. Reward: Double infinity power gain.")
	hell.setAttribute('ach-tooltip', "Get the sum of your Infinity Challenge times under 6.66 seconds." + (player.boughtDims ? " Reward: Sacrifice is again slightly stronger." : ""))
	zerodeg.setAttribute('ach-tooltip', "Unlock the 8th Infinity Dimension."+(player.boughtDims?" Reward: Normal Dimensions are multiplied by the amount of 8th Infinity Dimensions you have.":"") + (player.tickspeedBoosts == undefined ? "" : " Reward: Each replicanti galaxy counts twice in the reward of 'Is this safe?'."))
	isthissafe.setAttribute('ach-tooltip', "Gain Infinite replicanti in 30 minutes. Reward: Infinity doesn't reset your replicanti amount" + (player.tickspeedBoosts == undefined ? "" : ", each replicanti galaxy multiplies GP gain by your Eighth Dimensions, and multiply IP by the squared amount of Eighth Dimensions if you have more than 5,000") + ".")
}

function setR10Tooltip() {
	// Row 10 (6/8)
	let costco = getEl("Costco sells dimboosts now")
	let mile = getEl("This mile took an Eternity")
	//r103/////
	//r104/////
	let inftime = getEl("Infinite time")
	let swarm = getEl("The swarm")
	let guide = getEl("Do you really need a guide for this?")
	let nine = getEl("We could afford 9")

	//ACHIEVEMENT ROW 10
	costco.setAttribute('ach-tooltip', "Bulk buy 750 Dimension Boosts at once. Reward: Dimension Boosts are " + (player.boughtDims?"cheaper based on EP":"1% more powerful (to Normal Dimensions)") + (player.tickspeedBoosts == undefined ? "" : " and g13 is boosted by the cube root of Galaxies") + ".")
	mile.setAttribute('ach-tooltip', "Get " + (tmp.ngp3 ? "the 100 Eternities milestone." : "all Eternity milestones."))
	swarm.setAttribute('ach-tooltip', "Get 10 Replicated Galaxies within the first 15 seconds of this Infinity." + (player.boughtDims ? " Reward: Unlock replicanti galaxy power control, and uncap replicanti chance and interval." : ""))
	inftime.setAttribute('ach-tooltip', player.boughtDims ? "Eternity without buying dimensions 1-7. Reward: Time Dimensions gain a multiplier based on the eighth root of eighth dimensions." : "Get 308 tickspeed upgrades (in one eternity) from Time Dimensions. Reward: Time Dimensions are affected slightly more by tickspeed.")
	guide.setAttribute('ach-tooltip', player.boughtDims ? "Reach " + shortenCosts(new Decimal("1e1000000")) + " replicanti. Reward: Replicanti increases faster the more you have." : "Eternity with less than 10 infinities.")
	nine.setAttribute('ach-tooltip', "Eternity with exactly 9 replicanti." + (player.boughtDims ? " Reward: The replicanti multiplier to ID is 9% stronger (after time studies)." : ""))
}

function setR11Tooltip() {
	// Row 11 (3/8)
	let dawg = getEl("Yo dawg, I heard you liked infinities...")
	//r112/////
	//r113/////
	//r114/////
	//r115/////
	//r116/////
	let nobodygottime = getEl("8 nobody got time for that")
	let over9000 = getEl("IT'S OVER 9000")

	//ACHIEVEMENT ROW 11
	over9000.setAttribute('ach-tooltip', "Get a total Sacrifice multiplier of "+shortenCosts(new Decimal("1e9000"))+". Reward: Sacrifice doesn't reset your dimensions.")
	dawg.setAttribute('ach-tooltip', "Have all your past 10 Infinities be at least "+shortenMoney(Number.MAX_VALUE)+" times higher IP than the previous one. Reward: Your antimatter doesn't reset when buying a Dimension Boost or Galaxy.")
	nobodygottime.setAttribute('ach-tooltip', "Eternity while only buying 8th Normal Dimensions. " + (player.galacticSacrifice == undefined ? "" : "Reward: Boost g13 based on your Dimension Boosts and the square root of g13's effect."))
}

function setR12Tooltip() {
	// Row 12 (7/8)
	let infiniteIP = getEl("Can you get infinite IP?")
	//r122/////
	let fiveMore = getEl("5 more eternities until the update")
	let newI = getEl("Eternities are the new infinity")
	let eatass = getEl("Like feasting on a behind")
	let minaj = getEl("Popular music")
	let layer = getEl("But I wanted another prestige layer...")
	let fkoff = getEl("What do I have to do to get rid of you")

	//ACHIEVEMENT ROW 12
	infiniteIP.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e30008"))+" IP." + (player.galacticSacrifice == undefined || player.tickspeedBoosts != undefined ? "" : " Reward: Your total galaxies boost Galaxy points gain."))
	fiveMore.setAttribute('ach-tooltip', "Complete 50 unique Eternity Challenge tiers." + (inNGM(2) ? " Reward: Divide Infinity Dimension costs based on the multiplier of g11." : ""))
	newI.setAttribute('ach-tooltip', "Eternity in under 200 milliseconds." + (inNGM(2) ? " Reward: The Eighth Normal Dimension to Galaxy points gain is buffed, and boost g13 based on your fastest Eternity time in Eternity Challenges." : "")) 
	eatass.setAttribute('ach-tooltip', "Reach "+shortenCosts(1e100)+" IP without any Infinities or First Normal Dimensions. Reward: Gain an IP multiplier based on time spent in this Infinity.")
	layer.setAttribute('ach-tooltip', "Reach "+shortenMoney(Number.MAX_VALUE)+" EP." + (inNGM(2) ? " Reward: The Galaxy boost to Galaxy points gain is buffed." : "")) 
	fkoff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e22000"))+" IP without any time studies. Reward: Gain a multiplier to Time Dimensions based on the amount of bought Time Studies.")
	minaj.setAttribute('ach-tooltip', "Have 180 times more non-bonus Replicated Galaxies than normal galaxies. Reward: Getting a Replicanti Galaxy divides your replicanti by " + shortenMoney(Number.MAX_VALUE) + " instead of resetting them to 1.")
}

function setR13Tooltip() {
	// Row 13 (5/8)
	//r131/////
	//r132/////
	let infstuff = getEl("I never liked this infinity stuff anyway")
	let when = getEl("When will it be enough?")
	let potato3 = getEl("Faster than a potato^286078")
	//r136/////
	let thinking = getEl("Now you're thinking with dilation!")
	let thisis = getEl("This is what I have to do to get rid of you.")

	let thisisReward = [] // for the achievement "This is what I have to do to get rid of you."
	if (inNGM(2)) thisisReward.push("g23 is more effective based on your best IP in dilation")
	if (tmp.ngp3) thisisReward.push("you produce dilated time " + (tmp.newNGP3E ? 3 : 2) + "x faster")
	thisisReward = wordizeList(thisisReward, true)

	//ACHIEVEMENT ROW 13
	potato3.setAttribute('ach-tooltip', "Get more than "+shortenCosts(new Decimal("1e8296262"))+" ticks per second." + (inNGM(2) ? " Reward: The Galaxy boost to Galaxy points gain is buffed based on a specific value (~663 galaxies)." : ""))
	infstuff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e140000"))+" IP without buying IDs or IP multipliers. Reward: You start eternities with all Infinity Challenges unlocked and completed" + (player.meta ? ", and your Infinity gain is multiplied by dilated time^(1/4)." : "."))
	when.setAttribute('ach-tooltip', "Reach "+shortenCosts( new Decimal(tmp.ngex?"1e15000":"1e20000"))+" replicanti. Reward: You gain replicanti 2 times faster under " + shortenMoney(Number.MAX_VALUE) + " replicanti" + (tmp.ngp3 || tmp.mod.newGamePlusVersion ? " and you can always buy max RGs." : "."))
	thinking.setAttribute('ach-tooltip', "Eternity for " + shortenCosts( new Decimal("1e600")) + " EP in 1 minute or less while Dilated" + (tmp.ngp3 || tmp.mod.newGamePlusVersion ? " Reward: Multiply Dilated Time gain based on replicanti and TS141 is always " + shortenCosts(1e40) + "x." : "."))
	thisis.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal('1e20000')) + " IP without any time studies while Dilated." + (thisisReward != "" ? " Reward: " + thisisReward + "." : ""))
}

function setR13p5Tooltip() {
	// Row 13.5 (NGUD) (3/6)
	//ngud11/////
	let stillamil = getEl("1 million is still a lot")
	//ngud13/////
	let out = getEl("Finally I'm out of that channel")
	//ngud16/////
	let ridNGud = getEl("I already got rid of you.")

	//NGUD ACHIEVEMENT ROW (13.5)
	stillamil.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e6) + " black hole power.")
	out.setAttribute('ach-tooltip',"Get more than " + shortenCosts(1e5) + " ex-dilation." + (tmp.mod.nguspV == undefined ? "" : " Reward: You can equally distribute ex-dilation to all repeatable dilation upgrades."))
	ridNGud.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e20000")) + " IP without any time studies or dilation upgrades while dilated.")
}

// When NG+3R comes out, these tooltips must start to be changed
function setR14Tooltip() {
	// Row 14 (4/8)
	//ngpp11/////
	//ngpp12/////
	let onlywar = getEl("In the grim darkness of the far endgame")
	let metamax = getEl("Meta-boosting to the max")
	let thecap = getEl("The cap is a million, not a trillion")
	let neverenough = getEl("It will never be enough")
	//ngpp17/////
	let harmony = getEl("Universal harmony")

	let onlywarReward = [] // for the achievement "In the grim darkness of the far endgame"
	if (tmp.ngp3) onlywarReward.push("you produce 2x more Dilated Time")
	if (tmp.mod.nguspV != undefined) onlywarReward.push("you can auto-buy Dilation upgrades every second if you have at least " + shortenMoney(new Decimal('1e40000')) + " EP")
	onlywarReward = wordizeList(onlywarReward, true)

	//ACHIEVEMENT ROW 14 (NG++)
	onlywar.setAttribute('ach-tooltip', "Reach " + shortenMoney(new Decimal('1e40000')) + " EP." + (onlywarReward != "" ? " Reward: " + onlywarReward + "." : ""))
	thecap.setAttribute('ach-tooltip', "Get " + shortenDimensions(1e12)+" Eternities. Reward: Eternity Upgrade 2 " + (tmp.ngp3 ? "and TS231 use" : "uses") + " a better formula.")
	metamax.setAttribute('ach-tooltip', "Get 10 Meta-Dimension Boosts. Reward: Meta-dimension boosts are " + (tmp.ngp3 ? 5 : 1) + "% stronger.")
	neverenough.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal(tmp.ngp3 ? "1e75000" : "1e100000")) + " replicanti. Reward: " + (tmp.ngp3 || tmp.mod.newGamePlusVersion ? "TS131 doesn't disable RG autobuyer anymore and replicated galaxies no longer reset the replicanti amount." : "You can always buy max RGs."))
	harmony.setAttribute('ach-tooltip', player.meta ? "Have at least 700 normal, replicanti, and free dilated galaxies. Reward: Galaxies are 0.1% stronger." : "Get the same amount (at least 300) of normal, replicanti, and Tachyonic Galaxies.")
}

function setR15Tooltip() {
	// Row 15 (ng3p1) (5/8)
	let notenough = getEl("I don't have enough fuel!")
	//ng3p12/////
	//ng3p13/////
	//ng3p14/////
	//ng3p15/////
	let old = getEl("Old age")
	let rid = getEl("I already got rid of you...")
	let winner = getEl("And the winner is...")

	//ACHIEVEMENT ROW 15
	notenough.setAttribute('ach-tooltip', "Reach " + shorten(Number.MAX_VALUE) + " meta-antimatter. Reward: You produce more dilated time based on your normal galaxies, and gain more Tachyon particles based on your Replicated Galaxies.")
	old.setAttribute('ach-tooltip', "Reach " + shortenCosts(getOldAgeRequirement()) + " antimatter. Reward: Get a multiplier to the 1st Meta Dimension based on total antimatter.") 
	rid.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e400000")) + " IP while dilated, without having time studies and electrons. Reward: Generate Time Theorems based on your best-ever Tachyon particles and you produce Time Theorems 2x faster.")
	winner.setAttribute('ach-tooltip', "Quantum in under 30 seconds. Reward: Your EP multiplies Quark gain.")
}

function setR16Tooltip() {
	// Row 16 (ng3p2) (5/8)
	let special = getEl("Special Relativity")
	let squared = getEl("We are not going squared.")
	//ng3p23/////
	let memories = getEl("Old memories come true")
	//ng3p25/////
	let morals = getEl("Infinity Morals")
	//ng3p27/////
	let seriously = getEl("Seriously, I already got rid of you.")

	//ACHIEVEMENT ROW 16
	special.setAttribute('ach-tooltip', "Quantum in under 5 seconds. Reward: Start with all Infinity Dimensions unlocked if you have at least 25 eternities.")
	memories.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e1700")) + " MA without ever buying 5th-8th Normal Dimensions or having more than 4 Dimension Boosts in this quantum. Reward: The 4 RG upgrade is stronger based on your Meta-Dimension Boosts.")
	squared.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e1500"))+" MA with exactly 8 Meta-Dimension Boosts. Reward: Get a multiplier to the 8th Meta Dimension based on your 1st Meta Dimension.")
	morals.setAttribute('ach-tooltip', "Quantum without any Meta-Dimension Boosts. Reward: Meta-Dimension Boosts boost itself at a reduced rate.")
	seriously.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e354000")) + " IP without having time studies, while dilated and running QC2. Reward: The Eternity Points boost to Quark gain is 1% stronger.")
}

function setQSRTooltip() {
	// Quantum Speedruns (3/28)
	let tfms = getEl("speedrunMilestone18")
	let tms = getEl("speedrunMilestone19")
	let tfms2 = getEl("speedrunMilestone22")

	//QUANTUM SPEEDRUNS
	tfms.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e13) + " Eternities.")
	tms.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e25) + " meta-antimatter on reset.")
	tfms2.setAttribute('ach-tooltip', "Reward: Start with " + shortenCosts(1e100) + " Dilated Time, and dilated time only resets on Quantum.")
}

function setR17Tooltip() {
	// Row 17 (ng3p3) (6/8)
	let internal = getEl("ERROR 500: INTERNAL DIMENSION ERROR")
	let truth = getEl("The truth of anti-challenged")
	let noparadox = getEl("Never make paradoxes!")
	//ng3p34/////
	//ng3p35/////
	let cantGet = getEl("I can’t get my multipliers higher!")
	let noDil = getEl("No dilation means no production.")
	let dontWant = getEl("I don't want you to live anymore.")

	//ACHIEVEMENT ROW 17
	internal.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e333")) + " MA without having 2nd Meta Dimensions and Meta-Dimension Boosts. Reward: 1st Meta Dimensions are stronger based on meta antimatter.")
	truth.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 7.88e13)) + " antimatter without having completed any paired challenges.")
	cantGet.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 6.2e11)) + " antimatter in Eternity Challenge 11.")
	noDil.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 2e6)) + " replicanti without having Tachyon Particles. Reward: You start Quantums with the square root of your best TP as your Tachyon particle amount.")
	dontWant.setAttribute('ach-tooltip', "Reach " + shorten(Decimal.pow(Number.MAX_VALUE, 1000)) + " IP while dilated, in QC2, and without having studies and First Dimensions during your current Eternity.")
	noparadox.setAttribute('ach-tooltip', "Quantum without any Dilation upgrades. Reward: The sum of your best Quantum Challenge times boosts Quark gain.")
}

function setR18Tooltip() {
	// Row 18 (ng3p4) (7/8)
	let notrelative = getEl("Time is not relative")
	let error404 = getEl("ERROR 404: DIMENSIONS NOT FOUND")
	let ie = getEl("Impossible expectations")
	let wasted = getEl("Studies are wasted")
	let protonsDecay = getEl("Do protons decay?")
	//ng3p46/////
	let stop = getEl("Stop blocking me!")
	let dying = getEl("Are you currently dying?")

	//ACHIEVEMENT ROW 18
	notrelative.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 411))+" dilated time without gaining tachyon particles. Reward: You gain more DT based on the amount of Nanorewards.")
	error404.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 1.6e12))+" antimatter while having only the 1st Dimensions of each type of Dimension and at least 2 normal galaxies.")
	ie.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 8e6)) + " antimatter in a paired challenge with the PC6+8 combination. Reward: Automatically buy the Quark multiplier to dimensions every second if you have the 8th brave milestone.")
	wasted.setAttribute('ach-tooltip', "Get " + shorten(1.1e7) + " TT without having TT generation, keeping your previous TT, and respeccing studies. Reward: While you have less than 1 hour worth of TT production, you gain 10x as much TT.")
	protonsDecay.setAttribute('ach-tooltip', "Unlock Tree of Decay. Reward: You keep the two thirds power of your preons upon quantum when outside of a Quantum Challenge.")
	stop.setAttribute('ach-tooltip', "Get the replicanti reset requirement to " + shorten(Decimal.pow(10, 1.25e7)) + ". Reward: Getting a normal replicant manually doesn't reset your replicanti and can be automated.")
	dying.setAttribute('ach-tooltip', "Reach " + shorten(Decimal.pow(10, 2.75e5)) + " IP while dilated, in PC6+8, and without having time studies. Reward: Branches are faster based on your Meta-Dimension Boosts.")
}

function setR19Tooltip() {
	// Row 19 (ng3p5) (5/8)
	//ng3p51/////
	//ng3p52/////
	let gofast = getEl("Gonna go fast")
	//ng3p54/////
	let timeBreak = getEl("Time Breaker")
	let immunity = getEl("Time Immunity")
	let notSmart = getEl("You're not really smart.")
	let soLife = getEl("And so your life?")

	//ACHIEVEMENT ROW 19
	gofast.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 1185)) + " EP first, and then square your EP by disabling dilation while Big Ripped. Reward: Space shards multiply quark gain.")
	immunity.setAttribute('ach-tooltip', "Get " + shorten(Decimal.pow(10, 8e7)) + " antimatter with one normal galaxy while in Eternity Challenge 7 and big ripped. Reward: Infinite Time is 3% stronger.")
	notSmart.setAttribute('ach-tooltip', "Get " + shorten(1e215) + " Time Shards without having Time Study 11 while Big Ripped. Reward: Meta Dimensions get a multiplier based on time shards.")
	timeBreak.setAttribute('ach-tooltip', "Break Eternity. Reward: Galaxies don't reset Dimension Boosts and Quantum Challenges now cost 0 electrons.")
	soLife.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 3.5e5)) + " IP in Big Rip while dilated, with no EP multiplier upgrades and time studies. Reward: Square the Ghost Particle gain, with a hardcap at " + shortenCosts(1e10) + "x, and the hardcap is further lowered if you have more than " + shortenCosts(1e60) + " Ghost Particles.")
}

function setR20Tooltip() {
	// Row 20 (ng3p6) (6/8)
	//ng3p61/////
	let finite = getEl("Finite Time")
	//ng3p63/////
	let really = getEl("Really?")
	let grind = getEl("But I don't want to grind!")
	//ng3p65/////
	let willenough = getEl("Will it be enough?")
	let pls = getEl("Please answer me why you are dying.")

	let willenoughReward = [] // for the achievement "Will it be enough?"
	willenoughReward.push("Replicated Galaxies doesn't divide replicantis")
	willenoughReward.push("you keep all your Replicated Galaxies on Infinity")
	willenoughReward.push("keep all your replicanti upgrades on Eternity only when you start a normal Eternity run")
	if (tmp.mod.ngudpV && !tmp.mod.ngumuV) willenoughReward.push("keep Black Hole Dimensions on Quantum")
	willenoughReward = wordizeList(willenoughReward, true)

	//ACHIEVEMENT ROW 20
	finite.setAttribute('ach-tooltip', "Get " + shortenCosts(1e33) + " Space Shards without Breaking Eternity within this Ghostify. Reward: Outside of Big Rips, Tree Upgrades are 10% stronger. In Big Rips, 8th Time Dimensions gain an small exponent boost based on your current Ghostify time.")
	really.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 5000)) + " matter in Big Rip. Reward: Buying Electron upgrades doesn't consume Meta-Dimension Boosts.")
	grind.setAttribute('ach-tooltip', "Get the 21st Nanofield reward without having Tree Upgrades. Reward: Gain more Quarks based on Radioactive Decays.")
	willenough.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, tmp.mod.ngudpV ? 268435456 : 36000000)) + " replicanti." + (willenoughReward != "" ? " Reward: " + willenoughReward + "." : ""))
	pls.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 9.4e5)) + " IP in Big Rip while dilated, with no EP multiplier upgrades, time studies, and Break Eternity within this Ghostify. Reward: Each time you become a ghost, you gain " + shortenDimensions(2e3) + " galaxies worth of generated neutrinos, multiplied by your best-ever galaxy amount across all Big Rips.")
}

function setBMTooltip() {
	// Brave Milestones (3/16)
	let bm1 = getEl("braveMilestone1")
	let bm10 = getEl("braveMilestone10")
	let bm14 = getEl("braveMilestone14")

	//BRAVE MILESTONES
	bm1.setAttribute('ach-tooltip', "Reward: Start Ghostifies with all Speedrun Milestones and all "+shorten(Number.MAX_VALUE)+" QK assignation features unlocked, all Paired Challenges completed, all Big Rip upgrades bought, Nanofield is 2x faster until you reach 16 rewards, and you get quarks based on your best MA this quantum.")
	bm10.setAttribute('ach-tooltip', "Reward: Start Ghostifies with 10 Fourth Emperor Dimensions" + (tmp.mod.ngudpV ? ", and start Big Rips with the 3rd row of Eternity upgrades." : "."))
	bm14.setAttribute('ach-tooltip', "Reward: Start Ghostifies with " + shortenCosts(1e25) + " Quark Spins and Branches are faster based on spins (at least 10x).")
}

function setR21Tooltip() {
	// Row 21 (ng3p7) (5/8)
	//ng3p71/////
	let uc = getEl("Underchallenged")
	let mi = getEl("Meta-Infinity confirmed?")
	let wd = getEl("Weak Decay")
	let radioDecay = getEl("Radioactive Decaying to the max!")
	//ng3p76/////
	//ng3p77/////
	let arent = getEl("Aren't you already dead?")

	//ACHIEVEMENT ROW 21
	uc.setAttribute('ach-tooltip', "Become a ghost with at least "+shortenCosts(Decimal.pow(10, 2.2e5))+" EP without starting Eternity Challenge 10 while Big Ripped. Reward: Meta-Dimension Boosts no longer reset Meta Dimensions.")
	mi.setAttribute('ach-tooltip', "Get " + shorten(Number.MAX_VALUE) + " infinities. Reward: You gain banked infinites and eternities when going Quantum or Big Ripping the universe.")
	wd.setAttribute('ach-tooltip', "Get " + shortenCosts(Decimal.pow(10, 1e12)) + " Infinity Unstable Quarks for each Branch without Big Ripping in this Ghostify. Reward: Normal replicant autobuyer buys max.")
	radioDecay.setAttribute('ach-tooltip', "Get 10 total Radioactive Decays. Reward: You get 1 galaxy worth of generated neutrinos per second.")
	arent.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 1.8e6)) + " IP while dilated and Big Ripped and without having studies, EP mult upgrades, Tree Upgrades, and Break Eternity within this Ghostify. Reward: Your 8th Tree Upgrade's level speeds up Nanofield.")
}

function setR22Tooltip() {
	// Row 22 (ng3p8) (7/8)
	//ng3p81/////
	let oc = getEl("Overchallenged")
	//ng3p83/////
	let isnotenough = getEl("Big Rip isn't enough") 
	let ee = getEl("Everlasting Eternities")
	let btco = getEl("Back to Challenge One")
	let tdc = getEl("The Deep Challenge")
	let igu = getEl("I give up.")

	//ACHIEVEMENT ROW 22
	ee.setAttribute('ach-tooltip', "Get " + shorten(Number.MAX_VALUE) + " eternities. Reward: Boost quark gain by 10 per Light Empowerment squared.")
	oc.setAttribute('ach-tooltip', "Become a ghost with at least " + shortenCosts(Decimal.pow(10, 3.75e5)) + " EP while Big Ripped with the Anti-Dilation modifier. Reward: Remove the Further Nanofield scaling.")
	btco.setAttribute('ach-tooltip', "Complete Paired Challenge 1 after getting " + shortenCosts(Decimal.pow(10, 1.65e9)) + " antimatter in Quantum Challenges 6 and 8. Reward: Ghostifies only makes you lose 25% of your radiocative decays.")
	tdc.setAttribute('ach-tooltip', "Complete Eternity Challenge 11 with " + shortenCosts(Decimal.pow(10, 15500)) + " IP in a Paired Challenge with the Quantum Challenges 6 and 8 combination and the Anti-Dilation modifier. Reward: Remove the quadratic cost scaling and the level softcap of fifth Tree of Decay upgrade and make it based on best meta-antimatter over Ghostifies, instead of over quantums.")
	igu.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 2.25e4)) + " IP while dilated and Big Ripped with Anti-Dilation modifier and without having studies, EP mult upgrades, Tree Upgrades, and Break Eternity within this Ghostify. Reward: Always gain 1% of your Infintiy Points on Crunch per second, even if you do not have Time Study 181.")
	isnotenough.setAttribute('ach-tooltip', "Complete a Paired Challenge with Quantum Challenges 6 and 8 combinations. Reward: Remove the hardcap reduction of 'And so your life?'.")
}

function setR23Tooltip() {
	// Row 23 (ng3p9) (3/8)
	//ng3p91/////
	//ng3p92/////
	let aretheseanother = getEl("Are these another...")
	//ng3p94/////
	//ng3p95/////
	//ng3p96/////
	let ghostliest = getEl("The Ghostliest Side")
	let metae18 = getEl("Meta-Quintillion")

	//ACHIEVEMENT ROW 23
	aretheseanother.setAttribute('ach-tooltip', "Reach " + shortenCosts(Decimal.pow(10, 4e4)) + " Quarks. Reward: Gain 500x more Quarks and Ghost Particles and always gain 1% of your Eternity Points upon Eternity per second.")
	ghostliest.setAttribute('ach-tooltip', "Get " + shorten(Math.pow(Number.MAX_VALUE, 1/4)) + " Ghostifies. Reward: Ghostifies boost the gain of Ghost Particles at a reduced rate.")
	metae18.setAttribute('ach-tooltip', "Get " + shortenCosts(Decimal.pow(10, 1e18)) + " antimatter. Reward: Distant Antimatter Galaxies scaling is 10% weaker and start with W Bosons and Z Bosons based on Higgs Bosons.")
}

function setR24Tooltip() {
	// Row 24 (ng3p10) (0/8)
	//ng3p101/////
	//ng3p102/////
	let einstein = getEl("Einstein's Ghost")
	//ng3p104/////
	let x = getEl("X-Ranked")
	let how = getEl("Do you even how to?")
	//ng3p107/////
	//ng3p108/////

	//ACHIEVEMENT ROW 24
	einstein.setAttribute('ach-tooltip', "Get " + shortenMoney(Decimal.pow(10, 5e3)) + " Ghost Particles. Reward: You passively generate Ghost Particles while in Big Rip, Light Empowerments reset nothing, and Auto-Extractor and Auto-Enchanter Ghosts are 10x faster.")
	x.setAttribute('ach-tooltip', 'Get 242.4 PC ranking. Reward: Start with ' + shortenCosts(1e25) + ' Space Shards and Eternal Matter.')
	how.setAttribute('ach-tooltip', 'Reach ' + shortenCosts(Decimal.pow(10, Math.sqrt(2) * 1e12)) + ' antimatter in Big Rips.')
}

function setR25Tooltip() {
	// Row 25 (ng3p11) (0/8)
	//ng3p111/////
	//ng3p112/////
	//ng3p113/////
	//ng3p114/////
	//ng3p115/////
	//ng3p116/////
	//ng3p117/////
	//ng3p118/////

	//ACHIEVEMENT ROW 25
}

function setPreNGP3AchievementTooltip() {
	setR1Tooltip()
	setR2Tooltip()
	setR3Tooltip()
	setR4Tooltip()
	setR5Tooltip()
	setR6Tooltip()
	setR7Tooltip()
	setR8Tooltip()
	setR9Tooltip()
	setR10Tooltip()
	setR11Tooltip()
	setR12Tooltip()
	setR13Tooltip()
	setR13p5Tooltip()
	setR14Tooltip()
}

function setNGP3AchievementTooltip() {
	// ng+3 achievements
	setBMTooltip()
	setQSRTooltip()
	setR15Tooltip()
	setR16Tooltip()
	setR17Tooltip()
	setR18Tooltip()
	setR19Tooltip()
	setR20Tooltip()
	setR21Tooltip()
	setR22Tooltip()
	setR23Tooltip()
	setR24Tooltip()
	setR25Tooltip()
}

function setAchieveTooltip() { 
	setPreNGP3AchievementTooltip()
	if (tmp.ngp3) setNGP3AchievementTooltip()
	if (inNGM(5)) setNGm5AchievementTootip()
}

function setNGm5AchievementTootip() {
	setNGm5Tooltip()
}
