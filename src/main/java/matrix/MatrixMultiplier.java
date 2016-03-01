package matrix;

/**
 * Created by Artyom on 27.11.2015.
 */
public class MatrixMultiplier implements iMatrixMultiplier {
    private Matrix multiplyResult;
    private static MatrixMultiplier ourInstance = new MatrixMultiplier();

    public static MatrixMultiplier getInstance() {
        return ourInstance;
    }

    private MatrixMultiplier() {
    }


    @Override
    public Matrix multiply(Matrix firstMatrix, Matrix secondMatrix) throws ArithmeticException {
        //check that num of columns 1st matrix = num of rows 2nd matrix
        if (firstMatrix.getColumns() == secondMatrix.getRows()) {
            this.multiplyResult = new Matrix();
            this.multiplyResult.setRows(firstMatrix.getRows());
            this.multiplyResult.setColumns(secondMatrix.getColumns());
            //multiply
            for (int resultRowIterator = 0; resultRowIterator < multiplyResult.getRows(); resultRowIterator++) {
                for (int resultColumnIterator = 0; resultColumnIterator < multiplyResult.getColumns(); resultColumnIterator++) {
                    //calculate result value
                    int resultValue = 0;
                    for (int iterator = 0; iterator < firstMatrix.getColumns(); iterator++) {
                        resultValue += firstMatrix.getValues()[resultRowIterator][iterator] * secondMatrix.getValues()[iterator][resultColumnIterator];
                    }
                    //set new value by [row][column]
                    int[][] newValues = this.multiplyResult.getValues();
                    newValues[resultRowIterator][resultColumnIterator] = resultValue;
                    this.multiplyResult.setValues(newValues);
                }
            }
        } else throw new ArithmeticException("Num of columns 1st matrix != num of rows 2nd matrix.");
        return this.multiplyResult;
    }
}
