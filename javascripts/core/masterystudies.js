masterystudies={initialCosts:{time:{241: 1e71, 251: 2e71, 252: 2e71, 253: 2e71, 261: 5e71, 262: 5e71, 263: 5e71, 264: 5e71, 265: 5e71, 266: 5e71, 271: 2.7434842249657063e76, 272: 2.7434842249657063e76, 273: 2.7434842249657063e76, 281: 6.858710562414266e76, 282: 6.858710562414266e76, 291: 2.143347050754458e77, 292: 2.143347050754458e77, 301: 8.573388203017832e77, 302: 2.6791838134430725e78, 303: 8.573388203017832e77, 311: 8.573388203017832e77, 312: 8.573388203017832e77, 321: 2.6791838134430727e76, 322: 9.324815538194444e77, 323: 2.6791838134430727e76, 331: 1.0172526041666666e79, 332: 1.0172526041666666e79, 341: 9.5367431640625e78, 342: 1.0172526041666666e79, 343: 1.0172526041666666e79, 344: 9.5367431640625e78, 351: 2.1192762586805557e79, 361: 1.5894571940104167e79, 362: 1.5894571940104167e79, 371: 2.1192762586805557e79, 372: 6.622738308376736e79, 373: 2.1192762586805557e79, 381: 6.622738308376736e79, 382: 6.622738308376736e79, 383: 6.622738308376736e79, 391: 8.27842288547092e79, 392: 8.27842288547092e79, 393: 8.27842288547092e79, 401: 4.967053731282552e80, 402: 8.278422885470921e80, 411: 1.3245476616753473e71, 412: 1.655684577094184e71, 421: 1.9868214925130208e72, 431: 1.1037897180627893e75},
		ec:{13:1e72, 14:1e72}},
	costs:{time:{},
		ec:{},
		dil:{7: 2e82, 8: 2e84, 9: 4e85, 10: 4e87, 11: 3e90, 12: 3e92, 13: 1e95, 14: 1e98},
		mc:{}},
	costmults:{241: 1, 251: 2.5, 252: 2.5, 253: 2.5, 261: 6, 262: 6, 263: 6, 264: 6, 265: 6, 266: 6, 271: 2, 272: 2, 273: 2, 281: 4, 282: 4, 291: 1, 292: 1, 301: 2, 302: 131072, 303: 2, 311: 64, 312: 64, 321: 2, 322: 2, 323: 2, 331: 2, 332: 2, 341: 1, 342: 1, 343: 1, 344: 1, 351: 4, 361: 1, 362: 1, 371: 2, 372: 2, 373: 2, 381: 1, 382: 1, 383: 2, 391: 1, 392: 1, 393: 1, 401: 1e10, 402: 1e10, 411: 1, 412: 1, 421: 1, 431: 1},
	costmult:1,
	allTimeStudies: [241, 251, 252, 253, 261, 262, 263, 264, 265, 266, /*271, 272, 273, 281, 282, 291, 292, 301, 302, 303, 311, 312, 321, 322, 323, 331, 332, 341, 342, 343, 344, 351, 361, 362, 371, 372, 373, 381, 382, 383, 391, 392, 393, 401, 402, 411, 412, 421, 431*/],
	initialReqs:{13:728e3,14:255e5},
	incrementReqs:{13:6e3,14:9e5},
	reqs:{},
	latestBoughtRow:0,
	spentTT: 0}
