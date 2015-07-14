main();

function main(){
    var saite = window.location.hostname;
    if(saite.search("facebook.com") !== -1){
        mythBook();
    }else if(saite.search("plug.dj") !== -1){
	  mythPlug();
	  alert("É o plug!");
  }else {
      return 1;
  }
    return 0;
}

function mythBook(){

    var x = document.getElementById('q');
    x.placeholder = "Procure mitos, mitoses e mitarias"; // Texto temporário
    var j = document.getElementById('findFriendsNav');
    j.textContent = "Encontrar mitos";

    var styleNode = ['._5lus a {',
    	'background: url(http://i.imgur.com/GQJa5a7.jpg);',
        'background-size: cover;',
        'border-radius: 20%}',
        '._5vb_, ._5vb_ {',
        'background-color: #eee}',
        '._4f7n {',
        'background: #45484d;',
        'background: -moz-linear-gradient(top,  #45484d 0%, #000000 100%);',
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45484d), color-stop(100%,#000000));',
        'background: -webkit-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: -o-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: -ms-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: linear-gradient(to bottom,  #45484d 0%,#000000 100%);}',
        '.loggedout_menubar_container {',
        'background: #45484d;',
        'background: -moz-linear-gradient(top,  #45484d 0%, #000000 100%);',
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45484d), color-stop(100%,#000000));',
        'background: -webkit-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: -o-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: -ms-linear-gradient(top,  #45484d 0%,#000000 100%);',
        'background: linear-gradient(to bottom,  #45484d 0%,#000000 100%);}',
        '._li {',
        'background-size: contain;',
        'background-repeat: repeat-y;}',
        '.litestandClassicWelcomeBox a {',
        'color: #FFFFFF;}',
        '.uiHeader h2 {',
        'color: #FFFFFF;',
        'font-size: 16px;}',
        '.fbIndex .gradient {',
        'background: none!important;}',
        '.fbIndex ._li {',
        'height: 100%;',
        'background-size: cover;',
        'background-repeat: repeat-y;}'
    ];

    styleNode = styleNode.join(" ");
    var addStyle = document.createElement("style");
    var newStyle = document.createTextNode(styleNode);

    addStyle.appendChild(newStyle);
    document.body.appendChild(addStyle);
}


function mythPlug(){

    var styleNode = [
        ".room-background",
        "{background-image:url('http://i.imgur.com/JeeQCcu.png') !important ;}",
				".torch.right, .torch",
		"{visibility:hidden}",



    ];
    styleNode = styleNode.join(" ");
    var addStyle = document.createElement("style");
    var newStyle = document.createTextNode(styleNode);

    addStyle.appendChild(newStyle);
    document.body.appendChild(addStyle);
}
///////////////////////////////////////////////////

document.onmousemove = function(){debug();};

function debug(){
    console.log("point 1");
    var selectChat = document.querySelectorAll('a.titlebarText');
    var chat = '';
    for(var i in selectChat){
        if (selectChat[i].href === 'https://www.facebook.com/messages/conversation-671692929530410') {
            chat = selectChat[i];
        }
    }
    for(var i = 0; i < 6; i++){
        chat = chat.parentElement;
    }
    //faz coisas
    console.log("point 2");
}