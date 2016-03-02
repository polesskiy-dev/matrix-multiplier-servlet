package mappingtests;

import matrix.Matrix;
import matrix.RandomMatrixGenerator;
import org.junit.Test;
import service.MatrixService;

import java.util.List;

/**
 * Created by Artyom on 01.03.2016.
 */
public class MatrixServiceTest {
    MatrixService matrixService = new MatrixService();

    /*@Test
    public void testSaveRecord() throws Exception{
        //Create matrix
        Matrix testMatrix = RandomMatrixGenerator.getInstance().generateMatrix(3,3);

        //store to db
        Matrix matrixFromDB = matrixService.add(testMatrix);

        System.out.printf("Matrix from DB: %s\r\n",matrixFromDB);
    }*/

    @Test
    public void testDeleteRecord() throws Exception{
        //Create matrix
        Matrix testMatrix = RandomMatrixGenerator.getInstance().generateMatrix(3,3);

        //store to DB
        Matrix matrixFromDB = matrixService.add(testMatrix);

        //delete from DB
        matrixService.deleteById(matrixFromDB.getId());

        //debug
        System.out.printf("Deleted matrix: %s\r\n",matrixFromDB);
    }

    /*@Test
    public void testSelect() throws Exception{
        //Create matrix
        Matrix testMatrix = RandomMatrixGenerator.getInstance().generateMatrix(3,3);

        //store to DB
        Matrix matrixStoredToDB = matrixService.add(testMatrix);

        //get from DB
        Matrix matrixFromDB  = matrixService.getById(matrixStoredToDB.getId());

        Assert.assertTrue(matrixStoredToDB.equals(matrixFromDB));

        //debug
        System.out.printf("Matrix ID:%d, from DB: %s\r\n",matrixFromDB.getId(),matrixFromDB);
    }*/

    /*@Test
    public void voidTestUpdate() throws Exception{
        //create Car for storing to DB
        Car car1 = new Car("Peugeot",3000,new Date());

        //store to DB
        car1 = carService.add(car1);

        car1.setCost(2700);

        //updating
        carService.update(car1);

        //lets get updated record
        Car car2 = carService.getById(car1.getId());
        //debug
        System.out.printf("Updated Car ID:%d, from DB: %s\r\n",car2.getId(),car2);
    }*/

    @Test
    public void testGetAll(){
        List<Matrix> matrixList = matrixService.getAll();
        for (Matrix matrix:matrixList) System.out.println(matrix);
    }

    @Test
    public void testGetLast2records(){
        List<Matrix> matrixList = matrixService.getLastRecordsAmount(2);
        for (Matrix matrix:matrixList) System.out.println(matrix);
    }
}
