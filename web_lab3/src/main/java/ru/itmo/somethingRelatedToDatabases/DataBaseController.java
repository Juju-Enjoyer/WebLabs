package ru.itmo.somethingRelatedToDatabases;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import ru.itmo.bean.Point;

import java.time.LocalDateTime;
import java.util.List;

public class DataBaseController {
   private static SessionFactory sessionFactory;
   public DataBaseController(SessionFactory sessionFactory){
       DataBaseController.sessionFactory =sessionFactory;
   }
    public void addPoint(Point point) {
        Session session = sessionFactory.openSession();
        Transaction transaction = null;
        transaction = session.beginTransaction();
        session.save(point);
        transaction.commit();
        session.close();
    }
    public List<Point> getPointsFromBD(){
       Session session = sessionFactory.openSession();
       Transaction transaction = null;
       transaction = session.beginTransaction();
       List points = session.createQuery("FROM Point").list();
       transaction.commit();
       session.close();
       return points;
    }
}
