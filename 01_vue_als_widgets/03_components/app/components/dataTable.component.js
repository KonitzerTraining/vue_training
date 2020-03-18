Vue.component('data-table', {
    props: {
        headline: String,
    },
    template: '<div>' +
        '<h2>{{headline}}</h2>' +
        '<table class="table">' +
        '<tr v-for="(customer, index) in customers" :key="index">' +
        '<td v-for="prop in customer">{{prop}}</td>' +
        '</tr>' +
        '</table>'+
        '</div>',
    data: function () {
        return {
            title: 'Customer List'
        }
    }
});
