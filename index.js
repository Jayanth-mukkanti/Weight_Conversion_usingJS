document.getElementById("b1").addEventListener("click", function () {
    var weightValue = parseFloat(document.getElementById("weight").value);
    var selectFromUnit = document.getElementById("fromUnit").value;
    var selectToUnit = document.getElementById("toUnit").value;
    let result;
    switch (selectFromUnit) {
        case "kg":
            if (selectToUnit === "g") {
                result = weightValue * 1000;
            } else if (selectToUnit === "lb") {
                result = weightValue * 2.20462;
            } else if (selectToUnit === "ton") {
                result = weightValue * 0.00110;
            } else {
                result = weightValue;
            }
            break;

        case "g":
            if (selectToUnit === "kg") {
                result = weightValue / 1000;
            } else if (selectToUnit === "lb") {
                result = weightValue / 453.6;
            } else if (selectToUnit === "ton") {
                result = weightValue / 907200;
            } else {
                result = weightValue;
            }
            break;

        case "lb":
            if (selectToUnit === "kg") {
                result = weightValue / 2.205;
            } else if (selectToUnit === "g") {
                result = weightValue * 453.6;
            } else if (selectToUnit === "ton") {
                result = weightValue / 2000;
            } else {
                result = weightValue;
            }
            break;

        case "ton":
            if (selectToUnit === "kg") {
                result = weightValue * 907.2;
            } else if (selectToUnit === "g") {
                result = weightValue * 907200;
            } else if (selectToUnit === "lb") {
                result = weightValue * 2000;
            } else {
                result = weightValue;
            }
            break;

        default:
            result = weightValue;
    }
    console.log(result);
    document.getElementById("result").value = result;
})