var msc = document.getElementById("studyTreeCanvas2");
var msctx = msc.getContext("2d");
function portal() {
	if (player.dilation.upgrades.includes("ngpp6")) {
		showEternityTab("masterystudies")
	}
}
function portalBack() {
	showEternityTab("timestudies")
}
function updateMasteryStudyButtons() {
	if (!player.masterystudies) return
	for (id=0;id<(quantumed?masterystudies.allTimeStudies.length:10);id++) {
		var name=masterystudies.allTimeStudies[id]
		var div=document.getElementById("timestudy"+name)
		if (player.masterystudies.includes("t"+name)) div.className="timestudybought"
		else if (canBuyMasteryStudy('t', name)) div.className="timestudy"
		else div.className="timestudylocked"
	}
	for (id=13;id<15;id++) {
		var element=document.getElementById("ec"+id+"unl")
		if (player.eternityChallUnlocked==id) element.className="eternitychallengestudybought"
		else if (canBuyMasteryStudy('ec', id)) element.className="eternitychallengestudy"
		else element.className="timestudylocked"
	}
	for (id=251;id<254;id++) document.getElementById("ts"+id+"Current").textContent="Currently: +"+(getMTSMult(id))
	for (id=262;id<265;id++) document.getElementById("ts"+id+"Current").textContent="Currently: "+shorten(getMTSMult(id))+"x"
	if (quantumed) {
		document.getElementById("ts273Current").textContent="Currently: ^"+shorten(getMTSMult(273, "ms"))
		for (id=281;id<283;id++) document.getElementById("ts"+id+"Current").textContent="Currently: "+shorten(getMTSMult(id))+"x"
		document.getElementById("ts301Current").textContent="Currently: +"+(getMTSMult(301))
		document.getElementById("ts303Current").textContent="Currently: "+shorten(getMTSMult(303))+"x"
		document.getElementById("ts322Current").textContent="Currently: "+shorten(getMTSMult(322))+"x"
		for (id=7;id<(ghostified||player.masterystudies.includes("d13")?15:player.masterystudies.includes("d12")?14:player.masterystudies.includes("d11")?13:player.masterystudies.includes("d10")?12:11);id++) {
			var div=document.getElementById("dilstudy"+id)
			if (player.masterystudies.includes("d"+id)) div.className="dilationupgbought"
			else if (canBuyMasteryStudy('d', id)) div.className="dilationupg"
			else div.className="timestudylocked"
		}
	}
	if (player.masterystudies.includes("d10")||ghostified) {
		document.getElementById("ts332Current").textContent="Currently: "+shorten(Math.max(player.galaxies,1))+"x"
		document.getElementById("ts341Current").textContent="Currently: "+shorten(getMTSMult(341))+"x"
		document.getElementById("ts344Current").textContent="Currently: "+(getMTSMult(344)*100-100).toFixed(2)+"%"
		document.getElementById("ts351Current").textContent="Currently: "+shorten(getMTSMult(351))+"x"
	}
	if (player.masterystudies.includes("d11")||ghostified) {
		document.getElementById("ts361Current").textContent="Currently: "+shorten(getMTSMult(361))+"x"
		for (r=37;r<40;r++) for (c=1;c<4;c++) document.getElementById("ts"+(r*10+c)+"Current").textContent="Currently: "+shorten(getMTSMult(r*10+c))+"x"
	}
	if (player.masterystudies.includes("d12")||ghostified) {
		document.getElementById("ts401Current").textContent="Currently: "+shorten(getMTSMult(401))+"x"
		document.getElementById("ts411Current").textContent="Currently: "+shorten(getMTSMult(411))+"x"
		document.getElementById("ts421Current").textContent="Currently: "+shorten(getMTSMult(421))+"x"
	}
	if (player.masterystudies.includes("d13")||ghostified) {
		document.getElementById("ts431Current").textContent=shiftDown&&tmp.eg431?"Galaxy amount: "+(Math.floor(player.dilation.freeGalaxies))+" + "+(Math.floor(tmp.eg431)):"Currently: "+shorten(getMTSMult(431))+"x"
	}
}

function updateMasteryStudyCosts() {
	masterystudies.latestBoughtRow=0
	masterystudies.costmult=1
	masterystudies.spentTT=0
	let total=0
	for (id=0;id<player.masterystudies.length;id++) {
		var t=player.masterystudies[id].split("t")[1]
		if (t) {
			masterystudies.costs.time[t]=masterystudies.initialCosts.time[t]*masterystudies.costmult
			masterystudies.spentTT+=masterystudies.costs.time[t]
			if (masterystudies.allTimeStudies.includes(parseInt(t))) masterystudies.costmult*=masterystudies.costmults[t]
			masterystudies.latestBoughtRow=Math.max(masterystudies.latestBoughtRow,Math.floor(t/10))
			total++
			if (total>=48) giveAchievement("The Theory of Ultimate Studies")
		}
	}
	for (id=0;id<masterystudies.allTimeStudies.length;id++) {
		var name=masterystudies.allTimeStudies[id]
		if (!player.masterystudies.includes("t"+name)) masterystudies.costs.time[name]=masterystudies.initialCosts.time[name]*masterystudies.costmult
	}
	for (id=13;id<15;id++) {
		masterystudies.costs.ec[id]=masterystudies.initialCosts.ec[id]*masterystudies.costmult
		masterystudies.reqs[id]=masterystudies.initialReqs[id]+masterystudies.incrementReqs[id]*ECTimesCompleted("eterc"+id)
		masterystudies.costs.ec[name]=masterystudies.initialCosts.ec[name]*masterystudies.costmult
	}
	if (player.eternityChallUnlocked>12) masterystudies.spentTT+=masterystudies.costs.ec[player.eternityChallUnlocked]
	updateMasteryStudyTextDisplay()
}

