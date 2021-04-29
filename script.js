const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(`.calculator-screen`)
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(`.equal-sign`)
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    // prevNumber = currentNumber
    // calculatorOperator = operator
    // currentNumber = ' '
    if (calculatorOperator === '') {
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
}

equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case '*': 
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case '/':
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculatorOperator = ' '
}

clearBtn.addEventListener('click', () => {
    // console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

decimal.addEventListener('click', (event) => {
    // console.log.(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
