function onQuantumAM(){
	let x = 10
	if (player.challenges.includes("challenge1")) x = 100
	if (tmp.mod.ngmX > 3) x = 200
	if (hasAch("r37")) x = 1000
	if (hasAch("r54")) x = 2e5
	if (hasAch("r55")) x = 1e10
	if (hasAch("r78")) x = 2e25
	return new Decimal(x)
}

function NC10NDCostsOnReset() {
	if (inNC(10) || player.currentChallenge == "postc1") {
		player.thirdCost = new Decimal(100)
		player.fourthCost = new Decimal(500)
		player.fifthCost = new Decimal(2500)
		player.sixthCost = new Decimal(2e4)
		player.seventhCost = new Decimal(2e5)
		player.eightCost = new Decimal(4e6)
	}
}

function replicantsResetOnQuantum(isQC){
	tmp.qu.replicants.requirement = new Decimal("1e3000000")
	tmp.qu.replicants.quarks = (!isQC && hasAch("ng3p45")) ? tmp.qu.replicants.quarks.pow(2/3) : new Decimal(0)
	tmp.qu.replicants.eggonProgress = new Decimal(0)
	tmp.qu.replicants.eggons = new Decimal(0)
	tmp.qu.replicants.babyProgress = new Decimal(0)
	tmp.qu.replicants.babies = new Decimal(0)
	tmp.qu.replicants.growupProgress = new Decimal(0)
	for (let d = 1; d <= 8; d++) {
		if (d == 8 || tmp.eds[d].perm < 10) tmp.qu.replicants.quantumFood += Math.round(tmp.eds[d].progress.toNumber() * 3) % 3
		if (d != 1 || !hasAch("ng3p46") || isQC) {
			tmp.eds[d].workers = new Decimal(tmp.eds[d].perm)
			tmp.eds[d].progress = new Decimal(0)
		} else {
			tmp.eds[d].workers = tmp.eds[d].workers.pow(1/3)
			tmp.eds[d].progress = new Decimal(0)
		}
	}
}

function nanofieldResetOnQuantum(){
	tmp.qu.nanofield.charge = new Decimal(0)
	tmp.qu.nanofield.energy = new Decimal(0)
	tmp.qu.nanofield.antienergy = new Decimal(0)
	tmp.qu.nanofield.power = 0
	tmp.qu.nanofield.powerThreshold = new Decimal(50)
}

