/// Caixa modal

var mitatizador = {
    version:'version 0.4',
    chat: [
        'https://www.facebook.com/messages/conversation-671692929530410',
        'https://www.facebook.com/messages/conversation-1421522588082297'
    ],
    teste:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

/// criação do botão de opções
var options = document.createElement('li');
options.className = '_54ni navSubmenu __MenuItem';
var optLink = document.createElement('a');
optLink.className = '_54nc';
optLink.id = 'mythoptions';
var spanm = document.createElement('span');
var optSpan = document.createElement('span');
optSpan.className = '_54nh';
optSpan.innerHTML = 'Mitatizador <i style="float:right">'+mitatizador.version+'</i>';
/// caixa modal
var modalBox = document.createElement('div');
modalBox.className = '_3ixn';
modalBox.id = 'modalbox';
modalBox.innerHTML = '<div id="centerbox"><div id="innerbox"> '+mitatizador.teste+'</div> </div>';
/// fechar modal
var botaoX = document.createElement('div');
botaoX.id = 'closebox';
botaoX.innerHTML = ' x ';
/// botão core
spanm.appendChild(optSpan);
optLink.appendChild(spanm);
options.appendChild(optLink);

/// query do botão
try {
    var optionsBar = get('query','._1xn5._1ayn._p');
    optionsBar.onclick = function(){
        setTimeout(function(){
            addOptions();
        },1400);
    }

} catch (e) {

}

///

main();

function main(){
        if(!localStorage.mythData){
            localStorage.mythData = true;
            localStorage.mythColor = "#000";
        }
        mythBook();
}

function modFB(type){
    if(type === 'group'){
        try{
            var titulo = get('tag','h2',1);
            if(titulo.textContent === "Os Mitadores"){
                var navBar = get('class','_52fl',1);
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
    var queryMitos = get('id','q');
    // Texto temporário
    queryMitos.placeholder = "Procure mitos, mitoses e mitarias";

    var j = get('query all','a');
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

    document.onmousemove = function(){
        getChat();
        modFB('group');
    };
    document.body.appendChild(modalBox);
    document.body.appendChild(botaoX);


}

// TODO Opções
function mythOptions(toggle){
    if(toggle === 'show'){
        modalBox.style.display = 'block';
        botaoX.style.display = 'block';

        var closeModal = get('id','closebox');
        closeModal.onclick = function(){
            mythOptions('hide');
        };

    }else if (toggle === 'hide') {
        modalBox.style.display = 'none';
        botaoX.style.display = 'none';
    }
}

// Criação evento das opções
function addOptions(){

    var optionsNav = get('class','_54nf',1);
    optionsNav.appendChild(options);

    options.onclick = function(){
        mythOptions('show');

    }
    options.onmouseover = function(){
        options.className = '_54ni navSubmenu __MenuItem _54ne selected';
    }
    options.onmouseout = function(){
        options.className = '_54ni navSubmenu __MenuItem';
    }

}

function getChat(){

    try{
        var myth = get('id','mitadores').id;
    }catch(e){
        try{
            var selectChat = get('query all','a.titlebarText');
            if(selectChat[0]){
                var chat = '';
                for(var i in selectChat){

                    if ((selectChat[i].href === mitatizador.chat[0])||(selectChat[i].href === mitatizador.chat[1])) {

                        chat = selectChat[i];
                        for(var x = 0; x < 6; x++){
                            chat = chat.parentElement;
                        }
                    }
                }
                chat.id = 'mitadores';
            }
        }catch(coiso){
            console.error('Erro ao obter o chat!\n'+coiso);
        }
    }
}

//MythQuery-1.1
function get(e,t,r){if(e){if("id"==e)return document.getElementById(t);if("class"==e)return r?maxLength(document.getElementsByClassName(t),r):document.getElementsByClassName(t);if("query"==e)return document.querySelector(t);if("query all"==e)return r?maxLength(document.querySelectorAll(t),r):document.querySelectorAll(t);if("tag"==e)return r?maxLength(document.getElementsByTagName(t),r):document.getElementsByTagName(t)}else console.info("HOW TO USE:\nArg 1 (String type): id | class | tag | query | query all\nArg 2 (String term): the search term\nArg 3 (Number|String max): maximum number of elements, if required (for NodeList or HTMLCollection)")}
function maxLength(e,t){if(1!=t){for(var r=[],n=0;t>n;n++)r.push(e[n]);return r}return e[0]}