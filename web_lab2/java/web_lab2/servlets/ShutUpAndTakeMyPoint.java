package web_lab2.servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import web_lab2.model.Data;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ShutUpAndTakeMyPoint extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        List<Data> pointList = (List<Data>) session.getAttribute("listData");
        if(pointList==null){
            pointList = new ArrayList<>();
        }
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(pointList);
        resp.getWriter().write(json);
    }
}
