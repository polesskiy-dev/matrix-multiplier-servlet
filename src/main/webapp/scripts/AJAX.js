/**
 * Created by Artyom on 29.12.2015.
 * Ajax request/response handlers
 * for matrix objects transfer
 */

/**
 * Sends to server 2 matrices to URL: resultMatrixURL
 * Receives result matrix and fill matrixResultTable by it *
 * @param matrix1json
 * @param matrix2json
 * @param resultMatrixURL
 * @param matrixResultTable
 */
var postServerResult = function (matrix1json, matrix2json, resultMatrixURL, matrixResultTable) {
    $.ajax({
            type: 'POST',
            url: resultMatrixURL,
            data: '[' + matrix1json + ',' + matrix2json + ']',
            success: function (data) {
                //assembly Matrix from array[][]
                var matrixResult = new Matrix(data.length, data[0].length, data);
                //clear table
                matrixResultTable.removeChild(matrixResultTable.firstChild);
                //add new body from matrix
                matrixResultTable.appendChild(createTableBody(matrixResult, false));
            },
            dataType: 'json'
        }
    );
}

