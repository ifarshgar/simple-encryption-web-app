import { TransformMode, transform } from 'Common/encryption';

describe('Tests encryption algorithm for English', () => {
  it('encrypts lower case letters correctly', () => {
    const plainText = 'abcd jklm wxyz';
    const encryptedText = 'defg mnop zabc';
    expect(transform(plainText, 3, TransformMode.Encrypt)).toBe(encryptedText);
  });
});
