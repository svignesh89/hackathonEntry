Ext.define('MVC.controller.Detail', {
    extend : 'Ext.app.Controller',
    
    init : function() {
        this.control({
            'mvc-DetailView > button#SaveRecord' : {
                click : this.onSaveButtonClick
            }
        });
    },
    
    onSaveButtonClick : function(btn) {
        //get reference to the form
        var detailView = btn.up('mvc-DetailView');
        
		//get the form inputs
        var data = detailView.getValues();
        
        //see if the record exists
        var store = Ext.getStore('People');
        console.log(data.id)
        var record = store.getById(data.id);

        if (!record) {
            Ext.Msg.alert('Error', 'Sorry, no record with that ID exists.');
            
            return;
        }
        
		//manually update the record
        detailView.updateRecord();
    }
});