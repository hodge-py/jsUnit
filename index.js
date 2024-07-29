class jsUnit {
    constructor() {


    }

    stateEqual(arg1, arg2) {
        let start = performance.now();
        if (arg1 === arg2) {
            console.log(true);
        }
        else{
            console.log(false);
        }
        let timeTaken = performance.now() - start;
        console.log("Total time taken : " + timeTaken + " milliseconds");
    }

}

var unit = new jsUnit();

unit.stateEqual(add(2,2),4)


function add(arg1, arg2) {
    adder = arg1 + arg2
    return adder
}


