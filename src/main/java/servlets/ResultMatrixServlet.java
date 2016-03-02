package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import matrix.Matrix;
import matrix.MatrixMultiplier;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

/**
 * Created by Artyom on 02.03.2016.
 */
public class ResultMatrixServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //parse request body JSON to [int[][][]
        ObjectMapper mapper = new ObjectMapper();
        int[][][] matrixArrays = mapper.readValue(req.getReader(), int[][][].class);

        //bulid matrices from 2 arrays[][]
        Matrix matrix1 = new Matrix(matrixArrays[0].length, matrixArrays[0][0].length, new Date(), matrixArrays[0]);
        Matrix matrix2 = new Matrix(matrixArrays[1].length, matrixArrays[1][0].length, new Date(), matrixArrays[1]);
        //calculate matrix1*matrix2
        Matrix matrixResult = MatrixMultiplier.getInstance().multiply(matrix1,matrix2);

        //response resultMatrix internal array in JSON to browser
        PrintWriter outToBrowser = resp.getWriter();
        mapper.writeValue(outToBrowser, matrixResult.getValues());

        //debug
        System.out.printf("matrix1: %s\r\nmatrix2: %s\r\n,result: %s\r\n", matrix1,matrix2,matrixResult);

        //TODO map to DB 3 matrices
    }


}