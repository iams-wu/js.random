let ws = [];
let vs = [];

let upboat = function(y){return y.childNodes[1].childNodes[0];};
let downboat = function(y){return y.childNodes[1].childNodes[4];};
let voats = function(y){return y.childNodes[1].childNodes[2].innerText;};
let pos = function(y){return y.getBoundingClientRect().y;};

let isvoating = function(y){
	return y.classList.contains("upmod") || y.classList.contains("downmod");
}

let rm = function(y,ys){
	let i = ys.findIndex((function(w){return w == y;}));
	ys.splice(i,1);
}

let rho = function(){
	let t = function(v){
		switch(pos(v) > 0){
			case true:
				break;
			default:
				rm(v,vs);
				return;
		}
	};
	vs.forEach(t);
};

let voatall = function(ys,boat){
	let t = function(y){
		switch(isvoating(boat(y))){
			case false:
				boat(y).click();
				break;
			default:
				break;
		};
	};
	ys.forEach(t);
};

let tau_y = function() {
	switch(temp0.classList.contains("upmod")){
		case true:
			break;
		case false:
			temp0.click();
			break;
	}
}

//setInterval(tau_y,260);

function elle(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function eles(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function toggledragen(w){
	switch(w.classList.contains("wad")){
		case true:
			w.classList.remove("wad");
			break;
		case false:
			w.classList.add("wad");
			break;
	}
}

window.document.styleSheets[0].addRule(".checkbox { float: right; padding-right: 10em; }")

document.getElementsByClassName("arrow up").forEach(
	function(y){
		let t = function(){
			let sheet = window.document.styleSheets[0];
			sheet.insertRule("#" + y.parentNode.parentNode.id + "{ background-color: beige; }", sheet.cssRules.length);
			ws.push(y.parentNode.parentNode);	
			y.parentNode.parentNode.childNodes[2].childNodes[2].appendChild(elle("<label class=\"checkbox\"><input type=\"checkbox\" onclick=toggledragen(this))>voting</label>"));		
		}
		y.addEventListener("click", t, {once: true});
	}
);

document.getElementsByClassName("arrow down").forEach(
	function(y){
		let t = function(){
			let sheet = window.document.styleSheets[0];
			sheet.insertRule("#" + y.parentNode.parentNode.id + "{ background-color: lightpink; }", sheet.cssRules.length);
			vs.push(y.parentNode.parentNode);
			y.parentNode.parentNode.childNodes[2].childNodes[2].appendChild(elle("<label class=\"checkbox\"><input type=\"checkbox\" onclick=toggledragen(this))>voting</label>"));

		}
		y.addEventListener("click", t, {once: true});
	}
);


setInterval((function(){voatall(ws,upboat);}),10000);
setInterval((function(){voatall(vs,downboat);}),10000);
setInterval((function(){rho();}),13000);





