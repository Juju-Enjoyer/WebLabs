package web_lab2.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import web_lab2.model.Data;
import web_lab2.validation.Validation;

import java.io.IOException;
import java.util.ArrayList;

public class ControllerServlet extends HttpServlet {
    Validation validation;

    @Override
    public void init() {
        this.validation = new Validation();
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        HttpSession session = req.getSession();
        if (session.getAttribute("listData") != null) {
            session.removeAttribute("listData");
            session.setAttribute("listData", new ArrayList<Data>() {
            });
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (!validation.checkValue()) {
            getServletContext().getRequestDispatcher("/table").forward(request, response);
        } else {
            response.sendError(400);
        }
    }
}

