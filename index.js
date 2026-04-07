//setting an end date for the Timer
const inputDate = prompt("Enter the end date and time(ex: 7 Apr,2026 12:00:00):")
const endDate = Date.parse(inputDate);
console.log(endDate);
//setting the start date as now
const startDate = new Date().getTime();

//setInterval function which calculates the time and displays in the page for every second
let time = setInterval(function updateInterval(){
    // calculating the present time
    const now = new Date().getTime();
    //calculating the time covered
    const timeCovered = now - startDate;
    //calculating the time pending
    const timePending = endDate - now;
    //calculating the days,hrs,min,sec in terms of millis
    const oneDayInMiilis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecInMillis = 1000;

    //calculating the remining days,hrs,min,sec reflected in timer
    const days = Math.floor(timePending/oneDayInMiilis);
    const hrs = Math.floor((timePending%(oneDayInMiilis)/(oneHourInMillis)));
    const mins = Math.floor((timePending%(oneHourInMillis)/(oneMinInMillis)));
    const secs = Math.floor((timePending%(oneMinInMillis)/(oneSecInMillis)));

    //writing the values to the placeholders
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculating width percentage for progress bar
    const totalTime = endDate - startDate;
    const percentageDistance = (timeCovered/totalTime)*100;
  
    //set progress bar width
    document.getElementById("progress-bar").style.width = percentageDistance+"%";

    //handling the case where the present date is greater than end date
    if(timePending<0){
        clearInterval(time);
        document.getElementById("countdown").innerHTML = "EXPIRED"
        document.getElementById("progress-bar").style.width = "100%";

    }

},1000);
