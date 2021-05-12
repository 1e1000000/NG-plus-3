let LIGHT_SPEED = {
	mult(id) {
		let data = tmp.mod.ls
		return (data && data[id]) || 1
	},
	options: ["game", "rep", "dil", "tt", "nf", "tod", "gph", "bl"],
	reqs: {
		game() {
			return true
		},
		rep() {
			return player.replicanti.unl || ph.did("eternity")
		},
		dil() {
			return hasDilationStudy(1)
		},
		tt() {
			return hasDilationUpg(10)
		},
		nf() {
			return tmp.ngp3 && player.masterystudies.includes("d11")
		},
		tod() {
			return tmp.ngp3 && player.masterystudies.includes("d12")
		},
		gph() {
			return tmp.ngp3 && player.ghostify.ghostlyPhotons.unl
		},
		bl() {
			return tmp.ngp3 && player.ghostify.wzb.unl
		},
	},
	reset() {
		let shown = tmp.mod.ls !== undefined
		getEl("lstabbtn").style.display = shown ? "" : "none"
		if (!shown) return

		for (var i = 0; i < ls.options.length; i++) ls.updateOption(ls.options[i])
	},
	updateOption(id) {
		let unl = ls.reqs[id]()
		getEl("ls_" + id).parentElement.style.display = unl ? "" : "none"
		if (!unl) return

		let speed = ls.mult(id)
		getEl("ls_" + id).value = Math.round(Math.log10(speed) * 10 + 30)
		getEl("ls_" + id + "_text").textContent = shorten(speed)
	},
	changeOption(id) {
		let speed = Math.pow(10, getEl("ls_" + id).value / 10 - 3)
		getEl("ls_" + id + "_text").textContent = shorten(speed)
		if (speed == 1) delete tmp.mod.ls[id]
		else tmp.mod.ls[id] = speed
	},
	resetOptions() {
		if (!confirm("Are you sure do you want to reset these options? All speeds will go back to normal!")) return

		tmp.mod.ls = {}
		this.reset()
	}
}
let ls = LIGHT_SPEED