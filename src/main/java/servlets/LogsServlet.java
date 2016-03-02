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
import java.util.List;

/**
 * Created by Artyom on 02.03.2016.
 */
public class LogsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        TODO all matrices from DB print to browser
        String allMatrices = null;
        //service to work with DB
        MatrixService matrixService = new MatrixService();
        //JSON
        ObjectMapper mapper = new ObjectMapper();

        //get all matrices from DB
        List<Matrix> matrixList = matrixService.getAll();

        //set attribute in response jsp with matrices array in JSON string
        try {
            req.setAttribute("serializedMatricesArray", mapper.writeValueAsString(matrixList.toArray()));
        } catch (Exception e) {
            e.printStackTrace();
        }

        req.getRequestDispatcher("pages/logs.jsp").forward(req, resp);
    }
}
