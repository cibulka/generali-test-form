import { Button } from '@mui/material';

import { useAppContext } from '../../../App.context';
import { useTranslationClient } from '../../../utils/useTranslate';

import { FormValues } from '../Form.types';

import { StyledSuccess } from './FormSuccess.styled';

export function FormSuccess(props: { onReset: () => void; values: FormValues }) {
  const { lang } = useAppContext();
  const { t } = useTranslationClient('common', lang);
  return (
    <StyledSuccess>
      <ul>
        {Object.keys(props.values).map((key) => (
          <li key={key}>
            <strong>{key}</strong>
            <pre>{props.values[key as keyof FormValues]}</pre>
          </li>
        ))}
      </ul>
      <Button onClick={props.onReset} variant="contained">
        {t('back')}
      </Button>
    </StyledSuccess>
  );
}
