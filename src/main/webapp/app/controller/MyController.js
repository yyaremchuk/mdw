Ext.define('App.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	loginButton: 'button',
        	loginForm: 'loginForm'
        },
        control: {
        	loginButton: {
        		tap: 'onSubmit'
        	}
        }
    },
    
    onSubmit: function(button) {
    	var data = this.getLoginForm().getValues();
    	console.log(data);

    	Ext.Ajax.request({
    	    url: 'http://94.247.101.69:8090/bmapp/api/authentication',
    	    method: 'POST',
    	    defaultHeaders: ['Access-Control-Request-Method', 'Access-Control-Allow-Credentials'],
    	    withCredentials: true,
    	    params: {
    	        username: data.username,
    	        password: data.password
    	    },
    	    success: function(response){
    	        console.log('ok');
    	        // load store
    	        Ext.getStore('PatientStore').load({
    	        	params: {
    	        		type: 7
    	        	},
    	        	callback: function(records, operation, success) {
    	        		
    	        		if (!success) {
    	        			Ext.Msg.alert('Server error', 'Internal Server Error', Ext.emptyFn);
    	        		}
       	            }
    	        });
    	        Ext.Viewport.setActiveItem({xtype: 'patientList'});
    	    },
    	    failure: function(response, opts) {
    	        console.log('server-side failure with status code ' + response.status);
    	        console.log(response);
    	        Ext.Msg.alert('Authentication Error', 'Something went wrong', Ext.emptyFn);
    	    }
    	});
    }    
});