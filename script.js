let d1=document.querySelector("#date").value;
let m1=document.querySelector("#month").value;
let y1=document.querySelector("#year").value;

function age(){
    let d1=document.querySelector("#date").value;
    let m1=document.querySelector("#month").value;
    let y1=document.querySelector("#year").value;

    let date= new Date();
    let d2=date.getDate();
    let m2= 1 + date.getMonth();
    let y2= date.getFullYear();

    let month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(d1>d2){
        d2 = d2 + month[m2-1];
        m2 = m2 - 1;
    }

    if(m1>m2){
        m2 = m2 + 12;
        y2 = y2 -1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.querySelector("#age").innerHTML=`Your age is ${y} Years ${m} Months and ${d} Days.`;
}