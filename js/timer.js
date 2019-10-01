function timerRuslanL(data){
    /* Getting data from settings */
    var elementIdDays =  document.getElementById(data.elementIdDays),
        elementIdHours =  document.getElementById(data.elementIdHours),
        elementIdMinutes =  document.getElementById(data.elementIdMinutes),
        elementIdSeconds =  document.getElementById(data.elementIdSeconds);
    var statys = data.statys;
    var indicatedDate = new Date(data.year, data.month, data.days, data.hours, data.minutes, data.second, 0);
    var days, hours, minutes, second;
    
    /* Calculation of the remaining time */
    var timing = function(){
        
        var nowDate = new Date();

        /* Calculation of remaining time (days, hours, minutes, second) */
        days = Math.trunc((indicatedDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24));
        hours = Math.trunc((indicatedDate.getTime() - nowDate.getTime()) / (1000 * 3600));
        minutes = Math.trunc((indicatedDate.getTime() - nowDate.getTime()) / (1000 * 60));
        second = Math.trunc((indicatedDate.getTime() - nowDate.getTime()) / (1000));
        second = second - (minutes * 60);
        minutes = minutes - (hours * 60);
        hours = hours - (days * 24);
        
        if (statys) {
            /* Output remaining time */
            if (days <= 0)  { days = 0 }
            if (hours <= 0)  { hours = 0 }
            if (minutes <= 0)  { minutes = 0 }
            if (second <= 0)  { second = 0 }
            elementIdDays.innerHTML = days;
            elementIdHours.innerHTML = hours;
            elementIdMinutes.innerHTML = minutes;
            elementIdSeconds.innerHTML = second;
        }
        setTimeout(timing, 10);
    };
    timing();
}