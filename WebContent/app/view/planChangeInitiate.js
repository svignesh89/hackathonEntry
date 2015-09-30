Ext.onReady(function() {

			var callMyForm = function(readOnlyFlag, dataObject) {
				// Ext.create('Ext.form.Panel', {
				// function callMyForm(readOnlyFlag,dataObject){
				var readOnlyForm = readOnlyFlag || false;
			//	if (Ext.getCmp('mainForm') == null) {
					var myForm = Ext.create(
									'Ext.form.Panel',
									{
										formMode : 'edit',
										layout : 'form',
										title : 'Plan Change Form',
										height : 400,
										width : 600,
										bodyPadding : 10,
										style : 'margin: 50px',
										//id : 'mainForm',
										defaultType : 'textfield',
										//bodyStyle : 'background-color :blue;',
										border : true,
										renderTo : document.body,
										items : [ {
											fieldLabel : 'OldPlanId',
											name : 'OldPlanId',
											cls : 'field-margin',
											labelStyle : 'font-weight:bold',
											allowBlank :false,
											disabled : readOnlyForm
										}, {
											fieldLabel : 'OldPlanDescription',
											name : 'OldPlanDescription',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm
										}, {
											xtype:'combo',
											fieldLabel : 'NewPlanId',
											name : 'NewPlanId',
											valueField: 'NewPlanId',
											queryMode:'local',
											emptyText: 'NewPlanId',
											store:['8241','7652','5623','3422','2132','3123','9856','6589','4569'],
											displayField:'NewPlanId',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm,
											//required :y
											//autoSelect:true,
											forceSelection:true	,
											editable :false
											//readOnly :true
										}, 
										
										{
											fieldLabel : 'NewPlanDescription',
											name : 'NewPlanDescription',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm
										}, {
											xtype : 'textfield',
											fieldLabel : 'EmailAddress',
											name : 'EmailAddress',
											columnWidth : 0.6,
											vtype : 'email',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm
										}, {
											xtype : 'textareafield',
											grow : true,
											fieldLabel : 'Remarks',
											name : 'Remarks',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm
										}, ],

										buttons : [
												{
													text : readOnlyForm ? 'Confirm'
															: 'Submit',
													handler : function() {
														var form = this.up('form'); // get the form panel
														
														var formData = myForm
																.getForm()
																.getValues();
														if (readOnlyForm) {
															//alert("Here we need to code the confirmation window");
															myForm.close();
															Ext.Msg.show({
																title : 'Confirmation Window',
																msg : 'Dear User,your plan change request has been successfully completed.',
																width : 500,
																height :200,
																closable : false,
																buttons : Ext.Msg.OK,
																buttonText : 
																{
																	OK : 'Okay',
																   
																}
															});
															
														} 
														else {
															if (form.isValid()) { // make sure the form contains valid data before submitting
																var oldPlanId=formData.OldPlanId;
																var NewPlanId=formData.NewPlanId;
																if(NewPlanId=='7652' || NewPlanId=='2132'){
																	myForm.close();
																    Ext.Msg.alert('Information', 'You have been redirected to pre confirmation page to validate the value which has been entered.');
																	callMyForm(true,
																			formData);
																}
																else{
																	Ext.Ajax.request({
																		url: './FlatFileWrite',
																		method :'POST',
																		waitMsg: 'submitting..',
																		params: {
																			oldPlanId: formData.OldPlanId,
																			NewPlanId:formData.NewPlanId
																		},
																		success: function(response){
																			var text = response.responseText;
																			console.log(text);
																			var oPin=Ext.JSON.decode(text).data[0].OPIN;
																			//Ext.Msg.alert('OPIN Window', oPin);
																			// process server response here
																			Ext.Msg.show({
																				title : 'Call Us',
																				msg : 'Dear User,your one time passcode is '+ oPin +'. Kindly save this unique number and call us to serve you better on 1-200-400-600',
																				width : 500,
																				height :200,
																				closable : false,
																				buttons : Ext.Msg.OK,
																				buttonText : 
																				{
																					OK : 'Okay',
																				   
																				}
																			});
																		}
																	});
																
																}
																	
																	}
																	else{
																		Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
																	}
														}
													}
												},
												{
													text : 'Back',
													hidden : readOnlyForm ? false
															: true,
													handler : function() {
														Ext.Msg.confirm("Confirmation", "Redirecting to the initiation form,Changes made will be lost. Do you wish to continue?", function(btnText){
															if(btnText === "no"){
																Ext.Msg.alert("Alert", "You have opted for 'No'. Kindly validate and proceed for confirmation");
															}
															else if(btnText === "yes"){
																var formData = myForm
																.getForm()
																.getValues();
														if (readOnlyForm) {
															//open in edit mode
															
															myForm.close();
															callMyForm(false,
																	formData);
														}
															//Ext.Msg.alert("Alert", "You have confirmed 'Yes'.");
															}
														}, this);

														
													}
												} ]

									});

				//}
				if (dataObject) {
					myForm.getForm().setValues(dataObject);
				}
				myForm.show();
			}

			new callMyForm(false)
		});
