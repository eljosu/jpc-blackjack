import _ from 'underscore';

//Para indicar tipo de datos de constante con JSDOC Comment:
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales  Ejemplo: ['A','J','Q','K'] 
 * @returns {array} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
//En exportacion por defecto se dejaria igual la constante
// export const a = 'Hola Mundo';
// const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

//Para exportar por defecto en vez de hacerlo de manera individual:
// export default crearDeck;