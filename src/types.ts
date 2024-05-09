export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetStateTypeArray<T> = React.Dispatch<React.SetStateAction<T[]>>;

export type MaterialButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type TextKeys =
  | 'AppBanner'
  | 'PlainTextFieldLabel'
  | 'EncryptedTextFieldLabel'
  | 'EncryptButton'
  | 'DecryptButton'
  | 'EncryptionLevelLabel';