function doQuantumResetStuff(bigRip, isQC, qcData){
	var headstart = !tmp.ngp3
	var oheHeadstart = bigRip ? tmp.bruActive[2] : qMs.tmp.amt >= 2
	var keepABnICs = oheHeadstart || bigRip || hasAch("ng3p51")
	var turnSomeOn = !bigRip || tmp.bruActive[1]
	var bigRipChanged = tmp.ngp3 && bigRip != player.quantum.bigRip.active

	player.money = new Decimal(10)
	resetNormalDimensions()
	player.tickBoughtThisInf = resetTickBoughtThisInf()
	player.sacrificed = new Decimal(0)
	if (!keepABnICs) {
		temp = []
		for (var i = 0; i < player.challenges.length; i++) {
			if (!player.challenges[i].includes("post") && getEternitied() >= 1) temp.push(player.challenges[i])
		}
		player.challenges = temp
	}
	player.currentChallenge = ""
	player.infinitied = 0
	player.infinitiedBank = headstart || hasAch("ng3p15") ? player.infinitiedBank : 0
	player.bestInfinityTime = 9999999999
	player.thisInfinityTime = 0
	player.resets = keepABnICs ? 4 : 0
	player.tdBoosts = resetTDBoosts()
	if (inNGM(3)) player.tickspeedBoosts = keepABnICs ? 16 : 0
	player.galaxies = keepABnICs ? 1 : 0
	player.galacticSacrifice = resetGalacticSacrifice()
	player.interval = null
	player.autobuyers = keepABnICs ? player.autobuyers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	player.partInfinityPoint = 0
	player.partInfinitied = 0
	player.break = keepABnICs ? player.break : false
	player.costMultipliers = [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)]
	player.chall2Pow = 1
	player.chall3Pow = new Decimal(0.01)
	player.matter = new Decimal(0)
	player.chall11Pow = new Decimal(1)
	player.lastTenRuns = [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]]
	player.lastTenEternities = [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]]
	player.infMult = new Decimal(1)
	player.infMultCost = new Decimal(10)
	player.tickSpeedMultDecrease = keepABnICs ? player.tickSpeedMultDecrease : 10
	player.tickSpeedMultDecreaseCost = keepABnICs ? player.tickSpeedMultDecreaseCost : 3e6
	player.dimensionMultDecrease = keepABnICs ? player.dimensionMultDecrease : 10
	player.dimensionMultDecreaseCost = keepABnICs ? player.dimensionMultDecreaseCost : 1e8
	player.extraDimPowerIncrease = keepABnICs ? player.extraDimPowerIncrease : 0
	player.dimPowerIncreaseCost = keepABnICs ? player.dimPowerIncreaseCost : 1e3
	player.postC4Tier = 1
	player.postC8Mult = new Decimal(1)
	player.overXGalaxies = keepABnICs ? player.overXGalaxies : 0
	player.overXGalaxiesTickspeedBoost = keepABnICs || player.tickspeedBoosts == undefined ? player.overXGalaxiesTickspeedBoost : 0
	player.postChallUnlocked = hasAch("r133") || bigRip ? order.length : 0
	player.postC4Tier = 0
	player.postC3Reward = new Decimal(1)
	player.eternityPoints = new Decimal(0)
	player.eternities = headstart ? player.eternities : bigRip ? (tmp.bruActive[2] ? 1e5 : 0) : oheHeadstart ? Math.pow(10, qMs.tmp.amt / 2 + 1) : 0
	player.eternitiesBank = tmp.ngp3 ? nA(player.eternitiesBank, bankedEterGain) : undefined
	player.thisEternity = 0
	player.bestEternity = headstart ? player.bestEternity : 9999999999
	if (!qMs.isOn(3) || (bigRip && !tmp.bruActive[12])) player.eternityUpgrades = []
	player.epmult = new Decimal(1)
	player.epmultCost = new Decimal(500)
	resetInfDimensions(true)
	player.infDimBuyers = oheHeadstart ? player.infDimBuyers : [false, false, false, false, false, false, false, false]
	player.totalTickGained = 0
	player.offlineProd = keepABnICs ? player.offlineProd : 0
	player.offlineProdCost = keepABnICs ? player.offlineProdCost : 1e7
	player.challengeTarget = 0
	player.autoSacrifice = keepABnICs || hasAch("r133") ? player.autoSacrifice : 1
	player.replicanti = {
		amount: new Decimal(oheHeadstart ? 1 : 0),
		unl: oheHeadstart,
		chance: 0.01,
		chanceCost: new Decimal(inNGM(2) ? 1e90 : 1e150),
		interval: 1000,
		intervalCost: new Decimal(inNGM(2) ? 1e80 : 1e140),
		gal: 0,
		galaxies: 0,
		galCost: new Decimal(inNGM(2) ? 1e110 : 1e170),
		galaxybuyer: bigRipChanged ? turnSomeOn : oheHeadstart ? player.replicanti.galaxybuyer : undefined,
		auto: bigRipChanged ? [turnSomeOn, turnSomeOn, turnSomeOn] : oheHeadstart ? player.replicanti.auto : [false, false, false]
	}
	resetTimeDimensions(true)
	player.timestudy = (bigRip ? tmp.bruActive[12] : qMs.tmp.amt >= 3) ? player.timestudy : {
		theorem: 0,
		amcost: new Decimal("1e20000"),
		ipcost: new Decimal(1),
		epcost: new Decimal(1),
		studies: [],
	}
	resetEternityChallenges(bigRip, headstart)

	//Multiplier cost fixes
	player.dimensionMultDecrease = (keepABnICs ? 3 : 10) - parseFloat((ECComps("eterc6") * 0.2).toFixed(2))
	player.tickSpeedMultDecrease = (keepABnICs ? 2 : 10) - parseFloat((ECComps("eterc11") * 0.07).toFixed(2))

	player.eternityChallGoal = new Decimal(Number.MAX_VALUE)
	player.currentEternityChall = ""
	player.etercreq = 0
	player.autoIP = new Decimal(0)
	player.autoTime = 1e300
	player.infMultBuyer = bigRipChanged ? turnSomeOn : oheHeadstart ? player.infMultBuyer : false
	player.autoCrunchMode = keepABnICs ? player.autoCrunchMode : "amount"
	player.autoEterMode = keepABnICs ? player.autoEterMode : "amount"
	player.peakSpent = tmp.ngp3 ? 0 : undefined
	player.respec = false
	player.respecMastery = tmp.ngp3 ? false : undefined
	player.eternityBuyer = keepABnICs ? player.eternityBuyer : {
		limit: new Decimal(0),
		isOn: false
	}
	player.eterc8ids = 50
	player.eterc8repl = 40
	player.dimlife = true
	player.dead = true
	if (!player.dilation.bestTP) player.dilation.bestTP = player.dilation.tachyonParticles
	player.dilation = {
		studies:
			bigRip ? (tmp.bruActive[12] ? [1, 2, 3, 4, 5, 6] : tmp.bruActive[10] ? [1] : []) :
			!qMs.isOn(5) ? [] :
			qMs.tmp.amt >= 9 ? [1, 2, 3, 4, 5, 6] : qMs.tmp.amt >= 6 ? [1, 2, 3, 4, 5] : [1],
		active: false,
		tachyonParticles: 
			qMs.tmp.amt >= 5 ? Decimal.pow(3, qMs.tmp.amt >= 8 ? player.dilation.rebuyables[3] : 0) :
			new Decimal(0),
		dilatedTime: new Decimal(0),
		bestTP: Decimal.max(player.dilation.bestTP || 0, player.dilation.tachyonParticles),
		bestTPOverGhostifies: player.dilation.bestTPOverGhostifies,
		nextThreshold: new Decimal(1000),
		freeGalaxies: 0,
		upgrades: qMs.tmp.amt >= 7 && (!bigRip || tmp.bruActive[12]) ? [4,5,6,7,8,9,"ngpp1","ngpp2"] : [],
		autoUpgrades: [],
		rebuyables: {
			1: 0,
			2: 0,
			3: qMs.tmp.amt >= 8 ? player.dilation.rebuyables[3] : 0,
			4: qMs.tmp.amt >= 8 ? player.dilation.rebuyables[4] : 0,
		}
	}
	resetNGUdData(true)
	doMetaDimensionsReset(bigRip, headstart, isQC)
	player.old = tmp.ngp3 ? !QCs.inAny() : undefined
	player.dontWant = tmp.ngp3 || undefined
	if (tmp.ngp3) resetMasteryStudies(bigRip)
}

