Vue.component('data-table', {
    props: {
       /* headline: {
            type: String,
            default: '[String missing]',
            required: true
        },*/
        data: {
            type: Array,
            required: true
        }
    },
    template: '<div>' +
        '<slot name="headline"></slot>' +
        '<table class="table">' +
        '<slot name="caption"></slot>' +
        '<tr v-for="(item, index) in data" :key="index">' +
        '<td v-for="prop in item">{{prop}}</td>' +
        '<td>' +
        '<button class="btn btn-primary" @click="select(item.id)">' +
        'Select</button></td>' +
        '</tr>' +
        '</table>'+
        '</div>',
    data: function () {
        return {
            title: 'Customer List'
        }
    },
    methods: {
        select: function (id) {
            this.$emit('onSelectCustomer', id)
        }
    }
});
