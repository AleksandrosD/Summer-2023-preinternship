const sum=require("./sum");

test('sum(1,2) adds 1+2 is 3', ()=>{
    expect(sum(1,2)).toBe(3);
})