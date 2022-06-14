let a = 1;
let b = 1;
let i;
let c;
let sum = 2;
document.write(" Tổng 20 Số Fibonaci đầu tiên là: ")
for ( i = 1 ; i <= 18; i ++ ) {
    c = a + b;
    sum += c;
    a = b; // gán a = b
    b = c; // gán b = c
}
console.log(c);
document.write( sum );