new Vue({
    el: '#app',
    data: {
        title: 'Hello world',
        link: "http://googl.com"
    },
    methods: {
        sayHello: function() {
            return "Hi";
        },
        sayTitle: function() {
            return this.title;
        }
    }
})