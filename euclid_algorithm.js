function gcd(a,b) {
    while(b!=0) {
        let t =a;
        a= b;
        b = t % b;
    }
    return a;
}

console.log(gcd(20,8));