
import { crearCartaHtml, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {

    if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento HTML es necesario');
    if (!divCartasComputadora) throw new Error('Argumento divCartasComputadora es necesario');
    
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 300 );
}
