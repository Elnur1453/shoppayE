import React, {useCallback} from 'react';
import {IInput, Input} from './Input';
import {Manipulators} from 'utils/manipulator';
import {Controller, ControllerProps} from 'react-hook-form';

interface IInputController extends IInput, Partial<ControllerProps> {
  control?: any;
  disabledControl?: boolean;
  manipulator?: 'cardNumber';
}

export const InputControlled: React.FC<IInputController> = ({
  name,
  rules,
  control,
  disabled,
  manipulator,
  defaultValue,
  disabledControl,
  ...inputProps
}) => {
  const handleValueChange = useCallback(
    (value: string, onChange: (value: string) => void) => {
      if (manipulator === 'cardNumber') {
        onChange(Manipulators.cardNumber(value));
      } else {
        onChange(value);
      }
    },
    [manipulator],
  );

  return (
    <Controller
      rules={rules}
      control={control}
      name={name as string}
      disabled={disabledControl}
      defaultValue={defaultValue}
      render={({field}) => (
        <Input
          disabled={disabled}
          setValue={value => handleValueChange(value, field.onChange)}
          value={field.value}
          onBlur={field.onBlur}
          {...inputProps}
        />
      )}
    />
  );
};
