main();

function main(){
    var saite = window.location.hostname;
    if(saite.search("facebook.com") !== -1){
        mythBook();
     //   alert("É o facebook!");
    }else{
    //   # alert("Otro saite!");
    }
    
	  if(saite.search("plug.dj") !== -1){ 
	  mythPlug();
	  alert("É o plug!");
	  
	  }
	
	
    return 0;
}  

function mythBook(){
    
    var styleNode = [
        "._5vb_, ._5vb_ #contentCol",
        "{background-color:black}",

    ];
    styleNode = styleNode.join(" ");
    var addStyle = document.createElement("style");
    var newStyle = document.createTextNode(styleNode);
    
    addStyle.appendChild(newStyle);
    document.body.appendChild(addStyle);
}


 {callback}

function mythPlug(){


    var styleNode = [
        ".room-background",
        "{background-image:url('http://i.imgur.com/zSMRtE6.png' ) !important ;}",
				".torch.right, .torch",
		"{visibility:hidden}",
		
		
		
    ];
    styleNode = styleNode.join(" ");
    var addStyle = document.createElement("style");
    var newStyle = document.createTextNode(styleNode);
    
    addStyle.appendChild(newStyle);
    document.body.appendChild(addStyle);
}




