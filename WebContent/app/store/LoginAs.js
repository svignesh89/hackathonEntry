Ext.define('MVC.store.LoginAs', {
    extend  : 'Ext.data.Store',

    requires : [
        'MVC.model.LoginAs'
    ],
    
    storeId : 'LoginAs',
    model   : 'MVC.model.LoginAs',
    
    data : [
        { 
            'name'  : 'Customer',  
            'id' : 'CU'
        },
        { 
            'name'  : 'Customer Rep',  
            'id' : 'CR'
        }
    ]
});