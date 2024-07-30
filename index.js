export default class JSUnit {

    assertEqual(arg1, arg2, msg="") {
        let start = performance.now();
        if (arg1 === arg2) {
            console.log(true);
        }
        else{
            console.log(false);
        }
        let timeTaken = performance.now() - start;
        console.log(msg);
        console.log("Total time taken : " + (Math.round(timeTaken * 100)/100) + " milliseconds");
    }

    assertTrue(arg1,msg="") {
        let start = performance.now();
        if (arg1) {
            console.log(true);
        }
        else {
            console.log(false)
        }
        let timeTaken = performance.now() - start;
        console.log(msg);
        console.log("Total time taken : " + (Math.round(timeTaken * 100)/100) + " milliseconds");
    }

    assertFalse(arg1) {
        let start = performance.now();
        if (!arg1) {
            console.log(true);
        }
        else {
            console.log(false)
        }
        let timeTaken = performance.now() - start;
        console.log("Total time taken : " + (Math.round(timeTaken * 100)/100) + " milliseconds");
    }



}




