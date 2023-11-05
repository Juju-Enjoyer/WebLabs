<%--
  Created by IntelliJ IDEA.
  User: nic
  Date: 04.11.2023
  Time: 01:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/style/styles_main.css" />
</head>
<body>
<table>
    <tr>
        <td><b>X</b></td>
        <td><%= request.getAttribute("x")%></td>
    </tr>
    <tr>

        <td><b>Y</b></td>
        <td><%= request.getAttribute("y")%></td>
    </tr>
    <tr>
        <td><b>R</b></td>
        <td><%= request.getAttribute("r")%></td>
    </tr>
    <tr>
        <td><b>Execution Time</b></td>
        <td><%= request.getAttribute("executeTime")%></td>
    </tr>
    <tr>
        <td><b>Попадание</b></td>
        <td><%= request.getAttribute("result")%></td>
    </tr>
    <tr>
        <td><b>Время начала</b></td>
        <td><%= request.getAttribute("startDate")%></td>
    </tr>
</table>

<div class="backButton">
    <button type="submit" onclick="window.location.href ='/web_lab2'">Главная страница</button>
</div>
</body>
</html>
