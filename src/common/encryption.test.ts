import { expect, test } from 'vitest';
import { TransformMode, transform, transformNorwegian } from 'Common/encryption';

test('encrypts English lower case letters correctly', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'defg mnop zabc';
  expect(transform(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('decrypts English lower case letters correctly', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'defg mnop zabc';
  expect(transform(encryptedText, 3, TransformMode.Decrypt)).toBe(plainText);
});

test('encrypts English upper case letters correctly', () => {
  const plainText = 'ABCD JKLM WXYZ';
  const encryptedText = 'DEFG MNOP ZABC';
  expect(transform(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('decrypts English upper case letters correctly', () => {
  const plainText = 'ABCD JKLM WXYZ';
  const encryptedText = 'DEFG MNOP ZABC';
  expect(transform(encryptedText, 3, TransformMode.Decrypt)).toBe(plainText);
});

test('encrypts English lower case and upper case letters and special characters correctly', () => {
  const plainText = 'abcd jklm wxyz ABCD JKLM WXYZ !(())!*;';
  const encryptedText = 'defg mnop zabc DEFG MNOP ZABC !(())!*;';
  expect(transform(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('encrypts English letters correctly with 10 shift', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'klmn tuvw ghij';
  expect(transform(plainText, 10, TransformMode.Encrypt)).toBe(encryptedText);
});

// a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å

test('encrypts Norwegian lower case letters correctly', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'defg mnop zæøå';
  expect(transformNorwegian(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('decrypts Norwegian lower case letters correctly', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'defg mnop zæøå';
  expect(transformNorwegian(encryptedText, 3, TransformMode.Decrypt)).toBe(plainText);
});

test('encrypts Norwegian upper case letters correctly', () => {
  const plainText = 'ABCD JKLM WXYZ';
  const encryptedText = 'DEFG MNOP ZÆØÅ';
  expect(transformNorwegian(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('decrypts Norwegian upper case letters correctly', () => {
  const plainText = 'ABCD JKLM WXYZ';
  const encryptedText = 'DEFG MNOP ZÆØÅ';
  expect(transformNorwegian(encryptedText, 3, TransformMode.Decrypt)).toBe(plainText);
});

test('encrypts Norwegian lower case and upper case letters and special characters correctly', () => {
  const plainText = 'abcd jklm wxyz ABCD JKLM WXYZ !(())!*;';
  const encryptedText = 'defg mnop zæøå DEFG MNOP ZÆØÅ !(())!*;';
  expect(transformNorwegian(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
});

test('encrypts Norwegian letters correctly with 10 shift', () => {
  const plainText = 'abcd jklm wxyz';
  const encryptedText = 'klmn tuvw defg';
  expect(transformNorwegian(plainText, 10, TransformMode.Encrypt)).toBe(encryptedText);
});