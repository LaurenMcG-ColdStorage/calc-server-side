# Server Side Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Requirements

node.js
axios

## Installation

- Fork this repo and clone it to your local machine.
- Open the directory in your chosen IDE.
- Ensure that node is installed by running npm install in your terminal
- Run npm start in your terminal
- Open a browser window and navigate to localhost:5000


## Description

The aim of this project is to create a basic web based calculator. The calculator needs to be able to perform addition, subtraction, multiplication, and division. The calculator needs only to be able to take in two numbers.

The code specific requirements of this calculator's functionality include:

- All mathematical computation is to be done server-side
- All calculation history is to be stored server-side
- All page rendering is to be completed client-side
- Most recent calculation is displayed in section "data-testid='recentResult'"
- All calculation history is displayed in section "data-testid='resultHistory'"
- All user inputs are to be packaged within an object, and sent to the server

The operator selection was requested to be in button form, and thus has been made into a function which updates our /post object. The "=" button takes in the number inputs and stores the values in /post object, then initiates a post request for the server to perform calculations.

A clear button is added to our calculator, which when pressed will empty the input boxes and clear any operator from storage.

A Clear Everything button is added to the calculator, which empties calculation history and input fields.

All numbers are parsed to integers on the server side to prevent possible string concatenation.


Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
