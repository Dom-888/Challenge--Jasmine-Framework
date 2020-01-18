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
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = DrinkAbout(13)
            expect(result).toBe("Drink Toddy");
        });
    });
});