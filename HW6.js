`use strict`;

let n = prompt(`Input a number greater than 1.`, 2);

outer: for (i = 2;i <= n; i++){
    // inner loop examine the i which less than n should be printed or not.
    for(j = 2;j <= i; j++){
        if(j != i && i % j == 0) continue outer;
    }
    alert(i);
};