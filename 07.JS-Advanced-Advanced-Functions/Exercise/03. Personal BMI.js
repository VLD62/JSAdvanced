function personalBMI(name, age, weight, height) {
    function bmiStatus(bmiObj) {
        if (bmiObj["BMI"] < 18.5) {
            bmiObj['status'] = "underweight";
        } else if (bmiObj["BMI"] < 25) {
            bmiObj['status'] = "normal";
        } else if (bmiObj["BMI"] < 30) {
            bmiObj['status'] = "overweight";
        } else {
            bmiObj['status'] = "obese";
            bmiObj['recommendation'] = "admission required";
        }
        return bmiObj
    }
    let bmiObj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: 'normal'
    }
    return bmiStatus(bmiObj);
}

console.log(personalBMI("Inko", 32, 94, 180));