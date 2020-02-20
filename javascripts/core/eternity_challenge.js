var maxEC=[0,10,7,10,7,8,5,5,5,5,5,0,0];
for(var i=0;i<13;i++){
	maxEC["eterc"+i]=maxEC[i];
}
function getECGoal(name,completed){
	if(name=="eterc1"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e200",completed));
	if(name=="eterc1"&&completed<10)return Decimal.mul("1e2700",Decimal.pow("1e250",completed));
	
	if(name=="eterc2"&&completed<5)return Decimal.mul("1e975",Decimal.pow("1e175",completed));
	if(name=="eterc2"&&completed==5)return new Decimal("1e3210");
	if(name=="eterc2"&&completed==6)return new Decimal("1e7650");
	
	if(name=="eterc3"&&completed<5)return Decimal.mul("1e600",Decimal.pow("1e75",completed));
	if(name=="eterc3"&&completed<10)return Decimal.mul("1e775",Decimal.pow("1e200",completed));
	
	if(name=="eterc4"&&completed<5)return Decimal.mul("1e2750",Decimal.pow("1e550",completed));
	if(name=="eterc4"&&completed==5)return new Decimal("1e20000");
	if(name=="eterc4"&&completed==6)return new Decimal("1e50000");
	
	if(name=="eterc5"&&completed<5)return Decimal.mul("1e750",Decimal.pow("1e400",completed));
	if(name=="eterc5"&&completed<8)return Decimal.mul("1e6600",Decimal.pow("1e5000",completed-5));
	
	if(name=="eterc6"&&completed<5)return Decimal.mul("1e850",Decimal.pow("1e250",completed));
	if(name=="eterc7"&&completed<5)return Decimal.mul("1e2000",Decimal.pow("1e530",completed));
	if(name=="eterc8"&&completed<5)return Decimal.mul("1e1300",Decimal.pow("1e900",completed));
	if(name=="eterc9"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e300",completed));
	if(name=="eterc10"&&completed<5)return Decimal.mul("1e3000",Decimal.pow("1e300",completed));
	
	return new Decimal("1e1000000000000000");
}
function eterc2Mult(){
	var c=ECTimesCompleted("eterc2");
	if(c<=5)return player.infinityPower.pow(1.5/(700-ECTimesCompleted("eterc2")*100)).min(new Decimal("1e100")).plus(1);
	if(c==6)return player.infinityPower.pow(0.008).min(new Decimal("1e300")).plus(1);
	if(c==7)return player.infinityPower.pow(0.009).min(new Decimal("1e700")).plus(1);
}
function eterc4Mult(){
	var c=ECTimesCompleted("eterc4");
	if(c<=5)return player.infinityPoints.pow(0.003 + c*0.002).min(new Decimal("1e200"));
	if(c==6)return player.infinityPoints.pow(0.01).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.004).min(new Decimal("1e200")));
	if(c==7)return player.infinityPoints.pow(0.0082).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.0041).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e200")));
}
function eterc5R1(){
	var c=ECTimesCompleted("eterc5");
	return c*5;
}
function eterc5R2(){
	if(player.currentEternityChall == "eterc5")return -600;
	return eterc5R2r();
}
function eterc5R2r(){
	var c=ECTimesCompleted("eterc5");
	return 0;
}