import { FieldError } from 'react-hook-form';

import { Lang } from '../../constants/i18n';
import { useTranslationClient } from '../../utils/useTranslate';

export function useFieldTextErrorMessage(lang: Lang) {
  const { t } = useTranslationClient('common', lang);

  return (error: FieldError, label: string, value: string) => {
    switch (error.type) {
      case 'email':
        return t('form.validation.email', { value });
      case 'phone':
      case 'length':
        return t('form.validation.phone', { value });
      case 'required':
        return t('form.validation.required', { label });
      default:
        return t('form.validation.default');
    }
  };
}
