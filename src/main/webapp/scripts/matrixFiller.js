/**
 * Created by Artyom on 26.12.2015.
 */

var updateMatrixTableByRandom = function(tableToUpdateID){
    //max value in matrix = MAX-1
    const MAX = 100;
    //table to update
    var table = document.getElementById(tableToUpdateID);

    //new matrix, from table - if matrix exists in table
    //else - random 10x10
    if (table.rows.length!=0){
        var matrix = newMatrixFromTable(table)
    } else{
        var matrix = new Matrix(10,10,[]);
    }

    //fill matrix by random 0..MAX
    for (var i=0; i<matrix.rows;i++){
        for (var j=0; j<matrix.columns;j++){
            matrix.values[i][j]=Math.floor(Math.random()*MAX);
        }
    }

    //update table body
    table.removeChild(table.tBodies[0]);
    table.appendChild(tableBodyFromMatrix(matrix));
}
