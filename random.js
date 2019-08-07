const random=require('random');
var rand=random.int(min=0,max=10000);
const lambda=0.1;
const mu=50;
var show=(Math.sqrt(lambda/(2*3.14))*Math.pow(rand,-3/2)*Math.exp(-(lambda*Math.pow(rand-mu),2)/(2*mu*mu*lambda)));
console.log(rand);
console.log(show);