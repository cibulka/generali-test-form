import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppContext } from '../../App.context';
import { FieldText } from '../../components/field-text/FieldText';
import { FieldSelect } from '../../components/field-select/FieldSelect';
import { FieldPhone } from '../../components/field-phone/FieldPhone';
import { Spinner } from '../../components/spinner/Spinner';
import { STATE, State } from '../../constants/state';
import { LangNav } from '../../sections/lang-nav/LangNav';
import { useLangOptions } from '../../utils/useLangOptions';
import { useTranslationClient } from '../../utils/useTranslate';

import { StyledButtonWrap, StyledContent, StyledForm, StyledWrap } from './Form.styled';
import { useSchema } from './Form.validation';
import { FormValues } from './Form.types';
import { FormSuccess } from './components/FormSuccess';
import { appendPhoneCode } from '../../utils/phone';

export function Form() {
  const [state, setState] = useState<State>(STATE.IDLE);
  const [values, setValues] = useState<FormValues | null>(null);

  const { lang } = useAppContext();
  const options = useLangOptions(lang);

  const schema = useSchema();
  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      lang: options[0].value,
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { t } = useTranslationClient('common', lang);

  const isInvalid = !formState.isValid;
  const isLoading = state === STATE.LOADING;
  const isSuccess = state === STATE.SUCCESS;

  const loadingTimeout = useRef<NodeJS.Timeout>();
  function onSubmit(values: FormValues) {
    if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
    setState(STATE.LOADING);
    setValues({
      ...values,
      phone: appendPhoneCode(values.phone, lang),
    });
    loadingTimeout.current = setTimeout(() => setState(STATE.SUCCESS), 1000);
  }
  useEffect(() => {
    return () => {
      if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
    };
  }, []);

  return (
    <StyledWrap>
      <LangNav />
      <StyledContent>
        <StyledForm
          className={isSuccess ? 'is-success' : undefined}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldText name="name" control={control} label={t('form.fields.name.label')} required />
          <FieldPhone
            name="phone"
            control={control}
            label={t('form.fields.phone.label')}
            required
          />
          <FieldText name="email" control={control} label={t('form.fields.email.label')} required />
          <FieldSelect
            control={control}
            label={t('form.fields.lang.label')}
            placeholder={t('form.fields.lang.placeholder')}
            name="lang"
            options={options}
            required
          />
          <StyledButtonWrap>
            <Button
              startIcon={isLoading ? <Spinner /> : undefined}
              type="submit"
              variant="contained"
              disabled={isInvalid || isLoading}
              sx={{
                backgroundColor: 'error.light',
              }}
            >
              {t('form.submit')}
            </Button>
          </StyledButtonWrap>
        </StyledForm>
        {isSuccess && values && (
          <FormSuccess
            onReset={() => {
              setState(STATE.IDLE);
              setValues(null);
            }}
            values={values}
          />
        )}
      </StyledContent>
    </StyledWrap>
  );
}
