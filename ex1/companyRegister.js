function addNewCompany() {
	var div = document.getElementById("job");

	var node = document.createElement("input");
	var text = document.createTextNode("Nome da empresa");
	node.setAttribute("type", "text");	
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("País");
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Segmento (Por exemplo, Tecnologia e Informática)");	
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Início (Data de início do contrato de trabalho)");
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Término  (Data  de  término  do  contrato  de  trabalho  ou  se  for  o  emprego  atual  o campo término pode ficar em branco)");
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);

	node = document.createElement("input");
	text = document.createTextNode("Descrição (Informação complementar das atividades desenvolvidas)");
	div.appendChild(text);
	div.appendChild(node);
	linebreak = document.createElement("br");
	div.appendChild(linebreak);	
}