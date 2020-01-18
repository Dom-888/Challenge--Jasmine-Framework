drinkAbout = function(age) {
    if(age < 0) {
        return 'Sorry. I can’t tell what drink because that age is incorrect!'
    }
    if(age < 14) {
        return 'Drink Toddy'
    }
    if(age < 18) {
        return 'Drink Coke'
    }
    if(age < 21) {
        return 'Drink Beer'
    }
    if(age < 130) {
        return 'Drink Whisky'
    }
    else {
        return 'Sorry. I can’t tell what drink because that age is incorrect!'
    }                    
}

fizzBuzz = function(number) {
    if(number % 3 == 0 && number % 5 == 0)  {
        return 'FizzBuzz'
    }
    if(number % 3 == 0) {
        return 'Fizz'
    }
    if (number % 5 == 0) {
        return 'Buzz'
    }
    else {
        return number
    }
}