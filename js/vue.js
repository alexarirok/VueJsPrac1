let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  }
})

let app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
})

let app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

let app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
		{ text: 'Learn javaScript' },
		{ text: 'Learn Vue js' },
		{ text: 'Building awesome vue site' }
		]
	}
})

let app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split(' ').reverse().join(' ')
		}
	}
})

let app6 = new Vue ({
	el: '#app-6',
	data: {
		message: ' '
	}
})

Vue.component('todo-item', {
	// The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
let app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'What else are you supposed to eat' }
		]
	}
})