import { useEffect, useRef, ReactElement, RefObject } from 'react';
import { useController } from 'react-hook-form';
import { InputTagFormProps } from '../../../Molecules/InputTagForm/interfaces';
import { CustomFieldValuesInputTagBaseValue } from '../../../@types/CustomFieldValues';
import { InputTagBase } from '../../../Molecules/InputTagBase';

export const InputTagFormExternal = <T extends CustomFieldValuesInputTagBaseValue>({
  name,
  control,
  onBlur,
  onFocus,
  errorMessage,
  ...rest
}: InputTagFormProps<T>): ReactElement => {
  const wrapperRefInput: RefObject<HTMLInputElement | null> = useRef(null);
  const {
    field: { value, onChange: onChangeHookForm, onBlur: onBlurHookForm, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  useEffect(() => {
    const setRefInHookForm = (): void => {
      ref(wrapperRefInput?.current);
    };

    setRefInHookForm();
  }, [ref]);

  const errorMessageHandled = error?.message || errorMessage;

  return (
    <InputTagBase
      ref={wrapperRefInput}
      errorMessage={errorMessageHandled}
      value={value}
      onFocus={(event) => {
        onFocus?.(event);
      }}
      onBlur={(event) => {
        onBlurHookForm();
        onBlur?.(event);
      }}
      name={name}
      onChange={(value) => onChangeHookForm(value)}
      {...rest}
    />
  );
};
