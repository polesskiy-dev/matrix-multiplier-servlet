package matrix;

/**
 * Created by Artyom on 27.11.2015.
 */
public interface iMatrixMultiplier {
    Matrix multiply(Matrix firstMatrix, Matrix secondMatrix) throws ArithmeticException;
}
