/*Created var for all elements we need to change the contet for.*/ 
let lengthEl = document.getElementById('meter-feet');
let volumeEl = document.getElementById('liters-gallons');
let weightEl = document.getElementById('kg-pounds');
/* Created a var to select the input*/
let input = document.querySelector('input');
/* Added the function to any input change */
input.oninput = convert;
function convert(num) {
    /* Grabed the value inputed*/
    let value = `${num.target.value}`;
    /*Created var for all the conversion calculations needed */
    let meter = (value / 3.28).toFixed(3);
    let feet = (value * 3.28).toFixed(3);
    let gallons = (value * 0.264172).toFixed(3);
    let liters = (value * 3.785412).toFixed(3);
    let pound = (value * 2.204623).toFixed(3);
    let kg = (value * 0.453592).toFixed(3);
    /* Created the needed strings for the HTML output */
    lengthEl.innerText = value + " meters = " + feet + " feet | " + value + " feet = " + meter + " meters";
    volumeEl.innerText = value + " liters = " + gallons + "gallons | " +value + " gallons = " + liters +" liters";
    weightEl.innerText = value + " kilos = " + pound + " pounds | " +value + " pounds = " + kg +" kilos";

}