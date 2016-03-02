/**
 * Created by Artyom on 02.03.2016.
 * Logs representation of matrices creator
 */

/**
 * Creates new row with panel with date stamp
 * and 3 tables in panel
 * @param matrix1
 * @param matrix2
 * @param resultMatrix
 * @param resultMatrixCreationTime
 * @returns {Element}
 */
var createPanelWith3Matrices = function (matrix1, matrix2, resultMatrix, resultMatrixCreationTime) {
    const GRID_LAYOUT_CLASS_FULL = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
    const GRID_LAYOUT_CLASS_HALF = 'col-lg-6 col-md-6 col-sm-12 col-xs-12';

    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    var divGridLayout = document.createElement('div');
    divGridLayout.setAttribute('class', GRID_LAYOUT_CLASS_FULL);

    var divPanel = document.createElement('div');
    divPanel.setAttribute('class', 'panel panel-default');

    var divPanelHeading = document.createElement('div');
    divPanelHeading.setAttribute('class', 'panel-heading');
    //set Date from time
    var matrixCreationDate = new Date(null);
    matrixCreationDate.setTime(resultMatrixCreationTime);
    divPanelHeading.innerHTML = matrixCreationDate;

    var divPanelBody = document.createElement('div');
    divPanelBody.setAttribute('class', 'panel panel-body');

    //create 3 tables and append tBody's from matrices to them
    var matrix1Table = createTableFromMatrix(matrix1, GRID_LAYOUT_CLASS_HALF);
    var matrix2Table = createTableFromMatrix(matrix2, GRID_LAYOUT_CLASS_HALF);
    var matrixResultTable = createTableFromMatrix(resultMatrix, GRID_LAYOUT_CLASS_FULL);

    divPanelBody.appendChild(matrix1Table);
    divPanelBody.appendChild(matrix2Table);
    divPanelBody.appendChild(matrixResultTable);

    //enclose one another
    divPanel.appendChild(divPanelHeading);
    divPanel.appendChild(divPanelBody);
    divGridLayout.appendChild(divPanel);
    divRow.appendChild(divGridLayout);

    return divRow;
}

/**
 * Create non-editable table from matrix
 * enclose table to grid layout div
 * @param matrix
 * @returns {Element}
 */
function createTableFromMatrix(matrix, gridLayoutClass) {
    var divGridLayout = document.createElement('div');
    divGridLayout.setAttribute('class', gridLayoutClass);//);

    var matrixTable = document.createElement('table');
    matrixTable.setAttribute('class', 'table table-bordered table-condensed');
    matrixTable.appendChild(createTableBody(matrix, false));

    divGridLayout.appendChild(matrixTable);

    return divGridLayout;
}