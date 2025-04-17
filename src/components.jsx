import {colourmix, largest_product, day_of_the_week, pay_raise, leap_year} from './functions.js';

function Question1(){
    return <section>
1. Write a function that  Determines the secondary rgb_colour from mixing two primary
RGB (Red, Green, Blue) colours/
      <h2>Results of function 'colourmix'</h2>
      <p>colourmix('red', 'blue') == "{colourmix("blue", "red")}"</p>
      <p>colourmix('green', 'red') == "{colourmix("green", "red")}"</p>
      <p>colourmix('blue', 'blue') == "{colourmix("blue", "blue")}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that multiplies the largest 2 numbers from a set of three    
<h2>Results of function largest product</h2>
<p>largest_product(7,5,4) == "{largest_product(7,5,4)}"</p>
<p>largest_product(7,3,4) == "{largest_product(7,3,4)}"</p>
<p>largest_product(8,9,2) == "{largest_product(8,9,2)}"</p>
    </section>
}

function Question3(){
    return <section>
    3. Write a function that Returns the name of a day of the week given an integer day number.
    <h2>Results of name of the day</h2>
    <p>day_of_the_week(2) == "{day_of_the_week(6)}"</p>
    <p>day_of_the_week(2) == "{day_of_the_week(3)}"</p>
    <p>day_of_the_week(2) == "{day_of_the_week(2)}"</p>
        </section>
}

function Question4(){
    return <section>
    4. Calculates pay raises for employees. Pay raises are based on status: Full Time ('F)' or Part Time ('P') and years of service
    <h2>Results of pay raise function</h2>
    <p>pay_raise(2) == "{pay_raise("F", 11, 100000)}"</p>
    <p>pay_raise(2) == "{pay_raise("P", 12, 80000)}"</p>
    <p>pay_raise(2) == "{pay_raise("F", 2, 40000)}"</p>
        </section>
}
//leap_year

function Question5(){
    return <section>
    4. Calculates pay raises for employees. Pay raises are based on status: Full Time ('F)' or Part Time ('P') and years of service
    <h2>Results of years and if they are leap years or not</h2>
    <p>pay_raise(2) == "{leap_year(4598)}"</p>
    <p>pay_raise(2) == "{leap_year(5678)}"</p>
    <p>pay_raise(2) == "{leap_year(3200)}"</p>
        </section>
}

export {Question1, Question2, Question3, Question4, Question5}