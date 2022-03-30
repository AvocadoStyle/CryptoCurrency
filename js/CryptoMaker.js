class CryptoCoin {
	constructor(parent, id, name, price) {
		this.parent = parent;
		this.id = id;
		this.name = name;
		this.price = Number(price);
		this.imgUrl = "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" +
		 this.id +".png"
	}
	addToHTML(){
		let newBox = document.createElement("div");
		newBox.className = "box";
		this.parent.appendChild(newBox);
		newBox.innerHTML += "<img src='" + this.imgUrl + "' >";
		newBox.innerHTML += "<h3>" + this.name + "</h3>";
		newBox.innerHTML += "<div>Price: " + this.price.toFixed(2) + "</h3>";
		let newBtn = document.createElement("button");
		newBtn.className = "box";
		this.parent.appendChild(newBtn);
		newBtn.innerHTML += "follow coin"
		

	}
}