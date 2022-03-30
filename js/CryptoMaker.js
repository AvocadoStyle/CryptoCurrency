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
		// newBtn.className = "box";
		newBox.appendChild(newBtn)
		// this.parent.appendChild(newBtn);
		newBtn.innerHTML += "follow coin and check gap from last time you check"
		var newLabel = document.createElement("p")
		newBox.appendChild(newLabel);
		newBtn.onclick = function(){
			// newBtn.innerHTML = "<strong>" + this.price.toFixed(2) +
			//   "</strong>";
			let oldVal = localStorage.getItem(this.id) //old value
			let newVal = this.price.toFixed(2); // new value
			let result = 0;
			if(localStorage.getItem(this.id) === null) {
				console.log("first?")
				newLabel.innerHTML = "first time checking"

			} else {
				console.log("last?")
				let result = newVal - oldVal
				newLabel.innerHTML = "the gap from last time is "
				if(result > 0){
					newLabel.innerHTML += "bigger then last time by: "	
				} else if(result < 0){
					newLabel.innerHTML += "less then last time by: "	
				} else {
					newLabel.innerHTML += "the same as last time: "	
				}
				newLabel.innerHTML += result
				newLabel.innerHTML += ", and before it was: " + oldVal

			}
			
			localStorage.setItem(this.id, this.price.toFixed(2))
			this.isClicked = true
		}.bind(this)
		

	}
}