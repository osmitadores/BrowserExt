var mitatizador = {
    version:'version 0.5',
    chat: [
        'https://www.facebook.com/messages/conversation-671692929530410',
        'https://www.facebook.com/messages/conversation-1421522588082297'
    ],
    searchButton: 'Encontrar mitos',
    searchMsg: 'Procure mitos, mitoses e mitarias',
    groupTitle: 'Os Mitadores',
    smallText: '<small id="copys">Os Mitadores</small>',
    enableChat: `<h3>Chat personalizado</h3>
                 <input class="chatoptions" type="radio" name="chat" value="on">Ativado<br>
                 <input class="chatoptions" type="radio" name="chat" value="off">Desativado`,
    enableGroup: `<h3>Trecos na capa do grupo</h3>
                 <input class="groupoptions" type="radio" name="group" value="hide">Ocultar<br>
                 <input class="groupoptions" type="radio" name="group" value="show">Mostrar`,
    tavernaGroup: `<h3>Trecos na capa da Taverna</h3>
                 <input class="tavernaoptions" type="radio" name="tav" value="hide">Ocultar<br>
                 <input class="tavernaoptions" type="radio" name="tav" value="show">Mostrar`
};

var twitch = {
    ajaxInterval:1800000, // 30 minutos
};
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
modalBox.innerHTML = `<div id="centerbox">
                        <h2 id="configtitle">Myth Configs</h2>
                        <div id="innerbox">
                            ${mitatizador.enableChat}<br><br>
                            ${mitatizador.enableGroup}<br><br>
                            ${mitatizador.tavernaGroup}
                            ${mitatizador.smallText}
                        </div>
                      </div>`;
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

function config(coisa, valor){
    if(valor == 'hide' || valor == 'on'){
        localStorage[coisa] = true;
    }else{
        localStorage.removeItem(coisa);
    }
}

/** @function modFB
 * Oculta alguns elementos em cima da capa de um grupo específico.
 * Funciona da mema forma que 'getChat', dentro de um evento onmousemove.
 * @param groupTitle {string} - Título do grupo.
 * @return {undefined}
 */
function modFB(groupTitle){
    // Bloco try para o caso de não existir um elemento <h2> na página.
    try{
        // obtém o primeiro elemento <h2> que encontrar.
        var titulo = get('tag','h2',1);
        // checa o título do grupo.
        if(titulo.textContent === groupTitle){
            // oculta os botões do grupo.
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

            // oculta o título do grupo.
            titulo = titulo.parentElement;
            titulo.innerHTML = '';
        }
    }catch(errinho){
        // Possível erro conhecido, não há necessidade de lançar.
        if (errinho.name != "TypeError"){
            throw errinho;
        }
    }
}

function notifyHighlight(originLink, newId){
    var notifyLinks = get('query all','a._33e');
    for(var i=0; i < notifyLinks.length;i++){
        if(notifyLinks[i].href.search('www.facebook.com/groups/taverna.do.cogu/822130587905536') != -1){
            var atualLink = notifyLinks[i];
        }
    }
    if(atualLink){
        atualLink.id = newId;
        atualLink.parentElement.parentElement.id = newId;
    }
}

function getTwitch(username){
    $.ajax({
        url:'https://api.twitch.tv/kraken/streams/'+username,
        success:function(channel) {
            twitch.channel = channel;
        },
        error:function() {
            console.error("Deu ruim!");
        }
    });
}

function mythTwitch(){
    try {
        if(twitch.channel.stream !== null){
            alert("Live acontecendo!");
        }else{
            console.log("Feijoada");
        }
    } catch (e) {
        throw e;
    }

}

function setQuery(newMessage){
    try {
        // TODO arrumar query, ID 'q' é variado.
        var queryMitos = get('id','q').placeholder = newMessage;
    } catch (e) {
        console.error('Teu feice tá bugado!');
    }
}

