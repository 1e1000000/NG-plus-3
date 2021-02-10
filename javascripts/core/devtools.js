var dev = {};

dev.giveAllAchievements = function(slient) {
	var gave = []
	Object.keys(allAchievements).forEach(function(key) {
		var got = hasAch(key)
		giveAchievement(allAchievements[key], true)
		if (hasAch(key) && !got) gave.push(key)
	})
	if (!slient) {
		if (gave.length < 11) for (var a = 0; a < gave.length; a++) $.notify(allAchievements[gave[a]], "success")
		if (gave.length > 1) $.notify("Gave "+gave.length+" achievements.", "success")
		updateAchievements()
	}
}

dev.giveAllNGAchievements = function() {
	var gave = []
	Object.keys(allAchievements).forEach(function(key) {
		if (key[0] == "r" || key[0] == "s") {
			var got = hasAch(key)
			giveAchievement(allAchievements[key], true)
			if (hasAch(key) && !got) gave.push(key)
		}
	})
	if (gave.length < 11) for (var a = 0; a < gave.length; a++) $.notify(allAchievements[gave[a]], "success")
	if (gave.length > 1) $.notify("Gave " + gave.length + " achievements.", "success")
	updateAchievements()
}

dev.forceMaxDB = function(){
	let x = .5
	let y = 0
	if (getShiftRequirement(0).tier < 8) {
		player.resets += Decimal.gte(getAmount(getShiftRequirement(0).tier), getShiftRequirement(0).amount) ? 1 : 0
		return
	}
	let a = getAmount(8)
	while (getFixedShiftReq(player.resets + 2 * x - 1) <= a) x *= 2
	while (x >= 1) {
		if (a >= getFixedShiftReq(player.resets + x + y - 1)) y += x
		x /= 2
	}
	player.resets += y
}

dev.forceMaxTDB = function(){
	let x = .5
	let y = 0
	//change to TSB
	let a = getAmount(8)
	while (getTickspeedBoostRequirement(2*x - 1).amount <= a) x *= 2
	while (x >= 1) {
		if (a >= getTickspeedBoostRequirement(x + y).amount) y += x
		x /= 2
	}
	player.tickspeedBoosts += y
}

dev.doubleEverything = function() {
	Object.keys(player).forEach( function(key) {
		if (typeof player[key] === "number") player[key] *= 2;
		if (typeof player[key] === "object" && player[key].constructor !== Object) player[key] = player[key].times(2);
		if (typeof player[key] === "object" && !isFinite(player[key])) {
			Object.keys(player[key]).forEach( function(key2) {
				if (typeof player[key][key2] === "number") player[key][key2] *= 2
				if (typeof player[key][key2] === "object" && player[key][key2].constructor !== Object) player[key][key2] = player[key][key2].times(2)
			})
		}
	})
}

dev.spin3d = function() {
	if (getEl("body").style.animation === "") getEl("body").style.animation = "spin3d 2s infinite"
	else getEl("body").style.animation = ""
}

dev.cancerize = function() {
	player.options.theme = "S4";
	player.options.secretThemeKey = "Cancer";
	setTheme(player.options.theme);
	player.options.notation = "Emojis"
	getEl("theme").textContent = "SO"
	getEl("notation").textContent = "BEAUTIFUL"
}

dev.fixSave = function() {
	var save = JSON.stringify(player, function(k, v) { return (v === Infinity) ? "Infinity" : v; })
  
	var fixed = save.replace(/NaN/gi, "10")
	var stillToDo = JSON.parse(fixed)
	for (var i = 0; i < stillToDo.autobuyers.length; i++) stillToDo.autobuyers[i].isOn = false
	console.log(stillToDo)
    
	var save_data = stillToDo
	if (!save_data || !verify_save(save_data)) {
		alert('could not load the save..');
		load_custom_game();
		return;
	}

	saved = 0;
	totalMult = 1
	currentMult = 1
	infinitiedMult = 1
	achievementMult = 1
	challengeMult = 1
	unspentBonus = 1
	infDimPow = 1
	postc8Mult = new Decimal(0)
	mult18 = new Decimal(1)
	ec10bonus = new Decimal(1)
	player = save_data;
	save_game();
	load_game();
	updateChallenges()
	transformSaveToDecimal()
}

dev.implode = function() {
	getEl("body").style.animation = "implode 2s 1";
	setTimeout(function(){ getEl("body").style.animation = ""; }, 2000)
}

