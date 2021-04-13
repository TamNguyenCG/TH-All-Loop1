function doPlay() {
    let n = +prompt('Nhập khoảng số bạn muốn đoán:')
    let computer = Math.floor(Math.random() * n)
    let limit = 3
    let count = 0
    while (count < limit){
        let a = +prompt('Nhập dự đoán của bạn:')
        if (a === computer) {
            alert("Chúc mừng ! Bạn đã đoán đúng !")
            break;
        } else if (a < computer) {
            alert("Thua ! Bạn dự đoán bé hơn")
        } else if (a > computer) {
            alert("Thua ! Bạn dự đoán lớn hơn")
        }
        count++
    }
    console.log(computer)
}





