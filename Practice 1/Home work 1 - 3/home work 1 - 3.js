let a = 1;
let b = 1;
let i;
let c;
document.write(" Dãy số Fibonaci: 1 ; 1 ; ")
for ( i = 1 ; i <= 18; i ++ ) {
    c = a + b;
    a = b; // gán a = b
    b = c; // gán b = c
    document.write( c + " ; ")
}