function get(type, term, max){
	if(!type){
		console.info('HOW TO USE:\nArg 1 (String type): id | class | tag | query | query all\nArg 2 (String term): the search term\nArg 3 (Number|String max): maximum number of elements, if required (for NodeList or HTMLCollection)');
	}else{
		if(type=='id'){
			return document.getElementById(term);
		}else if(type=='class'){
			if(!max){
				return document.getElementsByClassName(term);
			}else{
				return maxLength(document.getElementsByClassName(term),max);
			}
		}else if(type=='query'){
			return document.querySelector(term);
		}else if(type=='query all'){
			if(!max){
				return document.querySelectorAll(term);
			}else{
				return maxLength(document.querySelectorAll(term),max);
			}
		}else if(type=='tag'){
			if(!max){
				return document.getElementsByTagName(term);
			}else{
				return maxLength(document.getElementsByTagName(term),max);
			}
		}
	}
}
function maxLength(query, amout){
	if(amout!=1){
		var queryList = [];
		for(var i = 0; i < amout; i++){
		queryList.push(query[i]);
		}
		return queryList;
	}else{
		return query[0];
	}
}
