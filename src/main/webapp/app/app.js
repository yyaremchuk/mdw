/**
 * 
 */
Ext.application({
    name: 'App',
    models: ['PatientModel'],
    stores: ['PatientStore'],
    views: ['PatientList'],
    launch: function () {

    	Ext.Viewport.add({xtype: 'patientList'});
    }
});