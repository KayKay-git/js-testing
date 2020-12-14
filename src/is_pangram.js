const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = function(text) {
    text = text.toLowerCase().replace(/[^a-z]/g,'')
    // iterate through up until the length of the alphabet
    for (let i = 0; i < 26; i++)
      // if the text does NOT include the letter return false
      if (text.indexOf(alphabet[i]) < 0) return false
      // otherwise return true
      return true
};

module.exports = isPangram;

