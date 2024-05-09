import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EncryptIcon from 'Images/encrypt.png';
import EncryptionIcon from 'Images/encryption.png';
import { EncryptionContainer } from './Encryption.container';
import { LanguageSelect } from 'Views/LanguageSelect';
import { Language, LanguageKey, getLanguage, getText } from 'src/constants';

export const MainContentContainer = () => {
  const [language, setLanguage] = useState(
    () => Language[getLanguage(localStorage.getItem(LanguageKey))]
  );

  const onChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(LanguageKey, lang.toString());
  };

  return (
    <Stack direction={{ sm: 'column', md: 'row' }} className="main-content" width="100%">
      <Stack
        width={{ sm: '100%', md: '50%' }}
        pl={{ sm: 0, md: 10 }}
        pt={5}
        order={{ xs: 3, md: 1 }}
      >
        <Typography variant="h3" className="white banner">
          {getText('AppBanner', language)}
        </Typography>
        <EncryptionContainer language={language} />
      </Stack>

      <Stack width={{ sm: '100%', md: '50%' }} mt={4} order={{ xs: 2, md: 2 }}>
        <Stack className="logo-section">
          <img src={EncryptIcon} alt="encrypt" className="encrypt-logo" />
          <img src={EncryptionIcon} alt="encrypt" className="encryption-logo" />
        </Stack>
      </Stack>

      <Stack order={{ xs: 1, md: 3 }}>
        <LanguageSelect value={language} onChange={onChange} />
      </Stack>
    </Stack>
  );
};
