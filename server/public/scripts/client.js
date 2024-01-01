console.log('client.js is sourced!');

let currentComputation = {numOne: '', numTwo: '', operator: ''};

function addOperator(event){
    event.preventDefault();
    currentComputation.operator = event.target.value;
    console.log(currentComputation.operator);
}

function requestMath(event){
    event.preventDefault();
    console.log('Sending calculation request to server');
    const firstDigit = document.querySelector('.firstNumber');
    const secondDigit = document.querySelector('.secondNumber');
    currentComputation.numOne = firstDigit.value;
    currentComputation.numTwo = secondDigit.value;
    axios({
        method: 'POST',
        url: '/calculations',
        data: currentComputation
    })
    .then((response) => {
        console.log(response);
        renderData(response);
    })
    .catch((error) => {
        console.log(error);
    })
};

function renderData(){
    axios({
        method: 'GET',
        url: '/calculations'
    })
    .then((response) => {
        const calculations = response.data;
        console.log(calculations)
        const recentCalc = document.querySelector('#recentResult');
        recentCalc.innerHTML = ''
        recentCalc.innerHTML += `<h2>${calculations[calculations.length-1].result}</h2>`;
    })
    
};
renderData();