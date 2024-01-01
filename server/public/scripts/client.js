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
        const calculations = response.data;      //Save our array
        console.log(calculations);               //Validate
        const recentCalc = document.querySelector('#recentResult');   //Find the most recent section
        const historyCalc = document.querySelector('#resultHistory'); //Find the history section
        recentCalc.innerHTML = ''    //Clear recent history
        historyCalc.innerHTML = ''   //Clear full history
        recentCalc.innerHTML += `<h2>${calculations[calculations.length-1].result}</h2>`; //Print recent history
        for (let calc = 0; calc < calculations.length; calc++){
            historyCalc.innerHTML +=`<li>${calculations[calc].numOne} ${calculations[calc].operator} ${calculations[calc].numTwo} = ${calculations[calc].result}</li>`
        };
    })
    
};
renderData();