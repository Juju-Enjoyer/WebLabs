<%@ page import="web_lab2.model.Data" %>
<%@ page import="java.util.List" %>
<%@ page import="web_lab2.model.Data" %>
<%@ page import="java.util.ArrayList" %>
<%--

  Created by IntelliJ IDEA.
  User: nic
  Date: 02.11.2023
  Time: 13:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/style/styles_main.css"/>
    <title>WebLab 2</title>
</head>


<body>
<div class="studentInfo">
    <p>ФИО: Тюфяков Никита Евгеньевич</p>
    <p>Группа: P3225</p>
    <p>Вариант: 861208</p>
</div>
<div>
    <div class="graph">
        <canvas id="graph" width="520" height="480"></canvas>
    </div>

    <div class="point">
        <canvas id="point" width="520" height="480"></canvas>
    </div>
</div>
<div class="form">
    <%--<input style="display: none" id="xCoo" name="x" onchange="dot()"/>
    <div class="formX">--%>
        <%--<button
                type="button"
                value="-3"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            -3
        </button>
        <button
                type="button"
                value="-2"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            -2
        </button>
        <button
                type="button"
                value="-1"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            -1
        </button>
        <button
                type="button"
                value="0"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            0
        </button>
        <button
                type="button"
                value="1"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            1
        </button>
        <button
                type="button"
                value="2"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            2
        </button>
        <button
                type="button"
                value="3"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            3
        </button>
        <button
                type="button"
                value="4"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            4
        </button>
        <button
                type="button"
                value="5"
                onclick="setX(this.value); dot(); toggleButtonsX(this)"
        >
            5
        </button>
    </div>--%>
        <input type="text" id="xCoo" name="x" onchange="check(this); dot()" placeholder="(-5, 3)">
    <%--<input
            type="text"
            id="y"
            name="y"
            onchange="check(this); dot()" o
            placeholder="(-3, 3)"
    />--%>
            <div class="formYAndR">
                <input style="display: none" id="y" name="y" onchange="dot()"/>
                <select>
                    <option value="-5" onclick="setY(this.value);dot()">-5</option>
                    <option value="-4" onclick="setY(this.value);dot()">-4</option>
                    <option value="-3" onclick="setY(this.value);dot()">-3</option>
                    <option value="-2" onclick="setY(this.value);dot()">-2</option>
                    <option value="-1" onclick="setY(this.value);dot()">-1</option>
                    <option value="0" onclick="setY(this.value);dot()">0</option>
                    <option value="1" onclick="setY(this.value);dot()">1</option>
                    <option value="2" onclick="setY(this.value);dot()">2</option>
                    <option value="3" onclick="setY(this.value);dot()">3</option>
                </select>
                <input style="display: none" id="r" name="r"/>
                <select>
                    <option value="1" onclick="drawGraph(this.value)">1</option>
                    <option value="2" onclick="drawGraph(this.value)">2</option>
                    <option value="3" onclick="drawGraph(this.value)">3</option>
                    <option value="4" onclick="drawGraph(this.value)">4</option>
                    <option value="5" onclick="drawGraph(this.value)">5</option>
                </select>
            </div>

    <%--<div class="formR">
        <button
                type="button"
                value="1"
                onclick="drawGraph(1); toggleButtonsR(this)"
        >
            1
        </button>
        <button
                type="button"
                value="1.5"
                onclick="drawGraph(1.5); toggleButtonsR(this)"
        >
            1.5
        </button>
        <button
                type="button"
                value="2"
                onclick="drawGraph(2); toggleButtonsR(this)"
        >
            2
        </button>
        <button
                type="button"
                value="2.5"
                onclick="drawGraph(2.5); toggleButtonsR(this)"
        >
            2.5
        </button>
        <button
                type="button"
                value="3"
                onclick="drawGraph(3); toggleButtonsR(this)"
        >
            3
        </button>--%>
        <div>
            <button id="sendButton" onclick="send()">Отправить</button>
        </div>
    </div>

<div class="resultTable">
    <div id="tableContainer">
        <table>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Start Date</th>
                <th>Result</th>
                <th>Execute Time</th>
            </tr>
            <c:forEach items="${listData}" var="data">
                <tr>
                    <td>${data.x}</td>
                    <td>${data.y}</td>
                    <td>${data.r}</td>
                    <td>${data.startDate}</td>
                    <td>${data.result}</td>
                    <td>${data.executeTime}</td>
                </tr>
            </c:forEach>
        </table>
    </div>

</div>
<div style="position: absolute ; top :800px">
    <c:forEach items="${listData}" var="data">
        <script>window.addEventListener("DOMContentLoaded", () => {
            dotForList(${data.x}, ${data.y}, ${data.result})
        })</script>
    </c:forEach>
</div>


<script src="resources/js/coordinate_system.js"></script>
<script src="resources/js/checkData.js"></script>
<script src="resources/js/send.js"></script>
<script>const path = window.location.href
console.log(path)</script>

</body>
</html>

