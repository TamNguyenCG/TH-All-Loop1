let n = +prompt('Nhập số N: ')
let a=1
let sum=0
let i=0
while(i < n){
    if(a % 7 === 0){
        sum+=a
        i++
        document.write(a+ "  ")
    }
    a++
}
 document.write(`<br>Tổng của các số chia hết cho 7 là: ${sum} `)