let a = 0
for(let i=0;i<=100;i++) {
    if (a % 3 == 0 && a % 5 == 0) {
        document.write('FizzBuzz'+"<br>")
    }else if (a % 5 == 0){
        document.write("Buzz"+"<br>")
    }else if (a % 3 ==0){
        document.write("Fizz"+"<br>")
    }else{
        document.write(a+"<br>")
    }
    a++
}
