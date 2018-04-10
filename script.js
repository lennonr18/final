var qField = document.getElementById("circle");
var aField = document.getElementById("results")

var circumference = Math.PI * radius * 2;
var area = Math.PI * (radius *radius);
var volume = (4/3) * Math.PI * Math.pow(radius,3);

var sphere = {
    radius: 1,
    calccircumference: function(){
        return (Math.PI * this.radius * 2)
    },
    calcarea: function(){
        return (Math.PI * (this.radius * this.radius))
    },
    calcvolume: function (){
        return ((4/3) * Math.PI * Math.pow(this.radius,3))
    }
    };

var userRadius;
function enterUserRadius (){
    userRadius = prompt("Please enter a radius");
    userRadius = Number(userRadius);
};

var message1 = "Cirumference:" + sphere.calccircumference;
var message2 = "Area:" + sphere.calcarea;
var message3 = "Volume" + sphere.volume;
document.getElementById("results").innerHTML = message1 + message2 + message3;



