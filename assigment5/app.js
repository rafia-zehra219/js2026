// Q1
let a = 5, b = 3;
let sum = a + b;
document.write("Sum: " + sum + "<br><br>");

// Q2
document.write("Add: " + (a+b) + "<br>");
document.write("Sub: " + (a-b) + "<br>");
document.write("Mul: " + (a*b) + "<br>");
document.write("Div: " + (a/b) + "<br>");
document.write("Mod: " + (a%b) + "<br><br>");

// Q3
let num;
document.write("Value after declaration: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("After increment: " + num + "<br>");

num = num + 7;
document.write("After addition: " + num + "<br>");

num--;
document.write("After decrement: " + num + "<br>");

document.write("Remainder: " + (num % 3) + "<br><br>");

// Q4
let ticket = 600;
document.write("Total ticket cost: " + (ticket*5) + "<br><br>");

// Q5 Table
let n = 4;
for(let i=1; i<=10; i++){
    document.write(n + " x " + i + " = " + (n*i) + "<br>");
}
document.write("<br>");

// Q6 Temperature
let c = 25;
let f = (c * 9/5) + 32;
document.write(c + "C = " + f + "F <br>");

let f2 = 70;
let c2 = (f2 - 32) * 5/9;
document.write(f2 + "F = " + c2 + "C <br><br>");

// Q7 Shopping
let total = (500*2) + (300*3) + 100;
document.write("Total Bill: " + total + "<br><br>");

// Q8 Percentage
let per = (400/500)*100;
document.write("Percentage: " + per + "%<br><br>");

// Q9 Currency
let pkr = (10*104.80) + (25*28);
document.write("PKR: " + pkr + "<br><br>");

// Q10
let result = ((5+5)*10)/2;
document.write("Result: " + result + "<br><br>");

// Q11 Age
let age1 = 2026 - 2004;
let age2 = age1 - 1;
document.write("Age: " + age2 + " or " + age1 + "<br><br>");

// Q12 Circle
let r = 5, pi = 3.142;
document.write("Circumference: " + (2*pi*r) + "<br>");
document.write("Area: " + (pi*r*r) + "<br><br>");

// Q13 Snacks
let totalSnacks = (70-21)*365*2;
document.write("Snacks needed: " + totalSnacks);