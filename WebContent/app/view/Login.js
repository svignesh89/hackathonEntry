Ext.define('MVC.view.Login', {
    extend : 'Ext.form.Panel',
    xtype  : 'mvc-LoginView',    
    title   : 'Login Page',
    frame   : true,
    border :true,   
    bodyStyle : 'background-color :#ADD8E6;',
	//height :50,
	//width :50,
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
		 margin: '40 50 15 200',
    	    //hiddenName: 'myComboId',
    	    xtype: 'combo',
    	    queryMode:'local',
    	    valueField: 'id',
    	    displayField: 'name',
    	    editable:false,
			labelStyle: 'font-weight:bold;',
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
			labelStyle: 'font-weight:bold;',
			margin: '10 50 15 200',
            align :'center',
            pack :'center',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
			labelStyle: 'font-weight:bold;',
			margin: '10 50 15 200',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, 
        {
            xtype  : 'button',
			margin: '10 50 10 350',
			height: 30,
			width: 75,
            text   : 'Log in',
            itemId : 'CheckLogin'            
        }
        
    ]
});