function resetDimensions() {
	resetNormalDimensions()
	if (inNGM(5)) resetInfDimensions()
	resetTDsOnNGM4()

	reduceDimCosts()
}

function doDimBoostResetStuff(layer = 1) {
	if (!hasAch("r111")) setInitialMoney()
	setInitialResetPower()
	if (layer >= 3 || !moreEMsUnlocked() || getEternitied() < 1e9) resetDimensions()

	player.totalBoughtDims = resetTotalBought()
	player.sacrificed = new Decimal(0)
	player.chall3Pow = new Decimal(0.01)
	player.matter = new Decimal(0)
	player.chall11Pow = new Decimal(1)
	player.postC4Tier = 1
	player.postC8Mult = new Decimal(1)

	if (player.currentChallenge == "postc2") {
		player.eightAmount = new Decimal(1)
		player.eightBought = 1
	}
}

function doGalaxyResetStuff(layer = 2) {
	if (layer >= 3 || !moreEMsUnlocked() || getEternitied() < 1e14) player.resets = 0
	if (tmp.ngmX >= 3) player.tickspeedBoosts = 0
	player.tdBoosts = resetTDBoosts()

	doDimBoostResetStuff(layer)
}

function doCrunchResetStuff(layer = 3) {
	player.totalBoughtDims = resetTotalBought()
	player.tickBoughtThisInf = resetTickBoughtThisInf()
	player.galaxies = 0

	if (tmp.ngmX >= 2) player.galacticSacrifice = newGalacticDataOnInfinity(layer >= 3)
	if (tmp.ngmX >= 5) resetPSac()

	player.thisInfinityTime = 0

	doGalaxyResetStuff(layer)
}

function doNormalChallengeResetStuff() {
	doCrunchResetStuff()
}

function resetInfDimensions(full) {
	player.infinityPower = new Decimal(1)
	for (var t = 1; t < 9; t++) {
		let dim = player["infinityDimension" + t]
		if (full) {
			dim.cost = new Decimal(infBaseCost[t])
			dim.power = new Decimal(1)
			dim.bought = 0
			dim.baseAmount = 0
		} else d.power = Decimal.pow(getInfBuy10Mult(t), d.baseAmount)
		if (player.pSac !== undefined) {
			dim.costAM = new Decimal(idBaseCosts[t])
			dim.boughtAM = 0	
		}
		if (player.infDimensionsUnlocked[t - 1]) dim.amount = new Decimal(dim.baseAmount)
	}
	if (full) {
		player.infDimensionsUnlocked = resetInfDimUnlocked()
		if (tmp.ngC) {
			ngC.resetIDs()
			ngC.resetRepl()
		}
	}
}

function resetTimeDimensions(full) {
	let boostPower = getDimensionBoostPower()
	let ngm4 = tmp.mod.ngmX >= 4
	player.timeShards = new Decimal(0)
	player.tickThreshold = new Decimal(ngm4 ? 0.01 : 1)
	player.totalTickGained = 0
	for (var t = 1; t <= 8; t++) {
		let dim = player["timeDimension" + t]
		if (full || ngm4) {
			dim.cost = TIME_DIM_COSTS[t].cost()
			dim.power = ngm4 ? Decimal.pow(boostPower, player.tdBoosts - t + 1) : new Decimal(1)
			dim.bought = 0
		}
		dim.amount = new Decimal(dim.bought)
	}
	getEl("totaltickgained").textContent = "You've gained " + getFullExpansion(player.totalTickGained) + " tickspeed upgrades."
}

function resetEternityChallenges(bigRip, ngpp) {
	let ecUpTo = ngpp ? 12 : 14
	let data = {}

	let kept = ngpp || (bigRip ? tmp.bruActive[2] : qMs.tmp.amt >= 1)
	if (kept) for (let ec = 1; ec <= ecUpTo; ec++) data['eterc' + ec] = player.eternityChalls['eterc' + ec]
	player.eternityChalls = data

	resetEternityChallUnlocks()
}

