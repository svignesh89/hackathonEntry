Ext.define('MVC.view.Login', {
    extend : 'Ext.form.Panel',
    xtype  : 'mvc-LoginView',    
    title   : 'Login Page',
    frame   : true,
    border :true,   
    bodyStyle : 'background-color :white;',
   // bodyStyle: "background-image:url(app/Images/verizon_black.jpg)",
    //bodyStyle:'background-image:http://localhost:8080/HackathonTest/app/Images/17hapjk9xx13ijpg.jpg;',
   // style : 'margin: 50px',
    style: "margin: 0px auto 0px auto;",
    layout:'vbox',
    layoutConfig: {     
      pack:'center',
      align:'middle'
    },
    
    items : [
             
{
	xtype :'image',
	////autoE1='div',
	height:150,
	width :750,
	id:'logo',
	src : "app/Images/vvvv.png"	,
	margin: '0 0 30 100'
},    
       {
    	 name: 'LoginAsValue',
    	 fieldLabel: 'Login As',
		 margin: '10 50 15 300',
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
			margin: '10 50 15 300',
            align :'center',
            pack :'center',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
			margin: '10 50 15 300',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, 
        {
            xtype  : 'button',
			margin: '10 50 50 400',
            text   : 'Log in',
            itemId : 'CheckLogin'            
        }
        
    ]
});