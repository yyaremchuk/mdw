Ext.define("App.view.LoginForm", {
    extend: "Ext.form.Panel",
    alias: 'widget.loginForm',
    config: {
    	itemId: 'ourLoginForm',
    	items: [{
    		xtype: 'fieldset',
        	title: 'Login',
        	instructions: 'Enter your username and password',
        	items: [{
        		xtype: 'textfield',
        		label: 'Username',
        		placeHolder: 'your name',
        		name: 'username'
        	}, {
        		xtype: 'passwordfield',
        		label: 'Password',
        		placeHolder: 'password',
        		name: 'password'
        	}, {
        		xtype: 'button',
        		ui: 'decline',
        		text: 'Submit'
        	}]
    	}]
    }
});