var types = {t:"time",ec:"ec",d:"dil"}
function buyMasteryStudy(type, id, quick=false) {
	if (quick) masterystudies.costs[types[type]][id]=masterystudies.initialCosts[types[type]][id]*masterystudies.costmult
	if (canBuyMasteryStudy(type, id)) {
		player.timestudy.theorem-=masterystudies.costs[types[type]][id]
		if (type=='ec') {
			player.eternityChallUnlocked=id
			player.etercreq=id
			updateEternityChallenges()
		} else player.masterystudies.push(type+id)
		if (quick) {
			if (type=="t") {
				masterystudies.costmult*=masterystudies.costmults[id]
				masterystudies.latestBoughtRow=Math.max(masterystudies.latestBoughtRow,Math.floor(id/10))
			}
		} else {
			if (type=='ec') {
				showTab("challenges")
				showChallengesTab("eternitychallenges")
			} else drawMasteryTree()
			updateMasteryStudyCosts()
			updateMasteryStudyButtons()
		}
		if (id==241) {
			var otherMults=1
			if (player.achievements.includes("r85")) otherMults*=4
			if (player.achievements.includes("r93")) otherMults*=4
			var old=2
			ipMultPower=2.2
			player.infMult=player.infMult.div(otherMults).pow(Math.log10(2.2)/Math.log10(2)).times(otherMults)
		}
	}
}

function canBuyMasteryStudy(type, id) {
	if (type=='t') {
		if (player.timestudy.theorem<masterystudies.costs.time[id]||player.masterystudies.includes('t'+id)||player.eternityChallUnlocked>12||!masterystudies.allTimeStudies.includes(id)) return false
		var row=Math.floor(id/10)
		if (masterystudies.latestBoughtRow>row) return false
		var col=id%10
		if (row>42) return player.masterystudies.includes('d13')&&(player.masterystudies.includes('t412')||player.masterystudies.includes('t421'))
		if (row>40) return player.masterystudies.includes('t'+(id-10))
		if (row>39) return player.masterystudies.includes('d12')&&player.masterystudies.includes('t392')
		if (row>38) {
			if (col>2) return player.masterystudies.includes('t382')
			if (col>1) return player.masterystudies.includes('t391')||player.masterystudies.includes('t393')
			return player.masterystudies.includes('t381')
		}
		if (row>37) {
			if (col>2) return player.masterystudies.includes('t373')
			if (col>1) return player.masterystudies.includes('t383')
			return player.masterystudies.includes('t372')
		}
		if (row>36) {
			if (col>2) return player.masterystudies.includes('t362')
			if (col>1) return player.masterystudies.includes('t371')
			return player.masterystudies.includes('t361')
		}
		if (row>35) return player.masterystudies.includes('d11')&&player.masterystudies.includes('t351')
		if (row>34) return player.masterystudies.includes('t344')
		if (row>33) {
			if (col>3) return player.masterystudies.includes('t343')
			if (col>1) return player.masterystudies.includes('t33'+(col-1))
			return player.masterystudies.includes('t342')
		}
		if (row>32) return player.masterystudies.includes('t322')
		if (row>31) {
			if (col==2) return player.masterystudies.includes('t302')&&player.masterystudies.includes('d10')
			return player.masterystudies.includes('t31'+((col+1)/2))
		}
		if (row>30) return player.masterystudies.includes('t30'+(col*2-1))
		if (row>29) {
			if (col==2) return player.masterystudies.includes('t272')&&player.masterystudies.includes('d9')
			return player.masterystudies.includes('t29'+((col+1)/2))
		}
		if (row>28) return player.masterystudies.includes('t272')&&player.masterystudies.includes('d9')
		if (row>27) return player.masterystudies.includes('t27'+col)||player.masterystudies.includes('t27'+(col+1))
		if (row>26) return player.masterystudies.includes('t252')&&player.masterystudies.includes('d7')
		if (row>25) return player.masterystudies.includes('t25'+Math.ceil(col/2))
		if (row>24) return player.masterystudies.includes('t241')
	} else if (type=='d') {
		if (player.timestudy.theorem<masterystudies.costs.dil[id]||player.masterystudies.includes('d'+id)) return false
		if (id>13) return player.masterystudies.includes("t431")&&player.achievements.includes("ng3p34")
		if (id>12) return (player.masterystudies.includes('t412')||player.masterystudies.includes('t421'))&&(ghostified||tmp.qu.nanofield.rewards>15)
		if (id>11) return player.masterystudies.includes("t392")&&(ghostified||eds[8].workers.gt(9.9))
		if (id>10) return player.masterystudies.includes("t351")&&(ghostified||eds[1].workers.gt(9.9))
		if (id>9) return player.masterystudies.includes("t302")&&(ghostified||tmp.qu.pairedChallenges.completed>3)
		if (id>8) return player.masterystudies.includes("d8")&&(ghostified||QCIntensity(8))
		if (id>7) return player.masterystudies.includes("t272")&&(ghostified||tmp.qu.electrons.amount>16750)
		if (id>6) return player.masterystudies.includes("t252")
	} else {
		if (player.timestudy.theorem<masterystudies.costs.ec[id]||player.eternityChallUnlocked) return false
		if (id==13&&!(player.masterystudies.includes('t261')||player.masterystudies.includes('t262')||player.masterystudies.includes('t263'))) return false
		if (id==14&&!(player.masterystudies.includes('t264')||player.masterystudies.includes('t265')||player.masterystudies.includes('t266'))) return false
		if (player.etercreq==id) return true
		if (id==13) return player.resets>=masterystudies.reqs[13]
		return Math.round(player.replicanti.chance*100)>=masterystudies.reqs[14]
	}
	return true
}