function doMetaDimensionsReset(bigRip, headstart, isQC) {
	player.meta.antimatter = getMetaAntimatterStart(bigRip)
	if (!headstart) player.meta.bestAntimatter = false ? Decimal.max(player.meta.antimatter, player.meta.bestOverQuantums) : player.meta.antimatter
	player.meta.resets = qMs.tmp.amt >= 19 ? 4 : 0 //(!isQC && player.ghostify.milestones >= 5 && (bigRip !== undefined || bigRip == tmp.qu.bigRip.active) ? player.meta.resets : 4)
	clearMetaDimensions()
}

function resetMasteryStudies(bigRip) {
	if (bigRip ? !tmp.bruActive[12] : qMs.tmp.amt < 10) {
		let respeccedMS = []
		for (var d = 7; d <= 13; d++) if (player.masterystudies.includes("d" + d)) respeccedMS.push("d" + d)
		player.masteryStudies = respeccedMS
	}
}

function checkOnCrunchAchievements(){
	if (player.thisInfinityTime <= 72000) giveAchievement("That's fast!");
	if (player.thisInfinityTime <= 6000) giveAchievement("That's faster!")
	if (player.thisInfinityTime <= 600) giveAchievement("Forever isn't that long")
	if (player.thisInfinityTime <= 2) giveAchievement("Blink of an eye")
	if (player.eightAmount == 0) giveAchievement("You didn't need it anyway");
	if (player.galaxies == 1) giveAchievement("Claustrophobic");
	if (player.galaxies == 0 && player.resets == 0) giveAchievement("Zero Deaths")
	if (inNC(2) && player.thisInfinityTime <= 1800) giveAchievement("Many Deaths")
	if (inNC(11) && player.thisInfinityTime <= 1800) giveAchievement("Gift from the Gods")
	if (inNC(5) && player.thisInfinityTime <= 1800) giveAchievement("Is this hell?")
	if (inNC(3) && player.thisInfinityTime <= 100) giveAchievement("You did this again just for the achievement right?");
	if (player.firstAmount == 1 && player.resets == 0 && player.galaxies == 0 && inNC(12)) giveAchievement("ERROR 909: Dimension not found")
	if (gainedInfinityPoints().gte(1e150)) giveAchievement("All your IP are belong to us")
	if (gainedInfinityPoints().gte(1e200) && player.thisInfinityTime <= 20) giveAchievement("Ludicrous Speed")
	if (gainedInfinityPoints().gte(1e250) && player.thisInfinityTime <= 200) giveAchievement("I brake for nobody")
}

function checkSecondSetOnCrunchAchievements(){
	checkForEndMe()
	giveAchievement("To infinity!");
	if (player.infinitied >= 10) giveAchievement("That's a lot of infinites");
	if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");
	if (player.bestInfinityTime <= 0.01) giveAchievement("Less than or equal to 0.001");
	if (player.challenges.length >= 2) giveAchievement("Daredevil")
	if (player.challenges.length >= getTotalNormalChallenges() + 1) giveAchievement("AntiChallenged")
	if (player.challenges.length >= getTotalNormalChallenges() + order.length + 1) giveAchievement("Anti-antichallenged")
}

function doEternityResetStuff(layer = 4) {
	player.infinityPoints = new Decimal(hasAch("r104") ? 2e25 : 0)
	player.infinitied = 0
	player.infMult = new Decimal(1)
	player.infMultCost = new Decimal(10)
	playerInfinityUpgradesOnEternity()

	player.currentChallenge = ""
	player.challengeTarget = 0
	player.challenges = challengesCompletedOnEternity()
	player.postChallUnlocked = hasAch("r133") ? order.length : 0

	if (getEternitied() < 1) {
		player.autobuyers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		player.break = false
	}
	if (!player.challenges.includes("postc2")) player.autoSacrifice = 1

	player.partInfinityPoint = 0
	player.partInfinitied = 0
	player.autoIP = new Decimal(0)
	player.autoTime = 1e300

	player.bestInfinityTime = 9999999999
	player.lastTenRuns = [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]]

	player.tickSpeedMultDecrease = getEternitied() >= 20 ? player.tickSpeedMultDecrease : 10
	player.tickSpeedMultDecreaseCost = getEternitied() >= 20 ? player.tickSpeedMultDecreaseCost : 3e6
	player.dimensionMultDecrease = getEternitied() >= 20 ? player.dimensionMultDecrease : 10
	player.dimensionMultDecreaseCost = getEternitied() >= 20 ? player.dimensionMultDecreaseCost : 1e8
	player.offlineProd = getEternitied() >= 20 ? player.offlineProd : 0
	player.offlineProdCost = getEternitied() >= 20 ? player.offlineProdCost : 1e7
	if (tmp.ngmX >= 2) {
		player.extraDimPowerIncrease = getEternitied() >= 20 ? player.extraDimPowerIncrease : 0
		player.dimPowerIncreaseCost = getEternitied() >= 20 ? player.dimPowerIncreaseCost : 1e3
	}

	if (qMs.tmp.amt < 24) player.replicanti.amount = moreEMsUnlocked() && getEternitied() >= 1e11 ? player.replicanti.amount.div("1e1000").floor().max(1) : new Decimal(getEternitied() >= 50 ? 1 : 0)
	if (player.currentEternityChall == "eterc14") player.replicanti.amount = new Decimal(1)
	player.replicanti.unl = getEternitied() >= 50
	player.replicanti.galaxies = 0
	player.replicanti.galaxybuyer = (getEternitied() > 2) ? player.replicanti.galaxybuyer : undefined
	if (tmp.ngp3) player.peakSpent = 0

	player.eternityChallGoal = new Decimal(Number.MAX_VALUE)
	player.currentEternityChall = ""
	player.eterc8ids = 50
	player.eterc8repl = 40

	player.dimlife = true
	player.dead = true
	if (tmp.ngp3) player.dontWant = true

	resetInfDimensions(true)
	resetTimeDimensions()

	doCrunchResetStuff(layer)
}

