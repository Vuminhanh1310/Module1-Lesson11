let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
sout = sout + "<tr>" + "<td colspan='8' align='center'>" +"Bảng cửu chương" + "</td>" + "</br>";
for (i = 1; i < 10; i++) {
    sout = sout + "<tr>";
    for (j = 2; j < 10; j++) {
        sout = sout + "<td>" + j + "x" + i + "=" + j * i + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);