let i;
let count = 0;
let sum = 0;
document.write(" Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là: ")
for ( i = 0 ; i <= 1000; i ++ ) {
    if( i % 7 == 0){
        sum += i;
        count += 1
        console.log(" số thứ " + count + " chia hết cho 7 : " + i)
        if( count == 30) break;
    }
}
document.write( sum );