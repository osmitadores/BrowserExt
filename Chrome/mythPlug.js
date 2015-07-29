main();

function main(){
	  mythPlug();
}

function mythPlug(){

    var styleNode = [
        ".room-background",
        "{background-image:url('http://i.imgur.com/JeeQCcu.png.png' ) !important ;}",
				".torch.right, .torch",
		"{visibility:hidden}",
    ];
    styleNode = styleNode.join(" ");
    var addStyle = document.createElement("style");
    var newStyle = document.createTextNode(styleNode);

    addStyle.appendChild(newStyle);
    document.body.appendChild(addStyle);
}
