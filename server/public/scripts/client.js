console.log('client.js is sourced!');

function pageLoad(){
    axios({
        method: 'GET',
        url: '/calculations'
    })
    .then((response) => {
        renderData(response);
    })
    .catch(() => {

    })
};
pageLoad();

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
        pageLoad();
    })
    .catch((error) => {
        console.log(error);
    })
};

function renderData(things){
    const recentCalc = document.querySelector('#recentResult');
    recentCalc.innerHTML = `<h2>${things[0].result}</h2>`;
};