package web_lab2.servlets;


import web_lab2.model.Data;
import web_lab2.validation.Validation;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

public class ControllerServlet extends HttpServlet {
    Validation validation;

    @Override
    public void init() throws ServletException {
        this.validation = new Validation();
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
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
        }
    }
}