var occupied
function drawMasteryBranch(id1, id2) {
	var type1=id1.split("ec")[1]?"c":id1.split("dil")[1]?"d":id1.split("time")[1]?"t":undefined
	var type2=id2.split("ec")[1]?"c":id2.split("dil")[1]?"d":id2.split("time")[1]?"t":undefined
	var start=document.getElementById(id1).getBoundingClientRect();
	var end=document.getElementById(id2).getBoundingClientRect();
	var x1=start.left + (start.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
	var y1=start.top + (start.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
	var x2=end.left + (end.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
	var y2=end.top + (end.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
	msctx.lineWidth=15;
	msctx.beginPath();
	var drawBoughtLine=true
	if (type1=="t"||type1=="d") drawBoughtLine=player.masterystudies.includes(type1+id1.split("study")[1])
	if (type2=="t"||type2=="d") drawBoughtLine=drawBoughtLine&&player.masterystudies.includes(type2+id2.split("study")[1])
	if (type2=="c") drawBoughtLine=drawBoughtLine&&player.eternityChallUnlocked==id2.slice(2,4)
	if (drawBoughtLine) {
		if (type2=="d" && player.options.theme == "Aarex's Modifications") {
			msctx.strokeStyle=parseInt(id2.split("study")[1])<8?"#D2E500":parseInt(id2.split("study")[1])>9?"#333333":"#009900";
		} else if (type2=="c") {
			msctx.strokeStyle="#490066";
		} else {
			msctx.strokeStyle="#000000";
		}
	} else if (type2=="d" && player.options.theme == "Aarex's Modifications") {
		msctx.strokeStyle=parseInt(id2.split("study")[1])<8?"#697200":parseInt(id2.split("study")[1])>11?"#727272":parseInt(id2.split("study")[1])>9?"#262626":"#006600";
	} else msctx.strokeStyle="#444";
	msctx.moveTo(x1, y1);
	msctx.lineTo(x2, y2);
	msctx.stroke();
	if (!occupied.includes(id2) && type2 == "t") {
		occupied.push(id2)
		if (shiftDown) {
			var start = document.getElementById(id2).getBoundingClientRect();
			var x1 = start.left + (start.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
			var y1 = start.top + (start.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
			var mult = masterystudies.costmults[id2.split("study")[1]]
			var msg = id2.split("study")[1] + " (" + (mult>1e3?shorten(mult):mult) + "x)"
			msctx.fillStyle = 'white';
			msctx.strokeStyle = 'black';
			msctx.lineWidth = 3;
			msctx.font = "15px Typewriter";
			msctx.strokeText(msg, x1 - start.width / 2, y1 - start.height / 2 - 1);
			msctx.fillText(msg, x1 - start.width / 2, y1 - start.height / 2 - 1);
		}
	}
}

function drawMasteryTree() {
    msc.width = 0;
    msc.height = 0;
    msc.width = document.body.scrollWidth;
    msc.height = document.body.scrollHeight;
	msctx.clearRect(0, 0, msc.width, msc.height);
	if (player === undefined) return
	if (document.getElementById("eternitystore").style.display === "none" || document.getElementById("masterystudies").style.display === "none" || player.masterystudies === undefined) return
	occupied=[]
	drawMasteryBranch("back", "timestudy241")
	drawMasteryBranch("timestudy241", "timestudy251")
	drawMasteryBranch("timestudy241", "timestudy252")
	drawMasteryBranch("timestudy241", "timestudy253")
	drawMasteryBranch("timestudy251", "timestudy261")
	drawMasteryBranch("timestudy251", "timestudy262")
	drawMasteryBranch("timestudy252", "timestudy263")
	drawMasteryBranch("timestudy252", "timestudy264")
	drawMasteryBranch("timestudy253", "timestudy265")
	drawMasteryBranch("timestudy253", "timestudy266")
	drawMasteryBranch("timestudy261", "ec13unl")
	drawMasteryBranch("timestudy262", "ec13unl")
	drawMasteryBranch("timestudy263", "ec13unl")
	drawMasteryBranch("timestudy264", "ec14unl")
	drawMasteryBranch("timestudy265", "ec14unl")
	drawMasteryBranch("timestudy266", "ec14unl")
	if (quantumed) {
		drawMasteryBranch("timestudy252", "dilstudy7")
		drawMasteryBranch("dilstudy7", "timestudy271")
		drawMasteryBranch("dilstudy7", "timestudy272")
		drawMasteryBranch("dilstudy7", "timestudy273")
		drawMasteryBranch("timestudy271","timestudy281")
		drawMasteryBranch("timestudy272","timestudy281")
		drawMasteryBranch("timestudy272","timestudy282")
		drawMasteryBranch("timestudy273","timestudy282")
		drawMasteryBranch("timestudy272", "dilstudy8")
		drawMasteryBranch("dilstudy8", "dilstudy9")
		drawMasteryBranch("dilstudy9", "timestudy291")
		drawMasteryBranch("dilstudy9", "timestudy292")
		drawMasteryBranch("timestudy291", "timestudy301")
		drawMasteryBranch("dilstudy9", "timestudy302")
		drawMasteryBranch("timestudy292", "timestudy303")
		drawMasteryBranch("timestudy301", "timestudy311")
		drawMasteryBranch("timestudy303", "timestudy312")
		drawMasteryBranch("timestudy302", "dilstudy10")
		drawMasteryBranch("timestudy311", "timestudy321")
		drawMasteryBranch("timestudy312", "timestudy323")
	}
	if (player.masterystudies.includes("d10")||ghostified) {
		drawMasteryBranch("dilstudy10", "timestudy322")
		drawMasteryBranch("timestudy322", "timestudy331")
		drawMasteryBranch("timestudy322", "timestudy332")
		drawMasteryBranch("timestudy331", "timestudy342")
		drawMasteryBranch("timestudy332", "timestudy343")
		drawMasteryBranch("timestudy342", "timestudy341")
		drawMasteryBranch("timestudy343", "timestudy344")
		drawMasteryBranch("timestudy344", "timestudy351")
		drawMasteryBranch("timestudy351", "dilstudy11")
	}
	if (player.masterystudies.includes("d11")||ghostified) {
		drawMasteryBranch("dilstudy11", "timestudy361")
		drawMasteryBranch("dilstudy11", "timestudy362")
		drawMasteryBranch("timestudy361", "timestudy371")
		drawMasteryBranch("timestudy371", "timestudy372")
		drawMasteryBranch("timestudy362", "timestudy373")
		drawMasteryBranch("timestudy372", "timestudy381")
		drawMasteryBranch("timestudy383", "timestudy382")
		drawMasteryBranch("timestudy373", "timestudy383")
		drawMasteryBranch("timestudy373", "timestudy383")
		drawMasteryBranch("timestudy381", "timestudy391")
		drawMasteryBranch("timestudy391", "timestudy392")
		drawMasteryBranch("timestudy393", "timestudy392")
		drawMasteryBranch("timestudy382", "timestudy393")
		drawMasteryBranch("timestudy392", "dilstudy12")
	}
	if (player.masterystudies.includes("d12")||ghostified) {
		drawMasteryBranch("dilstudy12", "timestudy401")
		drawMasteryBranch("dilstudy12", "timestudy402")
		drawMasteryBranch("timestudy401", "timestudy411")
		drawMasteryBranch("timestudy402", "timestudy412")
		drawMasteryBranch("timestudy411", "timestudy421")
		drawMasteryBranch("timestudy412", "dilstudy13")
		drawMasteryBranch("timestudy421", "dilstudy13")
	}
	if (player.masterystudies.includes("d13")||ghostified) {
		drawMasteryBranch("dilstudy13", "timestudy431")
		drawMasteryBranch("timestudy431", "dilstudy14")
	}
}

function getMTSMult(id, uses = "") {
	if (id==251) return Math.floor(player.resets/3e3)
	if (id==252) return Math.floor(player.dilation.freeGalaxies/7)
	if (id==253) return Math.floor(extraReplGalaxies/9)*20
	if (id==262) return Math.max(player.resets/15e3-19,1)
	if (id==263) return player.meta.resets+1
	if (id==264) return Math.pow(player.galaxies+1,0.25)*2
	if (id==273) {
		var intensity = 0
		if (player.masterystudies !== undefined && (player.masterystudies.includes("t273") || uses.includes("ms"))) intensity = 5
		if (ghostified && player.ghostify.neutrinos.boosts > 1 && !uses.includes("pn")) intensity += tmp.nb[1]
		if (uses.includes("intensity")) return intensity
		return Decimal.max(Math.log10(player.replicanti.chance + 1), 1).pow(intensity)
	}
	if (id==281) return Decimal.pow(10,Math.pow(tmp.rm.max(1).log10(),0.25)/10)
	if (id==282) return Decimal.pow(10,Math.pow(tmp.rm.max(1).log10(),0.25)/15)
	if (id==301) return Math.floor(extraReplGalaxies/4.15)
	if (id==303) return Decimal.pow(4.7,Math.pow(Math.log10(Math.max(player.galaxies,1)),1.5))
	if (id==322) {
		let log = Math.sqrt(Math.max(3-getTickspeed().log10(),0))/2e4
		if (log>110) log=Math.sqrt(log*27.5)+55
		if (log>1e3&&player.aarexModifications.ngudpV!==undefined) log=Math.pow(7+Math.log10(log),3)
		return Decimal.pow(10,log)
	}
	if (id==341) return Decimal.pow(2,Math.sqrt(tmp.qu.replicants.quarks.add(1).log10()))
	if (id==344) return Math.pow(tmp.qu.replicants.quarks.div(1e7).add(1).log10(),0.25)*0.17+1
	if (id==351) {
		let log=player.timeShards.max(1).log10()*14e-7
		if (log>1e4) log=Math.pow(log*Math.pow(10,36),.1)
		return Decimal.pow(10,log)
	}
	if (id==361) return player.dilation.tachyonParticles.max(1).pow(0.01824033924212366)
	if (id==371) return Math.pow(extraReplGalaxies+1,0.3)
	if (id==372) return Math.sqrt(player.timeShards.add(1).log10())/20+1
	if (id==373) return Math.pow(player.galaxies+1,0.55)
	if (id==381) return Decimal.min(getTickSpeedMultiplier(), 1).log10() / -135 + 1
	if (id==382) return player.eightAmount.max(1).pow(Math.PI)
	if (id==383) return Decimal.pow(3200,Math.pow(tmp.qu.colorPowers.b.add(1).log10(),0.25))
	if (id==391) return player.meta.antimatter.max(1).pow(8e-4)
	if (id==392) return Decimal.pow(1.6,Math.sqrt(tmp.qu.replicants.quarks.add(1).log10()))
	if (id==393) return Decimal.pow(4e5,Math.sqrt(getTotalWorkers().add(1).log10()))
	if (id==401) {
		let log=tmp.qu.replicants.quarks.div(1e28).add(1).log10()*0.2
		if (log>5) log=Math.log10(log*2)*5
		return Decimal.pow(10,log)
	}
	if (id==411) return getTotalReplicants().div(1e24).add(1).pow(0.2)
	if (id==421) {
		let ret=Math.pow(Math.max(-getTickspeed().log10()/1e13-0.75,1),4)
		if (ret>100) ret=Math.sqrt(ret*100)
		return ret
	}
	if (id==431) {
		let x=player.dilation.freeGalaxies+tmp.eg431
		return Decimal.pow(Math.max(x/1e4,1),Math.max(x/1e4+Math.log10(x)/2,1))
	}
}

function updateMasteryStudyTextDisplay() {
	if (!player.masterystudies) return
	document.getElementById("costmult").textContent=shorten(masterystudies.costmult)
	document.getElementById("totalspent").textContent=shortenDimensions(masterystudies.spentTT)
	for (id=0;id<(quantumed?masterystudies.allTimeStudies.length:10);id++) {
		var name=masterystudies.allTimeStudies[id]
		if(document.getElementById("ts"+name+"Cost"))document.getElementById("ts"+name+"Cost").textContent="Cost: "+shorten(masterystudies.costs.time[name])+" Time Theorems"
		else console.log("ts"+name+"Cost");
	}
	for (id=13;id<15;id++) {
		document.getElementById("ec"+id+"Cost").textContent="Cost: "+shorten(masterystudies.costs.ec[id])+" Time Theorems"
		document.getElementById("ec"+id+"Req").style.display=player.etercreq==id?"none":"block"
	}
	document.getElementById("ec13Req").textContent="Requirement: "+(masterystudies.reqs[13])+" dimension boosts"
	document.getElementById("ec14Req").textContent="Requirement: "+(masterystudies.reqs[14])+"% replicate chance"
	if (quantumed) {
		for (id=7;id<11;id++) document.getElementById("ds"+id+"Cost").textContent="Cost: "+shorten(masterystudies.costs.dil[id])+" Time Theorems"
		document.getElementById("ds8Req").innerHTML=ghostified?"":"<br>Requirement: "+(16750)+" electrons"
		document.getElementById("ds9Req").innerHTML=ghostified?"":"<br>Requirement: Complete Quantum Challenge 8"
		document.getElementById("ds10Req").innerHTML=ghostified?"":"<br>Requirement: Complete Paired Challenge 4"
		document.getElementById("321effect").textContent=shortenCosts(new Decimal("1e430"))
	}
	if (player.masterystudies.includes("d10")||ghostified) {
		for (id=341;id<345;id++) document.getElementById("ts"+id+"Cost").textContent="Cost: "+shorten(masterystudies.costs.time[id])+" Time Theorems"
		document.getElementById("ds11Cost").textContent="Cost: "+shorten(3e90)+" Time Theorems"
		document.getElementById("ds11Req").innerHTML=ghostified?"":"<br>Requirement: 10 worker replicants"
	}
	if (player.masterystudies.includes("d11")||ghostified) {
		document.getElementById("ds12Cost").textContent="Cost: "+shorten(3e92)+" Time Theorems"
		document.getElementById("ds12Req").innerHTML=ghostified?"":"<br>Requirement: 10 8th Emperor Dimensions"
	}
	if (player.masterystudies.includes("d12")||ghostified) {
		document.getElementById("ds13Cost").textContent="Cost: "+shorten(1e95)+" Time Theorems"
		document.getElementById("ds13Req").innerHTML=ghostified?"":"<br>Requirement: 16 Nanofield rewards"
		document.getElementById("ds14Cost").textContent="Cost: "+shorten(1e98)+" Time Theorems"
		document.getElementById("ds14Req").innerHTML=ghostified?"":"<br>Requirement: 'The Challenging Day' achievement"
	}
}

function msRemoteScaling(){
	var a=0;
	if(player.masterystudies.includes('t251'))a+=getMTSMult(251);
	if(player.masterystudies.includes('t252'))a+=getMTSMult(252);
	if(player.masterystudies.includes('t253'))a+=getMTSMult(253);
	return a;
}

function respecMasteryToggle() {
	player.respecMastery=!player.respecMastery
	if(player.respecMastery)document.getElementById("respecMastery2").className = "timestudybought"
	else document.getElementById("respecMastery2").className = "storebtn"
}

function respecMasteryStudies() {
  var respecedMS=[]
      player.timestudy.theorem+=masterystudies.spentTT
      for (id=0;id<player.masterystudies.length;id++) {
          var d = player.masterystudies[id].split("d")[1]
          if (d) respecedMS.push(player.masterystudies[id])
      }
  player.masterystudies=respecedMS
      updateMasteryStudyCosts()
	   updateMasteryStudyButtons()
	   drawMasteryTree()
}