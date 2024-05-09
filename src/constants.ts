import { TextKeys } from './types';

export const LanguageKey = 'local-data-storage-language-key';

export enum TextFieldType {
  plainText = 'plain-text',
  encryptedText = 'encrypted-text',
}

export enum Language {
  English = 'EN',
  Norsk = 'NO',
}

export const getLanguage = (lang: string | null) => {
  switch (lang) {
    case Language.English:
      return 'English';
    case Language.Norsk:
      return 'Norsk';
    default:
      return 'English';
  }
};

export const EnglishTexts: { [key in TextKeys]: string } = {
  AppBanner: 'Simple Encryption Application',
  PlainTextFieldLabel: 'Enter your plain text here',
  EncryptedTextFieldLabel: 'Enter your encrypted text here',
  EncryptButton: 'Encrypt',
  DecryptButton: 'Decrypt',
  EncryptionLevelLabel: 'Enter a shift amount between 0 and 100 for the encryption',
};

export const NorwegianTexts: { [key in TextKeys]: string } = {
  AppBanner: 'Enkel kryptering applikasjon',
  PlainTextFieldLabel: 'Skriv inn din vanlige tekst her',
  EncryptedTextFieldLabel: 'Skriv inn din krypterte tekst her',
  EncryptButton: 'Kryptere',
  DecryptButton: 'Dekryptere',
  EncryptionLevelLabel: 'Skriv inn et skiftbeløp mellom 0 og 100 for krypteringen',
};

export const getText = (text: TextKeys, lang: Language) => {
  if (lang === Language.Norsk) {
    return NorwegianTexts[text];
  }
  return EnglishTexts[text];
};