function getReplicantsOnGhostifyData(){
	return {
		amount: new Decimal(0),
		requirement: new Decimal("1e3000000"),
		quarks: new Decimal(0),
		quantumFood: 0,
		quantumFoodCost: new Decimal(2e46),
		limit: 1,
		limitDim: 1,
		limitCost: new Decimal(1e49),
		eggonProgress: new Decimal(0),
		eggons: new Decimal(0),
		hatchSpeed: 20,
		hatchSpeedCost: new Decimal(1e49),
		babyProgress: new Decimal(0),
		babies: new Decimal(0),
		ageProgress: new Decimal(0)
	}
}

function getToDOnGhostifyData(){
	var bm = player.ghostify.milestones
	let ret = {
		r: {
			quarks: new Decimal(0),
			spin: new Decimal(bm > 13 ? 1e25 : 0),
			upgrades: {}
		},
		g: {
			quarks: new Decimal(0),
			spin: new Decimal(bm > 13 ? 1e25 : 0),
			upgrades: {}
		},
		b: {
			quarks: new Decimal(0),
			spin: new Decimal(bm > 13 ? 1e25 : 0),
			upgrades: {}
		},
		upgrades: {}
	}
	if (player.quantum.tod.b.decays && hasAch("ng3p86")) ret.b.decays = Math.floor(player.quantum.tod.b.decays * .75)
	if (player.quantum.tod.r.decays && hasAch("ng3p86")) ret.r.decays = Math.floor(player.quantum.tod.r.decays * .75)
	if (player.quantum.tod.g.decays && hasAch("ng3p86")) ret.g.decays = Math.floor(player.quantum.tod.g.decays * .75)
	return ret
}

function getBigRipOnGhostifyData(nBRU){
	var bm = player.ghostify.milestones
	return {
		active: false,
		conf: tmp.qu.bigRip.conf,
		times: 0,	
		bestThisRun: new Decimal(0),
		totalAntimatter: tmp.qu.bigRip.totalAntimatter,
		bestGals: tmp.qu.bigRip.bestGals,
		savedAutobuyersNoBR: tmp.qu.bigRip.savedAutobuyersNoBR,
		savedAutobuyersBR: tmp.qu.bigRip.savedAutobuyersBR,
		spaceShards: new Decimal(hasAch("ng3p105") ? 1e25 : 0),
		upgrades: bm ? nBRU : []
	}
}

function getBreakEternityDataOnGhostify(nBEU, bm){
	return {
		unlocked: bm > 14,
		break: bm > 14 ? tmp.qu.breakEternity.break : false,
		eternalMatter: new Decimal(hasAch("ng3p105") ? 1e25 : 0),
		upgrades: bm > 14 ? nBEU : [],
		epMultPower: 0
	}
}

function getQuantumOnGhostifyData(bm, nBRU, nBEU){
	return {
		reached: true,
		times: 0,
		time: 0,
		best: 9999999999,
		last10: [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]],
		autoEC: tmp.qu.autoEC,
		disabledRewards: tmp.qu.disabledRewards,
		metaAutobuyerWait: 0,
		autobuyer: {
			enabled: false,
			limit: new Decimal(0),
			mode: "amount",
			peakTime: 0
		},
		autoOptions: {
			assignQK: tmp.qu.autoOptions.assignQK,
			assignQKRotate: tmp.qu.autoOptions.assignQKRotate,
			sacrifice: bm ? tmp.qu.autoOptions.sacrifice : false,
			replicantiReset: tmp.qu.autoOptions.replicantiReset
		},
		assortPercentage: tmp.qu.assortPercentage,
		assignAllRatios: tmp.qu.assignAllRatios,
		quarks: new Decimal(0),
		usedQuarks: {
			r: new Decimal(0),
			g: new Decimal(0),
			b: new Decimal(0)
		},
		colorPowers: {
			r: 0,
			g: 0,
			b: 0
		},
		gluons: {
			rg: new Decimal(0),
			gb: new Decimal(0),
			br: new Decimal(0)
		},
		pos: pos.setup(),
		qc: QCs.setup(),
		multPower: {
			rg: 0,
			gb: 0,
			br: 0,
			total: 0
		},
		replicants: getReplicantsOnGhostifyData(),
		emperorDimensions: {},
		nanofield: {
			charge: new Decimal(0),
			energy: new Decimal(0),
			antienergy: new Decimal(0),
			power: 0,
			powerThreshold: new Decimal(50),
			rewards: bm >= 13 ? 16 : 0,
			producingCharge: false,
			apgWoke: tmp.qu.nanofield.apgWoke
		},
		reachedInfQK: bm,
		tod: getToDOnGhostifyData(),
		bigRip: getBigRipOnGhostifyData(nBRU),
		breakEternity: getBreakEternityDataOnGhostify(nBEU, bm),
		notrelative: true,
		wasted: true,
		producedGluons: 0,
		realGluons: 0,
		bosons: {
			'w+': 0,
			'w-': 0,
			'z0': 0
		},
		neutronstar: {
			quarks: 0,
			metaAntimatter: 0,
			dilatedTime: 0
		},
		rebuyables: {
			1: 0,
			2: 0
		},
		upgrades: bm > 1 ? tmp.qu.upgrades : [],
		rg4: false
	}
}

