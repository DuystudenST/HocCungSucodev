

const resultSc = document.getElementById('error');
function btnResult() {
    const numa = document.getElementById('numA').value;
    const numb = document.getElementById('numB').value;
    const numc = document.getElementById('numC').value;
    if (!numa || !numb || !numc) {
        resultSc.innerHTML = 'Vui lòng không được bỏ trống các ô';
        if (!numa) {
            console.error('Vui lòng không được để trống a');
            resultSc.innerHTML= 'Vui Lòng Nhập a';
        }
        else if (!numb) {
            console.error('Vui lòng không được để trống b');
            resultSc.innerHTML= 'Vui Lòng Nhập b';
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

            if(numa != 0) {
                resultSc.innerHTML = 'A phải lớn hơn 0';
            }
        }
    }
}