Ext.define('MVC.view.Master', {
    extend : 'Ext.grid.Panel',
    xtype  : 'mvc-MasterView',
    title : 'Master Panel 6',
    
    store : 'People',
    
    columns: [
        { 
            text      : 'Name',  
            dataIndex : 'name' 
        },
        { 
            text      : 'Email', 
            dataIndex : 'email', 
            flex      : 1 
        },
        { 
            text      : 'Phone',
            dataIndex : 'phone' 
        }
    ]
});