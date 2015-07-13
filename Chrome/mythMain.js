main();

function main(){
    var saite = window.location.hostname;
    if(saite.search("facebook.com") !== -1){
        alert("É o facebook!");
    }else{
        alert("Otro saite!");
    }
    
    return 0;
}