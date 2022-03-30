window.onload = function() {
	let coinArr = []
	getData(coinArr)
}

const getData = function(coinArr) {
	let xmlHttp = new XMLHttpRequest();
	let url = "http://fs1.co.il/bus/bitcoin.php";
	xmlHttp.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4){
			coinArr = JSON.parse(this.response);
			createCoins(coinArr);
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
}

const createCoins = function(coinArr) {
	for(let i=0; i < coinArr.length; i++){
		let val = coinArr[i];
		let temp = new CryptoCoin(id_parent, val.id, val.name, val.price_usd)
		temp.addToHTML();
		console.log("hey");
	}
}
