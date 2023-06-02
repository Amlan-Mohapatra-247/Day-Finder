let string=""
document.getElementById("submit").addEventListener("click", function(){
let z=document.getElementById("dt").value
z=z[3]+z[4]+"/"+z[0]+z[1]+z.slice(5)
let q=new Date(z)
var d1=String(q.getDate()).padStart(2,'0')
var m1=String(q.getMonth()+1).padStart(2,'0')
var y1=String(q.getFullYear())
var j=q.getDay();
let v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let k=v[j]
let today=new Date()
var d2=String(today.getDate()).padStart(2,'0')
var m2=String(today.getMonth()+1).padStart(2,'0')
var y2=String(today.getFullYear())

if (y1==y2) {
    if (m1==m2) {
        if (d1==d2) {
            string="Today is "+k+"!"
        }
        else if (d1<d2) {
            string="This day was on "+k+"!"
        }
        else {
            string="This day will be on "+k+"!"
        }
    }
    else if (m1<m2) {
        string="This day was on "+k+"!"
    }
    else {
        string="This day will be on "+k+"!"
    }
}
else if (y1<y2) {
    string="This day was on "+k+"!"
}
else {
    string="This day will be on "+k+"!"
}

document.getElementById("print").innerHTML=string
});

document.getElementById("dt").addEventListener("click", function(){
    document.getElementById("dt").value=""
});

document.getElementById("Reset").addEventListener("click", function(){
    string=""
    document.getElementById("print").innerHTML=string
    document.getElementById("dt").value="DD/MM/YYYY"
});