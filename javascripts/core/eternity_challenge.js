var maxEC=[0,15,10,15,10,11,10,10,10,6,5,5,5];
for(var i=0;i<13;i++){
	maxEC["eterc"+i]=maxEC[i];
}
function getECGoal(name,completed){
	if(name=="eterc1"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e200",completed));
	if(name=="eterc1"&&completed<10)return Decimal.mul("1e2700",Decimal.pow("1e250",completed));
	if(name=="eterc1"&&completed<15)return Decimal.pow("1e1000",completed);
	
	if(name=="eterc2"&&completed<5)return Decimal.mul("1e975",Decimal.pow("1e175",completed));
	if(name=="eterc2"&&completed==5)return new Decimal("1e3210");
	if(name=="eterc2"&&completed==6)return new Decimal("1e7650");
	if(name=="eterc2"&&completed==7)return new Decimal("1e13300");
	if(name=="eterc2"&&completed==8)return new Decimal("1e20000");
	if(name=="eterc2"&&completed==9)return new Decimal("1e25000");
	
	if(name=="eterc3"&&completed<5)return Decimal.mul("1e600",Decimal.pow("1e75",completed));
	if(name=="eterc3"&&completed<10)return Decimal.mul("1e775",Decimal.pow("1e200",completed));
	if(name=="eterc3"&&completed<15)return Decimal.mul("1e12100",Decimal.pow("1e2000",completed-10));
	
	if(name=="eterc4"&&completed<5)return Decimal.mul("1e2750",Decimal.pow("1e550",completed));
	if(name=="eterc4"&&completed<10)return Decimal.mul("1e20000",Decimal.pow("1e30000",completed-5));
	
	
	if(name=="eterc5"&&completed<5)return Decimal.mul("1e750",Decimal.pow("1e400",completed));
	if(name=="eterc5"&&completed<8)return Decimal.mul("1e6600",Decimal.pow("1e5000",completed-5));
	if(name=="eterc5"&&completed==8)return new Decimal("1e40000");
	if(name=="eterc5"&&completed==9)return new Decimal("1e50650");
	if(name=="eterc5"&&completed==10)return new Decimal("1e548000");
	
	if(name=="eterc6"&&completed<5)return Decimal.mul("1e850",Decimal.pow("1e250",completed));
	if(name=="eterc6"&&completed<10)return Decimal.mul("1e18900",Decimal.pow("1e1200",completed-5));
	
	if(name=="eterc7"&&completed<5)return Decimal.mul("1e2000",Decimal.pow("1e530",completed));
	if(name=="eterc7"&&completed<10)return Decimal.mul("1e7000",Decimal.pow("1e1300",completed-5));
	
	if(name=="eterc8"&&completed<5)return Decimal.mul("1e1300",Decimal.pow("1e900",completed));
	if(name=="eterc8"&&completed<10)return Decimal.mul("1e20000",Decimal.pow("1e5000",completed-5));
	
	if(name=="eterc9"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e300",completed));
	if(name=="eterc9"&&completed==5)return new Decimal("1e23000");
	
	if(name=="eterc10"&&completed<4)return Decimal.mul("1e3000",Decimal.pow("1e300",completed));
	if(name=="eterc10"&&completed==4)return new Decimal("1e4600");
	
	if(name=="eterc11"&&completed<5)return Decimal.mul("1e500",Decimal.pow("1e200",completed));
	
	if(name=="eterc12"&&completed==0)return new Decimal("1e240000");
	if(name=="eterc12"&&completed==1)return new Decimal("1e300000");
	if(name=="eterc12"&&completed==2)return new Decimal("1e320000");
	if(name=="eterc12"&&completed==3)return new Decimal("1e340000");
	if(name=="eterc12"&&completed==4)return new Decimal("1e360000");
	
	return new Decimal("1e1000000000000000");
}
function eterc2Mult(){
	var c=ECTimesCompleted("eterc2");
	if(c<=5)return player.infinityPower.pow(1.5/(700-c*100)).min(new Decimal("1e100")).plus(1);
	if(c<=10)return player.infinityPower.pow(0.002+0.001*c).min(Decimal.pow(10,25*Math.pow(2,c-2)-100)).plus(1);
}
function eterc4Mult(){
	var c=ECTimesCompleted("eterc4");
	if(c<=5)return player.infinityPoints.pow(0.003 + c*0.002).min(new Decimal("1e200"));
	if(c==6)return player.infinityPoints.pow(0.01).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.004).min(new Decimal("1e200")));
	if(c==7)return player.infinityPoints.pow(0.0082).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.0041).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e200")));
    if(c==8)return player.infinityPoints.pow(0.007).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.0045).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.003).min(new Decimal("1e400")));
	if(c==9)return player.infinityPoints.pow(0.012).min(new Decimal("1e400")).mul(player.infinityPoints.pow(0.0015).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e400")));
	if(c==10)return player.infinityPoints.pow(0.013).min(new Decimal("1e400")).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e300"))).mul(player.infinityPoints.pow(0.0022).min(new Decimal("1e500")));
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
	if(c<=10)return 0;
	return (c-10)*10;
}
function eterc6Reward(){
	var c=ECTimesCompleted("eterc6");
	if(c<=5)return 0.2*c;
	return 0.7+0.06*c;
}
function eterc9Mult(){
	var c=ECTimesCompleted("eterc9");
	if(c<=5)return player.timeShards.pow(c*0.1).min(new Decimal("1e400"));
	if(c==6)return player.timeShards.pow(0.55).min(new Decimal("1e400")).mul(player.timeShards.pow(0.05).min(new Decimal("1e400")));
}