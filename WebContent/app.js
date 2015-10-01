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
                type  : 'border',
                //,
               // align : 'stretch'
            },
            
            items : [
			{
				
				region: 'north',			
		    	bodyStyle : 'background-color :black;',
		        items: [
					{
						xtype :'image',
					////autoE1='div',
						height:150,
						width :300,					
						src : "app/Images/verizon_black.jpg"	,
						margin: '30 0 0 100'
					}
				]

			}
		,
		
                { region: 'center',

                    xtype : 'mvc-LoginView'// ,
              /*      flex  : 2
                },
                { 
                    xtype : 'mvc-LoginView',
                    flex  : 1*/
                }
            ]
        });
    }
});