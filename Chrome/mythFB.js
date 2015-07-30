/// criação do botão de opções
var options = document.createElement('li');
options.className = '_54ni navSubmenu __MenuItem';
var optLink = document.createElement('a');
optLink.className = '_54nc';
optLink.id = 'mythoptions';
var spanm = document.createElement('span');
var optSpan = document.createElement('span');
optSpan.className = '_54nh';
optSpan.innerHTML = 'Mitatizador';
/// caixa modal
var modalBox = document.createElement('div');
modalBox.className = '_3ixn';
modalBox.id = 'modalbox';
modalBox.innerHTML = '<div id="centerbox"> TESTANDO </div>';
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
    var optionsBar = document.querySelector('._1xn5._1ayn._p');
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

    document.onmousemove = function(){
        getChat();
        modFB('group');
    };
    document.body.appendChild(modalBox);
    document.body.appendChild(botaoX);


}

function mythOptions(toggle){
    if(toggle === 'show'){
        modalBox.style.display = 'block';
        botaoX.style.display = 'block';

        var closeModal = document.querySelector('#closebox');
        closeModal.onclick = function(){
            mythOptions('hide');
        };

    }else if (toggle === 'hide') {
        modalBox.style.display = 'none';
        botaoX.style.display = 'none';
    }
}

function addOptions(){

    var optionsNav = document.querySelector('._54nf');
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
        var myth = document.querySelector('#mitadores').id;
    }catch(e){
        // executar loop
    }finally{

        try{

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
            console.log("Erro no Link do Chat!");
        }

    }
}
