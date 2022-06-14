let a = 1;
let b = 1;
let i;
let c;
let sum;
document.write(" Số Fibonaci đầu tiên chia hết cho 5: ")
for ( i = 1 ; i <= 18; i ++ ) {
    c = a + b;
    a = b; // gán a = b
    b = c; // gán b = c
    if( c % 5 == 0) {
        document.write( c );
        break;
    }
}