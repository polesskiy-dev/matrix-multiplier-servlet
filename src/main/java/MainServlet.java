import matrix.Matrix;
import matrix.RandomMatrixGenerator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Artyom on 01.03.2016.
 */
public class MainServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        /*Matrix testMatrix = RandomMatrixGenerator.getInstance().generateMatrix(3,3);

        PrintWriter out = resp.getWriter();
        out.print(testMatrix);*/
        req.getRequestDispatcher("pages/index.jsp").forward(req, resp);
    }
}
