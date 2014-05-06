Ext.define('App.model.PatientModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'name', convert: function(value, record) {return record.get('lastName') + ', ' + record.get('firstName')}},
            {name: 'age',   type: 'int'},
            {name: 'identifier', type: 'string'},
            {name: 'phone', type: 'string'},
            {name: 'alive', type: 'boolean', defaultValue: true},
            {name: 'status', convert: function(value, record) {
            		return record.get('alive') ? 'Patient is alive' : 'Patient is deceased';
            	}
            }
        ]
    }
});