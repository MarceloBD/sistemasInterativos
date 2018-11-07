var comp = Vue.component('component-add', {
	props: ['items'],
	methods:{
		add:function(){
			this.$parent.items.push({text:this.$parent.items.text});
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
