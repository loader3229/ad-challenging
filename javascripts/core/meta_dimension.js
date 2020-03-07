function getDilationMetaDimensionMultiplier () {
   return player.dilation.dilatedTime.div(1e40).pow(.1).plus(1);
 }

 function getMetaDimensionMultiplier (tier) {
   if (player.currentEternityChall === "eterc11") {
     return new Decimal(1);
   }
   let multiplier = Decimal.pow(player.dilation.upgrades.includes("ngpp4") ? getDil15Bonus() : 2, Math.floor(player.meta[tier].bought / 10)).times(Decimal.pow((player.dilation.upgrades.includes("ngpp4") ? getDil15Bonus() : 2)*(player.achievements.includes("ngpp14") ? 1.01:1), Math.max(0, player.meta.resets - tier + 1))).times(getDilationMetaDimensionMultiplier());
  if (player.dilation.upgrades.includes("ngpp3")) {
     multiplier = multiplier.times(getDil14Bonus());
   }
    if (player.achievements.includes("ngpp12")) multiplier = multiplier.times(1.1)
		
	if(ECTimesCompleted("eterc11")==15 && tier==1) multiplier = multiplier.times(player.challengingMatter[11].pow(2).plus(1));
   if (multiplier.lt(1)) multiplier = new Decimal(1)
   if (player.dilation.active) {
     multiplier = Decimal.pow(10, Math.pow(multiplier.log10(), 0.75))
     if (player.dilation.upgrades.includes(11)) {
       multiplier = Decimal.pow(10, Math.pow(multiplier.log10(), 1.05))
     }
   }

   return multiplier;
 }

 function getMetaDimensionDescription(tier) {
   if (tier > Math.min(7, player.meta.resets + 3)) return player.meta[tier].bought + ' (' + dimMetaBought(tier) + ')';
   else return shortenDimensions(player.meta[tier].amount) + ' (' + dimMetaBought(tier) + ')  (+' + formatValue(player.options.notation, getMetaDimensionRateOfChange(tier), 2, 2) + '%/s)';
 }

 function getMetaDimensionRateOfChange(tier) {
   let toGain = getMetaDimensionProduction(tier + 1);

   var current = player.meta[tier].amount.max(1);
   var change  = toGain.times(10).dividedBy(current);

   return change;
 }

 function canBuyMetaDimension(tier) {
     if (tier > player.meta.resets + 4) return false;
     if (tier > 1 && player.meta[tier - 1].amount.eq(0)) return false;
     return true;
 }

 function clearMetaDimensions () {
     for (i = 1; i <= 8; i++) {
         player.meta[i].amount = new Decimal(0);
         player.meta[i].bought = 0;
         player.meta[i].cost = new Decimal(initCost[i]);
     }
 }

 function getMetaShiftRequirement () {
   return {
     tier: Math.min(8, player.meta.resets + 4),
     amount: Math.max(20, -40 + 15 * player.meta.resets)
   }
 }

 function metaBoost() {
     let req = getMetaShiftRequirement();
     if (player.meta[req.tier].amount.lt(req.amount)) {
         return false;
     }
     player.meta.resets++;
     if (player.meta.resets>9) giveAchievement("Meta-boosting to the max")
     player.meta.antimatter = new Decimal(player.achievements.includes("ngpp12")?100:10);
     clearMetaDimensions();
     for (let i = 2; i <= 8; i++) {
       document.getElementById(i + "MetaRow").style.display = "none"
     }
     return true;
 }


 function getMetaDimensionCostMultiplier(tier) {
     return costMults[tier];
 }

 function dimMetaBought(tier) {
 	return player.meta[tier].bought % 10;
 }

 function metaBuyOneDimension(tier) {
     var cost = player.meta[tier].cost;
     if (!canBuyMetaDimension(tier)) {
         return false;
     }
     if (!canAffordMetaDimension(cost)) {
         return false;
     }
	 if(tier==8) giveAchievement("And still no ninth dimension...");
     player.meta.antimatter = player.meta.antimatter.minus(cost);
     player.meta[tier].amount = player.meta[tier].amount.plus(1);
     player.meta[tier].bought++;
     if (player.meta[tier].bought === 10) {
         player.meta[tier].cost = player.meta[tier].cost.times(getMetaDimensionCostMultiplier(tier));
     }
     return true;
 }

 function getMetaMaxCost(tier) {
   return player.meta[tier].cost.times(10 - dimMetaBought(tier));
 }

 function metaBuyManyDimension(tier) {
     var cost = getMetaMaxCost(tier);
     if (!canBuyMetaDimension(tier)) {
         return false;
     }
     if (!canAffordMetaDimension(cost)) {
         return false;
     }
	 if(tier==8) giveAchievement("And still no ninth dimension...");
     player.meta.antimatter = player.meta.antimatter.minus(cost);
     player.meta[tier].amount = player.meta[tier].amount.plus(10 - dimMetaBought(tier));
     player.meta[tier].cost = player.meta[tier].cost.times(getMetaDimensionCostMultiplier(tier));
     player.meta[tier].bought += 10 - dimMetaBought(tier)
     return true;
 }

 function canAffordMetaDimension(cost) {
     return cost.lte(player.meta.antimatter);
 }

 for (let i = 1; i <= 8; i++) {
     document.getElementById("meta" + i).onclick = function () {
         metaBuyOneDimension(i);
     }
     document.getElementById("metaMax" + i).onclick = function () {
         metaBuyManyDimension(i);
     }
 }

 document.getElementById("metaMaxAll").onclick = function () {
     for (let i = 1; i <= 8; i++) {
       while (metaBuyManyDimension(i)) {};
     }
 }

 document.getElementById("metaSoftReset").onclick = function () {
     metaBoost();
 }

 function getMetaDimensionProduction(tier) {
     return Decimal.floor(player.meta[tier].amount).times(getMetaDimensionMultiplier(tier));
 }

 function getExtraDimensionBoostPower() {
 	return player.meta.bestAntimatter.pow(player.dilation.upgrades.includes("ngpp5") ? 1.25:1).plus(1)
 }

 function getDil14Bonus () {
 	return 1 + Math.log10(1 - Math.min(0, player.tickspeed.log(10)));
 }

 function getDil17Bonus () {
 	return Decimal.log10(player.meta.bestAntimatter);
 }
 
 function getDil15Bonus () {
 	return Math.log(player.dilation.dilatedTime.max(1e10).min(1e100).log(10)) / Math.log(10) + 1;
 }