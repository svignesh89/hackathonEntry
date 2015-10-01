Ext.define('MVC.controller.LoginController',{
	extend:'Ext.app.Controller',
	
	init: function(){		
		 this.control({
	            'mvc-LoginView > button#CheckLogin' : {
	                click : this.onLoginButtonClick
	            }
	        });
	},
	onLoginButtonClick : function(btn) {
		 var loginView = btn.up('mvc-LoginView');
	        
			//get the form inputs
	        var data = loginView.getValues();
	       // console.log(data);
	       var LoginAsVal = data.LoginAsValue;
	       var userName = data.username;
	       var passWd = data.password;
	       if(LoginAsVal == 'CU')
	       {
	    	 if((userName == 'usr1' && passWd == 'pass1') || (userName == 'usr2' && passWd == 'pass2'))  
	    		 {
	    		    window.location = 'index2.html';
					
	    		    
	    		 }
	    	 else
	    		 {
	    		 	Ext.Msg.alert('Status', 'Invalid Credentials');
	    		 }
	       }
	       else
	    	   {
				   if((userName == 'rep1' && passWd == 'pass1') || (userName == 'rep2' && passWd == 'pass2'))  
	    		 {
	    		 window.location = 'index3.html';
	    		    
	    		 }
	    	 else
	    		 {
	    		 	Ext.Msg.alert('Status', 'Invalid Credentials');
	    		 }
	    	   
	    	   }
	}
	
});