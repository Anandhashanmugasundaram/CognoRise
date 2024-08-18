let button      = document.getElementById("btn")
let heightInput = document.getElementById("height_in_cm")
let weightInput = document.getElementById("weight_in_kg")
let result = document.getElementById("output")



let heightVal = false;
let weightVal = false;

button.addEventListener("click",()=>{

    let height = Number(heightInput.value);
    let weight = Number(weightInput.value);


    if(height == '' || isNaN(height) || height<=0){
        document.querySelector('.alert_height').innerHTML = "Please enter a valid Height";
                                  heightVal                  = false;
    }
    else{
        document.querySelector('.alert_height').innerHTML = ''
                                  heightVal                  = true;

    }

    if(weight == '' || isNaN(weight) || weight<=0){
        document.querySelector('.alert_weight').innerHTML = "Please enter a valid Weight";
                                  weightVal                  = false;
    }
    else{
        document.querySelector('.alert_weight').innerHTML = ''
                                  weightVal                  = true;

    }

   
    if (heightVal && weightVal) {
        let bmi = (weight / (height * height) * 10000).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'You are Underweight ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal ' + bmi;
        } else {
            result.innerHTML = 'You are Overweight ' + bmi;
        }
    } 
});

