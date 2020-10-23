let vs = [];

let time = function(y){return y.childNodes[2].childNodes[0].querySelector("time").innerText;};
let stat = function(y){return y.childNodes[2].childNodes[0].childNodes[0].innerText;};
let cont = function(y){return y.childNodes[2].childNodes[1].innerText.toLowerCase();};
let auth = function(y){return y.childNodes[2].childNodes[0].querySelector(".author");};
let dont = function(){ return; };

let w = function(){return document.querySelectorAll(".comment.noncollapsed");};
let v = function(y){
	if(y.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].innerText != null){
		return;
	}
	let tau = cont(y);
	if (false) {
		dont();
	} else if(tau.includes("nigger")){
		vs.push(y);
	} else if (tau.includes("faggot")) {
		vs.push(y);
	} else if (tau.includes("hitler")) {
		vs.push(y);
	} else if (time(y).includes("hour") || time(y).includes("day")) {
		switch(auth(y)){
			case null:
				vs.push(y);
				break;
			default:
				if(auth(y).childNodes[0].innerText != "Selene"){
					vs.push(y);
				}
				break;
		}
	}
}

let u = function(){ w().forEach(v); };

setInterval(u, 10000);

let downboat = function(y){return y.childNodes[1].childNodes[1];};

let isvoating = function(y){
	return y.classList.contains("downmod");
}

let rm = function(y,ys){
	let i = ys.findIndex((function(w){return w == y;}));
	ys.splice(i,1);
}

let voatall = function(ys,boat){
	let t = function(y){
		switch(isvoating(boat(y))){
			case false:
				boat(y).click();
				break;
			default:
				break;
		};
		switch(y.classList.contains("collapsed")){
			case true:
				rm(y,vs);
				break;
			default:
				break;
		}
	};
	ys.forEach(t);
};

setInterval((function(){voatall(vs,downboat);}),13000);

