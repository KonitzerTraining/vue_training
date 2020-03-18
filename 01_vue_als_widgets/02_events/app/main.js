// neue Vue-Instanz
let app = new Vue({ // Konfigurations-Objekt
    el: '#crm', // Beliebiger CSS-Selector
    data: {
        counter: 0,
        flag: true
    },
    methods: {
        increment: function (step) {
            if(typeof step !== 'number') step = 1;
            this.counter += step;
        }
    }
});