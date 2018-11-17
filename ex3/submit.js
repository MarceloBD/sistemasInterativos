

function formToJson(){
	name = document.getElementsByName('name')[0].value;
	gender = document.querySelector('input[name="gender"]:checked').value;
	civilStatus =  document.getElementsByName('civilStatus')[0].value;
	country =  document.getElementsByName('country')[0].value;
	dcmnt = document.getElementsByName('document')[0].value;
	address =  document.getElementsByName('address')[0].value;
	email =  document.getElementsByName('email')[0].value;
	phone =  document.getElementsByName('phone')[0].value;
	objective =  document.getElementsByName('objective')[0].value;
	pais =  document.getElementById('pais').value;
	estado =  document.getElementById('estado').value;
	cidade =  document.getElementById('cidade').value;
	wageOutput =  document.getElementById('wageOutput').value;
	academic_formation = document.getElementById('education').value;
	professionalAbstract =  document.getElementsByName('professionalAbstract')[0].value;
	nojobs = document.querySelector('.fjob').checked;
	var data={
		'nome':name,
		'genero':gender,
		'estado_civil':civilStatus,
		'pais':country,
		'documento':dcmnt,
		'endereco':address,
		'email':email,
		'celular':phone,
		'objetivo':objective,
		'pais_interesse':pais,
		'estado_interesse':estado,
		'cidade_interesse':cidade,
		'salario':wageOutput,
		'formacao_academica':academic_formation,
		'resumo_profissional':professionalAbstract,
		'primeiro_emprego':nojobs
	}
	var companies = [];
	for(company_number = 0; company_number < companyCount; company_number++){
		companies.push(makeCompanyObject(company_number));
	}
	data.empresa = companies;

	console.log(data);

}


function makeCompanyObject(company_number){
	company_name = document.getElementsByName('company_name')[company_number].value;
	company_country = document.getElementsByName('company_country')[company_number].value;
	area = document.getElementsByName('area')[company_number].value;
	start = document.getElementsByName('start')[company_number].value;
	end = document.getElementsByName('end')[company_number].value;
	description = document.getElementsByName('description')[company_number].value;
	var company_data = {
		'nome':company_name,
		'pais':company_country,
		'segmento':area,
		'inicio':start,
		'termino':end,
		'descricao':description
	}
	return company_data
}