function doGhostifyResetStuff(implode, gain, amount, force, bulk, nBRU, nBEU){
	var bm = player.ghostify.milestones
	player.galacticSacrifice = resetGalacticSacrifice()
	player.money = onQuantumAM()
	resetNormalDimensions()
	player.tickBoughtThisInf = resetTickBoughtThisInf()
	player.totalBoughtDims = resetTotalBought()
	player.sacrificed = new Decimal(0)
	player.currentChallenge =  ""
	player.setsUnlocked = 0
	player.infinitied = 0
	player.infinitiedBank = 0
	player.bestInfinityTime = 9999999999
	player.thisInfinityTime = 0
	player.resets = 0
	player.tdBoosts = resetTDBoosts()
	if (inNGM(3)) player.tickspeedBoosts = 16
	player.galaxies = 0
	player.interval = null
	player.partInfinityPoint = 0
	player.partInfinitied = 0
	player.costMultipliers = [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)]
	player.chall2Pow = 1
	player.chall3Pow = new Decimal(0.01)
	player.matter = new Decimal(0)
	player.chall11Pow = new Decimal(1)
	player.lastTenRuns = [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]]
	player.lastTenEternities = [[600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)], [600*60*24*31, new Decimal(0)]]
	player.infMult = new Decimal(1)
	player.infMultCost = new Decimal(10)
	player.tickSpeedMultDecrease = Math.max(player.tickSpeedMultDecrease, bm > 1 ? 1.25 : 2)
	player.postC4Tier = 1
	player.postC8Mult = new Decimal(1)
	player.overXGalaxiesTickspeedBoost = player.tickspeedBoosts == undefined ? player.overXGalaxiesTickspeedBoost : 0
	player.postChallUnlocked = hasAch("r133") ? order.length : 0
	player.postC4Tier = 0
	player.postC3Reward = new Decimal(1)
	player.eternityPoints = new Decimal(0)
	player.eternities = bm ? 1e13 : 1e10
	player.eternitiesBank = 0
	player.thisEternity = 0
	player.bestEternity = 9999999999
	player.eternityUpgrades = bm ? [1, 2, 3, 4, 5, 6] : []
	player.epmult = new Decimal(1)
	player.epmultCost = new Decimal(500)
	resetInfDimensions(true)
	resetTimeDimensions(true)
	player.infDimBuyers = bm ? player.infDimBuyers : [false, false, false, false, false, false, false, false]
	player.challengeTarget = 0
	player.replicanti = {
		amount: new Decimal(bm ? 1 : 0),
		unl: bm > 0,
		chance: 0.01,
		chanceCost: new Decimal(inNGM(2) ? 1e90 : 1e150),
		interval: 1000,
		intervalCost: new Decimal(inNGM(2) ? 1e80 : 1e140),
		gal: 0,
		galaxies: 0,
		galCost: new Decimal(inNGM(2) ? 1e110 : 1e170),
		galaxybuyer: player.replicanti.galaxybuyer,
		auto: bm ? player.replicanti.auto : [false, false, false]
	}
	player.timestudy = bm ? player.timestudy : {
		theorem: 0,
		amcost: new Decimal("1e20000"),
		ipcost: new Decimal(1),
		epcost: new Decimal(1),
		studies: [],
	}
	player.currentEternityChall = ""
	player.etercreq = 0
	player.autoIP = new Decimal(0)
	player.autoTime = 1e300
	player.infMultBuyer = bm ? player.infMultBuyer : false
	player.autoEterMode = bm ? player.autoEterMode : "amount"
	player.peakSpent = 0
	player.respec = false
	player.respecMastery = false
	player.eternityBuyer = bm ? player.eternityBuyer : {
		limit: new Decimal(0),
		isOn: false,
		dilationMode: false,
		dilationPerAmount: player.eternityBuyer.dilationPerAmount,
		dilMode: player.eternityBuyer.dilMode,
		tpUpgraded: player.eternityBuyer.tpUpgraded,
		slowStop: player.eternityBuyer.slowStop,
		slowStopped: player.eternityBuyer.slowStopped,
		ifAD: player.eternityBuyer.ifAD,
		presets: player.eternityBuyer.presets
	}
	player.eterc8ids = 50
	player.eterc8repl = 40
	player.dimlife = true
	player.dead = true
	player.dilation = {
		studies: bm ? player.dilation.studies : [],
		active: false,
		times: 0,
		tachyonParticles: player.ghostify.milestones >= 16 ? player.dilation.bestTPOverGhostifies : new Decimal(0),
		dilatedTime: new Decimal(bm ? 1e100 : 0),
		bestTP: player.ghostify.milestones >= 16 ? player.dilation.bestTPOverGhostifies : new Decimal(0),
		bestTPOverGhostifies: player.dilation.bestTPOverGhostifies,
		nextThreshold: new Decimal(1000),
		freeGalaxies: 0,
		upgrades: bm ? player.dilation.upgrades : [],
		autoUpgrades: bm ? player.dilation.autoUpgrades : tmp.mod.nguspV ? [] : undefined,
		rebuyables: {
			1: 0,
			2: 0,
			3: bm ? player.dilation.rebuyables[3] : 0,
			4: bm ? player.dilation.rebuyables[4] : 0,
		}
	}
	resetNGUdData()
	player.quantum = getQuantumOnGhostifyData(bm, nBRU, nBEU)
	player.old = false
	player.dontWant = true
	player.unstableThisGhostify = 0
	updateActiveBigRipUpgrades()
}

