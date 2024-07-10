console.log("Máy Tính Bỏ Túi Nè");

let tempNumber = '';
let waitcalNumber = 0;
let tempAction = '';
let result = 0;

function numberClick(val) {
    console.log("Number click: ", val);
    tempNumber = tempNumber + val;
    waitcalNumber = parseFloat(tempNumber);
    console.log('log = ', waitcalNumber);
    printResult(tempNumber);
}

function action_click(ac) {
    console.log("Action Click: ", ac);
    tempAction = ac;
    console.log("tempAction: ", tempAction);
    result = waitcalNumber;
    tempNumber = '';

}

function calculate() {
    console.log(waitcalNumber, tempAction, result);
    switch (tempAction) {
        case '+':
            result = result + waitcalNumber;
            console.log("Result = ", result);
            clearAll();
            printResult(result);
            break;
        case '-':
            result = result - waitcalNumber;
            console.log("Result = ", result);
            clearAll();
            printResult(result);
            break;
        case '*':
            result = result * waitcalNumber;
            console.log("Result = ", result);
            clearAll();
            printResult(result);
            break;
        case '/':
            result = result / waitcalNumber;
            if (!result) {
                printResult("Lổi :>");
                break;
            }
            else {
                console.log("Result = ", result);
                clearAll();
                printResult(result);
                break;
            }

    }
}


// Keyword
//dom
//Lấy value trên màn hình
const screenResult = document.getElementById('result-screen');
function printResult(res) {
    screenResult.innerHTML = res;
}

function clearAll() {
    screenResult.innerHTML = '0'
    tempNumber = "";
}