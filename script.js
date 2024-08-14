console.log('linked Success');

function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log('Fill Weight Input: ${inputWeight}');
    console.log('Fill Height Input: ${inputHeight}');
    if (inputWeight == '' || inputHeight == '') {
        alert('Body Weight Input Empty!');
        } else {
            console.log(inputWeight * inputHeight);
            let convertCmtoM = inputHeight * 100;
            let finalHeight = Math.pow(convertCmtoM, 2);
            console.log(inputWeight/finalHeight); 
        }
        
}
