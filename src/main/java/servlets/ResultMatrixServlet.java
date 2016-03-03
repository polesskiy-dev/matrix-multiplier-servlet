package servlets;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.ObjectMapper;
import matrix.Matrix;
import matrix.MatrixMultiplier;
import service.MatrixService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

/**
 * Created by Artyom on 02.03.2016.
 * servlet for calculating result matrix
 * response with result matrix to browser
 * and store 2 received matrices and 1 result matrix to database
 */
public class ResultMatrixServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();

        try {
            //parse request body JSON to int[][][]
            int[][][] matrixArrays = mapper.readValue(req.getReader(), int[][][].class);

            //build matrices from 2 arrays[][]
            Matrix matrix1 = new Matrix(matrixArrays[0].length, matrixArrays[0][0].length, new Date(), matrixArrays[0]);
            Matrix matrix2 = new Matrix(matrixArrays[1].length, matrixArrays[1][0].length, new Date(), matrixArrays[1]);

            //calculate matrix1*matrix2
            Matrix matrixResult = MatrixMultiplier.getInstance().multiply(matrix1, matrix2);

            //response resultMatrix internal array in JSON to browser
            PrintWriter outToBrowser = resp.getWriter();
            mapper.writeValue(outToBrowser, matrixResult.getValues());

            //debug
            System.out.printf("matrix1: %s\r\nmatrix2: %s\r\n,result: %s\r\n", matrix1, matrix2, matrixResult);

            //store to database
            if (matrix1 != null && matrix2 != null && matrixResult != null) {
                MatrixService matrixService = new MatrixService();
                matrixService.add(matrix1);
                matrixService.add(matrix2);
                matrixService.add(matrixResult);
            }
        } catch (Exception e) {
            //if some problems with incoming data - response with HTTP 400 code (bad request)
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}
