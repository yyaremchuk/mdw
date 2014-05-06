Ext.define("App.view.PatientList", {
    extend: 'Ext.Panel',
    alias: 'widget.patientList',
    config: {
        items: [{
        	xtype: 'toolbar',
        	title: 'Top menu',
        	docked: 'top',
        	items: [{
        		xtype: 'button',
            	text: 'Cancel'
        	}, {
        		xtype: 'spacer'
        	}, {
        		xtype: 'button',
            	text: 'Save',
            	handler: function() {
            		Ext.Msg.alert('Title', 'You just pressed Save button', Ext.emptyFn);
            	}
        	}]
        }, {
        	xtype: 'list',
        	itemTpl: '{name}<br/><small>age: {age}, tel: {phone}</small><br/>{status}',
        	height: '100%',
        	store: 'PatientStore'
        }]
    }
});