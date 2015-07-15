main();

function main(){
    var saite = window.location;
    if(saite.hostname.search("facebook.com") !== -1){
        mythBook();
    }else if(saite.hostname.search("plug.dj") !== -1){
	  mythPlug();
	  alert("É o plug!");
    }else {
        return 1;
    }
    return 0;
}
function checkChanges(page){
    window.contentCol = document.querySelector('#contentCol');

    window.observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            contentCol.onmousemove = function(){
                getChat();
                modFB('group');
                console.log("UpdatePage");
            };
        });
    });

    window.config = {characterData: true, subtree: true};
    observer.observe(contentCol, config);
    //observer.disconnect();
}

function modFB(type){
    if(type === 'group'){
        try{
            var titulo = document.querySelector('h2');
            if(titulo.textContent === "Os Mitadores"){
                var navBar = document.querySelector('._52fl');
                var navJoin = navBar.children[0];
                var navRight = navBar.children[1];
                var navShare = navRight.children[0];
                var navNotify = navRight.children[1];
                navNotify = navNotify.children[1];
                navNotify = navNotify.children[0];
                navNotify = navNotify.lastChild;
                navJoin.style.display = 'none';
                navShare.style.display = 'none';
                navNotify.textContent = '';
                titulo = titulo.parentElement;
                titulo.innerHTML = '';
            }
        }catch(errinho){
            
        }
    }
}

function mythBook(){

    document.onmousemove = function(){getChat();modFB('group')};
    var queryMitos = document.getElementById('q');
    queryMitos.placeholder = "Procure mitos, mitoses e mitarias"; // Texto temporário
    var j = document.querySelectorAll('a');
    var aLink = 0;
    try {
        do{
            var pth = j[aLink].href;
            if((pth.search('facebook.com/find-friends') !== -1)||(pth.search('facebook.com/?sk=ff') !== -1)){
                var findMitos = j[aLink];
            } aLink++;
        }while(!findMitos);

        findMitos.textContent = "Encontrar mitos";
    } catch (treta) {
        console.log(treta.message);
    }

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

function getChat(){

    try {
        var selectChat = document.querySelectorAll('a.titlebarText');
        if(selectChat[0]){
            var chat = '';
            for(var i in selectChat){
                if ((selectChat[i].href === 'https://www.facebook.com/messages/conversation-671692929530410')||(selectChat[i].href === 'https://www.facebook.com/messages/conversation-1421522588082297')) {
                    chat = selectChat[i];
                    for(var x = 0; x < 6; x++){
                        chat = chat.parentElement;
                    }
                }
            }
            chat.id = 'mitadores';
        }
    } catch (coiso) {
        console.log(coiso.message);
    }
}
