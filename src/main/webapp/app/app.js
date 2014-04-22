/**
 * 
 */
Ext.application({
    name: 'App',
    models: ['PatientModel'],
    stores: ['PatientStore'],
    views: ['PatientList', 'LoginForm'],
    controllers: ['MyController'],
    launch: function () {

    	Ext.Viewport.add({xtype: 'loginForm'});
    }
});