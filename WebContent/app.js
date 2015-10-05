Ext.application({
    name : 'MVC',
    appFolder:'app',
    
    views : [
       // 'Master',
        //'Detail'
      'Login'
       //'RepScreen'
    ],
    
    controllers : [
        'Master',
        'Detail','LoginController','SearchController'
    ],
    
    stores : [
        'People', 'LoginAs'
    ],

    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout : {
                	type: 'vbox',
					pack: 'start',
					align: 'stretch'
			  		   
            },
            
            items : [
			{
				
				region: 'north',			
		    	bodyStyle : 'background-color :white;',
		        items: [
					{
						xtype :'image',
					////autoE1='div',
						height:150,
						width :300,					
						src : "app/Images/nvzw.png"	,
						margin: '10 0 0 100'
					}
				]

			}
		,
		
                { 
					region: 'center',
					//{
					 layout: 'hbox',
					 bodyStyle : 'background-color :white;',
					 items: [
						{xtype :'image',
						height:400,
						width :10,					
						src : "app/Images/login.jpg",	
						//margin: '30 0 0 100',
						flex:1},						
						{
								xtype : 'mvc-LoginView',
								width:200,
								height:400,
								margin: '0 40 0 0',
								flex: 1.5
						}
						,{html:'', flex:1}
					 				 
					 ]
					//}
				},
				{
					region: 'south',
					bodyStyle : 'background-color :white;',
					items: [{
						height: 400,
						margin: '250 0 100 1500',
						html: '  <h2>Powered by Acss Support<h2>'
					}]
				}
                
            ]
        });
    }
});