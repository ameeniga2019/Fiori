/*global QUnit*/

sap.ui.define([
	"ZAMR-app/Zamr-app/model/GroupSortState",
	"sap/ui/model/json/JSONModel"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Ntgew").length, 1, "The sorting by Ntgew returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Mtart").length, 1, "The sorting by Mtart returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Ntgew").length, 1, "The group by Ntgew returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Ntgew if the user groupes by Ntgew", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Ntgew");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Ntgew", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Mtart and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Ntgew");

		this.oGroupSortState.sort("Mtart");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});