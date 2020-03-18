// neue Vue-Instanz
let app = new Vue({ // Konfigurations-Objekt
    el: '#crm', // Beliebiger CSS-Selector
    data: {
        url: 'https://www.google.com',
        email: '',
        version: '0.0.1',
        flag: false,
        status: 234, // 1 - 5
        address: {
          street: 'asdf 10',
          zip: '394898'
        },
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
});