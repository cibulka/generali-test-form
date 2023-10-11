import * as yup from 'yup';
import { LANG } from '../../constants/i18n';

export const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required(), // validate czech phone number
    email: yup.string().email().required(),
    lang: yup.string().oneOf(Object.values(LANG)).required(),
  })
  .required();
