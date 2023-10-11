import { useId } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export function FieldSelect<T extends FieldValues>(props: {
  control: Control<T>;
  label: string;
  name: Path<T>;
  options: {
    label: string;
    value: string;
  }[];
  placeholder: string;
}) {
  const id = useId();
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormControl size="small">
          <InputLabel id={id}>{props.label}</InputLabel>
          <Select
            labelId={id}
            label={props.label}
            size="small"
            {...field}
            MenuProps={{
              sx: {
                '&& .Mui-selected': {
                  backgroundColor: 'menuOptionSelected.main',
                },
                '&& .Mui-focusVisible': {
                  backgroundColor: 'menuOptionSelected.light',
                },
                '&& .Mui-focusVisible.Mui-selected': {
                  backgroundColor: 'menuOptionSelected.dark',
                },
              },
            }}
            sx={{
              bgcolor: 'white',
            }}
          >
            <MenuItem disabled>{props.placeholder}</MenuItem>
            {props.options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
