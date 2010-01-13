/*!
 * Ext JS Library 3.0.0
 * Copyright(c) 2006-2009 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

 /*
  * Modifications by Florian Cargoët :
  *  - showChangeStyleWindow function def
  *  - set this function as button handler
  *  - set BLANK_IMAGE_URL to cachefly CDN
  */

Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.0.0/resources/images/default/s.gif';



Ext.onReady(function(){

    // This function renders a block of buttons
    function renderButtons(title){

        Ext.getBody().createChild({tag: 'h2', html: title});

        new ButtonPanel(
            'Text Only',
            [{
                text: 'Add User'
            },{
                text: 'Add User',
                scale: 'medium'
            },{
                text: 'Add User',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon Only',
            [{
                iconCls: 'add16'
            },{
                iconCls: 'add24',
                scale: 'medium'
            },{
                iconCls: 'add',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon and Text (left)',
            [{
                text: 'Add User',
                iconCls: 'add16'
            },{
                text: 'Add User',
                iconCls: 'add24',
                scale: 'medium'
            },{
                text: 'Add User',
                iconCls: 'add',
                scale: 'large'
            }]
        );

        new ButtonPanel(
            'Icon and Text (top)',
            [{
                text: 'Add User',
                iconCls: 'add16',
                iconAlign: 'top'
            },{
                text: 'Add User',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'top'
            },{
                text: 'Add User',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'top'
            }]
        );

        new ButtonPanel(
            'Icon and Text (right)',
            [{
                text: 'Add User',
                iconCls: 'add16',
                iconAlign: 'right'
            },{
                text: 'Add User',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'right'
            },{
                text: 'Add User',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'right'
            }]
        );

        new ButtonPanel(
            'Icon and Text (bottom)',
            [{
                text: 'Add User',
                iconCls: 'add16',
                iconAlign: 'bottom'
            },{
                text: 'Add User',
                iconCls: 'add24',
                scale: 'medium',
                iconAlign: 'bottom'
            },{
                text: 'Add User',
                iconCls: 'add',
                scale: 'large',
                iconAlign: 'bottom'
            }]
        );
    }

    renderButtons('Normal Buttons');

    ButtonPanel.override({
        enableToggle: true
    });

    renderButtons('Toggle Buttons');

    ButtonPanel.override({
        enableToggle : undefined,
        menu : {items: [{text:'Menu Item 1'},{text:'Menu Item 2'},{text:'Menu Item 3'}]}
    });

    renderButtons('Menu Buttons');

    ButtonPanel.override({
        split: true,
        defaultType: 'splitbutton'
    });

    renderButtons('Split Buttons');

    ButtonPanel.override({
        split: false,
        defaultType: 'button',
        arrowAlign: 'bottom'
    });

    renderButtons('Menu Buttons (Arrow on bottom)');

    ButtonPanel.override({
        split: true,
        defaultType: 'splitbutton'
    });

    renderButtons('Split Buttons (Arrow on bottom)');
});

var showChangeStyleWindow = function(btn){
    var iconCls = btn.iconCls,
        iconAlign = btn.iconAlign,
        arrowAlign = btn.arrowAlign,
        scale = btn.scale;
    var win = new Ext.Window({
        title:'Change Button config ('+btn.id+')',
        items:{
            xtype:'form',
        ref:'form',
        labelWidth: 75, // label settings here cascade unless overridden
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        defaults: {width: 230},
        defaultType: 'textfield',

        items: [{
                fieldLabel: 'scale',
                name: 'scale',
                value:scale
            },{
                fieldLabel: 'iconCls',
                name: 'iconCls',
                value:iconCls
            },{
                fieldLabel: 'iconAlign',
                name: 'iconAlign',
                value:iconAlign
            }, {
                fieldLabel: 'arrowAlign',
                name: 'arrowAlign',
                value:arrowAlign
            }
        ],

        buttons: [{
            text: 'Apply configuration',
            handler:function(){
                var conf = win.form.getForm().getValues();
                btn.changeStyle(conf);
            }
        },{
            text: 'Close',
            handler:function(){
                win.close();
            }

        }]
    }
        
    });
        win.show();
    
}
// Helper class for organizing the buttons
ButtonPanel = Ext.extend(Ext.Panel, {
    layout:'table',
    defaultType: 'button',
    baseCls: 'x-plain',
    cls: 'btn-panel',
    renderTo : 'docbody',
    menu: undefined,
    split: false,

    layoutConfig: {
        columns:3
    },

    constructor: function(desc, buttons){
        // apply test configs
        for(var i = 0, b; b = buttons[i]; i++){
            b.menu = this.menu;
            b.enableToggle = this.enableToggle;
            b.split = this.split;
            b.arrowAlign = this.arrowAlign;
            b.handler = showChangeStyleWindow;
        }
        var items = [{
            xtype: 'box',
            autoEl: {tag: 'h3', html: desc, style:"padding:15px 0 3px;"},
            colspan: 3
        }].concat(buttons);

        ButtonPanel.superclass.constructor.call(this, {
            items: items
        });
    }
});
