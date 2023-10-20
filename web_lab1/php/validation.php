<?php

const Y_MIN = -3, Y_MAX = 3, X_MIN = -3, X_MAX = 5, R_MIN = 1, R_MAX = 3;

function isValid($x, $y, $r)
{

    if ($y < Y_MIN || $y > Y_MAX) {
        return false;
    }
    if ($x < X_MIN || $x > X_MAX) {
        return false;
    }
    if ($r < R_MIN || $r > R_MAX) {
        return false;
    }

    return true;
}

function isHit($x, $y, $r)
{
    return isOrangeZone($x, $y, $r) || isBlueZone($x, $y, $r) || isRedZone($x, $y, $r);
}

function isOrangeZone($x, $y, $r)
{
    return $x >= 0 && $y <= 0 && ($x*$x + $y*$y <= ($r/2)*($r/2));
}


function isBlueZone($x, $y, $r)
{
    return $x >= 0 && $x <= $r/2 && $y >= 0 && $y <= $r;
}

function isRedZone($x, $y, $r)
{
    return $x <= 0 && $x >= -$r && $y >= 0 && $y <= ($r - abs($x)) / 2;
}

?>
