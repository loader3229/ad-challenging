var maxEC=[0,15,13,15,12,15,11,12,10,11,10,5,5];
for(var i=0;i<13;i++){
	maxEC["eterc"+i]=maxEC[i];
}
function getECGoal(name,completed){
	if(name=="eterc1"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e200",completed));
	if(name=="eterc1"&&completed<10)return Decimal.mul("1e2700",Decimal.pow("1e4000",completed-5));
	if(name=="eterc1"&&completed<15)return Decimal.mul("1e110000",Decimal.pow("1e15000",completed-10));
	
	if(name=="eterc2"&&completed<5)return Decimal.mul("1e975",Decimal.pow("1e175",completed));
	if(name=="eterc2"&&completed==5)return new Decimal("1e3750");
	if(name=="eterc2"&&completed==6)return new Decimal("1e7500");
	if(name=="eterc2"&&completed==7)return new Decimal("1e15000");
	if(name=="eterc2"&&completed==8)return new Decimal("1e22500");
	if(name=="eterc2"&&completed==9)return new Decimal("1e30000");
	if(name=="eterc2"&&completed==10)return new Decimal("1e400000");
	if(name=="eterc2"&&completed==11)return new Decimal("1e460000");
	if(name=="eterc2"&&completed==12)return new Decimal("1e720000");
	
	if(name=="eterc3"&&completed<5)return Decimal.mul("1e600",Decimal.pow("1e75",completed));
	if(name=="eterc3"&&completed<10)return Decimal.mul("1e1950",Decimal.pow("1e2000",completed-5));
	if(name=="eterc3"&&completed<15)return Decimal.mul("1e220000",Decimal.pow("1e50000",completed-10));
	
	if(name=="eterc4"&&completed<5)return Decimal.mul("1e2750",Decimal.pow("1e550",completed));
	if(name=="eterc4"&&completed<10)return Decimal.mul("1e20000",Decimal.pow("1e30000",completed-5));
	if(name=="eterc4"&&completed==10)return new Decimal("1e1300000");
	if(name=="eterc4"&&completed==11)return new Decimal("1e1500000");
	
	if(name=="eterc5"&&completed<5)return Decimal.mul("1e750",Decimal.pow("1e400",completed));
	if(name=="eterc5"&&completed<10)return Decimal.mul("1e7450",Decimal.pow("1e13000",completed-5));
	if(name=="eterc5"&&completed<15)return Decimal.mul("1e750000",Decimal.pow("1e100000",(completed-10)*(completed-10)));
	
	if(name=="eterc6"&&completed<5)return Decimal.mul("1e850",Decimal.pow("1e250",completed));
	if(name=="eterc6"&&completed<10)return Decimal.mul("1e10500",Decimal.pow("1e3000",completed-5));
	if(name=="eterc6"&&completed==10)return new Decimal("1e530000");
	
	if(name=="eterc7"&&completed<5)return Decimal.mul("1e2000",Decimal.pow("1e530",completed));
	if(name=="eterc7"&&completed<10)return Decimal.mul("1e6000",Decimal.pow("1e2000",completed-5));
	if(name=="eterc7"&&completed==10)return new Decimal("1e64000");
	if(name=="eterc7"&&completed==11)return new Decimal("1e89000");
	
	if(name=="eterc8"&&completed<5)return Decimal.mul("1e1300",Decimal.pow("1e900",completed));
	if(name=="eterc8"&&completed<10)return Decimal.mul("1e17500",Decimal.pow("1e5000",completed-5));
	
	if(name=="eterc9"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e150",completed*(completed+1)));
	if(name=="eterc9"&&completed==5)return new Decimal("1e15000");
	if(name=="eterc9"&&completed==6)return new Decimal("1e102000");
	if(name=="eterc9"&&completed==7)return new Decimal("1e109000");
	if(name=="eterc9"&&completed==8)return new Decimal("1e129000");
	if(name=="eterc9"&&completed==9)return new Decimal("1e157000");
	if(name=="eterc9"&&completed==10)return new Decimal("1e400000");
	
	if(name=="eterc10"&&completed<5)return Decimal.mul("1e3000",Decimal.pow("1e400",completed));
	if(name=="eterc10"&&completed==5)return new Decimal("1e6000");
	if(name=="eterc10"&&completed==6)return new Decimal("1e6500");
	if(name=="eterc10"&&completed==7)return new Decimal("1e7500");
	if(name=="eterc10"&&completed==8)return new Decimal("1e8500");
	if(name=="eterc10"&&completed==9)return new Decimal("1e10000");
	
	if(name=="eterc11"&&completed<5)return Decimal.mul("1e600",Decimal.pow("1e200",completed));
	
	if(name=="eterc12"&&completed==0)return new Decimal("1e240000");
	if(name=="eterc12"&&completed==1)return new Decimal("1e280000");
	if(name=="eterc12"&&completed==2)return new Decimal("1e320000");
	if(name=="eterc12"&&completed==3)return new Decimal("1e340000");
	if(name=="eterc12"&&completed==4)return new Decimal("1e326000");
	
	return new Decimal("1e1000000000000000");
}
function eterc2Mult(){
	var c=ECTimesCompleted("eterc2");
	if(c<=5)return player.infinityPower.pow(1.5/(700-c*100)).min(new Decimal("1e100")).plus(1);
	if(c<=13)return player.infinityPower.pow(0.002+0.001*c).min(Decimal.pow(10,25*Math.pow(2,c-2)-100)).plus(1);
}
function eterc4Mult(){
	var c=ECTimesCompleted("eterc4");
	if(c<=5)return player.infinityPoints.pow(0.003 + c*0.002).min(new Decimal("1e200"));
	if(c==6)return player.infinityPoints.pow(0.01).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.004).min(new Decimal("1e200")));
	if(c==7)return player.infinityPoints.pow(0.0082).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.0041).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e200")));
    if(c==8)return player.infinityPoints.pow(0.007).min(new Decimal("1e200")).mul(player.infinityPoints.pow(0.0045).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.003).min(new Decimal("1e400")));
	if(c==9)return player.infinityPoints.pow(0.012).min(new Decimal("1e400")).mul(player.infinityPoints.pow(0.0015).min(new Decimal("1e200"))).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e400")));
	if(c==10)return player.infinityPoints.pow(0.013).min(new Decimal("1e400")).mul(player.infinityPoints.pow(0.002).min(new Decimal("1e300"))).mul(player.infinityPoints.pow(0.0022).min(new Decimal("1e500")));
	if(c==11)return player.infinityPoints.pow(0.0003).mul(new Decimal("1e1300")).min(new Decimal("1e2400"));
	if(c==12)return player.infinityPoints.pow(0.0005).mul(new Decimal("1e1300")).min(new Decimal("1e3600"));
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
	if(c<=5)return player.timeShards.pow(c*0.1).min(new Decimal("1e400")).plus(1);
	if(c==6)return player.timeShards.pow(0.55).min(new Decimal("1e400")).mul(player.timeShards.pow(0.05).min(new Decimal("1e400"))).plus(1);
	if(c==7)return player.timeShards.pow(0.64).min(new Decimal("1e600")).mul(player.timeShards.pow(0.06).min(new Decimal("1e600"))).plus(1);
	if(c==8)return player.timeShards.pow(0.72).min(new Decimal("1e900")).mul(player.timeShards.pow(0.08).min(new Decimal("1e900"))).plus(1);
	if(c==9)return player.timeShards.pow(0.8).min(new Decimal("1e1300")).mul(player.timeShards.pow(0.1).min(new Decimal("1e1300"))).plus(1);
	if(c==10)return player.timeShards.pow(0.8).min(new Decimal("1e4000")).mul(player.timeShards.pow(0.2).min(new Decimal("1e4000"))).plus(1);
	if(c==11)return player.timeShards.pow(0.75).min(new Decimal("1e6000")).mul(player.timeShards.pow(0.25).min(new Decimal("1e6000"))).plus(1);
}
function EC10Reward1(){
	var c=ECTimesCompleted("eterc10");
	return [0,1,2,3,4,5,7,10,14,19,26][c];
}
function EC10Reward2(){
	var c=ECTimesCompleted("eterc10");
	if(c<=5)return 1;
	return Decimal.pow(1.3,c-5);
}
function EC12Reward(){
	var c=ECTimesCompleted("eterc12");
	return [1,0.992,0.986,0.982,0.978,0.974][c];
}