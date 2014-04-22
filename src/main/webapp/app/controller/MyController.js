Ext.define('App.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	loginForm: 'loginForm',
        	myLoginForm: '#ourLoginForm',
        	loginButton: 'button'
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
    	    params: {
    	        username: data.username,
    	        password: data.password
    	    },
    	    success: function(response){
    	        console.log(response);
    	    },
    	    failure: function(response, opts) {
    	        console.log('server-side failure with status code ' + response.status);
    	    }
    	});
    }    
});