function doPreInfinityGhostifyResetStuff(implode){
	setInitialMoney()
	setInitialResetPower()
	GPminpeak = new Decimal(0)
	if (implode) showTab("dimensions")
	getEl("tickSpeed").style.visibility = "hidden"
	getEl("tickSpeedMax").style.visibility = "hidden"
	getEl("tickLabel").style.visibility = "hidden"
	getEl("tickSpeedAmount").style.visibility = "hidden"
	hideDimensions()
	tmp.tickUpdate = true
}

function doInfinityGhostifyResetStuff(implode, bm){
	if (hasAch("r85")) player.infMult = player.infMult.times(4)
	if (hasAch("r93")) player.infMult = player.infMult.times(4)
	player.infinityPoints = new Decimal(hasAch("r104") ? 2e25 : 0)
	player.challenges = challengesCompletedOnEternity()
	IPminpeak = new Decimal(0)
	if (isEmptiness) {
		showTab("dimensions")
		isEmptiness = false
		getEl("quantumtabbtn").style.display = "inline-block"
		getEl("ghostifytabbtn").style.display = "inline-block"
	}
	getEl("infinityPoints1").innerHTML = "You have <span class=\"IPAmount1\">" + shortenDimensions(player.infinityPoints) + "</span> Infinity points."
	getEl("infinityPoints2").innerHTML = "You have <span class=\"IPAmount2\">" + shortenDimensions(player.infinityPoints) + "</span> Infinity points."
	getEl("infmultbuyer").textContent = "Max buy IP mult"
	if (implode) showChallengesTab("normalchallenges")
	updateChallenges()
	updateNCVisuals()
	updateAutobuyers()
	hideMaxIDButton()
	doInitInfMultStuff()
	updateLastTenRuns()
	if ((getEl("metadimensions").style.display == "block" && !bm) || implode) showDimTab("antimatterdimensions")
	resetInfDimensions(true)
}

function doTOUSOnGhostify(bm){
	if (hasAch("ng3p77")) { // theory of ultimate studies
		player.timestudy.studies=[]
		player.masterystudies=[]
		for (var t = 0; t < all.length; t++) player.timestudy.studies.push(all[t])
		for (var c = 1; c <= 14; c++) player.eternityChalls["eterc" + c] = 5
		for (var t = 0; t < masteryStudies.timeStudies.length; t++) player.masterystudies.push("t" + masteryStudies.timeStudies[t])
		for (var d = 1; d < 7; d++) player.dilation.studies.push(d)
		for (var d = 7; d < 15; d++) player.masterystudies.push("d" + d)
		if (bm < 2) {
			player.dimensionMultDecrease = 2
			player.tickSpeedMultDecrease = 1.65
		} else {
			player.dimensionMultDecrease = 3 - parseFloat((ECComps("eterc6") * 0.2).toFixed(2))
			player.tickSpeedMultDecrease = 2 - parseFloat((ECComps("eterc11") * 0.07).toFixed(2))
		}
	}
}

