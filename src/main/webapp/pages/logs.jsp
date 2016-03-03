<%--
  Created by IntelliJ IDEA.
  User: Artyom
  Date: 02.03.2016
  Time: 16:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Logs</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/custom.styles.css">
    <link rel="stylesheet" href="css/bootflat.css">
    <!--common scripts-->
    <script src="scripts/jquery-2.1.4.js"></script>
    <script src="scripts/bootstrap.js"></script>
    <!--custom scripts-->
    <script src="scripts/matrix.js"></script>
    <script src="scripts/tableFunctions.js"></script>
    <script src="scripts/logsRecordRepresentation.js"></script>
</head>
<body>
<div class="container" id="logsContainer">

    <!--navbar-->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/index.html">Matrix calculator</a>
                    </div>
                    <div>
                        <ul class="nav navbar-nav">
                            <li><a href="/logs.html">Requests log</a></li>
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
                    <h4>Last 10 calculations from database, with time stamps.</h4>
                </div>
            </div>

        </div>
    </div>
</div>
</body>
<script>
    <%
    String matricesDataArr = (String) request.getAttribute("serializedMatricesDataArray");
    String matricesCreationDateArr = (String) request.getAttribute("serializedMatricesCreationDateArray");
    %>
    var matricesDataJSON = '<%=matricesDataArr%>';
    var matricesCreationDateArrJSON = '<%=matricesCreationDateArr%>'
    //console.log(matricesDataJSON, matricesCreationDateArrJSON);

    //parse matrices
    matricesDataArr = JSON.parse(matricesDataJSON);
    matricesCreationDateArr = JSON.parse(matricesCreationDateArrJSON);

    //get common container for log records
    var container = document.getElementById('logsContainer');

    //fill container by rows with 3 matrices

    for (var i = 0; i < matricesDataArr.length / 3; i++) {
        var matrixResult = newMatrixFromArr(matricesDataArr[i * 3]);
        var matrix2 = newMatrixFromArr(matricesDataArr[i * 3 + 1]);
        var matrix1 = newMatrixFromArr(matricesDataArr[i * 3 + 2]);
        container.appendChild(createPanelWith3Matrices(matrix1, matrix2, matrixResult, matricesCreationDateArr[i]));
    }

</script>
</html>
