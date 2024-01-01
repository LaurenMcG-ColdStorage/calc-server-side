console.log('client.js is sourced!');

let currentComputation = {numOne: '', numTwo: '', operator: ''};

function clearInputs(event){                     //Create function to clear inputs
    const firstDigit = document.querySelector('.firstNumber');     //Find first location
    const secondDigit = document.querySelector('.secondNumber');   //Find second location
    firstDigit.value = '';            //Clear first
    secondDigit.value = '';           //Clear Second
    currentComputation.operator = ''; //Clear operator
}

function addOperator(event){
    event.preventDefault();
    currentComputation.operator = event.target.value;  //Assign object property with clicked operator
    console.log(currentComputation.operator);          //Validate
}

function requestMath(event){                                      //Package inputs to be sent to server
    event.preventDefault();
    console.log('Sending calculation request to server');         //Validate function initiation
    const firstDigit = document.querySelector('.firstNumber');    //Find first digit location
    const secondDigit = document.querySelector('.secondNumber');  //Find second digit location
    const warningBanner = document.querySelector('.warning');     //Find the warning banner
    currentComputation.numOne = firstDigit.value;                 //Grab first digit, store in object
    currentComputation.numTwo = secondDigit.value;                //Grab second digit, store in object
    if ( currentComputation.numOne != '' && currentComputation.numTwo != '' && currentComputation.operator != ''){
        axios({                                                   //Send packaged object to server
            method: 'POST',
            url: '/calculations',
            data: currentComputation
        })
        .then((response) => {
            console.log(response);         //Validate server response
            warningBanner.innerHTML = '' //Clear warning banner
            renderData(response);          //Update page
        })
        .catch((error) => {
            console.log(error);
        })
    } else {
        warningBanner.innerHTML += `Please ensure two numbers and an operator are selected`
    }
};

function renderData(){                   //Update page
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
    .catch((error) => {
        console.log(error);
    });
};

renderData();