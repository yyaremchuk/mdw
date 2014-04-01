/**
 * 
 */
Ext.application({
    name: 'App',
    launch: function () {

    	Ext.Viewport.add({
            xtype: 'panel',
            html: 'Simple HTML panel',
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
            	itemTpl: '{title}',
            	height: '100%',
            	data: [{
            		title: 'Patient 1'
            	}, {
            		title: 'Patient 2'
            	}, {
            		title: 'Patient 3'
            	}]
            }]
        });
    }
});