var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;
var ok = 2; // Ensure it's initialized with 2

function timer(){
    var start = new Date(2023, 7, 15, 0, 0);
    var now = new Date();
    
    var years = now.getYear() - start.getYear();
    var months = now.getMonth() - start.getMonth();
    var days = now.getDate() - start.getDate();

    if (days < 0) {
        months--;
        var lastDayOfLastMonth = new Date(now.getYear(), now.getMonth(), 0).getDate();
        days += lastDayOfLastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        years = 0;
        months = 0;
        days = 0;
    }

    var h = now.getHours();
    if(h < 10){
        h = "0" + h;
    }
    var m = now.getMinutes();
    if(m < 10){
        m = "0" + m;
    }
    var s = now.getSeconds();
    if(s < 10){
        s = "0" + s;
    }

    document.getElementById("y").innerHTML = years;
    document.getElementById("m").innerHTML = months;
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = h;
    document.getElementById("n").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein(){
    if(val < 1){
        val += 0.025;
        dv.style.opacity = val;
    }
    else{
        clearInterval(fadeinInterval);
        if(ok == 2){
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
    if(ok == 2){
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
