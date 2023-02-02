window.onload = function() {
    document.getElementById("userInput").addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
        calculate_fibo();
        }
    });
}

function calculate_fibo() {
    var inputuser = document.getElementById("userInput").value;
    var result = fiboloops(inputuser);
    document.getElementById("fibo_result").innerHTML = result;
}

function fiboloops(inputuser) {
    if (inputuser == 1) {
        return 0;
    } else if (inputuser == 2) {
        return 1;
    }
    var a = 0
    var b = 1
    for (i = 3; i <= inputuser; i++) {
        var c = a + b;
        var a = b;
        var b = c;
    }
    return b;
}

window.onload = function() {
    document.getElementById("userInput2").addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
        calculate_prime();
        }
    });
}

