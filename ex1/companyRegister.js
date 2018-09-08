var companyCount = 0

function addNewCompany() {
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
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	
	var space = document.createElement('span');
	space.setAttribute('style', 'width:33px; display:inline-block');	
	fieldset.appendChild(space);

	node = document.createElement("input");
	text = document.createTextNode("País");
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Segmento (Por exemplo, Tecnologia e Informática)");	
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Início");
	fieldset.appendChild(text);
	fieldset.appendChild(node);

	node = document.createElement("input");
	text = document.createTextNode("Término");
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Descrição (Informação complementar das atividades desenvolvidas)");
	node.setAttribute("style","width:540px")
	fieldset.appendChild(text);
	fieldset.appendChild(node);
	linebreak = document.createElement("br");
	fieldset.appendChild(linebreak);	

	div.appendChild(fieldset);
}