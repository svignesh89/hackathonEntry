Ext.define('MVC.view.Login', {
    extend : 'Ext.form.Panel',
    xtype  : 'mvc-LoginView',    
    title   : 'Login Page',
    frame   : true,
    border :true,   
    bodyStyle : 'background-color :Cornsilk;',
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
             
/* {
	xtype :'image',
	////autoE1='div',
	height:150,
	width :300,
	id:'logo',
	src : "app/Images/verizon_black.jpg"	,
	margin: '0 0 30 0'
},  */   
       {
    	 name: 'LoginAsValue',
    	 fieldLabel: 'Login As',
		 margin: '40 50 15 500',
    	    //hiddenName: 'myComboId',
    	    xtype: 'combo',
    	    queryMode:'local',
    	    valueField: 'id',
    	    displayField: 'name',
    	    editable:false,
    	    store: {
    	        model: 'MVC.model.LoginAs',
    	        data: [
    	            [ 'Customer', 'CU'],
    	            [ 'Representative', 'CR']
    	            
    	        ]
    	    }
    }, 
    	{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
			margin: '10 50 15 500',
            align :'center',
            pack :'center',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
			margin: '10 50 15 500',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, 
        {
            xtype  : 'button',
			margin: '10 50 50 650',
            text   : 'Log in',
            itemId : 'CheckLogin'            
        }
        
    ]
});