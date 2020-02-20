var maxEC=[0,5,5,5,5,5,5,5,5,5,1,0,0];
function getECGoal(name,completed){
	if(name=="eterc1"&&completed<5)return Decimal.mul("1e1800",Decimal.pow("1e200",completed));
	if(name=="eterc2"&&completed<5)return Decimal.mul("1e975",Decimal.pow("1e175",completed));
	if(name=="eterc3"&&completed<5)return Decimal.mul("1e600",Decimal.pow("1e75",completed));
	if(name=="eterc4"&&completed<5)return Decimal.mul("1e2750",Decimal.pow("1e550",completed));
	if(name=="eterc5"&&completed<5)return Decimal.mul("1e750",Decimal.pow("1e400",completed));
	if(name=="eterc6"&&completed<5)return Decimal.mul("1e850",Decimal.pow("1e250",completed));
	if(name=="eterc7"&&completed<5)return Decimal.mul("1e2000",Decimal.pow("1e530",completed));
	if(name=="eterc8"&&completed<5)return Decimal.mul("1e1300",Decimal.pow("1e900",completed));
	if(name=="eterc9"&&completed<5)return Decimal.mul("1e1750",Decimal.pow("1e250",completed));
	if(name=="eterc10"&&completed==0)return new Decimal("1e3000");
	return new Decimal("1e1000000000000000");
}