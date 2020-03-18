// neue Vue-Instanz
let app = new Vue({ // Konfigurations-Objekt
    el: '#crm', // Beliebiger CSS-Selector
    data: {
        version: '0.0.1',
        status: 234, // 1 - 5
        customers: [
            {
                id: 1,
                name: 'Hans'
            }
        ]
    }
});