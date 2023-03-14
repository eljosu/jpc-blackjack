// Lo que he hecho yo:

// import { nuevoDeck } from "../index";

// export const pedirCarta = () => {

//     if ( nuevoDeck.length === 0 ) {
//         throw 'No hay cartas en el deck';
//     }
//     const carta = nuevoDeck.pop();
//     return carta;
// }

/**
 * Para pedir carta
 * @param {Array<string>} deck arreglo de string 
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


