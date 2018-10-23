var companyCount = 0

function setFirstJobNotRequired() {
	$('#fjob').prop('required', false)
}


function addNewCompany() {
	setFirstJobNotRequired();

	companyCount++;
	var div = document.getElementById("job");

	var fieldset = document.createElement("fieldset");
	fieldset.setAttribute("style", "width:100%")

	var legend = document.createElement("legend");
	var legendText = document.createTextNode("Emprego "+companyCount);
	legend.appendChild(legendText);
	fieldset.appendChild(legend);

	var node = document.createElement("input");
	var text = document.createTextNode("Nome da empresa");
	

	node.setAttribute("type", "text");
	node.setAttribute("sytle","padding-right: 60px")
	node.setAttribute('style', 'width:220px;');	
	node.setAttribute("required", "true")
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	
	var space = document.createElement('span');
	space.setAttribute('style', 'width:33px; display:inline-block');	
	fieldset.appendChild(space);

	node = document.createElement("input");
	text = document.createTextNode("País");
	node.setAttribute("required", "true")
	node.setAttribute('style', 'width:230px;');
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Segmento (Por exemplo, Tecnologia e Informática)");	
	node.setAttribute("required", "true")
	node.setAttribute('style', 'width:230px;');
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Início");
	node.setAttribute("required", "true")
	node.setAttribute('style', 'width:230px;');
	node.setAttribute("type", "date");
	
	fieldset.appendChild(text);
	fieldset.appendChild(node);


	node = document.createElement("input");
	text = document.createTextNode("Término");
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	node.setAttribute('style', 'width:230px;');
	node.setAttribute("type", "date");
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Descrição (Informação complementar das atividades desenvolvidas)");
	node.setAttribute("style","width:519px")
	node.setAttribute("required", "true")
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);	

	div.appendChild(fieldset);
}


function firstJob(){

	is_set = $('#fjob').prop('checked');

	if(is_set){
		$('#addCompBut').prop('disabled', true);
	} else{
		$('#addCompBut').prop('disabled', false);
	}


}

