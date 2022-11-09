console.log("Hello World")

let a = parseInt(prompt("Enter value of A"))
let b = parseInt(prompt("Enter value of B"))
let c = parseInt(prompt("Enter value of C"))
let d = parseInt(prompt("Enter value of D"))
let e = parseInt(prompt("Enter value of E"))

if (a > b && a > c && a > d && a > e) {
    alert("Largest = " + a)
}

else if (b > a && b > c && b > d && b > e) {
    alert("Largest = " + b)
}

else if (c > a && c > b && c > d && c > e) {
    alert("Largest = " + c)
}

else if (d > a && d > b && d > c && d > e) {
    alert("Largest = " + d)
}

else if (e > a && e > b && e > c && e > d) {
    alert("Largest = " + e)
}
else {
    alert("Jao Bhai..")
}