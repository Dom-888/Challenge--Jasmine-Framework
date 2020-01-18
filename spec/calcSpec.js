describe("What Can I drink function", function() {

    beforeEach(function() {
        drink = new DrinkAbout();
    });

    describe("Checks Age", function() {
        it("should exist", function() {
            expect(DrinkAbout).toBeDefined();
        });
    });

    describe("Checks Age", function() {
        it("should return drink toddy when called as DrinkAbout(13)", function() {
            var result = DrinkAbout(13)
            expect(result).toBe("Drink Toddy");
        });
    });

    describe("Checks Age", function() {
        it("should return drink coke when called as DrinkAbout(17)", function() {
            var result = DrinkAbout(17)
            expect(result).toBe("Drink Coke");
        });
    });

    describe("Checks Age", function() {
        it("should return drink beer when called as DrinkAbout(20)", function() {
            var result = DrinkAbout(20)
            expect(result).toBe("Drink Beer");
        });
    });

    describe("Checks Age", function() {
        it("should return drink whisky when called as DrinkAbout(120)", function() {
            var result = DrinkAbout(120)
            expect(result).toBe("Drink Whisky");
        });
    });

    describe("Checks Age", function() {
        it("should return an error when called as DrinkAbout(-1)", function() {
            var result = DrinkAbout(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });

    describe("Checks Age", function() {
        it("should return an error when called as DrinkAbout(131)", function() {
            var result = DrinkAbout(131)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});