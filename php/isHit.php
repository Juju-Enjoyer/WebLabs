<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once 'validation.php';
date_default_timezone_set('Europe/Moscow');

session_start();

$startScriptTime = microtime(true);
$currentTime = date("H:i:s");
$x = $_GET["x"];
$y = round((double)$_GET["y"], 2);
$r = round((double)$_GET["r"], 2);

if (!isValid($x, $y, $r)) {
    http_response_code(400);
    echo "Bad data";
    return;
}

$hitResult = isHit($x, $y, $r) ?
    "True" :
    "False";

$scriptExecutionTime = sprintf("%.3f", (microtime(true) - $startScriptTime) * 1000000);

$receivedData = array(
    "x" => $x,
    "y" => $y,
    "r" => $r,
    "time" => $currentTime,
    "execution_time" => $scriptExecutionTime,
    "hit_result" => $hitResult
);

echo json_encode($receivedData);
?>