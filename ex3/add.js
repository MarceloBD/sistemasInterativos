
var company = Vue.component('Company', {
	props:['i'],
	  template: '<div id="job"><fieldset style="width:100%"><legend>Emprego {{i}}</legend>Nome da empresa<input type="text" sytle="padding-right: 60px" style="width:220px;" required="true" name="company_name"><span style="width:33px; display:inline-block"></span>País<input required="true" style="width:230px;" name="company_country"><br>Segmento (Por exemplo, Tecnologia e Informática)<input required="true" style="width:230px;" name="area"><br>Início<input required="true" style="width:230px;" type="date" name="start">Término<input style="width:230px;" type="date" name="end"><br>Descrição (Informação complementar das atividades desenvolvidas)<input style="width:519px" required="true" name="description"><br></fieldset></div>'
	});

const but_comp = new Vue({
		el:'#addC',
		data:{number: 0},
		methods:{add:function(){
		this.number += 1;
		console.log(this.number)
	}
	}
});