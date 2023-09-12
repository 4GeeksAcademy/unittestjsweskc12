// import the function sum from the app.js file

test("One euro should be 1.20 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen} = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(2000.75 )

    // if 1 dollar are 106.66 yen, then 3.5 yen should be (3.5 * 106.66)
    const expected = 2000.75 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2000.75)).toBe(255895.92500000002); //1 dollar are 106.66, then 3.5 dollar should be = (3.5 * 106.66)
})

test("One Yen should be 0.8 pound", function(){
    //import the function from app.js
    const {fromYenToPound} = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(25.6)

    // if 1 dollar are 106.66 yen, then 3.5 yen should be (3.5 * 106.66)
    const expected = 25.6 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(25.6)).toBe(20.480000000000004); //1 dollar are 106.66, then 3.5 dollar should be = (3.5 * 106.66)
})
