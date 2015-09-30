			var mainFunction =function(){

			Ext.create('Ext.form.Panel', {

										formMode : 'edit',										
										title : 'Search Page',
										height : 400,
										width : 600,
										bodyPadding : 10,
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
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp2
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp3
																			});
																			searchPanel.add({
																				xtype: 'displayfield',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: dataResp4
																			});
																		}
																		else
																		{
																			searchPanel.removeAll();
																			searchPanel.add({
																				xtype: 'displayfield',
																				//fieldLabel: 'Home',
																				name: 'home_score',
																				value: 'Sorry there is no data to display !!'
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
										bodyStyle : 'background-color :pink;',
										frame: true	,
										hidden: true
													
										}	
									
    	
       
									]

										

									});
			}
Ext.onReady(mainFunction);