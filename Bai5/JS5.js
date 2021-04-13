let n=+prompt('Số Fibonacci muốn hiển thị:')
let a=0
let b=1
let sum=0
let r=1
document.write(a+"<br>"+b+"<br>")
for(let i=2;i<n;i++){
    sum=a+b;
    document.write(sum+"<br>")
    r=r+sum
    a=b
    b=sum
}
document.write(`-->Tổng ${n} số đầu là: ${r}`)


