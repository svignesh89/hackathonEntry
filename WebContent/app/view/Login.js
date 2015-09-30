Ext.define('MVC.view.Login', {
    extend : 'Ext.form.Panel',
    xtype  : 'mvc-LoginView',    
    title   : 'Login Page',
    frame   : true,
    padding : 10,  
    
    items : [{
    	 name: 'LoginAsValue',
    	 fieldLabel: 'Login As',
    	    //hiddenName: 'myComboId',
    	    xtype: 'combo',
    	    queryMode:'local',
    	    valueField: 'id',
    	    displayField: 'name',
    	    store: {
    	        model: 'MVC.model.LoginAs',
    	        data: [
    	            [ 'Customer', 'CU'],
    	            [ 'Customer Rep', 'CR']
    	            
    	        ]
    	    }
    }, 
    	{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, 
        {
            xtype  : 'button',
            text   : 'Log in',
            itemId : 'CheckLogin'            
        }
    ]
});