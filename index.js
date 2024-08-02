export default class JSUnit {


    main(){
        return Object.getOwnPropertyNames (Object.getPrototypeOf (this))
            .filter(propName => (propName !== 'constructor' && typeof this[propName] === 'function'))
            .forEach(propName => this[propName]());
    }

    /** asserts if the statement is equal */
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

    /** Asserts that the statement is True */
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

    assertFalse(arg1, msg="") {
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

    assertRaises(arg, exception, msg="") {
        try{
            arg
        }
        catch(e){
            if (e instanceof exception){
                console.error("TypeError true");
            }
        }
    }


}




