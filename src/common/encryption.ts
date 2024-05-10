enum CharCodes {
  A = 65,
  Z = 90,
  a = 97,
  z = 122,
}

export enum TransformMode {
  Encrypt = 'Encrpt',
  Decrypt = 'Decrypt',
}

export const transform = (str: string, shift: number, mode: TransformMode) => {
  let result = '';
  const alphabetSize = CharCodes.Z - CharCodes.A + 1;
  const shiftNumber = (mode === TransformMode.Encrypt ? shift : shift * -1) % alphabetSize;

  for (const ch of str) {
    const code = ch.charCodeAt(0);

    // for upper case letters
    if (code >= CharCodes.A && code <= CharCodes.Z) {
      let encrypted = code + shiftNumber;
      while (encrypted <= CharCodes.Z) {
        encrypted += alphabetSize;
      }
      if (encrypted > CharCodes.Z) {
        encrypted = (encrypted % (CharCodes.Z + 1)) + CharCodes.A;
      }
      result += String.fromCharCode(encrypted);
    }

    // same process for lower case letters
    else if (code >= CharCodes.a && code <= CharCodes.z) {
      let encrypted = code + shiftNumber;
      while (encrypted <= CharCodes.z) {
        encrypted += alphabetSize;
      }
      if (encrypted > CharCodes.z) {
        encrypted = (encrypted % (CharCodes.z + 1)) + CharCodes.a;
      }
      result += String.fromCharCode(encrypted);
    }

    // ignoring the special characters and alphabets
    else {
      result += ch;
    }
  }

  return result;
};

// ---------------------------
// For norwegian...
// ---------------------------

const NorwegianLettersLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'æ',
  'ø',
  'å',
];

const NorwegianLettersUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'Æ',
  'Ø',
  'Å',
];

export const transformNorwegian = (str: string, shift: number, mode: TransformMode) => {
  let result = '';
  const alphabetSize = NorwegianLettersLower.length;
  const shiftNumber = (mode === TransformMode.Encrypt ? shift : shift * -1) % alphabetSize;

  for (const ch of str) {
    if (NorwegianLettersLower.includes(ch)) {
      const index = NorwegianLettersLower.indexOf(ch);

      let encrypted = index + shiftNumber;
      while (encrypted <= NorwegianLettersLower.length) {
        encrypted += alphabetSize;
      }
      encrypted = encrypted % alphabetSize;

      console.log(ch, index, encrypted);

      result += NorwegianLettersLower[encrypted];
    }

    if (NorwegianLettersLower.includes(ch) || NorwegianLettersUpper.includes(ch)) {
      const index = NorwegianLettersUpper.indexOf(ch);

      let encrypted = index + shiftNumber;
      while (encrypted <= NorwegianLettersUpper.length) {
        encrypted += alphabetSize;
      }
      encrypted = encrypted % alphabetSize;

      console.log(ch, index, encrypted);

      result += NorwegianLettersUpper[encrypted];
    } else {
      result += ch;
    }
  }

  return result;
};
