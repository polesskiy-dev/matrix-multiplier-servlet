<%--
  Created by IntelliJ IDEA.
  User: Artyom
  Date: 01.03.2016
  Time: 21:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>matrix multiplication</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/custom.styles.css">
    <link rel="stylesheet" href="css/bootflat.css">
    <!--common scripts-->
    <script src="scripts/jquery-2.1.4.js"></script>
    <script src="scripts/bootstrap.js"></script>
    <!--custom scripts-->
    <script src="scripts/matrix.js"></script>
    <script src="scripts/matrixTable.js"></script>
    <script src="scripts/tableFunctions.js"></script>
    <script src="scripts/AJAX.js"></script>
</head>
<body>
<div class="container">

    <!--navbar-->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <!--button type="button" class="btn btn-warning navbar-btn pull-left">Calculate result!</button-->
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/index.html">Matrix calculator</a>
                    </div>
                    <div>
                        <ul class="nav navbar-nav">
                            <li><a href="/logs.html">Requests log</a></li>
                            <!--li><a href="/about.html">About</a></li-->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--jumborton-->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jumbotron">
                <div class="jumbotron-contents">
                    <h2>Hello username!</h2>
                    <p>It's a simple matrix multiplication project powered by Java Servlets, JPA,
                        Bootstrap. Hosted on GAE.</p>
                    <p>You can change number of rows/columns by clicking on + or - buttons under the matrices. You can click "fill
                        random" button to fill the matrix by random integer values.</p>
                    <p>Press "Calculate" button to get "Result matrix" table and create new record in database. To see
                        last 10 records - click "Requests log" in the navigation bar.</p>
                    <!--div class="text-center"-->
                    <button onclick="calculateResult()" type="button"
                            class="btn btn-default btn-lg"><span class="glyphicon glyphicon-ok"></span> Calculate
                        result!
                    </button>
                </div>
            </div>

        </div>
    </div>

    <!--matrix1-->
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Matrix 1
                </div>
                <div class="panel-body">
                    <table id="matrix1Table" class="table table-bordered table-condensed noverticalpadding">
                    </table>
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                        <div class="btn-group" role="group">
                            <button onclick="addRowAndColumn('matrix1Table','matrix2Table')" type="button"
                                    class="btn btn-default">Row <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="deleteRowAndColumn('matrix1Table','matrix2Table')" type="button"
                                    class="btn btn-default">Row <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="addRowAndColumn('matrix2Table','matrix1Table')" type="button"
                                    class="btn btn-default">Column <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="deleteRowAndColumn('matrix2Table','matrix1Table')" type="button"
                                    class="btn btn-default">Column <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="fillTableByRandomMatrix('matrix1Table')" type="button"
                                    class="btn btn-default">fill random <span class="glyphicon glyphicon-random"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--matrix2-->
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">Matrix 2</div>
                <div class="panel-body">
                    <table id="matrix2Table" class="table table-bordered table-condensed noverticalpadding">
                    </table>
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                        <div class="btn-group" role="group">
                            <button onclick="addRowAndColumn('matrix2Table','matrix1Table')" type="button"
                                    class="btn btn-default">Row <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="deleteRowAndColumn('matrix2Table','matrix1Table')" type="button"
                                    class="btn btn-default">Row <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="addRowAndColumn('matrix1Table','matrix2Table')" type="button"
                                    class="btn btn-default">Column <span class="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="deleteRowAndColumn('matrix1Table','matrix2Table')" type="button"
                                    class="btn btn-default">Column <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onclick="fillTableByRandomMatrix('matrix2Table')" type="button"
                                    class="btn btn-default">fill random <span class="glyphicon glyphicon-random"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--resultMatrix-->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">Result Matrix</div>
                <div class="panel-body">
                    <table id="resultMatrixTable" class="table table-bordered table-condensed noverticalpadding">
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script>

    const RESULT_MATRIX_URL = "result-matrix.json";
    const MAX_VALUE = 10;
    const ROWS_MAX = 10;
    const COLUMNS_MAX = 10;
    /**
     * Generate 2 matrices with random values
     */
    var matrix1 = generateRandomMatrix(ROWS_MAX, COLUMNS_MAX, MAX_VALUE);
    var matrix2 = generateRandomMatrix(ROWS_MAX, COLUMNS_MAX, MAX_VALUE);

    //fill appropriate tables
    var matrix1Table = document.getElementById("matrix1Table");
    var matrix2Table = document.getElementById("matrix2Table");
    matrix1Table.appendChild(createTableBody(matrix1, true));
    matrix2Table.appendChild(createTableBody(matrix2, true));

    //fil drop-down menus
    var dropDownClickAction = function () {
        console.log("clicked");
    }

    /**
     * Send matrices arrays data to appropriate url
     * and get (by post) result of multiplication in JSON
     */
    var calculateResult = function () {
        var matrix1json = JSON.stringify(newMatrixFromTable(matrix1Table).values);
        var matrix2json = JSON.stringify(newMatrixFromTable(matrix2Table).values);
        var matrixResultTable = document.getElementById("resultMatrixTable");

        postServerResult(matrix1json, matrix2json, RESULT_MATRIX_URL, matrixResultTable);
    }
</script>
</html>
