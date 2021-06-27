const dayT=document.getElementById("day");
const hourT=document.getElementById("hour");
const MinuteT=document.getElementById("Minute");
const secondT=document.getElementById("second");
const newYear = "1 Jan 2021";
const name=document.getElementById("sampleform");
const outp=document.getElementById("formoutput");

//YLWv8G6!^^C(1r(8PwZS

function datecalc()
{  
    const newY=new Date(newYear);
    const curDate=new Date();
    //var now=new Date(sec);
   // console.log();
    const sec=(newY-curDate)/1000;
    const totSec=Math.floor(sec%60);
    const day=Math.floor((sec/3600)/24);
   console.log(sec);
    const hour=Math.floor((sec/3600)%24);
    const minutes=Math.floor((sec/60)%60);
    
   dayT.innerHTML=day;
   hourT.innerHTML=hour;
   MinuteT.innerHTML=minutes;
   secondT.innerHTML=totSec;

}
function updatev()
{
    outp.innerHTML=name.value;
}
const dropid=document.getElementById("View");
const dropoutput=document.getElementById("dropdownoutput");
function dropdownitem()
{
    dropoutput.innerHTML=dropid.value;
}

dropdownitem();
updatev();
datecalc();
setInterval(datecalc, 1000);
setInterval(updatev, 1);
setInterval(dropdownitem, 1);