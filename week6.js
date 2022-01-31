function BMI() {
  var h = document.getElementById('cm').value;
  var w = document.getElementById('kg').value;
  var bmi = w / ((h/100)*(h/100));
  var r1 = document.getElementById('r1')
  var r2 = document.getElementById('r2')
  try {
    if (bmi < 18.5) {
      throw "underweight"
    } else if (bmi >= 18.5 && bmi < 23) {
      throw "normal"
    } else if (bmi >= 23 && bmi < 25) {
      throw "overweight"
    } else if (bmi >= 25 && bmi < 30) {
      throw "obesity"
    } else {
      throw "very overweight"
    }
  } catch (e) {
    r1.innerHTML = "Your BMI is " + Math.round(bmi)
    r2.innerHTML = "You are " + e
  }
}
