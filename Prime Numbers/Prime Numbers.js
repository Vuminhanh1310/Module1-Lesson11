function printPrimeNumbers (number) {
    let checkPrimeNumber = 0; // đếm số ước của số đang xét;
    let countPrimeNumber = 0; // đếm xem đã đủ số lượng số nguyên tố cần in ra chưa;
    for (let i = 2; i < 1000; i++) { // 2,3,4,5,6,7,8,....,1000
        if (countPrimeNumber < number) { // Nếu số lượng SNT in ra < so với số lượng yêu cầu
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    checkPrimeNumber += 1;
                }
            }
            if (checkPrimeNumber == 2) {
                document.write(i + "<br>"); //4
                countPrimeNumber += 1; //1
            }
            checkPrimeNumber = 0;
        } else {
            break;
        }
    }
}
let number = +(prompt("Nhập n số nguyên tố đầu tiên: ")); //10
printPrimeNumbers (number);