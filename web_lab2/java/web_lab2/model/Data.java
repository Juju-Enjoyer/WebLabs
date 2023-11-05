package web_lab2.model;

import java.io.Serializable;
import java.time.LocalDateTime;

public class Data implements Serializable {
    private float x;
    private float y;
    private float r;
    private boolean result;
    private float executeTime;
    private LocalDateTime startDate;


    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public boolean isResult() {
        return result;
    }

    public float getExecuteTime() {
        return executeTime;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setX(float x) {
        this.x = x;
    }

    public void setY(float y) {
        this.y = y;
    }

    public void setR(float r) {
        this.r = r;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setExecuteTime(float executeTime) {
        this.executeTime = executeTime;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }
}
