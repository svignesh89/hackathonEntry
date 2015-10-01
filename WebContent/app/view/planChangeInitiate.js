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
										height : 450,
										//width : 600,
										bodyPadding : 10,
										style : 'margin: 200px',
										//id : 'mainForm',
										defaultType : 'textfield',
										//bodyStyle : 'background-color :DarkSalmon;',
										bodyStyle : 'background-color :Cornsilk;',
										border : true,
										renderTo : document.body,
										items : [ 
										
										
/*										{
											xtype :'image',
											height:100,
											width :100,
											id:'logo',
											src : "app/Images/vvvv.png"	,
											margin: '0 0 50 20'
										},  
										*/
										
										
										{
											/* //xtype :'numberfield',
											fieldLabel : 'OldPlanId',
											name : 'OldPlanId',
											cls : 'field-margin',
											maxLength: 8,           //Set max length validation
											maskRe:/[0-9.]/ ,
											labelStyle : 'font-weight:bold',
											allowBlank :false,
											disabled : readOnlyForm */
											
											
											
											xtype:'combo',
											fieldLabel : 'OldPlanId',
											name : 'OldPlanId',
											valueField: 'OldPlanId',
											queryMode:'local',
											emptyText: 'OldPlanId',
											store:['8249','2137'],
											displayField:'OldPlanId',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm,
											//required :y
											//autoSelect:true,
											forceSelection:true	,
											editable :false,
											//readOnly :true
											listeners :{
												select :function(cmp){
													//alert(cmp.getValue());
													var planId=cmp.getValue();
													var oldPlanDescr=Ext.getCmp('oldPlanDesc');
													if(planId =='8249'){
															oldPlanDescr.setValue("Nation wide basic plan");
													}
													else if (planId =='2137'){
														oldPlanDescr.setValue("Nation wide 20 text and 150 MB data plan");
													}
													
												}
											}
										}, {
											fieldLabel : 'OldPlanDescription',
											name : 'OldPlanDescription',
											id :'oldPlanDesc',
											//emptyText: 'OldPlanDescription',
											labelStyle : 'font-weight:bold',
											readOnly :true,
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
											editable :false,
											//readOnly :true
											listeners :{
												select :function(cmp){
													//alert(cmp.getValue());
													var planId=cmp.getValue();
													var newPlanDesc=Ext.getCmp('newPlDesc');
													if(planId =='8241'){
															newPlanDesc.setValue("Nation wide 50 text and 300 MB data plan");
													}
													else if (planId =='7652'){
														newPlanDesc.setValue("Nation wide 100 text and 500 MB data plan");
													}
													else if (planId =='5623'){
														newPlanDesc.setValue("Nation wide unlimited text and  unlimited data plan");
														
													}
													else if (planId =='3422'){
														newPlanDesc.setValue("Nation wide 150 text and 700 MB data plan");
														
													}
													else if (planId =='2132'){
														newPlanDesc.setValue("Nation wide 500 text and 1GB data plan");
													}
													else if (planId =='3123'){
														newPlanDesc.setValue("Nation wide 1000 text and 5GB data plan");
													}
													else if (planId =='9856'){
														newPlanDesc.setValue("Nation wide 1500 text and 10GB data plan");
													}
													else if (planId =='6589'){
														newPlanDesc.setValue("Nation wide limited free voice calls");
													}
													else {
														newPlanDesc.setValue("Nation wide limited text and limited data plan");
													}
												}
											}
										}, 
										
										{
											fieldLabel : 'NewPlanDescription',
											id:'newPlDesc',
											name : 'NewPlanDescription',
											labelStyle : 'font-weight:bold',
											//emptyText: 'NewPlanDescription',
											readOnly :true,
											disabled : readOnlyForm
										}, {
											xtype : 'textfield',
											fieldLabel : 'EmailAddress',
											name : 'EmailAddress',
											columnWidth : 0.6,
											emptyText: 'Enter the email address as abc@gmail.com',
											vtype : 'email',
											labelStyle : 'font-weight:bold',
											disabled : readOnlyForm
										}, {
											xtype : 'textareafield',
											grow : true,
											fieldLabel : 'Remarks',
											name : 'Remarks',
											//emptyText:'Update the comment here, if any',
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
																msg : 'Dear Customer,your plan change request has been successfully completed.',
																width : 500,
																height :100,
																closable : false,
																buttons : Ext.Msg.OK,
																fn: function(buttonId) {
																	if (buttonId === "ok") {
																		window.location="index2.html";
																	}
																}

																/* buttonText : 
																{
																	OK : 'Okay',
																   
																} */
																
																
															});
															
														} 
														else {
															if (form.isValid()) { // make sure the form contains valid data before submitting
																var oldPlanId=formData.OldPlanId;
																var NewPlanId=formData.NewPlanId;
																
																if(NewPlanId !='7652' && NewPlanId !='2132'){
																	myForm.close();
																    Ext.Msg.alert('Information', 'You have been redirected to pre confirmation page to validate the values.');
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
																			newPlanId: formData.NewPlanId
																		},
																		success: function(response){
																			var text = response.responseText;
																			console.log(text);
																			var oPin=Ext.JSON.decode(text).data[0].OPIN;
																			//Ext.Msg.alert('OPIN Window', oPin);
																			// process server response here
																			Ext.Msg.show({
																				title : 'Call Us',
																				msg : 'Dear Customer,your plan change transaction is failed.<br/> Your one time passcode(OTP) is <b><u><font color=green >'+oPin +'</font></u></b></span>. Kindly save this unique number and call us on +1-813-617-4294 to serve you better. It is valid for 15 minutes ',
																				width : 500,
																				height :200,
																				closable : false,
																				buttons : Ext.Msg.OK,
																				buttonText : 
																				{
																					OK : 'Okay',
																				   
																				}
																				//listeners:{
																				
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
																new Ext.Viewport({
		    layout: 'border',
			bodyStyle : 'background-color :white;',
		    items: [{
		        region: 'north',
		    	bodyStyle : 'background-color :white;',
		        items: [
				{
					xtype :'image',
				////autoE1='div',
					height:150,
					width :300,					
					src : "app/Images/nvzw.png"	,
					margin: '30 0 0 100'
},
{
				xtype:'button',
				text   : 'Log out',
				margin: '50 10 50 550',
				listeners:{
				click: function()
				{
					window.location = 'index.html';
				}
	   }
	   }
		]
    }]
});
			}

			new callMyForm(false)
		});