function doEternityGhostifyResetStuff(implode, bm){
	EPminpeakType = 'normal'
	EPminpeak = new Decimal(0)
	doTOUSOnGhostify(bm) // theory of ultimate studies
	if (!bm) {
		resetEternityChallenges()
		resetMasteryStudies()
	}
	player.dilation.bestTP = player.dilation.tachyonParticles
	player.dilation.totalTachyonParticles = player.dilation.bestTP
	player.meta.bestOverQuantums = getMetaAntimatterStart()
	doMetaDimensionsReset()
	getEl("eternitybtn").style.display = "none"
	getEl("eternityPoints2").innerHTML = "You have <span class=\"EPAmount2\">"+shortenDimensions(player.eternityPoints)+"</span> Eternity point"+((player.eternityPoints.eq(1)) ? "." : "s.")
	getEl("epmult").innerHTML = "You gain 5 times more EP<p>Currently: 1x<p>Cost: 500 EP"
	if (implode) showEternityTab("timestudies", getEl("eternitystore").style.display == "none")
	updateLastTenEternities()
	resetTimeDimensions(true)
	updateRespecButtons()
	updateMilestones()
	updateEternityUpgrades()
	updateTheoremButtons()
	updateTimeStudyButtons()
	if (!bm) updateAutoEterMode()
	updateDilationUpgradeCosts()
	updateMasteryStudyCosts()
	updateMasteryStudyButtons()
}

function doQuantumGhostifyResetStuff(implode, bm){
	tmp.qu.quarkEnergy = new Decimal(0)
	tmp.qu.replicants.amount = new Decimal(0)
	tmp.qu.replicants.requirement = new Decimal("1e3000000")
	tmp.qu.replicants.quarks = new Decimal(0)
	tmp.qu.replicants.eggonProgress = new Decimal(0)
	tmp.qu.replicants.eggons = new Decimal(0)
	tmp.qu.replicants.babyProgress = new Decimal(0)
	tmp.qu.replicants.babies = new Decimal(0)
	tmp.qu.replicants.growupProgress = new Decimal(0)
	tmp.eds = tmp.qu.emperorDimensions
	QKminpeak = new Decimal(0)
	QKminpeakValue = new Decimal(0)
	if (implode) showQuantumTab("uquarks")
	var permUnlocks = [7,9,10,10,11,11,12,12]
	for (var i = 1; i < 9; i++) {
		var num = bm >= permUnlocks[i - 1] ? 10 : 0
		tmp.eds[i] = {workers: new Decimal(num), progress: new Decimal(0), perm: num}
		if (num > 9) tmp.qu.replicants.limitDim = i
	}
	if (bm > 6) {
		tmp.qu.replicants.limit = 10
		tmp.qu.replicants.limitCost = Decimal.pow(200, tmp.qu.replicants.limitDim * 9).times(1e49)
		tmp.qu.replicants.quantumFoodCost = Decimal.pow(5, tmp.qu.replicants.limitDim * 30).times(2e46)
	}
	if (bm > 3) {
		var colors = ['r', 'g', 'b']
		for (var c = 0; c < 3; c++) tmp.qu.tod[colors[c]].upgrades[1] = 5
	}
	if (!bm) {
		getEl('rebuyupgauto').style.display = "none"
		getEl('toggleallmetadims').style.display = "none"
		getEl('metaboostauto').style.display = "none"
		getEl("autoBuyerQuantum").style.display = "none"
		getEl('toggleautoquantummode').style.display = "none"
	}

	getEl('bestTP').textContent = "Your best Tachyon particles in this Ghostify was " + shorten(player.dilation.bestTP) + "."
	getEl("quantumbtn").style.display = "none"
	updateColorCharge()
	updateGluonsTabOnUpdate("prestige")
	updateQuantumWorth("quick")
	updateBankedEter()
	QCs.updateTmp()
	QCs.updateDisp()
	updateReplicants("prestige")
	updateNanoRewardTemp()
	updateTODStuff()
}

function doGhostifyGhostifyResetStuff(bm, force){
	GHPminpeak = new Decimal(0)
	GHPminpeakValue = new Decimal(0)
	getEl("ghostifybtn").style.display = "none"
	if (!ghostified) {
		ghostified = true
		getEl("ghostifytabbtn").style.display = "inline-block"
		getEl("ghostparticles").style.display = ""
		getEl("ghostifyAnimBtn").style.display = "inline-block"
		getEl("ghostifyConfirmBtn").style.display = "inline-block"
		giveAchievement("Kee-hee-hee!")
	} else if (player.ghostify.times > 2 && player.ghostify.times < 11) {
		$.notify("You unlocked " + (player.ghostify.times + 2) + "th Neutrino upgrade!", "success")
		updateNeutrinoUpgradeUnlock(player.ghostify.times + 2)
	}
	getEl("GHPAmount").textContent = shortenDimensions(player.ghostify.ghostParticles)
	if (bm < 7) {
		player.ghostify.neutrinos.electron = new Decimal(0)
		player.ghostify.neutrinos.mu = new Decimal(0)
		player.ghostify.neutrinos.tau = new Decimal(0)
		player.ghostify.neutrinos.generationGain = 1
	} else if (!force) player.ghostify.neutrinos.generationGain = player.ghostify.neutrinos.generationGain % 3 + 1
	player.ghostify.ghostlyPhotons.amount = new Decimal(0)
	player.ghostify.ghostlyPhotons.darkMatter = new Decimal(0)
	player.ghostify.ghostlyPhotons.ghostlyRays = new Decimal(0)
	tmp.bl.watt = 0
	player.ghostify.under = true
	updateLastTenGhostifies()
	updateBraveMilestones()
	player.ghostify.another = 10
	player.ghostify.reference = 10
}

