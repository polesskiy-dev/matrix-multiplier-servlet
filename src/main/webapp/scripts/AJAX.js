/**
 * Created by Artyom on 29.12.2015.
 */
//var newAJAXrequestSendTablesDataJSON = function (table1ID, table2ID) {
//    //get table by id, generate matrix obj from table, serialize matrix obj to JSON
//    var matrix1JSON = JSON.stringify(newMatrixFromTable(document.getElementById(table1ID)));
//    var matrix2JSON = JSON.stringify(newMatrixFromTable(document.getElementById(table2ID)));
//
//    //new AJAX obj
//    if (window.ActiveXObject) {
//        xhr = new ActiveXObject("Microsoft.XMLHttp");
//    } else {
//        xhr = new XMLHttpRequest();
//    }
//
//    //assembly body of request
//    xhr.body = "matrix1JSON" + "=" + matrix1JSON + "&" + "matrix2JSON" + "=" + matrix2JSON;
//    xhr.open('POST', '/submit', true);
//    //set info about type
//    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//
//    //assign handler
//    xhr.onreadystatechange = function () {
//        // state of 4 means request completed
//        if (xhr.readyState == 4) {
//            //OK
//            if (xhr.status == 200) {
//                var serverResponseResultJSON = xhr.responseText;
//                //debug
//                console.log(serverResponseResultJSON);
//                /*matrixResultJSON = serverResponseResultJSON.toString();
//                //debug
//                console.log(matrixResultJSON);
//                //new result matrix, parse json
//                matrixResult = new iMatrix(JSON.parse(matrixResultJSON).rows, JSON.parse(matrixResultJSON).columns, JSON.parse(matrixResultJSON).values);
//                //print result to table
//                printMatrixToTable(matrixResult, mxResultTable.getAttribute("id"), mxResultTable);*/
//            }
//            //Error
//            else if (xhr.status == 404) {
//                console.log("some erro with data or server");
//            }
//        }
//
//    }
//
//    //send request
//    xhr.send(xhr.body);
//}
//
//var fillResultTable = function(data){
//    //parse data to array[][]
//    var parsedDataArray = JSON.parse(data);
//    //assembly Matrix from array[][]
//    var matrixResult = Matrix(parsedDataArray.length,parsedDataArray[0].length,parsedDataArray);
//
//    var matrixResultTable = document.getElementById("matrix1Table");
//    //fill table from matrix
//    printMatrixToTable(matrixResult, matrixResultTable.getAttribute("id"), matrixResultTable);
//}

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
                matrixResultTable.appendChild(generateTableBody(matrixResult, false));
            },
            dataType: 'json'
        }
    );

//return();
}


