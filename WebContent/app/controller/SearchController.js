Ext.define('MVC.controller.SearchController',{
	extend:'Ext.app.Controller',
	
	
	init: function(){		
		 this.control({
	            'mvc-RepScreenView > button#GetRecord' : {
	                click : this.onLoginButtonClick
	            }
	        });
	},
	onSearchButtonClick : function(btn) {
		
	       alert("No Records Found");
	}
	
});