package web_lab2.servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
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
        Object pointList ;

        if(!(session.getAttribute("listData") ==null)){
            pointList = session.getAttribute("listData");
        }else {
            pointList = new ArrayList<Data>();
        }
        try {
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JavaTimeModule());
            String json = objectMapper.writeValueAsString(pointList);
            resp.getWriter().write(json);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
