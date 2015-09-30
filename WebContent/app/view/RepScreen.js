Ext.define('MVC.view.RepScreen', {
    extend : 'Ext.form.Panel',
    xtype  : 'mvc-RepScreenView',    
    title   : 'Home Page',
    frame   : true,
    padding : 50,  
    layout:'column',
    defaults: {
        labelStyle: 'padding-left:20px;'
    },
    items : [
    	{
            columnWidth:0.7,
    		xtype: 'textfield',
            name: 'searchbox',           
            emptyText: ' Enter the OPIN here',
            allowBlank: false
        } ,       
        {
        	columnWidth:0.25,        	
            xtype  : 'button',
            style: 'margin-left:50px;',
             text   : 'Search',
            itemId : 'GetRecord'            
        }
    ]
});