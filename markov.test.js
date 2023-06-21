const { markov } = require("./markov")



describe("Testing MarkovMachine methods", function(){
    let testText = "the cat in the hat";
    let mm = markov.MarkovMachine(testText);
    
    test("makeChains method", function(){
        expect(typeof mm.makechains()).toBe("function");
    })

    test("makeText method", function(){
        expect(typeof mm.makeText()).toBe("function");
    })
});