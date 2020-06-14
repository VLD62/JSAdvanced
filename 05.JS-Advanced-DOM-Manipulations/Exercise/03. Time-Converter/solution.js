function attachEventsListeners() {
    //Buttons:
    const daysBtn = document.getElementById("daysBtn");
    const hoursBtn = document.getElementById("hoursBtn");
    const minutesBtn = document.getElementById("minutesBtn");
    const secondsBtn = document.getElementById("secondsBtn");
    //Inputs:
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    daysBtn.addEventListener("click", function(){
        hoursInput.value = 24 * Number(daysInput.value);
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    hoursBtn.addEventListener("click", function(){
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value )* 60;
        secondsInput.value = minutesInput.value * 60;
 
    });

    minutesBtn.addEventListener("click", function(){
        daysInput.value = Number(minutesInput.value / 60) / 24;
        hoursInput.value = Number(minutesInput.value ) / 60;
        secondsInput.value = hoursInput.value * 3600;
    });

    secondsBtn.addEventListener("click", function(){
        daysInput.value = Number(secondsInput.value / 3600) / 24;
        hoursInput.value = Number(secondsInput.value ) / 3600;
        minutesInput.value = hoursInput.value * 60;
    });

}