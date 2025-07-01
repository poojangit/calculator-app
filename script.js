const prevDisplay = document.querySelector('.prev-display')
const currDisplay = document.querySelector('.curr-display')
const numbers = document.querySelectorAll('.number')
const clearButton = document.querySelector('.clear')
const delButton = document.querySelector('.delete')
const operands = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
let operation;

function appendNumber(number){
    if(number === "." && currDisplay.innerText.includes(".")) return
    currDisplay.innerText += number
}

function clearDisplay(){
    prevDisplay.innerText = "";
    currDisplay.innerText = "";
}

function chooseOperation(operand) {
    if(currDisplay.innerText === "")
        return
    compute(operand)
    operation = operand
    currDisplay.innerText += operand
    prevDisplay.innerText = currDisplay.innerText
    currDisplay.innerText = ""

}
function compute(){
    let result
    const previousValue = parseFloat(prevDisplay.innerText)
    const currentValue = parseFloat(currDisplay.innerText)
    if(isNaN(previousValue) || isNaN(currentValue))
        return
    switch(operation){
        case "+" :
         result = previousValue + currentValue
         break;
        case "/" :
            result = previousValue / currentValue
            break;
        case "-":
            result = previousValue - currentValue
            break;
        case "*":
            result = previousValue * currentValue
            break
        default:
            return
    }
    currDisplay.innerText = result
}
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log("clicked on number")
        appendNumber(number.innerText)
    })
})
operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        console.log("operation clicked")
        chooseOperation(operand.innerText)
    })
})

equal.addEventListener("click", ()=> {
    compute()
    prevDisplay.innerText = ""
})
clearButton.addEventListener("click" , () => {
    console.log("clicked clear button");
    clearDisplay()
})

delButton.addEventListener("click", () => {
    console.log("delete");
    currDisplay.innerText = currDisplay.innerText.slice(0,-1)
})