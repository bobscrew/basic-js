const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct !== false;
  }

  process(text, key, decrypt) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upper = text.toUpperCase();
    const keyUpper = key.toUpperCase();
    let keyIndex = 0;
    const result = [];

    for (let i = 0; i < upper.length; i += 1) {
      const char = upper[i];
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const shift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;
        let newCode;
        if (decrypt) {
          newCode = ((code - 65 - shift + 26) % 26) + 65;
        } else {
          newCode = ((code - 65 + shift) % 26) + 65;
        }
        result.push(String.fromCharCode(newCode));
        keyIndex += 1;
      } else {
        result.push(char);
      }
    }
    const joined = result.join('');
    return this.direct ? joined : joined.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.process(message, key, false);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, true);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
