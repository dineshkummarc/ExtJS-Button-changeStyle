/*
 * changeStyle Button override
 * it allows you to change scale, iconAlign, iconCls, arrowAlign and cls after rendering
 * Copyright(c) 2010 Florian Cargoët
 * License : GPLv3
 * http://www.gnu.org/copyleft/gpl.html
 */
 
Ext.override(Ext.Button,{
    changeStyle:function(o){
        //remove old styles
        var targs = this.getTemplateArgs();
        //main cls, uses split to get a string for each cls to remove
        this.el.removeClass(targs[3].split(' '));
        //scale and iconAlign
        this.el.child('tbody').removeClass(targs[4].split(' '));
        //iconCls
        this.el.child(targs[1]).removeClass(targs[2].split(' '));
        //arrowAlign
        this.el.child('em').removeClass(targs[5].split(' '));
 
        //apply conf and add new styles
        Ext.apply(this,o);
        targs = this.getTemplateArgs();
 
        this.el.addClass(targs[3]);
        this.el.child('tbody').addClass(targs[4]);
        this.el.child(targs[1]).addClass(targs[2]);
        this.el.child('em').addClass(targs[5]);
    }
});
