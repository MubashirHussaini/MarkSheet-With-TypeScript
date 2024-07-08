"use strict";
let mark = 990;
switch (true) {
    case mark > 95 && mark <= 100:
        console.log("your grade is A++");
        break;
    case mark > 90 && mark <= 94:
        console.log("your grade is A+");
        break;
    case mark > 85 && mark <= 89:
        console.log("your grade is A");
        break;
    case mark > 80 && mark <= 84:
        console.log("your grade is B++");
        break;
    case mark > 75 && mark <= 79:
        console.log("your grade is B+");
        break;
    case mark > 70 && mark <= 74:
        console.log("your grade is B");
        break;
    case mark > 60 && mark <= 69:
        console.log("your grade is C");
        break;
    case mark > 50 && mark <= 59:
        console.log("your grade is D");
        break;
    case mark > 40 && mark <= 49:
        console.log("your grade is E");
        break;
    case mark > 0 && mark <= 40:
        console.log("You fail");
        break;
    default:
        console.log("your numbers is incorrect");
        break;
}
