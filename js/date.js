// const date = new Date();
// console.log(`%c 🕒 ${date}`, "background: black;padding: 10px; color: white; text-decoration: underline;");

function showTime(){
    
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    var message = " HAPPY NEW YEAR! IT'S 2024!"
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // FOR NEW YEARS MESSAGE USE "+ message" at the end of the session line 
    var time = h + ":" + m + " "  + session ;

    console.log('Test 1: Loaded (Clock)')

    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();

function RTDate(){
    
    var today = new Date();
    var dd = today.getDate()
    var mm = today.getMonth()+1
    var yy = today.getFullYear()
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    document.getElementById("date").innerText = mm+"/"+dd+"/"+yy;
    document.getElementById("date").textContent = mm+"/"+dd+"/"+yy;
    
    console.log('Test 2: Loaded (Date)')

    setTimeout(RTDate, 1000);
    return (mm+"/"+dd+"/"+yy);
}
 
console.log(RTDate())

function cyear(){
    
    var year = new Date().getFullYear()

    
    document.getElementById("current_year").innerText = year;
    document.getElementById("current_year").textContent = year;
    console.log('Test 3: Loaded (Year)')

    setTimeout(cyear, 1000);
    return (year);

}



function message(){
    var session = "Good Morning"
    if(h == 0){
        h = 12;

    }
    if(h> 12){
        h = h - 12;
        session = "Good Afternoon"
    }
    setTimeout(() => {
        document.getElementById("message").innerText(session)
    }, 1000);
}

