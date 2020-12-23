let ws = [];
let vs = [];

function toggledragen(w,paritie){
    let v = w.parentNode;
    if(paritie){
	switch(v.classList.contains("wad")){
	case true:
	    v.classList.remove("wad");
	    break;
	case false:
	    v.classList.add("wad");
	    break;
	}
    }
    else {
	switch(v.classList.contains("vad")){
	case true:
	    v.classList.remove("vad");
	    break;
	case false:
	    v.classList.add("vad");
	    break;
	}
    }
}

function elle(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

window.document.styleSheets[0].insertRule(".checkbox { float: right; padding-right: 10em; }");


let upboat = function(w) {
    let n;
    if(w.parentNode.parentNode.childNodes[2].childElementCount == 6){
	n = 3;
    } else {
	n = 2;
    }    
	
    if(w.classList.contains("upmod")){
	return;
    }
    else if(w.parentNode.parentNode.childNodes[2].childNodes[n].childNodes[1].classList.contains("wad")){
	w.click();
	
    }
    else {
	return;
    }
};

let downboat = function(w) {
    let n;
    if(w.parentNode.parentNode.childNodes[2].childElementCount == 6){
	n = 3;
    } else {
	n = 2;
    }
    
    if(w.classList.contains("downmod")){
	return;
    }
    else if(w.parentNode.parentNode.childNodes[2].childNodes[n].childNodes[1].classList.contains("vad")){
	w.click();
	
    }
    else {
	return;
    }
};

document.getElementsByClassName("arrow up").forEach(
    function(y){
	if(y.parentNode.parentNode.classList.contains("comment")){
	    return;
	} else {
	    let t = function(){
		let n;
		if(y.parentNode.parentNode.childNodes[2].childElementCount == 6){
		    n = 3;
		} else {
		    n = 2;
		}    

		
		let sheet = window.document.styleSheets[0];
		sheet.insertRule("#" + y.parentNode.parentNode.id + "{ background-color: beige; }", sheet.cssRules.length);
		ws.push(y.parentNode.parentNode);
		setInterval((function(){upboat(y);}),260);
		y.parentNode.parentNode.childNodes[2].childNodes[n].appendChild(elle("<label class=\"checkbox wad\"><input type=\"checkbox\" checked onclick=toggledragen(this,true)>voting</label>"));		
	    }
	    y.addEventListener("click", t, {once: true});
	}
    }
);

document.getElementsByClassName("arrow down").forEach(
    function(y){
	if(y.parentNode.parentNode.classList.contains("comment")){
	    return;
	} else {
	    let t = function(){
		let n;
		if(y.parentNode.parentNode.childNodes[2].childElementCount == 6){
		    n = 3;
		} else {
		    n = 2;
		}
		
		let sheet = window.document.styleSheets[0];
		sheet.insertRule("#" + y.parentNode.parentNode.id + "{ background-color: lightpink; }", sheet.cssRules.length);
		vs.push(y.parentNode.parentNode);
		setInterval((function(){downboat(y);}),260);
		y.parentNode.parentNode.childNodes[2].childNodes[n].appendChild(elle("<label class=\"checkbox vad\"><input type=\"checkbox\" checked onclick=toggledragen(this,false)>voting</label>"));
		
	    }
	    y.addEventListener("click", t, {once: true});
	}
    }
);






