sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("MyApp.Component", {
        metadata : {
            rootView: {
                viewName: "MyApp.view.MyView",
                type: "XML"
            }
        }
    });
});
