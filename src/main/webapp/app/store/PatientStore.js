Ext.define("App.store.PatientStore", {
    extend: "Ext.data.Store",
    config: {
        model: 'App.model.PatientModel',
        proxy: {
            type: 'ajax',
            url : 'patients.json',
            reader: {
                type: "json",
                rootProperty: "items"
            }
        },
        autoLoad: true,
        sorters: [
//           {property: 'age', direction: 'DESC'},
//           {property: 'name', direction: 'ASC'}
			{
				func1:  function(record1, record2) {
	                return record1.get('age') > record2.get('age') ? 
	                		1 : (record1.get('name') < record2.get('name') ? 1 : 0);
	            },
	            direction: 'DESC'
			}
        ]
     }
});