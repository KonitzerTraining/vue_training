
Vue.component('customer-dashboard', {

    template: '<div>' +
        '<h1>{{title}}</h1>' +
        '<data-table :headline="tableHeadline"></data-table>' +
        '</div>',
    data: function () {
        return {
            version: '0.0.1',
            date: 'März 2020',
            tableHeadline : 'Customer List!',
            title: 'Customer Dashboard',
            customers: [
                {
                    id: 1,
                    name: 'Hans'
                },
                {
                    id: 2,
                    name: 'Hans II.'
                }
            ]
        }
    },
    computed: { // Cached
        info: function () {
            return this.version + ' ' + this.date;
        }
    },
    watch: {
        date: function (newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    }
});
