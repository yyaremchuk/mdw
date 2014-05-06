Ext.define("App.store.PatientStore", {
    extend: "Ext.data.Store",
    config: {
        model: 'App.model.PatientModel',
        proxy: {
            type: 'ajax',
            url: 'http://94.247.101.69:8090/bmapp/api/patients',
            defaultHeaders: ['Access-Control-Request-Method', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin'],
            withCredentials: true,
            reader: {
                type: "json",
                rootProperty: "items"
            }
        },
        sorters: [{
            property : "name",
            direction: "ASC"
        }]
     }
});