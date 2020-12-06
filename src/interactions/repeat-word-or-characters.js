'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see either the whole word repeated, or their word with each character repeated.
 * if there is no word, the user is told so
 */
const repeatWordOrCharacters = () => {
  // 1. if there is no saved word, call displayWord and exit early
  // 2. use chooseBetween to let the user select 'word' or 'characters'
  // 3. use enterNumber to ask the user how many times to repeat
  // 4. use repeatString or repeatCharacters to create a new string, depending on user the user's choice
  // 5. render a final before/after message with favoriteWord and the new string from ^ up there
  // 6. alert the rendered message
  if (favoriteWord === '') {
    displayWord();
  } else {
    
    const chooseBetween = ['do you want to repeat the whole word, or each character in the word?','word', 'characters' ];
    
    const result = chooseFromOptions(chooseBetween.slice(1,), chooseBetween[0]);

    
    if (result === 'word'){
      
      let deliveredNumber = enterNumber();
      const outputString = repeatString(favoriteWord, Number(deliveredNumber))
      alert(`word repeated ${deliveredNumber} times \nbefore: "${favoriteWord}" \nafter: "${outputString}"`);
    }
    else if (result === 'characters'){
      
      let deliveredNumber = enterNumber();
      
      const outputString = repeatCharacters(favoriteWord, Number(deliveredNumber))
      
      alert(`word repeated ${deliveredNumber} times \nbefore: "${favoriteWord}" \nafter: "${outputString}"`);

    }

  }
};