dev.ghostify = function(gain, amount, seconds=4) {
	getEl("ghostifyani").style.display = ""
	getEl("ghostifyani").style.width = "100%"
	getEl("ghostifyani").style.height = "100%"
	getEl("ghostifyani").style.left = "0%"
	getEl("ghostifyani").style.top = "0%"
	getEl("ghostifyani").style.transform = "rotateZ(0deg)"
	getEl("ghostifyani").style["transition-duration"] = (seconds / 4) + "s"
	getEl("ghostifyanitext").style["transition-duration"] = (seconds / 8) + "s"
	setTimeout(function() {
		getEl("ghostifyanigained").innerHTML = ghostified ? "You now have <b>" + shortenDimensions(amount) + "</b> Ghost Particles. (+" + shortenDimensions(gain) + ")" : "Congratulations for beating a PC with QCs 6 & 8 combination!"
		getEl("ghostifyanitext").style.left = "0%"
		getEl("ghostifyanitext").style.opacity = 1
	}, seconds * 250)
	setTimeout(function() {
		getEl("ghostifyanitext").style.left = "100%"
		getEl("ghostifyanitext").style.opacity = 0
	}, seconds * 625)
	setTimeout(function() {
		getEl("ghostifyani").style.width = "0%"
		getEl("ghostifyani").style.height = "0%"
		getEl("ghostifyani").style.left = "50%"
		getEl("ghostifyani").style.top = "50%"
		getEl("ghostifyani").style.transform = "rotateZ(45deg)"
	}, seconds * 750)
	setTimeout(dev.resetGhostify, seconds * 1000)
}

dev.resetGhostify = function() {
	getEl("ghostifyani").style.width = "0%"
	getEl("ghostifyani").style.height = "0%"
	getEl("ghostifyani").style.left = "50%"
	getEl("ghostifyani").style.top = "50%"
	getEl("ghostifyani").style.transform = "rotateZ(-45deg)"
	getEl("ghostifyani").style["transition-duration"] = "0s"
	getEl("ghostifyanitext").style.left = "-100%"
	getEl("ghostifyanitext").style["transition-duration"] = "0s"
}

dev.updateCosts = function() {
	for (var i = 1; i < 9; i++) {
		var dim = player["timeDimension"+i]
		if (dim.cost.gte(Number.MAX_VALUE)) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*1.5, dim.bought).times(timeDimStartCosts[i])
		}
		if (dim.cost.gte("1e1300")) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*2.2, dim.bought).times(timeDimStartCosts[i])
		}
		if (i > 4) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*100, dim.bought).times(timeDimStartCosts[i])
		}
	}
}

dev.testTDCosts = function() {
	for (var i=1; i<9; i++) {
		var timeDimStartCosts = [null, 1, 5, 100, 1000, "1e2350", "1e2650", "1e2900", "1e3300"]
		var dim = player["timeDimension"+i]
		if (dim.cost.gte(Number.MAX_VALUE)) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*1.5, dim.bought).times(timeDimStartCosts[i])
		}
		if (dim.cost.gte("1e1300")) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*2.2, dim.bought).times(timeDimStartCosts[i])
		}
		if (i > 4) {
			dim.cost = Decimal.pow(timeDimCostMults[i]*100, dim.bought).times(timeDimStartCosts[i])
		}
	}
}

dev.giveQuantumStuff = function(n){
	player.quantum.usedQuarks.r = player.quantum.usedQuarks.r.plus(Decimal.pow(10, n+1))
	player.quantum.usedQuarks.b = player.quantum.usedQuarks.b.plus(Decimal.pow(10, n+1))
	player.quantum.usedQuarks.g = player.quantum.usedQuarks.g.plus(Decimal.pow(10, n+1))
	player.quantum.gluons.rg = player.quantum.gluons.rg.plus(Decimal.pow(10, n))
	player.quantum.gluons.gb = player.quantum.gluons.gb.plus(Decimal.pow(10, n))
	player.quantum.gluons.br = player.quantum.gluons.br.plus(Decimal.pow(10, n))
}

dev.addReward = function(){
	player.quantum.nanofield.rewards += 1
}

dev.setReward = function(n){
	player.quantum.nanofield.rewards = n
}

dev.addSpin = function(n){
	player.quantum.tod.r.spin = player.quantum.tod.r.spin.plus(Decimal.pow(10,n))
	player.quantum.tod.b.spin = player.quantum.tod.b.spin.plus(Decimal.pow(10,n))
	player.quantum.tod.g.spin = player.quantum.tod.g.spin.plus(Decimal.pow(10,n))
}

dev.addGHP = function(n){
	player.ghostify.ghostParticles = player.ghostify.ghostParticles.plus(Decimal.pow(10,n))
}

dev.setNeut = function(n){
	player.ghostify.neutrinos.electron = Decimal.pow(10,n)
	player.ghostify.neutrinos.mu = Decimal.pow(10,n)
	player.ghostify.neutrinos.tau = Decimal.pow(10,n)
}

dev.addNeut = function(n){
	player.ghostify.neutrinos.electron = player.ghostify.neutrinos.electron.plus(Decimal.pow(10,n))
	player.ghostify.neutrinos.mu = player.ghostify.neutrinos.mu.plus(Decimal.pow(10,n))
	player.ghostify.neutrinos.tau = player.ghostify.neutrinos.tau.plus(Decimal.pow(10,n))
}

dev.giveNeutrinos = function(n){
	dev.addNeut(n)
}

dev.addNeutrinos = function(n){
	dev.addNeut(n)
}

dev.giveAllEmpowerments = function(){
	let old = player.ghostify.ghostlyPhotons.enpowerments
	maxLightEmpowerments()
	let diff = player.ghostify.ghostlyPhotons.enpowerments - old > 0
	$.notify("Gave " + getFullExpansion(diff) + " Light Empowerments.", diff ? "success" : "error")
}