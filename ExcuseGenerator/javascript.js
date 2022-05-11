let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoSecond = who[Math.round(Math.random()*(who.length-1))];
let whatSecond = what[Math.round(Math.random()*(what.length-1))];
let whenSecond = when[Math.round(Math.random()*(when.length-1))];
let actionSecond = action[Math.round(Math.random()*(action.length-1))];

document.getElementById('excuse').innerHTML = whoSecond + ' ' + actionSecond + ' ' + whatSecond +  ' ' + whenSecond;