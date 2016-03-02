/**
 * Created by Artyom on 26.12.2015.
 */
/**
 * Matrix obj constructor
 * @param row
 * @param column
 * @param values
 * @constructor
 */
function Matrix(rows, columns, values) {
    this.rows = rows;
    this.columns = columns;
    this.values = values;
}

/**
 * Matrix obj constructor from int[][]
 * @param values
 * @constructor
 */
//TODO fix constructor from values array
/*function Matrix(values) {
    this.values = values;
    this.rows = values.length;
    this.columns = values[0].length;
}*/

/**
 * create new Matrix obj from HTML table
 * @param tableID
 * @returns {Matrix}
 */
var newMatrixFromTable = function (table) {
    var rowsCount = table.rows.length;
    var columnsCount = table.rows[0].cells.length;

    //Create new array for table values
    var tableValuesArray = new Array();
    //iterate through rows
    for (var i = 0; i < rowsCount; i++) {
        //new array for cell values
        var newCellValuesArr = new Array();
        for (var j = 0; j < columnsCount; j++) {
            //iterate through columns
            newCellValuesArr.push(parseInt(table.rows[i].cells[j].innerHTML));
        }
        //add cell values array
        tableValuesArray.push(newCellValuesArr);
    }
    return new Matrix(rowsCount, columnsCount, tableValuesArray);
}

/**
 * create editable Table body from Matrix object
 * @param objMatrix
 * @returns {Element}
 */
var generateTableBody = function (objMatrix, isEditable) {
    //create table body
    var newBody = document.createElement("tbody");
    //iterate rows
    for (var i = 0; i < objMatrix.rows; i++) {
        //create new row
        var row = document.createElement('tr');
        //iterate columns
        for (var j = 0; j < objMatrix.columns; j++) {
            //new cell
            var cell = document.createElement('td');
            cell.contentEditable = isEditable;
            //new value in cell
            cell.innerHTML = objMatrix.values[i][j];
            row.appendChild(cell);
        }
        //add row to tablebody
        newBody.appendChild(row);
    }
    return newBody;
}

/**
 * Generate Matrix with random values up to maxValue, with rowsCount and columnsCount
 * @param rowsCount
 * @param columnsCount
 * @param maxValue
 * @returns {Matrix}
 */
var generateRandomMatrix = function (rowsCount, columnsCount, maxValue) {
    //Create new array for table values
    var tableValuesArray = new Array(rowsCount);
    //iterate through rows
    for (var i = 0; i < rowsCount; i++) {
        //new array for cell values
        tableValuesArray[i]=new Array(columnsCount);
        for (var j = 0; j < columnsCount; j++) {
            //iterate through columns
            tableValuesArray[i][j] = Math.floor(Math.random() * maxValue);
        }
    }
    return new Matrix(rowsCount, columnsCount, tableValuesArray);
}
