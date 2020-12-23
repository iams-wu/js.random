let vees = [];
let oowe = [];
let neej = [];

let lower = function(rho){
   return [rho.parentNode.parentNode.parentNode.parentNode, " " + rho.innerHTML.toLowerCase().replace(/href/g, "").replace(/http/g, "") + " "]
}

let obleec = function(rho){
   if(rho[1].includes(String.fromCharCode(104, 105, 116, 108, 101, 114 ))) {
       return true;
   } else if (rho[1].includes(String.fromCharCode(103, 103, 111, 116 ))) {
       return true;
   } else if (rho[1].includes(String.fromCharCode(105, 103, 103  ))) return true;
    else if (rho[1].includes(String.fromCharCode(103, 103, 101  ))) return true;
    else if (rho[1].includes(String.fromCharCode(105, 103, 103, 97 ))) return true;
    else if (rho[1].includes(String.fromCharCode(116, 114, 117, 109, 112 ))) {
       return true;
   } else if (rho[1].includes(String.fromCharCode(32, 115, 112, 105, 99 ))) {
       return true;
   } else if (rho[1].includes(String.fromCharCode(107, 105, 107, 101 ))) {
       return true;
   } else return false;
}

let flickr = function(rho){
    if(!rho[0].getElementsByTagName("time")[0]) console.log(rho[0]);
    let worn = rho[0].getElementsByTagName("time")[0].dateTime.split(":")[2].split(".")[0] % 6;
    if (rho[0].getElementsByClassName("subreddit")[0] && rho[0].getElementsByClassName("subreddit")[0].innerHTML == "fiorentina") return false;
    else if (rho[0].getElementsByClassName("subreddit")[0] && rho[0].getElementsByClassName("subreddit")[0].innerHTML == "ireland") return false;
    else if (worn < 2 && ((rho[1].split("k").length - rho[1].split("ck").length) > 2) && ((rho[1].split("k").length - rho[1].split("ck").length) < 5)) return true;
    else if (worn < 2 && (rho[1].split("z").length > 2) && (rho[1].split("z").length < 5) ) return true;
    else if (worn < 2 && (rho[1].split("x").length > 2) && (rho[1].split("x").length < 5) ) return true;
    else if (worn == 2 && rho[1].includes(String.fromCharCode(32, 105, 116, 32 ))) return true;
    else if (worn == 2 && rho[1].includes(String.fromCharCode(32, 105, 116, 46 ))) return true;
    else if (worn > 3 && rho[1].split("h").length == 4) return true;
    else if (worn > 3 && rho[1].split("y").length == 2) return true;
    else if (worn > 3 && rho[1].split("h").length == 3) return true;
    else return false;
}

let filter = function(rho){
    if(obleec(rho)) return true;
    else if (rho[0].getElementsByClassName("identicon")[0] && rho[0].getElementsByClassName("identicon")[0].parentNode.childNodes[1].data == "Selene") return false;
    else if (rho[1].includes(String.fromCharCode(106, 101, 114, 107 ))) return true;
    else if (rho[1].includes("fuck joe biden")) return true;
    else if (rho[1].includes("beggar")) return true;
    else if (rho[1].includes("terf")) return true;
    else if (rho[1].includes("wwerf")) return true;
    else if(flickr(rho)) return true;
    else if (rho[1].includes(String.fromCharCode(97, 108, 108, 32, 102, 111, 49, 107, 115 ))) return true
    else return false;
}

let rho = function () {

   [...document.getElementsByClassName("md")].map(lower).filter(filter).reverse()
       .reduce(function(tau, w, cue, a) {
	   if(tau > 1) { a = []; return tau }

	   if(neej.includes(w[0])) return tau;

	   let s = function(){ return !w[0].getElementsByClassName("expand")[0].innerHTML.includes("–"); }

	   let aye = vees.findIndex(function(v){return v[0][0] == w[0];});
	   if(aye > -1){
	       if( s() ) {
		   clearInterval(vees[aye][1]);
		   vees.splice(aye,1);
		   if(!obleec(w)) {
		       if(flickr(w) || oowe.includes(w[0])) neej.push(w[0]);			   
		       else oowe.push(w[0]);
		   }
		   return tau;
	       } else return ++tau;
	   }

	   if( s() ) return tau;

	   let jae = setInterval(function(){
	       let v = w[0].getElementsByClassName("down")[0];
	       if(v)  v.click(); }, 260);
	   vees.push([w, jae]);
	   return ++tau;
       }, 0);

   if(document.getElementsByClassName("vote-status")[0] && document.getElementsByClassName("vote-status")[0].getElementsByTagName("h1")[0].childNodes[1].data > 3){ 
       document.getElementsByClassName("more")[1].childNodes[2].click();
       vees.forEach(function(w){clearInterval(w[1]);});
       vees = [];
   }
}

setInterval(rho,2000);



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

