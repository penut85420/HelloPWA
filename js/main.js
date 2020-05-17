window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
};


class go_calc {
    constructor() {
        if (calculator.go.value == "÷") {
            calculator.go.value = "=";
            calculator.calculation.value += "÷"
        } else {
            var n = calculator.calculation.value.split("÷");
            var a = parseInt(n[0]);
            var b = parseInt(n[1]);
            var q = Math.floor(a / b);
            var r = a % b;
            calculator.Q.value = q;
            calculator.R.value = r;
        }
    }
}
