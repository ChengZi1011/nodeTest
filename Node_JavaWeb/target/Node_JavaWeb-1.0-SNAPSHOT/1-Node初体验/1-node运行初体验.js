let fun = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
};
fun(50);