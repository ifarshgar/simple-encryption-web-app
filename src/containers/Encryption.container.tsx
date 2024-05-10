import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { MaterialTextField } from 'Views/MaterialTextField';
import { MaterialButton } from 'Views/MaterialButton';
import { ShiftTextField } from 'Views/ShiftTextField';
import { Language, TextFieldType, getText } from 'src/constants';
import { TransformMode, transform, transformNorwegian } from 'Common/encryption';

export const EncryptionContainer: React.FC<{ language: Language }> = ({ language }) => {
  const [plain, setPlain] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [shift, setShift] = useState(3);

  const onChange = (str: string, id: TextFieldType) => {
    if (id === TextFieldType.plainText) {
      setPlain(str);
    } else if (id === TextFieldType.encryptedText) {
      setEncrypted(str);
    }
  };

  const onKeyUp = (key: string, id: TextFieldType) => {
    if (key === 'Enter') {
      if (id === TextFieldType.plainText) {
        encrypt();
      } else if (id === TextFieldType.encryptedText) {
        decrypt();
      }
    }
  };

  const encrypt = () => {
    if (language === Language.English) {
      setEncrypted(transform(plain, shift, TransformMode.Encrypt));
    }
    if (language === Language.Norsk) {
      setEncrypted(transformNorwegian(plain, shift, TransformMode.Encrypt));
    }
  };
  const decrypt = () => {
    if (language === Language.English) {
      setPlain(transform(encrypted, shift, TransformMode.Decrypt));
    }
    if (language === Language.Norsk) {
      setPlain(transformNorwegian(encrypted, shift, TransformMode.Decrypt));
    }
  };

  const onShiftChange = (num: number) => {
    setShift(num);
  };

  return (
    <Stack mt={6} gap={2}>
      <MaterialTextField
        id={TextFieldType.plainText}
        value={plain}
        label={getText('PlainTextFieldLabel', language)}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <MaterialTextField
        id={TextFieldType.encryptedText}
        value={encrypted}
        label={getText('EncryptedTextFieldLabel', language)}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <Stack direction="row" gap={2} mt={2}>
        <MaterialButton value="Encrypt" color="success" onClick={encrypt} />
        <MaterialButton value="Decrypt" color="error" onClick={decrypt} />
        <ShiftTextField
          value={shift}
          setValue={onShiftChange}
          label={getText('EncryptionLevelLabel', language)}
        />
      </Stack>
    </Stack>
  );
};
