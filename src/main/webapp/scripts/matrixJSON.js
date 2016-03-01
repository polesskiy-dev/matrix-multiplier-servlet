/**
 * Created by Artyom on 03.12.2015.
 */

//AJAX var
var xhr
/*iMatrix object declaration*/
//constructor
function iMatrix(rows, columns, values) {
    this.rows = rows;
    this.columns = columns;
    this.values = values;
}

//parse string
//var matrixArray = JSON.parse(matrixArrayJSON);
var matrix1 = new iMatrix(JSON.parse(matrix1JSON).rows, JSON.parse(matrix1JSON).columns, JSON.parse(matrix1JSON).values);
var matrix2 = new iMatrix(JSON.parse(matrix2JSON).rows, JSON.parse(matrix2JSON).columns, JSON.parse(matrix2JSON).values);
var matrixResult = new iMatrix(JSON.parse(matrixResultJSON).rows, JSON.parse(matrixResultJSON).columns, JSON.parse(matrixResultJSON).values);

//get matrix from html
var mx1Table = document.getElementById('matrix1Table');
var mx2Table = document.getElementById('matrix2Table');
var mxResultTable = document.getElementById('matrixResultTable');

//add iMatrix obj to table
var printMatrixToTable = function (iMatrix, tableName, myTable) {
    //clear table
    myTable.removeChild(myTable.firstChild);
    //create table body
    var newBody = document.createElement("tbody");
    //iterate rows
    for (i = 0; i < iMatrix.rows; i++) {
        //create new row
        row = document.createElement('tr');
        //iterate columns
        for (j = 0; j < iMatrix.columns; j++) {
            //new cell
            cell = document.createElement('td');
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
            row.appendChild(cell);
        }
        //add row to tablebody
        newBody.appendChild(row);
    }
    myTable.appendChild(newBody);
}

var updateMatrixFromtable = function (iMatrix, myTable) {
    //iterate iMatrix
    //iterate rows
    for (i = 0; i < iMatrix.rows; i++) {
        //iterate columns
        for (j = 0; j < iMatrix.columns; j++) {
            var cell = myTable.rows[i].cells.item(j);
            var inputsArr = cell.getElementsByTagName("input");
            //debug
            //console.log(inputsArr.item(0).value);
            iMatrix.values[i][j] = parseInt(inputsArr.item(0).value);
        }
    }
    //debug
    //print matrix
    console.log(iMatrix.values);
}

//button handlers
//Calculate
function calculateButtonHandler() {
    //update matrices data from tables
    updateMatrixFromtable(matrix1, mx1Table);
    updateMatrixFromtable(matrix2, mx2Table);
    //serialize matrices and update
    matrix1JSON = JSON.stringify(matrix1);
    matrix2JSON = JSON.stringify(matrix2);
    //debug
    console.log("sending to server matrix1 and matrix2");
    //send AJAX request to server
    newAJAXrequest(matrix1JSON, matrix2JSON);

}

//var asyncServerMultiplyResultHandler=

function newAJAXrequest(matrix1string, matrix2string) {
    //new AJAX obj
    if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    } else {
        xhr = new XMLHttpRequest();
    }

    //body of request
    xhr.body = "matrix1JSON" + "=" + matrix1string + "&" + "matrix2JSON" + "=" + matrix2string;
    xhr.open('POST', '/submit', true);
    //set info about type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //assign handler
    xhr.onreadystatechange = function () {
        // state of 4 means request completed
        if (xhr.readyState == 4) {
            var serverResponseResultJSON = xhr.responseText;
            matrixResultJSON = serverResponseResultJSON.toString();
            //debug
            console.log(matrixResultJSON);
            //new result matrix, parse json
            matrixResult = new iMatrix(JSON.parse(matrixResultJSON).rows, JSON.parse(matrixResultJSON).columns, JSON.parse(matrixResultJSON).values);
            //print result to table
            printMatrixToTable(matrixResult, mxResultTable.getAttribute("id"), mxResultTable);
        }
    }

    //send request
    xhr.send(xhr.body);
}


//print obj to html tables
printMatrixToTable(matrix1, mx1Table.getAttribute("id"), mx1Table);
printMatrixToTable(matrix2, mx2Table.getAttribute("id"), mx2Table);
printMatrixToTable(matrixResult, mxResultTable.getAttribute("id"), mxResultTable);
