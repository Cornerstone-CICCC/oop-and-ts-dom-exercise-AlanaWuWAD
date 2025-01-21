class Calculator {

    constructor(){
        this.num1 = document.querySelector('#num1')
        this.num2 = document.querySelector('#num2')
        this.result = document.querySelector('#result')
        this.btn = document.querySelector('#calculateBtn')

        this.btn.addEventListener('click',()=>{
            this.cal()
        })
    }
    
    cal(){
        const a = parseFloat(this.num1.value)
        const b = parseFloat(this.num2.value)
        let calResult = 0

        const option = document.querySelector('#operation')
        if(option.value === 'add'){
            calResult = this.add(a,b)
        }else if(option.value === 'subtract'){
            calResult = this.subtract(a,b)
        }else if(option.value === 'multiply'){
            calResult = this.multiply(a,b)
        }else{
            calResult = this.divide(a,b)
        }
        console.log('cal',calResult)
        this.result.innerHTML = calResult
    }
    add(a,b){
        return a+b
    }

    subtract(a,b){
        return a-b
    }

    multiply(a,b){
        return a*b
    }

    divide(a,b){
        if(b === 0){
            alert('Denominator can not be 0')
        }
        return (a/b).toFixed(2)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const schoolTodoList = new Calculator()
  })
