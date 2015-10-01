			var mainFunction =function(){

			 var searchForm =Ext.create('Ext.form.Panel', {

										formMode : 'edit',										
										title : 'Search Page',
										height : 500,
										width : 1000,
										bodyPadding : 10,
										autoScroll:true,
										style : 'margin: 50px',
										//id : 'mainForm',
										defaultType : 'textfield',
										bodyStyle : 'background-color :LightCyan;',
										border : true,
										renderTo : document.body,
										items : [								 
																					
										
													{								
													
													xtype: 'textfield',
													id:'oPin',
													name: 'searchbox',           
													emptyText: ' Enter the OPIN here',
													allowBlank: false
													
													},
													{
													xtype  : 'button',
													style: 'margin-left:50px;',
													text   : 'Search',
													itemId : 'GetRecord',
													margin :'12 20 30 40',
													listeners: {
															click: function ()
															{
																var searchPanel=Ext.getCmp('resultPanel');
																searchPanel.show();
																var oPin = Ext.getCmp('oPin').getValue();
																Ext.Ajax.request({
																		url: './FlatFileRead',
																		method :'GET',
																		waitMsg: 'submitting..',
																		params: {
																			//oldPlanId: formData.OldPlanId,
																			//NewPlanId:formData.NewPlanId
																			oPIN:oPin
																		},
																		success: function(response){
																			var text = response.responseText;
																			if(text != null && text !="" && text !=undefined)
																			{
																			var dataResp=Ext.JSON.decode(text).data[0].Line;
																			var dataResp2=Ext.JSON.decode(text).data[1].Line;
																			var dataResp3=Ext.JSON.decode(text).data[2].Line;
																			var dataResp4=Ext.JSON.decode(text).data[3].Line;
																			//Ext.Msg.alert('OPIN Window', oPin);
																			// process server response here
																			searchPanel.removeAll();
																			searchPanel.add({
																				xtype: 'displayfield',
																				margin: '30 0 0 50',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				margin: '0 0 0 50',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp2
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				margin: '0 0 0 50',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp3
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				margin: '0 0 0 50',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp4,
																				height :180
																			});
																		}
																		else
																		{
																			searchPanel.removeAll();
																			searchPanel.add({
																				xtype: 'displayfield',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				margin: '50',
																				value: '  Sorry there is no data to display !!',
																				height :200
																			});
																			
																		}
																			//searchPanel.doLayout();
																		}
																	});
															}
													   }
													}											
												
										 ,
										 									 
										{													       	
										
										xtype  : 'panel',
										id: 'resultPanel',
										//style: 'margin-left:50px;',
										//text   : 'Search',
										title : 'Search Results',
										bodyStyle : 'background-color :Cornsilk;',
										frame: true	,
										hidden: true
													
										}	
									
    	
       
									]

										

									}); 
									new Ext.Viewport({
    layout: 'border',
    items: [
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
					

					},
				{
					xtype:'button',
					text   : 'Log out',
					margin: '100 10 50 550',
					listeners:{
					click: function()
						{
							window.location = 'index.html';
						}
					}
				}
			]
    }, {
        region: 'center',        
		items: [searchForm]
        // the west region might typically utilize a TreePanel or a Panel with Accordion layout
    }/*,  {
        region: 'east',
       items: [
			{
				xtype:'button',
				text   : 'Log out',
				listeners:{
				click: function()
				{
					window.location = 'index.html';
				}
	   }
	   }]
       
        // remaining grid configuration not shown ...
        // notice that the GridPanel is added directly as the region
        // it is not "overnested" inside another Panel
    }, {
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        items: {
            title: 'Default Tab',
            html: 'The first tab\'s content. Others may be added dynamically'
        }
    }*/]
});
			}
Ext.onReady(mainFunction);