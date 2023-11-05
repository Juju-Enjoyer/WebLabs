package web_lab2.validation;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.lang.Math.abs;

public class Validation implements Serializable {
    public static final float X_MIN = -5;
    public static final float X_MAX = 3;
    List<Float> R_LIST = new ArrayList(Arrays.asList(1F, 2F, 3F, 4F, 5F));

    public Float xValue;
    public Float yValue;
    public Float rValue;

    public boolean checkValue() {

        if (xValue == null || xValue >= X_MAX || xValue <= X_MIN) {
            return false;
        }
        if (yValue == null) {
            return false;
        }
        return R_LIST.contains(rValue);
    }

    public static boolean isHit(float x, float y, float r) {
        return isOrangeZone(x, y, r) ||
                isBlueZone(x, y, r) ||
                isRedZone(x, y, r);
    }

    public static boolean isOrangeZone(float x, float y, float r) {
        return x >= 0 && x <= r && y >= 0 && y <= r && (x * x + y * y <= (r) * (r));
    }

    public static boolean isBlueZone(float x, float y, float r) {
        return x <= 0 && x >= -r && y >= 0 && y <= r;
    }

    public static boolean isRedZone(float x, float y, float r) {
        return x <= 0 && x >= -r / 2 && y <= 0 && y >= -r && x >= -(r - abs(y)) / 2;
    }
}


