

const resultSc = document.getElementById('error');
const resultMathSc = document.getElementById('mathScreen');
function btnResult() {
    const numa = document.getElementById('numA').value;
    const numb = document.getElementById('numB').value;
    const numc = document.getElementById('numC').value;
    if (!numa && !numb && !numc) {
        resultSc.innerHTML = 'Vui lòng không được bỏ trống các ô';
    }
    else if (!numa) {
        console.error('Vui lòng không được để trống a');
        resultSc.innerHTML = 'Vui Lòng Nhập a';
    }
    else if (!numb) {
        console.error('Vui lòng không được để trống b');
        resultSc.innerHTML = 'Vui Lòng Nhập b';
    }
    else if (!numc) {
        console.error('Vui lòng không được để trống c');
        resultSc.innerHTML = 'Vui Lòng Nhập c';
    }
    else {
        // resultSc.innerHTML = "null";
        console.log('A = ', numa);
        console.log('B = ', numb);
        console.log('C = ', numc);

        if (numa <= 0) {
            resultSc.innerHTML = 'A phải lớn hơn 0';
        } else {
            const powNumb = Math.pow(numb, 2);
            console.log("Cân bậc 2: ", powNumb);
            const detal = powNumb - (4 * numa * numc);
            console.log("detal = ", detal);
            if (detal > 0) {
                Math.sqrt(detal);
                console.log('Delta = ', detal);
                console.log("Phương Trình Có Hai Nghiệm Phân Biệt");
                const x1 = (-numb + Math.sqrt(detal)) / (2 * numa);
                console.log("X1 = ", x1);
                const x2 = (-numb - Math.sqrt(detal)) / (2 * numa);
                console.log("X2 = ", x2);
                const result = "Phương Trình Có Hai Nghiệm Phân Biệt <br> Detal = " + detal + "<br>" + " X1 = " + x1 + "</br> X2 = " + x2;
                console.log('kq', result);
                resultMathSc.innerHTML = result;
            }
            else if (detal == 0) {
                console.log("Phương Trình Có Nghiệm Kép");
                const x = (-numb)/(2*numa);
                console.log("x = ",x);
                const result = "Phương Trình Có Nghiệm Kép. <br> " + x;
                resultMathSc.innerHTML = result;
            }
            else if (detal < 0) {
                console.log("Phương Trình Vô Nghiệm");
                resultMathSc.innerHTML = "Phương Trình Vô Nghiệm";
            }
        }
    }
}