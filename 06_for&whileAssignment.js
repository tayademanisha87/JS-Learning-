
console.log(`------------print no 5 to 15 by incrementing 1-------------`);

for (let index = 5; index <=20; index++) {
    console.log(index);
    
}

console.log(`------------print no 50 to 40 by decrementing 1-------------`);


for (let index = 50; index >=40; index--) {
    console.log(index);
    
}

console.log(`------------find first 15 odd numbers-------------`);

for (let index = 1; index <30; index=index+2) {
    console.log(index);
    
}

console.log(`------------find first 10 even numbers-------------`);

for (let index = 0; index <20; index=index+2) {
    console.log(index);
    
}


console.log(`------------print table of 5-------------`);



for (let index = 5; index <=50; index=index+5) {
    console.log(index);
    
}

console.log(`------------print table of 10-------------`);

for (let index = 10; index <=100; index=index+10) {
    console.log(index);
    
}


console.log(`------------print table of 10 in reverse order-------------`);

for (let index = 100; index >=10; index=index-10) {
    console.log(index);
    
}

console.log(`------------print table of 5-------------`);

var result = " ";

for (let index = 5; index <=50; index=index+5) {
    result = result.concat (index).concat("  ");
    
}
console.log(result);

console.log(`------------print table of 10 in reverse order-------------`);

var result = " ";

for (let index = 100; index >=10; index=index-10) {
    result = result.concat(index).concat("  ");
   
    
}
console.log(result);


console.log(`---------------------- 06_While Loop Assignment --------------------------`);


console.log(`----------Print numbers from 5 to 15 by incre..1 ------------`);

var i = 5;
while (i<=15) {
    console.log(i);
    i++;    
}

console.log(`------------ Print numbers from 5 to 40 by decre...1`);
var i = 50;
while (i>=40) {
    console.log(i);
    i--;
    
}

console.log(`-----------find first 15 odd numbers -------------`);

var i = 1;
while (i<=30){
    console.log(i);
    i=i+2;
    
}

console.log(`-----------find first 10 even numbers -------------`);

var i = 0;
while (i<=20) {
    console.log(i);
    i=i+2;
    
}

console.log(`-----------Print Table of 5 -------------`);
var i = 5;
while (i<=50) {

    console.log(i);
    i=i+5
}

console.log(`-----------Print Table of 10 -------------`);

var i = 10;
while (i<=100) {
    console.log(i);

    i=i+10
}

console.log(`-----------Print Table of 10 i reverse order-------------`);

var i = 100;
while (i>=10) {
    console.log(i);
i=i-10    
}
