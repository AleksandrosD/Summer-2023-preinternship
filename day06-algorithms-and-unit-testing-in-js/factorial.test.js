const factorial = require("./factorial");

describe("The factorial function tests",()=>{
    test("factorial(0)=1",()=>{
        expect(factorial(0)).toBe(1);
    })
    test("factorial(1)=1",()=>{
        expect(factorial(1)).toEqual(1);
    })
    test("factorial(2)=2",()=>{
        expect(factorial(2)).toEqual(2);
    })
}
)