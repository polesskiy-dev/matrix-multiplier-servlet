package matrix;

import java.util.Date;
import java.util.Random;

/**
 * Created by Artyom on 27.11.2015.
 * Generates matrix with random values up to MAX_VALUE
 */
public class RandomMatrixGenerator implements iMatrixGenerator {
    private static RandomMatrixGenerator ourInstance = new RandomMatrixGenerator();

    public static RandomMatrixGenerator getInstance() {
        return ourInstance;
    }

    private RandomMatrixGenerator() {
    }

    @Override
    public Matrix generateMatrix(int rows, int columns) {
        //new Matrix with empty values
        Matrix randomMatrix = new Matrix();
        randomMatrix.setRows(rows);
        randomMatrix.setColumns(columns);
        randomMatrix.setDate(new Date());
        //fill by random ints
        int[][] newValues = new int[rows][columns];
        Random random = new Random();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                //randomMatrix.setElement(i,j,random.nextInt(MAX_VALUE));
                newValues[i][j] = random.nextInt(MAX_VALUE);
            }
        }
        randomMatrix.setValues(newValues);

        return randomMatrix;
    }
}
