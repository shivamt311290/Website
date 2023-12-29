sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
    "use strict";
    return UIComponent.extend("MyApp.Component", {
        metadata : {
            manifest: "json"
        },
        // init: function () {
        //     // call the base component's init function. In ABAP we have this.super()
        //     UIComponent.prototype.init.apply(this, arguments);

        //     // create and set the i18n model
        //     var i18nModel = new ResourceModel({
        //         bundleName: "MyApp.i18n.i18n"
        //     });
        //     this.setModel(i18nModel, "i18n");
        // }        
    });
});
