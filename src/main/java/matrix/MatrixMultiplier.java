package matrix;

import java.util.Date;

/**
 * Created by Artyom on 27.11.2015.
 * 2 matrices multiplier
 * returns result of matrix multiplication
 */
public class MatrixMultiplier implements iMatrixMultiplier {
    private static MatrixMultiplier ourInstance = new MatrixMultiplier();
    private Matrix resultMatrix;

    public static MatrixMultiplier getInstance() {
        return ourInstance;
    }

    private MatrixMultiplier() {
    }

    @Override
    public Matrix multiply(Matrix firstMatrix, Matrix secondMatrix) throws ArithmeticException {
        //check that num of columns 1st matrix = num of rows 2nd matrix
        if (firstMatrix.getColumns() == secondMatrix.getRows()) {
            this.resultMatrix = new Matrix();
            this.resultMatrix.setRows(firstMatrix.getRows());
            this.resultMatrix.setColumns(secondMatrix.getColumns());
            this.resultMatrix.setDate(new Date());
            //multiply
            for (int resultRowIterator = 0; resultRowIterator < resultMatrix.getRows(); resultRowIterator++) {
                for (int resultColumnIterator = 0; resultColumnIterator < resultMatrix.getColumns(); resultColumnIterator++) {
                    //calculate result value
                    int resultValue = 0;
                    for (int iterator = 0; iterator < firstMatrix.getColumns(); iterator++) {
                        resultValue += firstMatrix.getValues()[resultRowIterator][iterator] * secondMatrix.getValues()[iterator][resultColumnIterator];
                    }
                    //set new value by [row][column]
                    int[][] newValues = this.resultMatrix.getValues();
                    newValues[resultRowIterator][resultColumnIterator] = resultValue;
                    this.resultMatrix.setValues(newValues);
                }
            }
        } else throw new ArithmeticException("Num of columns 1st matrix != num of rows 2nd matrix.");
        return this.resultMatrix;
    }
}
