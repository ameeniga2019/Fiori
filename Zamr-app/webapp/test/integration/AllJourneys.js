/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 mymaraSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZAMR-app/Zamr-app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZAMR-app/Zamr-app/test/integration/pages/App",
	"ZAMR-app/Zamr-app/test/integration/pages/Browser",
	"ZAMR-app/Zamr-app/test/integration/pages/Master",
	"ZAMR-app/Zamr-app/test/integration/pages/Detail",
	"ZAMR-app/Zamr-app/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZAMR-app.Zamr-app.view."
	});

	sap.ui.require([
		"ZAMR-app/Zamr-app/test/integration/MasterJourney",
		"ZAMR-app/Zamr-app/test/integration/NavigationJourney",
		"ZAMR-app/Zamr-app/test/integration/NotFoundJourney",
		"ZAMR-app/Zamr-app/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});