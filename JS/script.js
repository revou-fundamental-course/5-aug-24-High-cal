
function processForm() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`Fill Weight Input: ${inputWeight}`);
    console.log(`Fill Height Input: ${inputHeight}`);
    let convertCmToM;
    let finalHeight;
    let finalResult;
    let bmiPoint;
    if (inputWeight == '' || inputHeight == '') {
        alert('Body Weight And Or Height Input Empty!');
        } else {
            let convertCmToM = inputHeight * 100;
            let finalHeight = Math.pow(convertCmToM, 2);
            let finalResult = inputHeight/finalHeight.toFixed(2);
            console.log(finalResult);
            let bmiPoint = finalResult;
            document.getElementById("result").innerHTML = bmiPoint;

        }
}
