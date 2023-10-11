import { forwardRef } from 'react';
import { PatternFormat, NumericFormatProps } from 'react-number-format';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField } from '@mui/material';

import { useFieldTextErrorMessage } from '../../components/field-text/FieldText.utils';
import { getFormatByLang } from '../../utils/phone';
import { useAppContext } from '../../App.context';

interface CustomProps {
  onChange: (value: string) => void;
  name: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { lang } = useAppContext();
    const { onChange, ...other } = props;

    return (
      <PatternFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => onChange(values.value)}
        format={getFormatByLang(lang)}
        allowEmptyFormatting
        mask=" "
      />
    );
  },
);

export function FieldPhone<T extends FieldValues>(props: {
  control: Control<T>;
  label: string;
  name: Path<T>;
  required?: boolean;
}) {
  const { lang } = useAppContext();
  const getErrorMessage = useFieldTextErrorMessage(lang);

  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ fieldState, field }) => (
        <TextField
          fullWidth
          label={[props.label, props.required && '*'].filter(Boolean).join(' ')}
          size="small"
          sx={{ background: 'white' }}
          {...field}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
          error={!!fieldState.error}
          helperText={
            fieldState.error ? getErrorMessage(fieldState.error, props.label, field.value) : null
          }
        />
      )}
    />
  );
}
