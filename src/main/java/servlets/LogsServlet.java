package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import matrix.Matrix;
import service.MatrixService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

/**
 * Created by Artyom on 02.03.2016.
 */
public class LogsServlet extends HttpServlet {
    static final int MAX_RECORDS = 30;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int[][][] matricesDataArr = null;
        Date[] matricesCreationDateArr = null;

        //service to work with DB
        MatrixService matrixService = new MatrixService();
        //JSON
        ObjectMapper mapper = new ObjectMapper();

        //get last 10 matrices from DB
        List<Matrix> matrixList = matrixService.getLastRecordsAmount(MAX_RECORDS);
        if (matrixList != null) {
            int matricesAmount = matrixList.size();
            matricesDataArr = new int[matricesAmount][][];
            matricesCreationDateArr = new Date[matricesAmount];
            for (int i = 0; i < matricesAmount; i++) {
                matricesDataArr[i] = matrixList.get(i).getValues();
                matricesCreationDateArr[i] = matrixList.get(i).getDate();
            }
        }

        //set attribute in response jsp with matrices array in JSON string
        try {
            req.setAttribute("serializedMatricesDataArray", mapper.writeValueAsString(matricesDataArr));
            req.setAttribute("serializedMatricesCreationDateArray", mapper.writeValueAsString(matricesCreationDateArr));
        } catch (Exception e) {
            e.printStackTrace();
        }

        req.getRequestDispatcher("pages/logs.jsp").forward(req, resp);
    }
}

