var comp = Vue.component('component-add', {
	methods:{
		add:function(){
			this.items.push({text:this.items.text});
		}
	},
	template: '<input type="submit" name="send" value="Adicionar" v-on:click="add"/>'
});	

new Vue({el: '#app',
	data:{
		items: []
	},
	components:{comp}
});