function mythBook(){

    getTwitch('cogumelandooficial');
    setTimeout(mythTwitch,5000);

    twitch.mainLoop = setInterval(function(){
        getTwitch('cogumelandooficial');
        setTimeout(mythTwitch,5000);
    },twitch.ajaxInterval);

    setQuery(mitatizador.searchMsg);
    var j = get('query all','a');
    var aLink = 0;
    try {
        do{
            var pth = j[aLink].href;
            if((pth.search('facebook.com/find-friends') !== -1)||(pth.search('facebook.com/?sk=ff') !== -1)){
                var findMitos = j[aLink];
            } aLink++;
        }while(!findMitos);

        findMitos.textContent = mitatizador.searchButton;
    } catch (treta) {
        console.log(treta.message);
    }

    document.onmousemove = function(){
        if(localStorage.mythChat){
            getChat();
        }
        if(localStorage.mythGroup){
            modFB(mitatizador.groupTitle);
        }
        if(localStorage.tavernaGroup){
            modFB("Taverna do Cogu");
        }
    };

    var notifyButton = document.getElementById('fbNotificationsJewel');
    notifyButton.onclick = function(){
        notifyHighlight('','taverna-divulga');
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
///////////// Opções do chat
        var chatOptions = get('class','chatoptions');
        if(localStorage.mythChat){
            chatOptions[0].checked = true;
        }else{
            chatOptions[1].checked = true;
        }
        chatOptions[0].onclick = function(){
            config('mythChat','on');
        }
        chatOptions[1].onclick = function(){
            config('mythChat','off');
        }
///////////// Opções do grupo
        var groupOptions = get('class','groupoptions');
        if(localStorage.mythGroup){
            groupOptions[0].checked = true;
        }else{
            groupOptions[1].checked = true;
        }
        groupOptions[0].onclick = function(){
            config('mythGroup','hide');
        }
        groupOptions[1].onclick = function(){
            config('mythGroup','show');
        }
///////////// Opções do grupo (taverna)
        var tavernaOptions = get('class','tavernaoptions');
        if(localStorage.tavernaGroup){
            tavernaOptions[0].checked = true;
        }else{
            tavernaOptions[1].checked = true;
        }
        tavernaOptions[0].onclick = function(){
            config('tavernaGroup','hide');
        }
        tavernaOptions[1].onclick = function(){
            config('tavernaGroup','show');
        }

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

/** @function getChat
 * Método que faz a inserção do id em um chat específico.
 * Como o facebook reseta os elementos de um chat quando ele é fechado,
 * é preciso inserir o id toda vez que ele é aberto.
 * Para poder inserir o id no chat específico, é nesserário fazer uma
 * checagem com uma frequência específica (no caso o evento onmousemove).
 * @throws Lança erro por alguma eventualidade, pois as exceções conhecidas já estão tratadas.
 * @return {undefined}.
 */
function getChat(){
    try{
        /** Forçando uma exceção (TypeError).
         * Se o id não existir, ele vai lançar uma exceção e vai fazer a checagem no catch.
         * Se o id já existir (chat já alterado), ele vai ignorar o catch inteiro.
         * A variável 'myth' nunca será usada, só serve pra provocar o erro.
         */
        var myth = get('id','mitadores').id;
    }catch(e){
        try{
            /** Try somente para eventualidades (aparentemente seria
             * impossível lançar um erro aqui, mas melhor deixar).
             * 'selectChats' recebe os chats ativos mas não lança
             * erro mesmo não encontrando nada.
             */
            var selectChats = get('query all','a.titlebarText');

            /** Loop principal de checagem.
             * Este loop checa se o chat específico está aberto.
             * É feita uma checagem antes do loop, se 'selectChats' estiver vazio
             * (nenhum chat aberto), o loop não é executado pois não há necessidade.
             */
            if(selectChats[0]){
                var chat;
                // loop checando todos os chats.
                for(var i = 0; i < selectChats.length; i++){
                    // os chats são checados pelo endereço url (fixo).
                    if ((selectChats[i].href === mitatizador.chat[0])||(selectChats[i].href === mitatizador.chat[1])){
                        // loop para selecionar o elemento pai do chat (6 elementos acima).
                        chat = selectChats[i];
                        for(var x = 0; x < 6; x++){
                            chat = chat.parentElement;
                        }
                        // setando o id do chat.
                        chat.id = 'mitadores';
                    }
                }
            }
        }catch(coiso){
            console.error('Erro desconhecido ao obter o chat!');
            throw coiso;
        }
    }
}

(function(){
    if(!localStorage.mythData){
        localStorage.mythData = true;
        localStorage.mythChat = true;
        localStorage.mythGroup = true;
    }
    mythBook();
})()

//MythQuery-1.1
function get(e,t,r){if(e){if("id"==e)return document.getElementById(t);if("class"==e)return r?maxLength(document.getElementsByClassName(t),r):document.getElementsByClassName(t);if("query"==e)return document.querySelector(t);if("query all"==e)return r?maxLength(document.querySelectorAll(t),r):document.querySelectorAll(t);if("tag"==e)return r?maxLength(document.getElementsByTagName(t),r):document.getElementsByTagName(t)}}
function maxLength(e,t){if(1!=t){for(var r=[],n=0;t>n;n++)r.push(e[n]);return r}return e[0]}
