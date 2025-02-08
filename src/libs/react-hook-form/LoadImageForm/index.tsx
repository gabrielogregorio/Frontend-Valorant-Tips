import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { LoadImageFormProps } from '../../../Organisms/LoadImageForm/interfaces';
import { LoadImageBase } from '../../../Organisms/LoadImageBase';

export const LoadImageFormExternal = <T extends FieldValues>({
  name,
  control,
  errorMessage,
  ...rest
}: LoadImageFormProps<T>): ReactElement => {
  const {
    field: { value, onChange: onChangeHookForm },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorMessageHandled = error?.message || errorMessage;

  return (
    <LoadImageBase
      value={value}
      errorMessage={errorMessageHandled}
      name={name}
      onChange={(value) => onChangeHookForm(value)}
      {...rest}
    />
  );
};
