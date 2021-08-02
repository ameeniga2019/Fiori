/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"ZAMR-app/Zamr-app/test/integration/NavigationJourneyPhone",
		"ZAMR-app/Zamr-app/test/integration/NotFoundJourneyPhone",
		"ZAMR-app/Zamr-app/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});