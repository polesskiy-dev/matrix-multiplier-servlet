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
 * create new Matrix obj from JSON
 * @param serializedMatrixJSON
 * @returns {Matrix}
 */
var newMatrixFromJSON = function (serializedMatrixJSON) {
    var parsedMatrix = JSON.parse(serializedMatrixJSON);
    console.log("new Matrix created with %d rows, %d columns.",parsedMatrix.rows,parsedMatrix.columns);
    return new Matrix(parsedMatrix.rows, parsedMatrix.columns, parsedMatrix.values)
}

/**
 * create new Matrix obj from HTML table
 * @param tableID
 * @returns {Matrix}
 */
var newMatrixFromTable = function(table){
    var rowsCount = table.rows.length;
    var columnsCount = table.rows[0].cells.length;

    //Create new array for table values
    var tableValuesArray = new Array();
    //iterate through rows
    for (var i = 0; i<rowsCount; i++) {
        //new array for cell values
        var newCellValuesArr = new Array();
        for (var j = 0; j<columnsCount; j++) {
            //iterate through columns
            newCellValuesArr.push(parseInt(table.rows[i].cells[j].innerHTML));
        }
        //add cell values array
        tableValuesArray.push(newCellValuesArr);
    }
    return new Matrix(rowsCount,columnsCount,tableValuesArray);
}

/**
 * create Table body from Matrix object
 * @param objMatrix
 * @returns {Element}
 */
var tableBodyFromMatrix = function (objMatrix) {
    //create table body
    var newBody = document.createElement("tbody");
    //iterate rows
    for (i = 0; i < objMatrix.rows; i++) {
        //create new row
        row = document.createElement('tr');
        //iterate columns
        for (j = 0; j < objMatrix.columns; j++) {
            //new cell
            cell = document.createElement('td');
            cell.contentEditable = true;
            /*
             //create input field
             inputField = document.createElement("input");
             //set input field attributes
             //id
             inputField.id = tableName + "Row" + i.toString() + "Column" + j.toString() + "Input";
             //input type
             inputField.type = "text";
             //data required
             inputField.required = true;
             //size
             inputField.size = 1;
             //set value
             inputField.setAttribute("value", iMatrix.values[i][j]);
             cell.appendChild(inputField);
             */
            //new value in cell
            cell.innerHTML = objMatrix.values[i][j];
            row.appendChild(cell);
        }
        //add row to tablebody
        newBody.appendChild(row);
    }
    console.log("Created new tbody element");
    console.log(newBody);
    return newBody;
}
