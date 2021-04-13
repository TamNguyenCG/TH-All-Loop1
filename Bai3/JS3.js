let n=+prompt('Số Fibonacci muốn hiển thị:')
let a=0
let b=1
let sum=0
document.write(a+"<br>"+b+"<br>")
for(let i=0;i<n;i++){
    sum=a+b;
    document.write(sum+"<br>")
    a=b
    b=sum
}