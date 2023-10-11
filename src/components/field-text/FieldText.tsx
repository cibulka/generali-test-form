import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField } from '@mui/material';

import { useAppContext } from '../../App.context';

import { useFieldTextErrorMessage } from './FieldText.utils';

export function FieldText<T extends FieldValues>(props: {
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
          error={!!fieldState.error}
          helperText={
            fieldState.error ? getErrorMessage(fieldState.error, props.label, field.value) : null
          }
        />
      )}
    />
  );
}
