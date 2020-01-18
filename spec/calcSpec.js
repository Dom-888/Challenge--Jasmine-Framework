describe("What Can I drink function", function() {

    beforeEach(function() {
        drink = new drinkAbout();
    });

    describe("Checks Age", function() {
        it("should exist", function() {
            expect(drinkAbout).toBeDefined();
        });
    });

    describe("Checks Age", function() {
        it("should return drink toddy when called as DrinkAbout(13)", function() {
            var result = drinkAbout(13)
            expect(result).toBe("Drink Toddy");
        });
    });

    describe("Checks Age", function() {
        it("should return drink coke when called as DrinkAbout(17)", function() {
            var result = drinkAbout(17)
            expect(result).toBe("Drink Coke");
        });
    });

    describe("Checks Age", function() {
        it("should return drink beer when called as DrinkAbout(20)", function() {
            var result = drinkAbout(20)
            expect(result).toBe("Drink Beer");
        });
    });

    describe("Checks Age", function() {
        it("should return drink whisky when called as DrinkAbout(120)", function() {
            var result = drinkAbout(120)
            expect(result).toBe("Drink Whisky");
        });
    });

    describe("Checks Age", function() {
        it("should return an error when called as DrinkAbout(-1)", function() {
            var result = drinkAbout(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });

    describe("Checks Age", function() {
        it("should return an error when called as DrinkAbout(131)", function() {
            var result = drinkAbout(131)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});


describe("What Can I drink function", function() {

    beforeEach(function() {
        drink = new fizzBuzz();
    });

    describe("Checks Number", function() {
        it("should exist", function() {
            expect(drinkAbout).toBeDefined();
        });
    });

    describe("Checks Number", function() {
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
    });
    
    describe("Checks Number", function() {
        it("should return FizzBuzz when called as fizzBuzz(18)", function() {
            var result = fizzBuzz(18)
            expect(result).toBe("Fizz");
        });
    });    

    describe("Checks Number", function() {
        it("should return FizzBuzz when called as fizzBuzz(50)", function() {
            var result = fizzBuzz(50)
            expect(result).toBe("Buzz");
        });
    });

    describe("Checks Number", function() {
        it("should return FizzBuzz when called as fizzBuzz(112)", function() {
            var result = fizzBuzz(112)
            expect(result).toBe(112);
        });
    });
});
