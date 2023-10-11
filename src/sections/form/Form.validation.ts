import * as yup from 'yup';
import { LANG } from '../../constants/i18n';
import { useAppContext } from '../../App.context';
import { getPhoneLengthByLang } from '../../utils/phone';

export function useSchema() {
  const { lang } = useAppContext();
  const phoneLength = getPhoneLengthByLang(lang);

  return yup
    .object({
      name: yup.string().required(),
      phone: yup.string().length(phoneLength).required(),
      email: yup.string().email().required(),
      lang: yup.string().oneOf(Object.values(LANG)).required(),
    })
    .required();
}
