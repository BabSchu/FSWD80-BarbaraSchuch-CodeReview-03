describe("calculate insurance for each country: Austria, Hungary, Greece", function() {
    //what it should do
    it("should calculate insurance cost for the case austria", function() {
        //expect something
        expect(calcInsAustria(30, 160))
            .toEqual(583);
    });
    //what it should do
    it("should calculate insurance cost for the case hungary", function() {
        //expect something
        expect(calcInsHungary(30, 160))
            .toEqual(740);
    });
    it("should calculate insurance cost for the case greece", function() {
        //expect something
        expect(calcInsGreece(30, 160))
            .toEqual(777);
    });
});

describe("select and calculate insurance for each country: Austria, Hungary, Greece", function() {
    //what it should do
    it("should calculate insurance cost for the case austria", function() {
        //expect something
        expect(calcIns(60, 75, "Austria"))
            .toEqual(175);
    });
    //what it should do
    it("should calculate insurance cost for the case hungary", function() {
        //expect something
        expect(calcIns(60, 75, "Hungary"))
            .toEqual(250);
    });
    it("should calculate insurance cost for the case greece", function() {
        //expect something
        expect(calcIns(60, 75, "Greece"))
            .toEqual(229);
    });
});