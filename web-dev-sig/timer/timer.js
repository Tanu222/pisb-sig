
console.log('Inside timer.js');
function getTime() {
    console.log('getTime called');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours(); // => 9
    var min = today.getMinutes(); // =>  30
    var sec = today.getSeconds(); // => 51

    var time = hour + ":" + min + ":" + sec;

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[today.getDay()];
    var month = months[today.getMonth()];

    var timeStart = new Date(day + " " + month + " " + dd + " " + yyyy + " " + time + " GMT+0530").getTime();
    var timeEnd = new Date("Tue Sep 8 2021 12:30:10 GMT+0530").getTime();

    var delta = Math.abs(timeEnd - timeStart) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;
    let times = [days, hours, minutes, seconds];
    return times;
}


function count() {
    console.log('count called');
    let times = getTime();
    console.log(times);
    
    renderDigits(times[0], 'days')
    renderDigits(times[1], 'hours');
    renderDigits(times[2], 'minutes');
    renderDigits(times[3], 'seconds');

};

setInterval(count, 1000);


function renderDigits(time, id) {
    let mi = digits(time);
    let m = [];
    for (let i = 0; i < 2; i++) {
        m[i] = document.getElementById(id + i);
        m[i].innerHTML = mi[i];
    }
}
function digits(n) {
    var arr = new Array(2);
    if (n < 10) {
        arr[0] = 0;
        arr[1] = n;
        return arr;
    }
    if (n === 10) {
        arr[0] = 1;
        arr[1] = 0;
        return arr;
    }
    var c = 0;
    while (n >= 1) {
        //console.log('array length ' + arr.length);
        arr[c] = Math.floor(n % 10);
        n = n / 10;
        c++;
    }
    arr.reverse();
    return arr;
}



