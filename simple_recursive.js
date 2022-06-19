function countDown(x) {
    if(x===0) {
        console.log("count down")
    } else {
        console.log("x-->",x)
        countDown(x-1);
        console.log("foo" ,x)
    }
}

countDown(5)


function power (num, pow) {
    if(pow == 0) {
        return 1;
    }
    else {
        return num  * power(num,pow -1)
    }
}
console.log('power =====>',power(3,3))


function factorial (num) {
    if(num ==0) {
        return 1;
    }
    else {
        return num * factorial(num-1);
    }
}

console.log('factorial =====>',factorial(5))