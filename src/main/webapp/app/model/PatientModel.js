Ext.define('App.model.PatientModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'age',   type: 'int'},
            {name: 'phone', type: 'string'},
            {name: 'alive', type: 'boolean', defaultValue: true},
            {name: 'status', convert: function(value, record) {
            		return record.get('alive') ? 'Patient is alive' : 'Patient is deceased';
            	}
            }
        ]
    }
});