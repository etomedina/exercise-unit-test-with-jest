// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.583 yen", function () {
    //importo la funcion desde app.js
    const { fromDollarToYen } = require( './app.js')

    //hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674); //1 dollar son 106.583 Yen, entonces 3.5 deberian ser = (3.5 * 106.583)
})

test ("One yen should be 0.006255 pound", function(){
    //importo la funcion desde app.js
    const { fromYenToPound } = require( './app.js')

    //hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294) //1 yen son 0.006255 pound, entonces 3.5 deberian ser = (3.5 * 0.006255)
})