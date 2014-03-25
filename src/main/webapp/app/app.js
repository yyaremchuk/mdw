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
            	docked: 'top'
            		
            }]
        });
    }
});