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
</head>
<body>
<div class="container">

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

    <!--matrix1-->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <!--TODO Date-->
                </div>
                <div class="panel-body">
                    <!--TODO 3 matrices data-->

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

    //console.log(matricesDataArr, matricesCreationDateArr);

    for (var i = 0; i < matricesDataArr.length; i++) {
//                    TODO generate panel with 3 matrices here
    }


</script>
</html>
