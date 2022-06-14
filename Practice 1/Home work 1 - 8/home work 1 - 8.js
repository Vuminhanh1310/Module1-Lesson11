function guess() {
    let number = +prompt("Nhập khoảng lớn nhất bạn muốn đoán - từ 0 đến ?")
    let number_random = Math.floor(Math.random() * number);
    console.log(number_random);
    let number_check = +prompt ("Nhập số bạn đoán");
    let count = 0;
    while (number_check !== number_random) {
        count++;
        if (count == 4) {
            alert("Bạn hết số lần đoán")
            break;
        } else if (number_check < number_random) {
            alert("Số bạn đoán bé hơn");
        } else {
            alert ("Số bạn đoán lớn hơn")
        }
        number_check = prompt ("Nhập số bạn đoán");
    }
    if (count == 4) {
        document.write("Bạn hết số lần đoán")
    } else {
        document.write("Bạn đã đoán đúng số. Chúc mừng bạn!")
    }
}