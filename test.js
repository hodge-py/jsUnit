import JSUnit from "./index.js"

class Tester extends JSUnit {

    adder(){
        this.assertEqual((2+2),4)
    }

    subtract(){
        this.assertEqual((2-2),4)
    }

    string(){
        this.assertFalse(typeof 2 === "string")
    }

    testerror(){

    }

}

var test = new Tester()

test.main();