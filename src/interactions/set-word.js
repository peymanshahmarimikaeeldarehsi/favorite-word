'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to set a new value for the saved word.
 * if there is no saved word, the user is told so and the interaction ends.
 * if there is a saved word, the user is asked to confirm replacing it.
 * if the user confirms, they enter a new word that replaces the old one.
 */
//alert(favoriteWord);
const setWord = () => {
    //var favoriteWord ='';
    while (true) {
        let deliveredMessage = enterWord();
        
        const confirmedMessage = confirm(`is this correct "${deliveredMessage}"`);
        if (confirmedMessage) {
            favoriteWord = deliveredMessage;
            alert(`your favorite word is: "${favoriteWord}"`);
            break;
        }
        else{
            continue;
        }

    }
};
