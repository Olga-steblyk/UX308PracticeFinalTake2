function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

function colourmix(rgb_colour1,rgb_colour2){
    let rgb_colour;

    if (rgb_colour1 == "blue" && rgb_colour2 == "red" || rgb_colour1 == "red" && rgb_colour2 == "vlue"){
        return rgb_colour = "Fuchsia";
    } else if (rgb_colour1 == "green" && rgb_colour2 == "red" || rgb_colour1 == "red" && rgb_colour2 == "green"){
        return rgb_colour = "Yellow";
    } else if (rgb_colour1 == "blue" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "blue"){
        return rgb_colour = "Aqua";
    } else if (rgb_colour1 && rgb_colour2 == "red"){
        return rgb_colour = "Red";
    } else if (rgb_colour1 && rgb_colour2 == "blue"){
        return rgb_colour = "Blue";
    } else if (rgb_colour1 && rgb_colour2 == "green"){
        return rgb_colour = "Green";
    } else {
        return rgb_colour = "Your Input was invalid please try again";
    }
 
}

function largest_product(val1,val2,val3){
    let product;

    if (val1 > val3 && val2 > val3){
        return product = val1*val2;
    }else if (val1 > val2 && val3 > val2){
        return product = val1*val3;
    }else if (val3 > val1 && val2 > val1){
        return product = val3*val3;
    }else if (val2 == val1 && val1> val3){
        return product = val1*val2;
    }else if (val2 == val3 && val3>val1){
        return product =val2*val3;
    }
}
   
function day_of_the_week(day_num){
    let theday;
    if (day_num == 1){
        return theday ="It is Sunday";
    }else if (day_num == 2){
        return theday ="Its is Monday"
    }else if (day_num == 3){
        return theday ="Its is Tuesday"
    }else if (day_num == 4){
        return theday ="Its is Wednesday"
    }else if (day_num == 5){
        return theday ="Its is Thursday"
    }else if (day_num == 6){
        return theday ="Its is Friday"
    }else if (day_num == 7){
        return theday ="Its is Saturday"
    }else{
        return theday ="Sorry your input is invalid" 
    }
}

function pay_raise(status, years, salary){
    let raise;
    if(status == "F" && years >10  && salary >0){
        return raise = salary * 1.05;
    }else if (status == "F" && years <10 && salary >0){
        return raise = salary * 1.015;
    }else if(status == "P" && years >10 && salary >0){
        return raise = salary * 1.03;
    }else if (status == "P" && years<4 && years > 0 && salary >0){
        return raise = salary * 1.01;
    }else {
        return raise = salary * 1.02;
    }
}

function leap_year(year){
    var leapyearverdict;
    if (year % 400 == 0){
        return leapyearverdict = ` The Year ${year} is in fact a leap year :D`;
    }else if (year % 100 != 0){
        return leapyearverdict = ` The Year ${year} is not a leap year D:`;
    }else{
        return leapyearverdict = `Sorry your input was invalid, please try again`;
    }
}

export {hello, fahrenheitToCelsius, colourmix, largest_product, day_of_the_week, pay_raise, leap_year}