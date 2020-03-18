
Vue.component('customer-dashboard', {

    template: '<div>' +
        '<h1>{{title}}</h1>' +
        '<data-table :data="customers" @onSelectCustomer="addToSelectedCustomers">' +

        '<h2 slot="headline">Customers</h2>' +
        '<caption slot="caption">actual list</caption>' +
        '</data-table>' +
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
            ],
            selectedCustomers: []
        }
    },
    computed: { // Cached
        info: function () {
            return this.version + ' ' + this.date;
        }
    },
    methods: {
        addToSelectedCustomers: function (id) {
            console.log(id);
        }
    },
    watch: {
        date: function (newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    }
});
