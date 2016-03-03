/**
 * Created by Artyom on 03.03.2016.
 * Generating table from matrix
 * operating with matrix tables functions
 */

const MAX_ROWS = 10;
const MIN_ROWS = 1;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 1;

/**
 * Add new row to 1st table amd new column for 2nd table
 * @param tableIDforRow
 * @param tableIDforColumn
 */
var addRowAndColumn = function (tableIDforRow, tableIDforColumn) {
    addTableRow(tableIDforRow);
    addTableColumn(tableIDforColumn);
}

/**
 * Delete row from 1st table amd column from 2nd table
 * @param tableIDforRow
 * @param tableIDforColumn
 */
var deleteRowAndColumn = function (tableIDforRow, tableIDforColumn) {
    deleteTableRow(tableIDforRow);
    deleteTableColumn(tableIDforColumn);
}

/**
 * Add new row with '0' to end of table
 * @param tableID
 */
var addTableRow = function (tableID) {
    var table = document.getElementById(tableID);
    if (table.rows.length < MAX_ROWS) {
        var newRow = table.insertRow(-1);
        for (var i = 0; i < table.rows[0].cells.length; i++) {
            var newCell = newRow.insertCell(-1);
            newCell.innerHTML = '0';
        }
    }
}

/**
 * Delete last row
 * @param tableID
 */
var deleteTableRow = function (tableID) {
    var table = document.getElementById(tableID);
    if (table.rows.length > MIN_ROWS) table.deleteRow(-1);
}

/**
 * Add new column with '0' to end of table
 * @param tableID
 */
var addTableColumn = function (tableID) {
    var table = document.getElementById(tableID);
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells.length < MAX_COLUMNS) {
            var newCell = table.rows[i].insertCell(-1);
            newCell.innerHTML = '0';
        }
    }
}

/**
 * Delete last column
 * @param tableID
 */
var deleteTableColumn = function (tableID) {
    var table = document.getElementById(tableID);
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells.length > MIN_COLUMNS) table.rows[i].deleteCell(-1);
    }
}
