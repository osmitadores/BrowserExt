
var options = document.createElement('li');
options.className = '_54ni navSubmenu __MenuItem';
var optLink = document.createElement('a');
optLink.className = '_54nc';
optLink.id = 'mythoptions';
var spanm = document.createElement('span');
var optSpan = document.createElement('span');
optSpan.className = '_54nh';
optSpan.innerHTML = 'Mitatizador';

spanm.appendChild(optSpan);
optLink.appendChild(spanm);
options.appendChild(optLink);

try {
    var optionsBar = document.querySelector('._1xn5._1ayn._p');
    optionsBar.onclick = function(){
        addOptions(optionsBar);
    }

} catch (e) {

}



main();

function main(){

        if(!localStorage.mythTest){
            localStorage.mythTest="Lorem Ipsum";
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


}

function showOptions(){
    alert("- Opções -");
}

function addOptions(){

    var optionsNav = document.querySelector('._54nf');
    optionsNav.appendChild(options);

    options.onclick = function(){
        showOptions();
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
