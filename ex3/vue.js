var Page1 = Vue.component('Page1', {
  data () {
            return {
                msg: 'Hey Nic Raboy'
            }
        },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>' 
});

var Page2 = Vue.component('Page2', {
  template: '<p>You clicked me</p>'
});

const router =  new VueRouter({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Page1",

            }
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        }
    ]
});


Vue.use(VueRouter)
const app = new Vue({
    el:'#app',
    router
 
});




