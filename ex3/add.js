
var company = Vue.component('Company', {
	props:['i'],
	  template: '<div id="job"><fieldset style="width:100%"><legend>Emprego {{i}}</legend>Nome da empresa<input type="text" sytle="padding-right: 60px" style="width:220px;" required="true" name="company_name"><span style="width:33px; display:inline-block"></span>País<input required="true" style="width:230px;" name="company_country"><br>Segmento (Por exemplo, Tecnologia e Informática)<input required="true" style="width:230px;" name="area"><br>Início<input required="true" style="width:230px;" type="date" name="start">Término<input style="width:230px;" type="date" name="end"><br>Descrição (Informação complementar das atividades desenvolvidas)<input style="width:519px" required="true" name="description"><br></fieldset></div>'
	});





Vue.component('draggable-header-view', {
  template: '#header-view-template',
  data: function () {
    return {
      dragging: false,
      // quadratic bezier control point
      c: { x: 160, y: 160 },
      // record drag start point
      start: { x: 0, y: 0 }
    }
  },
  computed: {
    headerPath: function () {
      return 'M0,0 L800,0 800,160' +
        'Q' + this.c.x + ',' + this.c.y +
        ' 0,160'
    },
    contentPosition: function () {
      var dy = this.c.y - 160
      var dampen = dy > 0 ? 2 : 4
      return {
        transform: 'translate3d(0,' + dy / dampen + 'px,0)'
      }
    }
  },
  methods: {
    startDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      this.dragging = true
      this.start.x = e.pageX
      this.start.y = e.pageY
    },
    onDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      if (this.dragging) {
        this.c.x = 160 + (e.pageX - this.start.x)
        // dampen vertical drag by a factor
        var dy = e.pageY - this.start.y
        var dampen = dy > 0 ? 1.5 : 4
        this.c.y = 160 + dy / dampen
      }
    },
    stopDrag: function () {
      if (this.dragging) {
        this.dragging = false
        dynamics.animate(this.c, {
          x: 160,
          y: 160
        }, {
          type: dynamics.spring,
          duration: 700,
          friction: 280
        })
      }
    }
  }
})

new Vue({ el: '#animatedTitle',
	data:{number: 0,
		height:800},
	computed: {
    computedHeight: function () {
      return this.height+"px";
    }
  },
methods:{add:function(){
		this.number += 1;
		console.log(this.number)
		this.height += 170;
	} }})

