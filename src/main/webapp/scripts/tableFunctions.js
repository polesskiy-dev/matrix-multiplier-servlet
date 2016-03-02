/**
 * Created by Artyom on 02.03.2016.
 */

var fillTableByRandomMatrix = function(tableToUpdateID, maxValue){
    if (maxValue==undefined) maxValue = 10;
    //table to update
    var table = document.getElementById(tableToUpdateID);

    //new matrix, from table - if matrix exists in table
    //else - random 10x10
    if (table.rows.length!=0){
        //get matrix from table
        var matrixFromTable = newMatrixFromTable(table);
        //fill by random values
        var matrix = generateRandomMatrix(matrixFromTable.rows,matrixFromTable.columns,maxValue);
    } else{
        var matrix = generateRandomMatrix(10,10,maxValue);
    }
    //clear table body
    table.removeChild(table.tBodies[0]);
    //add new tBody with editable cells
    table.appendChild(generateTableBody(matrix, true));
}
